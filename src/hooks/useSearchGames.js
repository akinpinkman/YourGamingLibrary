import { useQuery } from '@tanstack/react-query'
import searchGames from '../services/apiSearchGames'

export function useSearchGames(query) {
  // Accept query as an argument
  const {
    isLoading,
    data: searchedGames,
    error
  } = useQuery({
    queryKey: ['searchedGames', query], // Include query in queryKey
    queryFn: () => searchGames(query) // Pass query to searchGames
  })

  return { isLoading, error, searchedGames }
}
