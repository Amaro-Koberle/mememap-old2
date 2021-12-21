import { nodes, node, createNode, updateNode, deleteNode } from './nodes'

describe('nodes', () => {
  scenario('returns all nodes', async (scenario) => {
    const result = await nodes()

    expect(result.length).toEqual(Object.keys(scenario.node).length)
  })

  scenario('returns a single node', async (scenario) => {
    const result = await node({ id: scenario.node.one.id })

    expect(result).toEqual(scenario.node.one)
  })

  scenario('creates a node', async () => {
    const result = await createNode({
      input: { title: 'String', content: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.content).toEqual('String')
  })

  scenario('updates a node', async (scenario) => {
    const original = await node({ id: scenario.node.one.id })
    const result = await updateNode({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a node', async (scenario) => {
    const original = await deleteNode({ id: scenario.node.one.id })
    const result = await node({ id: original.id })

    expect(result).toEqual(null)
  })
})
