import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = 3000

const clientId = process.env.REACT_APP_CLIENT_ID
const authorizationToken = process.env.REACT_APP_AUTHORIZATION_TOKEN

app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:5173'
  })
)

app.post('/api/v4/populargames', async (req, res) => {
  try {
    const popular_response = await fetch('https://api.igdb.com/v4/games/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': clientId ?? '',
        Authorization: `Bearer ${authorizationToken}`
      },
      body: 'fields name,first_release_date,involved_companies.company.name,platforms.name,screenshots.url,genres.name,storyline,rating,release_dates.human,cover.*,slug,summary; where first_release_date >= 1672524061 & rating >= 60 & rating_count >= 20; limit 100;'
    })

    const popular_data = await popular_response.json()

    res.json(popular_data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.post('/api/v4/search', async (req, res) => {
  const { search } = req.body
  try {
    const search_response = await fetch('https://api.igdb.com/v4/games/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': clientId ?? '',
        Authorization: `Bearer ${authorizationToken}`
      },
      body: `search "${search}";
      fields name,first_release_date,involved_companies.company.name,platforms.name,screenshots.url,genres.name,storyline,rating,release_dates.human,cover.*,slug,summary; where screenshots.url != null & cover.url != null;`
    })
    const search_data = await search_response.json()

    res.json(search_data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app
