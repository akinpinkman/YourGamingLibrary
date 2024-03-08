export default function unixToHumanDate(game) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return {
    ...game,
    formattedDate: new Date(game.first_release_date * 1000).toLocaleDateString('en-US', options)
  }
}
