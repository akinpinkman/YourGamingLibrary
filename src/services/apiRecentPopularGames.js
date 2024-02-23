const clientId = import.meta.env.VITE_REACT_APP_CLIENT_ID
const authorizationToken = import.meta.env.VITE_REACT_APP_AUTHORIZATION_TOKEN

export default async function getRecentPopularGames() {
  const response = await fetch('/api/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': clientId,
      Authorization: `Bearer ${authorizationToken}`,
      'Content-Type': 'application/json'
    },
    body: 'fields name,first_release_date,involved_companies.company.name,screenshots.url,genres.name,storyline,rating,release_dates.human,cover.*,slug,summary; where first_release_date >= 1672524061 & rating >= 60 & rating_count >= 20; limit 100;'
  })
  const data = await response.json()
  return data
}
