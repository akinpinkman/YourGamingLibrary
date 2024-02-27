const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID
const authorizationToken = import.meta.env.VITE_REACT_APP_AUTHORIZATION_TOKEN

export default async function searchGames(query) {
  const response = await fetch('https://api.igdb.com/api/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': clientId,
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json'
    },
    body: `search "${query}"; fields name,first_release_date,screenshots.url,platforms.name,storyline,genres.name,involved_companies.company.name,rating,release_dates.human,cover.*,slug,summary; where category = 0; limit 50;`
  })

  const data = await response.json()
  return data
}
