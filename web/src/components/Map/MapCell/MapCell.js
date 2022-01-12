import Map from '../Map/Map'

export const QUERY = gql`
  query NodesQuery {
    nodes {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ nodes }) => {
  const nodesCopy = (nodes) => {
    return nodes.map((node) => ({ ...node }))
  }

  const graphData = {
    nodes: nodesCopy(nodes),
    links: [],
  }

  return (
    <div>
      <Map graphData={graphData} />
    </div>
  )
}
