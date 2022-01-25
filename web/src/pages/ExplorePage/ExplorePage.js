import { MetaTags } from '@redwoodjs/web'

const ExplorePage = () => {
  return (
    <div className="bg-transparent">
      <MetaTags title="Explore" description="Explore page" />

      <input
        className="w-full m-4 h-12 border-stone-700 border rounded-xl bg-stone-200"
        type="text"
      />
    </div>
  )
}

export default ExplorePage
