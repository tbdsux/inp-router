import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'
import { RouteProps } from '../typings/router'

interface INPRouterProps {
  children: ReactNode
  routes: RouteProps
  defaultElement?: string | null
}
interface INPContextProps {
  routes: RouteProps

  /**
   * The current component route key.
   */
  current: string
  setCurrent: Dispatch<SetStateAction<string>>

  /**
   * Navigate to component route.
   * @param {string} key
   *
   */
  navigate: (key: string) => void
}

const INPContext = createContext<INPContextProps>({
  routes: {},
  current: '',
  setCurrent: () => '',
  navigate: (key: string) => undefined
})

const INPRouter = ({ children, routes, defaultElement }: INPRouterProps) => {
  const [current, setCurrent] = useState(defaultElement ?? '')

  const navigate = (key: string) => {
    if (key == null || key === '') {
      throw new Error('Cannot navigate to empty / null key.')
    }

    setCurrent(key)
  }

  return (
    <INPContext.Provider value={{ routes, current, setCurrent, navigate }}>
      {children}
    </INPContext.Provider>
  )
}

export const useINPRouterContext = () => {
  const context = useContext(INPContext)
  if (context === undefined) throw new Error('<INPRouter></INPRouter>')

  return context
}

/**
 * Hook for component-routing accessibility.
 */
export const useINP = () => {
  const { navigate, current } = useINPRouterContext()

  return { navigate, current }
}

export default INPRouter
