import { ReactNode } from 'react'
import { useINP } from './provider'

interface LinkClassNameProps {
  active: boolean
}

interface LinkProps {
  className?: string | ((props: LinkClassNameProps) => string)
  to: string
  children: ReactNode
}

/**
 * Custom component for Link buttons.
 * This is a wrapper to the `navigate()` function.
 *
 * @param LinkProps
 * @returns JSX.Element
 */
const Link = ({ className, children, to }: LinkProps) => {
  const { navigate, current } = useINP()

  const isClassString = typeof className === 'string'

  return (
    <button
      type="button"
      onClick={() => navigate(to)}
      className={
        className != null
          ? isClassString
            ? className
            : className({ active: to === current })
          : ''
      }
    >
      {children}
    </button>
  )
}

export default Link
