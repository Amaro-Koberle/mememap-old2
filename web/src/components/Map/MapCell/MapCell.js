import Map from '../Map/Map'

export const QUERY = gql`
  query NodesQuery {
    nodes {
      id
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ nodes }) => {
  const graphData = {
    nodes: nodes,
    links: [],
  }

  return (
    <>
      <Map graphData={graphData} />
    </>
  )
}
