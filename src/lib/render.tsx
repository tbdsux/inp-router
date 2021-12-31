import { useINPRouterContext } from './provider'

const RenderRoutes = () => {
  const { routes, current } = useINPRouterContext()
  const Element = routes[current]

  if (current === '') {
    return <></>
  }

  if (Element == null) {
    throw new Error('Unknown component route key.')
  }

  return <Element />
}

export default RenderRoutes
