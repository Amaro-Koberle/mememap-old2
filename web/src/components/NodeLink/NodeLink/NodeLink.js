//import { useMutation } from '@redwoodjs/web'
//import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'
//import { navigate } from '@redwoodjs/router'
import { MdEdit, MdArrowRightAlt } from 'react-icons/md'

// const DELETE_NODE_LINK_MUTATION = gql`
//   mutation DeleteNodeLinkMutation($id: String!) {
//     deleteNodeLink(id: $id) {
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

const NodeLink = ({ nodeLink }) => {
  // const [deleteNodeLink] = useMutation(DELETE_NODE_LINK_MUTATION, {
  //   onCompleted: () => {
  //     toast.success('NodeLink deleted')
  //     navigate(routes.nodeLinks())
  //   },
  //   onError: (error) => {
  //     toast.error(error.message)
  //   },
  // })

  // const onDeleteClick = (id) => {
  //   if (confirm('Are you sure you want to delete nodeLink ' + id + '?')) {
  //     deleteNodeLink({ variables: { id } })
  //   }
  // }

  return (
    <>
      <div className="p-4">
        <header className="">
          <h2 className="text-xl">{nodeLink.name}</h2>
          <span className="text-xs">{timeTag(nodeLink.createdAt)}</span>
        </header>
        <nav className="flex flex-row space-x-1 my-2">
          <Link
            to={routes.editNodeLink({ id: nodeLink.id })}
            className="flex flex-row items-center space-x-1 px-2 rounded-lg border border-stone-800"
          >
            <MdEdit />
            <span>Edit</span>
          </Link>
        </nav>
        <div>
          <div className="flex gap-2 items-center w-full">
            <div className="p-2 flex flex-col border border-stone-700 rounded-lg">
              <span className="text-sm">Source node</span>
              <span></span>
            </div>
            <MdArrowRightAlt className="text-2xl" />
            <div className="p-2 flex flex-col border border-stone-700 rounded-lg">
              <span className="text-sm">Target node</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NodeLink
