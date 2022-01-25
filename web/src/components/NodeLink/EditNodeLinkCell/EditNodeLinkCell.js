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
        navigate(routes.nodeLink({ id: nodeLink.id }))
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
    <div className="relative">
      <header className="flex justify-center p-2">
        <h2 className="text-lg">Edit Link</h2>
      </header>
      <div className="">
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
