/** 
 * @param 
 * 
 */


import React, { useEffect, useState } from 'react'
import './sass/select.scss'
interface ListItemProps {
  id: string | number
  name: string
}
interface ButtonProps {
  placeholder?: string
  list?: ListItemProps[]
  search: boolean
}

export function Select(props: ButtonProps) {
  const {
    placeholder,
    list = [],
    search = false,
    ...orgs
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
    if (search) {
      if (compositionUpdate) return
      const res = list.filter(v => v.name.includes(content))
      setNewList(res)
    } else {
      setNewList(list)
      setShow(false)
    }
  }, [list, content, compositionUpdate])
  const handle = search ? {} : {
    onClick: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }
  return <div className='select w-60'
    {...handle}
    {...orgs}>
    {search ? <input
      value={content}
      onChange={onChange}
      onCompositionStart={() => setCompositionUpdate(true)}
      onCompositionEnd={() => setCompositionUpdate(false)}
      onFocus={() => setShow(true)}
      onBlur={(e) => setShow(false)}
      className='select-input w-full px-2 py-1 rounded-sm'
      placeholder={placeholder || '请输入'}></input> :
      <div
        className={`select-input select-div w-full px-2 rounded-sm bg-white 
          ${!content && 'select-placeholder'}`}>
        {content || placeholder || '请选择'}
      </div>}
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