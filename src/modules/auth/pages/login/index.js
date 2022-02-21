import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { useLoginMutation } from "../../stores/services/auth"

function Login() {
  const [loginState, setLoginState] = useState({ isLoginFail: false })
  const [formState, setFormState] = useState({ email: '', password: '' })
  const [login, { isLoading, data, error }] = useLoginMutation()
  const { push } = useHistory()
  const { t } = useTranslation()

  // functions
  const handleChange = ({ target: { name, value } }) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async () => {
    try {
      setLoginState((prev) => ({ ...prev, isLoginFail: false }))
      await login(formState).unwrap()
      push("/")
    } catch (error) {
      setLoginState((prev) => ({ ...prev, isLoginFail: true }))
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-mycolor shadow-lg">
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold md:text-center xl:text-blue-500">{t('auth.loginYourAccount')}</h3>
        <form>
          <div className="mt-4">
            <div>
              <label className="block" htmlFor="email">{t('auth.email')}</label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="Email"
                className={classNames("w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1", { "border-red-600": !formState.email })} />
            </div>
            <div className="mt-4">
              <label className="block">{t('auth.password')}</label>
              <input
                name="password"
                onChange={handleChange}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
              {
                loginState.isLoginFail && <span className="text-xs tracking-wide text-red-600">Incorrect email or password</span>
              }
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="button"
                onClick={handleLogin}
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                Login
              </button>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
