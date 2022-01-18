import { navigate, routes } from '@redwoodjs/router'
import { useParams } from '@redwoodjs/router'

const SelectLinkedNode = () => {
  const { id, linkedId } = useParams()
  return (
    <div>
      <button
        className="border p-4 bg-stone-700 text-stone-200 rounded-lg w-full"
        type="button"
        onClick={() =>
          navigate(routes.newNodeLink({ source: id, target: linkedId }))
        }
      >
        Select as target and create link
      </button>
    </div>
  )
}

export default SelectLinkedNode
