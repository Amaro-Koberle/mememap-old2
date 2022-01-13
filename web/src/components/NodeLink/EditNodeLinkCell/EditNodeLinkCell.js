import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import NodeLinkForm from 'src/components/NodeLink/NodeLinkForm'

export const QUERY = gql`
  query EditNodeLinkById($id: String!) {
    nodeLink: nodeLink(id: $id) {
      id
      createdAt
      name
      sourceNodeId
      targetNodeId
    }
  }
`
const UPDATE_NODE_LINK_MUTATION = gql`
  mutation UpdateNodeLinkMutation($id: String!, $input: UpdateNodeLinkInput!) {
    updateNodeLink(id: $id, input: $input) {
      id
      createdAt
      name
      sourceNodeId
      targetNodeId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ nodeLink }) => {
  const [updateNodeLink, { loading, error }] = useMutation(
    UPDATE_NODE_LINK_MUTATION,
    {
      onCompleted: () => {
        toast.success('NodeLink updated')
        navigate(routes.nodeLinks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateNodeLink({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit NodeLink {nodeLink.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <NodeLinkForm
          nodeLink={nodeLink}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
