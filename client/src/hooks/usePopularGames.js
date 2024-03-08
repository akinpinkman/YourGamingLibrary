import { useQuery } from '@tanstack/react-query'
import getRecentPopularGames from '../services/apiRecentPopularGames'

export function usePopularGames() {
  const {
    isLoading,
    data: popularGames,
    error
  } = useQuery({
    queryKey: ['recentPopularGames'],
    queryFn: getRecentPopularGames
  })
  return { isLoading, error, popularGames }
}
