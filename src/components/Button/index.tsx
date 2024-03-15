import React from 'react'
import './sass/button.scss'

interface ButtonProps {
  children?: any
}

export function Button(props: ButtonProps) {
  const { children } = props
  return <button className='px-2 py-1 bg-slate-300 rounded-sm'>
    {children}
  </button>
}