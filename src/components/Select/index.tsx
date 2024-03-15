import React, { useEffect, useState } from 'react'
import './sass/select.scss'
interface ListItemProps {
  id: string | number
  name: string
}
interface ButtonProps {
  placeholder?: string
  list?: ListItemProps[]
}

export function Select(props: ButtonProps) {
  const {
    placeholder = '请输入',
    list = []
  } = props
  const [newList, setNewList] = useState < ListItemProps[] > ([])
  const [show, setShow] = useState(false)
  const [content, setContent] = useState < string > ('')
  const [compositionUpdate, setCompositionUpdate] = useState(false)
  const onChange = (e: any) => {
    setContent(e.target.value)
  }
  const onItemClick = (item: ListItemProps) => {
    setContent(item.name)
  }
  useEffect(() => {
    if (compositionUpdate) return
    const res = list.filter(v => v.name.includes(content))
    setNewList(res)
  }, [content, compositionUpdate])
  return <div className='select w-60'>
    <input
      value={content}
      onChange={onChange}
      onCompositionStart={() => setCompositionUpdate(true)}
      onCompositionEnd={() => setCompositionUpdate(false)}
      onFocus={() => setShow(true)}
      onBlur={(e) => setShow(false)}
      className='select-input w-full px-2 py-1 rounded-sm'
      placeholder={placeholder}></input>
    {show && !!newList.length && <div
      className='select-list w-full bg-white'>
      <ul>
        {newList.map((item) => <li
          onMouseDown={() => onItemClick(item)}
          key={item.id}>{item.name}</li>)}
      </ul>
    </div>}
  </div>
}