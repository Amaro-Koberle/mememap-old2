import { Link, routes } from '@redwoodjs/router'

import NodeLinks from 'src/components/NodeLink/NodeLinks'

export const QUERY = gql`
  query FindNodeLinks {
    nodeLinks {
      id
      createdAt
      name
      sourceNodeId
      targetNodeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No nodeLinks yet. '}
      <Link to={routes.newNodeLink()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ nodeLinks }) => {
  return <NodeLinks nodeLinks={nodeLinks} />
}
