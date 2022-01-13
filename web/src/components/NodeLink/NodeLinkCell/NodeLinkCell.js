import NodeLink from 'src/components/NodeLink/NodeLink'

export const QUERY = gql`
  query FindNodeLinkById($id: String!) {
    nodeLink: nodeLink(id: $id) {
      id
      createdAt
      name
      sourceNodeId
      targetNodeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>NodeLink not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ nodeLink }) => {
  return <NodeLink nodeLink={nodeLink} />
}
