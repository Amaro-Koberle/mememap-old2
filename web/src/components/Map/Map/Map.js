import ForceGraph3D from 'react-force-graph-3d'

const data = {
  nodes: [
    {
      id: 'id1',
      name: 'name1',
    },
    {
      id: 'id2',
      name: 'name2',
    },
    {
      id: 'id3',
      name: 'name3',
    },
  ],
  links: [
    {
      source: 'id1',
      target: 'id2',
    },
    {
      source: 'id1',
      target: 'id3',
    },
  ],
}

const Map = (graphData) => {
  const XGraphData = {
    nodes: graphData.nodes,
    links: graphData.links,
  }

  return (
    <>
      <h3>--------XGraphData--------</h3>
      <div>{JSON.stringify(XGraphData)}</div>
      <h3>--------graphData--------</h3>
      <div>{JSON.stringify(graphData)}</div>
      <h3>--------graphData.nodes--------</h3>
      <div>{JSON.stringify(graphData.nodes)}</div>
      <h3>--------data--------</h3>
      <div>{JSON.stringify(data)}</div>
      <ForceGraph3D graphData={data} />
    </>
  )
}

export default Map
