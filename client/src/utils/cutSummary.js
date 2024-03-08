// utils/truncateSummary.js
export default function sliceSummary(summary, wordLimit) {
  if (!summary) {
    return null
  }

  const words = summary.split(/\s+/)
  let slicedWords = words.slice(0, wordLimit)

  const firstIndex = slicedWords.findIndex((word) => word.endsWith('.'))

  // If a dot is found after 30 words, truncate the array at that index
  if (firstIndex !== -1) {
    slicedWords = slicedWords.slice(0, firstIndex + 1)
  }

  const slicedSummary = slicedWords.join(' ')

  return slicedSummary
}
