import React from 'react'
import './sass/article.scss'
interface ArticleProps {
  title: string
  children: string | React.ReactNode
}
export default function Article(props: ArticleProps) {
  const { title, children } = props
  return <article>
    <h2>{title}</h2>
    {
      typeof children === 'string' ?
        <p>{children}</p> :
        children
    }
  </article >
}