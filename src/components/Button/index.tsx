import React, { ComponentProps, ComponentPropsWithRef, ComponentPropsWithoutRef } from 'react'
import './sass/button.scss'

interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children?: any
}

export function Button(props: ButtonProps) {
  const { children, ...orgs } = props
  return <button className='px-2 py-1 bg-slate-300 rounded-sm' {...orgs}>
    {children}
  </button>
}