import { MetaTags } from '@redwoodjs/web'
import NodeCell from 'src/components/Node/NodeCell/NodeCell'

const SelectLinkedNodePage = ({ linkedId }) => {
  return (
    <>
      <MetaTags title="SelectLinkedNode" description="SelectLinkedNode page" />
      <NodeCell id={linkedId} selectingLinked={true} />
    </>
  )
}

export default SelectLinkedNodePage
