import { useParams, useLocation } from '@redwoodjs/router'
import ForceGraph from 'react-force-graph-3d'
import { navigate, routes } from '@redwoodjs/router'
import {
  CSS2DRenderer,
  CSS2DObject,
} from 'three/examples/jsm/renderers/CSS2DRenderer'
import '../../../graphLabel.css'

const Map = (data) => {
  const { pathname } = useLocation()
  const { id } = useParams()
  const extraRenderers = [new CSS2DRenderer()]

  const onNodeClick = (node) => {
    pathname.includes('select-linked-node')
      ? navigate(routes.selectLinkedNode({ id: id, linkedId: node.id }))
      : navigate(routes.node({ id: node.id }))
  }

  const onLinkClick = (link) => {
    if (pathname.includes('select-linked-node')) {
      return
    }
    navigate(routes.nodeLink({ id: link.id }))
  }

  const backgroundColor = '#F5F5F4'

  return (
    <ForceGraph
      extraRenderers={extraRenderers}
      graphData={data.graphData}
      backgroundColor={backgroundColor}
      enableNodeDrag={false}
      onNodeClick={onNodeClick}
      nodeOpacity={1}
      nodeLabel={() => ''}
      nodeThreeObjectExtend={true}
      nodeThreeObject={(node) => {
        const nodeLabel = document.createElement('div')
        nodeLabel.textContent = node.name
        nodeLabel.style.color = node.color
        nodeLabel.className = 'graph-label'
        return new CSS2DObject(nodeLabel)
      }}
      onLinkClick={onLinkClick}
      linkWidth="width"
      linkOpacity={1}
      linkDirectionalArrowLength={7}
      linkLabel={() => ''}
      //linkThreeObjectExtend={true}
      // linkThreeObject={(link) => {
      //   const linkLabel = document.createElement('div')
      //   linkLabel.textContent = link.name
      //   linkLabel.style.color = link.color
      //   linkLabel.className = 'graph-label'
      //   return new CSS2DObject(linkLabel)
      // }}
    />
  )
}

export default Map
