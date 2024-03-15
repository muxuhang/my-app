import React from 'react'
import './sass/layout.scss'
export default function Container(props: any) {
  return <div className='layout-container'>
    {props.children}
  </div>
}