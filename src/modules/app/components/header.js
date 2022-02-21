import { Link, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { selectAuthToken, logOut } from '@modules/auth/stores/slices/auth'

function Header() {
  const isLoggedIn = useSelector(selectAuthToken)
  const dispatch = useDispatch()
  const { push } = useHistory()
  const { i18n } = useTranslation()

  const handleLogOut = () => {
    dispatch(logOut())
    push("/login")
  }

  const handleChangeLanguage = (lang) => () => {
    i18n.changeLanguage(lang)
  }

  return (
    <nav id="header" className="fixed w-full z-10 top-0 bg-gray-200">
      <div className="w-full md:max-w-4xl mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
        <div className="pl-4">
          <Link className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" to="/">
            Home
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-900 hover:border-green-500 appearance-none focus:outline-none">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link className="inline-block py-2 px-4 text-gray-900 font-bold no-underline" to="/private-demo">Private Page</Link>
            </li>
            <li className="mr-3">
              {
                isLoggedIn ? (
                  <button className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" onClick={handleLogOut}>Log Out</button>
                ) : (
                  <Link className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" to="/login">Log In</Link>
                )
              }
            </li>
            <li className="mr-3 group inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">language</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="absolute hidden text-gray-700 pt-1 group-hover:block">
                <li className="">
                  <a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={handleChangeLanguage('en')}>English</a>
                </li>
                <li className="">
                  <a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={handleChangeLanguage('fr')}>Français</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header