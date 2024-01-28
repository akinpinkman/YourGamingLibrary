// apiRecentPopularGames.js
export default async function getRecentPopularGames() {
  const response = await fetch('/api/v4/games', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Client-ID': 'l2v8dn6vqb3cwqupu7ayri3ytu8f6j',
      Authorization: 'Bearer 04ucijxaomxdus4npa6d1zu0afrhk6',
      'Content-Type': 'application/json'
    },
    body: 'fields name,first_release_date,rating,release_dates.human,cover.*,summary; where first_release_date >= 1672524061 & rating >= 60 & rating_count >= 20; limit 100;'
  })

  const data = await response.json()
  return data
}
