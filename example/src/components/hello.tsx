import { useINP } from 'inp-router'

const HelloComponent = () => {
  const { navigate } = useINP()

  return (
    <div>
      <p>hello</p>

      <button onClick={() => navigate('world')}>navigate to world</button>
    </div>
  )
}

export default HelloComponent
