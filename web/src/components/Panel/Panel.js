import { useLocation } from '@redwoodjs/router'
import ExplorePage from 'src/pages/ExplorePage/ExplorePage'
import PanelNodePages from '../PanelNodePages/PanelNodePages'
import PanelNodeLinkPages from '../PanelNodeLinkPages/PanelNodeLinkPages'

const Panel = () => {
  const { pathname } = useLocation()

  return (
    <>
      {pathname.includes('nodes') ? (
        <PanelNodePages />
      ) : pathname.includes('links') ? (
        <PanelNodeLinkPages />
      ) : (
        <ExplorePage />
      )}
    </>
  )
}

export default Panel
