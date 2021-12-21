import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import NodeForm from 'src/components/Node/NodeForm'

export const QUERY = gql`
  query EditNodeById($id: Int!) {
    node: node(id: $id) {
      id
      createdAt
      title
      content
    }
  }
`
const UPDATE_NODE_MUTATION = gql`
  mutation UpdateNodeMutation($id: Int!, $input: UpdateNodeInput!) {
    updateNode(id: $id, input: $input) {
      id
      createdAt
      title
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ node }) => {
  const [updateNode, { loading, error }] = useMutation(UPDATE_NODE_MUTATION, {
    onCompleted: () => {
      toast.success('Node updated')
      navigate(routes.nodes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateNode({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Node {node.id}</h2>
      </header>
      <div className="rw-segment-main">
        <NodeForm node={node} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
