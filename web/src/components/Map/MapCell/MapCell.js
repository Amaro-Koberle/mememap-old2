export const QUERY = gql`
  query FindMapQuery($id: Int!) {
    map: map(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ map }) => {
  return <div>{JSON.stringify(map)}</div>
}
