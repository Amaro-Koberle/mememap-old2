import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/NodeLink/NodeLinksCell'

const DELETE_NODE_LINK_MUTATION = gql`
  mutation DeleteNodeLinkMutation($id: String!) {
    deleteNodeLink(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const NodeLinksList = ({ nodeLinks }) => {
  const [deleteNodeLink] = useMutation(DELETE_NODE_LINK_MUTATION, {
    onCompleted: () => {
      toast.success('NodeLink deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete nodeLink ' + id + '?')) {
      deleteNodeLink({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Name</th>
            <th>Source node id</th>
            <th>Target node id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {nodeLinks.map((nodeLink) => (
            <tr key={nodeLink.id}>
              <td>{truncate(nodeLink.id)}</td>
              <td>{timeTag(nodeLink.createdAt)}</td>
              <td>{truncate(nodeLink.name)}</td>
              <td>{truncate(nodeLink.sourceNodeId)}</td>
              <td>{truncate(nodeLink.targetNodeId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.nodeLink({ id: nodeLink.id })}
                    title={'Show nodeLink ' + nodeLink.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNodeLink({ id: nodeLink.id })}
                    title={'Edit nodeLink ' + nodeLink.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete nodeLink ' + nodeLink.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(nodeLink.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NodeLinksList
