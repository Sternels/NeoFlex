import { FC, PropsWithChildren } from 'react'
import styles from './styles.module.scss'


interface ContainerProps extends PropsWithChildren {
  className?: string
}

export const Container:FC<ContainerProps> = ({className = "", children}) => {
  return (
    <div className={[className, styles.container].join(" ")}>
      {children}
    </div>
  )
}
