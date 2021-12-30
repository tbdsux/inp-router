import { createContext, ReactNode } from 'react'

interface INPRouterProps {
  children: ReactNode
  defaultElement: () => JSX.Element
}
interface INPContextProps {
  defaultElement: () => JSX.Element
}

const INPContext = createContext<INPContextProps>({
  defaultElement: () => <></>
})

const INPRouter = ({ defaultElement: DefaultElement }: INPRouterProps) => {
  return (
    <INPContext.Provider value={{ defaultElement: DefaultElement }}>
      <DefaultElement />
    </INPContext.Provider>
  )
}

export default INPRouter
