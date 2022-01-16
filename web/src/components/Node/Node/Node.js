import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

import { MdArrowRightAlt, MdEdit } from 'react-icons/md'
import CreateLinkDialog from 'src/components/CreateLinkDialog/CreateLinkDialog'

// const DELETE_NODE_MUTATION = gql`
//   mutation DeleteNodeMutation($id: String!) {
//     deleteNode(id: $id) {
//       id
//     }
//   }
// `

// const jsonDisplay = (obj) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(obj, null, 2)}</code>
//     </pre>
//   )
// }

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const Node = ({ node }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  // const [deleteNode] = useMutation(DELETE_NODE_MUTATION, {
  //   onCompleted: () => {
  //     toast.success('Node deleted')
  //     navigate(routes.nodes())
  //   },
  //   onError: (error) => {
  //     toast.error(error.message)
  //   },
  // })

  // const onDeleteClick = (id) => {
  //   if (confirm('Are you sure you want to delete node ' + id + '?')) {
  //     deleteNode({ variables: { id } })
  //   }
  // }
  return (
    <div className="p-4">
      {dialogIsOpen ? (
        <CreateLinkDialog
          dialogIsOpen={dialogIsOpen}
          setDialogIsOpen={setDialogIsOpen}
        />
      ) : null}

      <header className="">
        <h2 className="text-xl">{node.name}</h2>
        <div className="text-xs">
          <span>{timeTag(node.createdAt)}</span>
        </div>
      </header>
      <nav className="flex flex-row space-x-1 my-2">
        <Link
          to={routes.editNode({ id: node.id })}
          className="flex flex-row items-center space-x-1 px-2 rounded-lg border border-stone-800"
        >
          <MdEdit />
          <span>Edit</span>
        </Link>

        <button
          type="button"
          onClick={() => setDialogIsOpen(true)}
          className="flex flex-row items-center px-2 rounded-lg border border-stone-800"
        >
          <MdArrowRightAlt />
          <span>Link</span>
        </button>

        {/* <button
          type="button"
          className=""
          onClick={() => onDeleteClick(node.id)}
        >
          Delete
        </button> */}
      </nav>
      <nav className="flex flex-row space-x-4 my-2 border-b border-stone-800">
        <div className="px-2">
          <span>Content</span>
        </div>
        <div>
          <span>Incoming</span>
        </div>
        <div>
          <span>Outgoing</span>
        </div>
      </nav>
      <div className="p-2">
        <span>{node.content}</span>
      </div>
    </div>
  )
}

export default Node
