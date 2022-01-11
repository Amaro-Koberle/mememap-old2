import { Link, routes } from '@redwoodjs/router'

import Nodes from 'src/components/Node/Nodes'

export const QUERY = gql`
  query FindNodes {
    nodes {
      id
      createdAt
      name
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No nodes yet. '}
      <Link to={routes.newNode()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ nodes }) => {
  return <Nodes nodes={nodes} />
}
