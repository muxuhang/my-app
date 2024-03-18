import React from 'react'
import './sass/article.scss'
interface ArticleProps {
  title: string
  time?: string
  author?: string
  children: string | React.ReactNode
}
export default function Article(props: ArticleProps) {
  const { title, author, time, children } = props
  return <article>
    <hgroup>
      <h1>{title}</h1>
      <h2>
        {author && <span>作者: {author}</span>}
        {time && <time>时间: {time}</time>}
      </h2>
    </hgroup>
    {
      typeof children === 'string' ?
        <p>{children}</p> :
        children
    }
  </article >
}