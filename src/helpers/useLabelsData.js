import { useQuery } from 'react-query'

export function useLabelsDatas() {
  const labelsQuery = useQuery(['labels'], () =>
    fetch('/api/labels').then((res) => res.json())
  )

  return labelsQuery
}
