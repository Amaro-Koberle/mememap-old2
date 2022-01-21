import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes, useParams } from '@redwoodjs/router'
import NodeLinkForm from 'src/components/NodeLink/NodeLinkForm'

const CREATE_NODE_LINK_MUTATION = gql`
  mutation CreateNodeLinkMutation($input: CreateNodeLinkInput!) {
    createNodeLink(input: $input) {
      id
    }
  }
`

const NewNodeLink = () => {
  const { source, target } = useParams()

  const [createNodeLink, { loading, error }] = useMutation(
    CREATE_NODE_LINK_MUTATION,
    {
      onCompleted: () => {
        toast.success('NodeLink created')
        navigate(routes.explore())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    input.sourceNodeId = source
    input.targetNodeId = target
    console.log(input)
    createNodeLink({ variables: { input } })
  }

  return (
    <div className="">
      <header className="flex justify-center">
        <h2 className="text-lg">New NodeLink</h2>
      </header>
      <div className="">
        <NodeLinkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNodeLink
