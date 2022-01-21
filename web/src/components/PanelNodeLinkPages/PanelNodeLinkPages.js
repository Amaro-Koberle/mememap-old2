import { useParams, useLocation } from '@redwoodjs/router'
import NewNodeLinkPage from 'src/pages/NodeLink/NewNodeLinkPage/NewNodeLinkPage'
import EditNodeLinkPage from 'src/pages/NodeLink/EditNodeLinkPage/EditNodeLinkPage'
import NodeLinkPage from 'src/pages/NodeLink/NodeLinkPage/NodeLinkPage'

const PanelNodeLinkPages = () => {
  const { pathname } = useLocation()
  const { id, source, target } = useParams()
  return (
    <>
      {pathname.includes('new') ? (
        <NewNodeLinkPage source={source} target={target} />
      ) : pathname.includes('edit') ? (
        <EditNodeLinkPage id={id} />
      ) : (
        <NodeLinkPage id={id} />
      )}
    </>
  )
}

export default PanelNodeLinkPages
