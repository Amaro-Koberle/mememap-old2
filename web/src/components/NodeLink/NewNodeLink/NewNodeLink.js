import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import NodeLinkForm from 'src/components/NodeLink/NodeLinkForm'

const CREATE_NODE_LINK_MUTATION = gql`
  mutation CreateNodeLinkMutation($input: CreateNodeLinkInput!) {
    createNodeLink(input: $input) {
      id
    }
  }
`

const NewNodeLink = () => {
  const [createNodeLink, { loading, error }] = useMutation(
    CREATE_NODE_LINK_MUTATION,
    {
      onCompleted: () => {
        toast.success('NodeLink created')
        navigate(routes.nodeLinks())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createNodeLink({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New NodeLink</h2>
      </header>
      <div className="rw-segment-main">
        <NodeLinkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNodeLink
