const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID
const authorizationToken = import.meta.env.VITE_REACT_APP_AUTHORIZATION_TOKEN

export default async function searchGames(query) {
  const response = await fetch('/api/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': clientId,
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json'
    },
    body: `search "${query}"; fields name,first_release_date,rating,release_dates.human,cover.*,summary; limit 10;`
  })

  const data = await response.json()
  return data
}
