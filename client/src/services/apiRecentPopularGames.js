export default async function getRecentPopularGames() {
  const baseUrl = 'http://localhost:3000'

  try {
    const response = await fetch(`${baseUrl}/api/v4/populargames`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('There was a problem with your fetch operation:', error)
    throw error
  }
}
