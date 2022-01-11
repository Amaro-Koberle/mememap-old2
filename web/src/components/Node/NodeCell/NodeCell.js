import Node from 'src/components/Node/Node'

export const QUERY = gql`
  query FindNodeById($id: String!) {
    node: node(id: $id) {
      id
      createdAt
      name
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Node not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ node }) => {
  return <Node node={node} />
}
