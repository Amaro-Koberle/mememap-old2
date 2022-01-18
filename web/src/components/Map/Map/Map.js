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
  return (
    <ForceGraph
      backgroundColor="#F5F5F4"
      graphData={data.graphData}
      onNodeClick={onNodeClick}
    />
  )
}

export default Map
