import NodeLink from './NodeLink'

const nodeLink = {
  id: '1',
  name: 'Link Sample Name',
  source: 'Some name',
  target: 'Some other name',
}

export const generated = () => {
  return <NodeLink nodeLink={nodeLink} />
}

export default { title: 'Components/NodeLink' }
