export default function ratingIndicator({ rating, width, height, fontSize, color }) {
  const getColorBasedOnRating = (rating) => {
    if (isNaN(rating)) {
      return 'gray'
    } else if (rating <= 30) {
      return 'red'
    } else if (rating <= 50) {
      return 'orange'
    } else if (rating <= 70) {
      return 'yellow'
    } else {
      return 'green'
    }
  }
  const backgroundColor = getColorBasedOnRating(rating)

  return (
    <span
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: backgroundColor,
        borderRadius: '50%',
        width: width,
        height: height,
        fontSize: fontSize,
        color: color
      }}>
      {Math.floor(rating)}
    </span>
  )
}
