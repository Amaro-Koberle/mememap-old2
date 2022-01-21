import { useParams, useLocation } from '@redwoodjs/router'
import NewNodePage from 'src/pages/Node/NewNodePage/NewNodePage'
import EditNodePage from 'src/pages/Node/EditNodePage/EditNodePage'
import NodePage from 'src/pages/Node/NodePage/NodePage'
import SelectLinkedNodePage from 'src/pages/SelectLinkedNodePage/SelectLinkedNodePage'

const PanelNodePages = () => {
  const { pathname } = useLocation()
  const { id, linkedId } = useParams()
  return (
    <>
      {pathname.includes('new') ? (
        <NewNodePage />
      ) : pathname.includes('select-linked-node') ? (
        <SelectLinkedNodePage linkedId={linkedId} />
      ) : pathname.includes('edit') ? (
        <EditNodePage id={id} />
      ) : (
        <NodePage id={id} />
      )}
    </>
  )
}

export default PanelNodePages
