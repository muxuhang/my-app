import React from 'react'

interface ButtonProps {
  children?: any
}

export function Button(props: ButtonProps) {
  const { children } = props
  return <div>
    {children}
  </div>
}