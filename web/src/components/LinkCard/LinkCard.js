const LinkCard = ({ linkId }) => {
  const username = 'username'
  return (
    <div className="border border-stone-700 rounded-xl mt-2 flex flex-col px-4 py-2">
      <span>{linkId}</span>
      <span className="font-extralight text-sm">
        @{username} • Source: Node Name
      </span>
    </div>
  )
}

export default LinkCard
