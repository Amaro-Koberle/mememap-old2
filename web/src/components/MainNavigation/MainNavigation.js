import { Link, routes } from '@redwoodjs/router'
import {
  MdOutlineExplore,
  MdAddCircleOutline,
  MdOutlineAccountBalanceWallet,
  MdOutlineSettings,
  MdPersonOutline,
} from 'react-icons/md'

const MainNavigation = () => {
  return (
    <nav className="m-4 text-xs">
      <ul className="grid grid-rows-5 grid-cols-1 gap-4 justify-items-center">
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <MdOutlineExplore className="text-2xl" />
            Explore
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <MdOutlineAccountBalanceWallet className="text-2xl" />
            Wallet
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <MdAddCircleOutline className="text-2xl" />
            Create
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <MdPersonOutline className="text-2xl" />
            Me
          </Link>
        </li>
        <li>
          <Link
            className="grid grid-rows-2 justify-items-center gap-2"
            to={routes.explore()}
          >
            <MdOutlineSettings className="text-2xl" />
            Settings
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
