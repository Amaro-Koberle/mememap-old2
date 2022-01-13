import { useParams } from '@redwoodjs/router'
import NewNode from '../Node/NewNode/NewNode'
import NodeCell from '../Node/NodeCell/NodeCell'

const Panel = () => {
  const { id } = useParams()

  return <div>{id ? <NodeCell id={id} /> : <NewNode />}</div>
}

export default Panel
