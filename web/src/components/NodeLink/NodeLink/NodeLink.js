import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_NODE_LINK_MUTATION = gql`
  mutation DeleteNodeLinkMutation($id: String!) {
    deleteNodeLink(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const NodeLink = ({ nodeLink }) => {
  const [deleteNodeLink] = useMutation(DELETE_NODE_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('NodeLink deleted')
      navigate(routes.nodeLinks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete nodeLink ' + id + '?')) {
      deleteNodeLink({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            NodeLink {nodeLink.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{nodeLink.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(nodeLink.createdAt)}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{nodeLink.name}</td>
            </tr>
            <tr>
              <th>Source node id</th>
              <td>{nodeLink.sourceNodeId}</td>
            </tr>
            <tr>
              <th>Target node id</th>
              <td>{nodeLink.targetNodeId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNodeLink({ id: nodeLink.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(nodeLink.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default NodeLink
