import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()
const PORT = 3169

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
        'Client-ID': 'l2v8dn6vqb3cwqupu7ayri3ytu8f6j',
        Authorization: 'Bearer iakc7q8wugu5icsyivyz4vibf3bc9h'
      },
      body: 'fields name,first_release_date,involved_companies.company.name,platforms.name,screenshots.url,genres.name,storyline,rating,release_dates.human,cover.*,slug,summary; where first_release_date >= 1672524061 & rating >= 60 & rating_count >= 20; limit 100;'
    })

    const popular_data = await popular_response.json()

    res.json(popular_data)
    console.log(popular_data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.post('/api/v4/search', async (req, res) => {
  const { search } = req.body // Use req.body.search instead of req.params.search
  try {
    const search_response = await fetch('https://api.igdb.com/v4/games/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Client-ID': 'l2v8dn6vqb3cwqupu7ayri3ytu8f6j',
        Authorization: 'Bearer iakc7q8wugu5icsyivyz4vibf3bc9h'
      },
      body: `search "${search}";
      fields name,first_release_date,involved_companies.company.name,platforms.name,screenshots.url,genres.name,storyline,rating,release_dates.human,cover.*,slug,summary; where screenshots.url != null & cover.url != null;`
    })
    const search_data = await search_response.json()

    res.json(search_data)
    console.log(search_data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send('Internal Server Error')
  }
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app
