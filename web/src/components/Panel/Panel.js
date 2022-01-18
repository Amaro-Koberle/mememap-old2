import { useParams, useLocation } from '@redwoodjs/router'
import SelectLinkedNodePage from 'src/pages/SelectLinkedNodePage/SelectLinkedNodePage'
import EditNodeCell from '../Node/EditNodeCell'
import NewNode from '../Node/NewNode/NewNode'
import NodeCell from '../Node/NodeCell/NodeCell'
import NewNodeLinkPage from 'src/pages/NodeLink/NewNodeLinkPage'

const Panel = () => {
  const { pathname } = useLocation()
  const { id, linkedId, source, target } = useParams()

  return (
    <div>
      {pathname.includes('edit') ? (
        <EditNodeCell id={id} />
      ) : pathname.includes('select-linked-node') ? (
        <SelectLinkedNodePage linkedId={linkedId} />
      ) : id ? (
        <NodeCell id={id} />
      ) : pathname.includes('links/new') ? (
        <NewNodeLinkPage source={source} target={target} />
      ) : (
        <NewNode />
      )}
    </div>
  )
}

export default Panel
