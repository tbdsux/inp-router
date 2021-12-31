import { useINP } from 'inp-router'

const WorldComponent = () => {
  const { navigate } = useINP()

  return (
    <div>
      <p>world</p>

      <button onClick={() => navigate('hello')}>return to world</button>
    </div>
  )
}

export default WorldComponent
