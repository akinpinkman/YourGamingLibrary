export default async function searchGames(query) {
  const baseUrl = 'https://zircon-pretty-constrictor.glitch.me'

  try {
    const response = await fetch(`${baseUrl}/api/v4/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ search: query })
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
