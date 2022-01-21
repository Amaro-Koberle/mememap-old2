import { useParams, useLocation } from '@redwoodjs/router'
import ForceGraph from 'react-force-graph-3d'
import { navigate, routes } from '@redwoodjs/router'

const Map = (data) => {
  const { pathname } = useLocation()
  const { id } = useParams()

  const onNodeClick = (node) => {
    pathname.includes('select-linked-node')
      ? navigate(routes.selectLinkedNode({ id: id, linkedId: node.id }))
      : navigate(routes.node({ id: node.id }))
  }

  const onLinkClick = (link) => {
    if (pathname.includes('select-linked-node')) {
      return
    }
    console.log('got here')
    console.log(link)
    navigate(routes.nodeLink({ id: link.id }))
  }

  return (
    <ForceGraph
      backgroundColor="#F5F5F4"
      graphData={data.graphData}
      onNodeClick={onNodeClick}
      onLinkClick={onLinkClick}
      linkWidth="width"
      linkOpacity={1}
      nodeOpacity={1}
      linkDirectionalArrowLength={7}
    />
  )
}

export default Map
