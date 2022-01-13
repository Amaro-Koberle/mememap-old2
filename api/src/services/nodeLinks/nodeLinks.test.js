import {
  nodeLinks,
  nodeLink,
  createNodeLink,
  updateNodeLink,
  deleteNodeLink,
} from './nodeLinks'

describe('nodeLinks', () => {
  scenario('returns all nodeLinks', async (scenario) => {
    const result = await nodeLinks()

    expect(result.length).toEqual(Object.keys(scenario.nodeLink).length)
  })

  scenario('returns a single nodeLink', async (scenario) => {
    const result = await nodeLink({ id: scenario.nodeLink.one.id })

    expect(result).toEqual(scenario.nodeLink.one)
  })

  scenario('creates a nodeLink', async (scenario) => {
    const result = await createNodeLink({
      input: {
        name: 'String',
        sourceNodeId: scenario.nodeLink.two.sourceNodeId,
        targetNodeId: scenario.nodeLink.two.targetNodeId,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.sourceNodeId).toEqual(scenario.nodeLink.two.sourceNodeId)
    expect(result.targetNodeId).toEqual(scenario.nodeLink.two.targetNodeId)
  })

  scenario('updates a nodeLink', async (scenario) => {
    const original = await nodeLink({ id: scenario.nodeLink.one.id })
    const result = await updateNodeLink({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a nodeLink', async (scenario) => {
    const original = await deleteNodeLink({ id: scenario.nodeLink.one.id })
    const result = await nodeLink({ id: original.id })

    expect(result).toEqual(null)
  })
})
