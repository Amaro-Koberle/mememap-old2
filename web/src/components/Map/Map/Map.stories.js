import Map from './Map'

const graphData = {
  nodes: [
    { id: 'a', name: 'A', color: '#FF0000' },
    { id: 'b', name: 'B', color: '#00FF00' },
    { id: 'c', name: 'C', color: '#0000FF' },
  ],
  links: [
    { id: 'ab', source: 'a', target: 'b', name: 'AB', color: '#FF0000' },
    { id: 'bc', source: 'b', target: 'c', name: 'BC', color: '#00FF00' },
    { id: 'ca', source: 'c', target: 'a', name: 'CA', color: '#0000FF' },
  ],
}

export const generated = () => {
  return <Map graphData={graphData} />
}

export default { title: 'Components/Map' }
