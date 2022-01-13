import { useParams, useLocation } from '@redwoodjs/router'
import EditNodeCell from '../Node/EditNodeCell'
import NewNode from '../Node/NewNode/NewNode'
import NodeCell from '../Node/NodeCell/NodeCell'

const Panel = () => {
  const { pathname } = useLocation()
  const { id } = useParams()

  return (
    <div>
      {pathname.includes('edit') ? (
        <EditNodeCell id={id} />
      ) : id ? (
        <NodeCell id={id} />
      ) : (
        <NewNode />
      )}
    </div>
  )
}

export default Panel
