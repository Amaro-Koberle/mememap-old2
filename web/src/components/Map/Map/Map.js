import ForceGraph from 'react-force-graph-3d'
import { navigate, routes } from '@redwoodjs/router'

const onNodeClick = (node) => {
  navigate(routes.node({ id: node.id }));
}

const Map = (data) => {
  return (
    <ForceGraph
      backgroundColor="#F5F5F4"
      graphData={data.graphData}
      onNodeClick={onNodeClick}
    />
  )
}

export default Map
