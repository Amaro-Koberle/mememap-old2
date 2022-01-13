export const standard = defineScenario({
  nodeLink: {
    one: {
      data: {
        name: 'String',
        sourceNode: { create: { name: 'String', content: 'String' } },
        targetNode: { create: { name: 'String', content: 'String' } },
      },
    },

    two: {
      data: {
        name: 'String',
        sourceNode: { create: { name: 'String', content: 'String' } },
        targetNode: { create: { name: 'String', content: 'String' } },
      },
    },
  },
})
