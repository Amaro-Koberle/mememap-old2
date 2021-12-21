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

const Map = () => {
  return (
    <>
      <ForceGraph3D graphData={data} />
    </>
  )
}

export default Map
