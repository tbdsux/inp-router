import { useINP, Link } from 'inp-router'
import './style.css'

const WorldComponent = () => {
  const { current } = useINP()

  return (
    <div>
      <p>world</p>

      <p>{current}</p>

      <Link
        to="world"
        className={({ active }) => `${active ? 'current-button' : ''}`}
      >
        this is world
      </Link>
      
      <Link to="hello" className="">
        go to hello
      </Link>
    </div>
  )
}

export default WorldComponent
