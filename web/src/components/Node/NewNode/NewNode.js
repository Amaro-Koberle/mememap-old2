import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import NodeForm from 'src/components/Node/NodeForm'

const CREATE_NODE_MUTATION = gql`
  mutation CreateNodeMutation($input: CreateNodeInput!) {
    createNode(input: $input) {
      id
    }
  }
`

const NewNode = () => {
  const [createNode, { loading, error }] = useMutation(CREATE_NODE_MUTATION, {
    onCompleted: () => {
      toast.success('Node created')
      navigate(routes.nodes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createNode({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Node</h2>
      </header>
      <div className="rw-segment-main">
        <NodeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNode
