import { useParams } from 'react-router-dom'

export default function GamePages() {
  const { slug } = useParams()

  return (
    <>
      <h1>{slug}</h1>
    </>
  )
}
