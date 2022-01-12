import MapCell from '../../components/Map/MapCell/MapCell'
import MainNavigation from 'src/components/MainNavigation/MainNavigation'
import Panel from 'src/components/Panel/Panel'
import AuthButtons from 'src/components/AuthButtons/AuthButtons'

const MapLayout = () => {
  return (
    <div className="w-screen h-screen bg-stone-900 text-stone-900">
      <div className="absolute pointer-events-none w-full h-full z-10 grid grid-cols-[3.5rem_20rem_1fr_3.5rem] grid-rows-[3.5rem_1fr_3.5rem]">
        <div className="bg-stone-200 row-span-3 pointer-events-auto">
          <MainNavigation />
        </div>
        <div className="row-span-3 bg-stone-200 pointer-events-auto">
          <Panel />
        </div>
        <div className="col-start-3 col-end-5 justify-self-end pointer-events-auto">
          <AuthButtons />
        </div>
      </div>
      <div className="z-0">
        <MapCell />
      </div>
    </div>
  )
}

export default MapLayout
