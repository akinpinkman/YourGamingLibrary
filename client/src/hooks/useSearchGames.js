import { useQuery } from '@tanstack/react-query'
import searchGames from '../services/apiSearchGames'

export function useSearchGames(query) {
  const {
    isLoading,
    data: searchedGames,
    error
  } = useQuery({
    queryKey: ['searchedGames', query],
    queryFn: () => searchGames(query)
  })

  return { isLoading, error, searchedGames }
}
