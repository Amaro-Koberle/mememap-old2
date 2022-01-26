import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import { MdDeleteOutline } from 'react-icons/md'

import NodeForm from 'src/components/Node/NodeForm'

export const QUERY = gql`
  query EditNodeById($id: String!) {
    node: node(id: $id) {
      id
      createdAt
      name
      content
    }
  }
`
const UPDATE_NODE_MUTATION = gql`
  mutation UpdateNodeMutation($id: String!, $input: UpdateNodeInput!) {
    updateNode(id: $id, input: $input) {
      id
      createdAt
      name
      content
    }
  }
`

const DELETE_NODE_MUTATION = gql`
  mutation DeleteNodeMutation($id: String!) {
    deleteNode(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ node }) => {
  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete node ' + id + '?')) {
      deleteNode({ variables: { id } })
    }
  }

  const [deleteNode] = useMutation(DELETE_NODE_MUTATION, {
    onCompleted: () => {
      toast.success('Node deleted')
      navigate(routes.nodes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [updateNode, { loading, error }] = useMutation(UPDATE_NODE_MUTATION, {
    onCompleted: () => {
      toast.success('Node updated')
      navigate(routes.node({ id: node.id }))
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateNode({ variables: { id, input } })
  }

  return (
    <div className="relative p-2">
      <header className="flex justify-center">
        <h2 className="text-lg">Edit Node</h2>
      </header>
      <div className="border border-stone-700 rounded-xl mt-2">
        <div className="flex items-center justify-between m-4">
          <div className="flex gap-2">
            <div className="bg-stone-700 w-10 h-10 rounded-full"></div>
            <div className="flex flex-col">
              <span>User Name</span>
              <span className="text-sm font-extralight">@username</span>
            </div>
          </div>
          <button
            type="button"
            className="text-2xl"
            onClick={() => onDeleteClick(node.id)}
          >
            <MdDeleteOutline />
          </button>
        </div>
        <NodeForm node={node} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
