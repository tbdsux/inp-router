import { INPRouter, RenderRoutes } from 'inp-router'
import HelloComponent from './hello'
import WorldComponent from './world'

const Container = () => {
  return (
    <INPRouter
      defaultElement="hello"
      routes={{
        hello: HelloComponent,
        world: WorldComponent
      }}
    >
      <RenderRoutes />
    </INPRouter>
  )
}

export default Container
