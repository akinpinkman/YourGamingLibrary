export default function RatingIndicator({ rating, width, height, fontSize, color }) {
  const getColorBasedOnRating = (rating) => {
    if (isNaN(rating)) {
      return 'gray'
    } else if (rating <= 30) {
      return 'red'
    } else if (rating <= 50) {
      return '#e08a00'
    } else if (rating <= 70) {
      return '#f1c40f'
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
        color: color,
        fontFamily: 'Anton'
      }}>
      {Math.floor(rating)}
    </span>
  )
}
