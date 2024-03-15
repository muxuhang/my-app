import React from 'react'
import './sass/layout.scss'
interface ContainerProps {
  children?: any
}
export default function Container(props: ContainerProps) {
  const { children } = props
  return <div className='layout-container'>
    {children}
  </div>
}