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
      <ul className="grid grid-rows-5 grid-cols-1 gap-6 justify-items-center">
        <li>
          <Link className="" to={routes.explore()}>
            <MdOutlineExplore className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link className="" to={routes.explore()}>
            <MdOutlineAccountBalanceWallet className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link className="" to={routes.explore()}>
            <MdAddCircleOutline className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link className="" to={routes.explore()}>
            <MdPersonOutline className="text-2xl" />
          </Link>
        </li>
        <li>
          <Link className="" to={routes.explore()}>
            <MdOutlineSettings className="text-2xl" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainNavigation
