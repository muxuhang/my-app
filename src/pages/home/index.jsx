import { Select } from '@src/components'
import { SdProvidor } from '@src/context/sdContext'
import React, { useCallback, useContext, useDebugValue, useEffect, useLayoutEffect, useReducer, useState } from 'react'
import Uselect from './components/Uselect'
import Articli from '@src/components/Article'

export default function HomePage() {
  const [list, setList] = useState([])
  const [state, dispatch] = useReducer((state, action) => {
    if (action.type === 'incremented_age') {
      return {
        age: state.age + 1
      };
    } else {
      return {
        age: state.age - 1
      };
    }
  }, { age: 42 });
  useCallback(() => {
    console.log('useCallback')
  }, [])

  useEffect(() => {
    console.log('useEffect')
  }, [])
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  }, [])

  useDebugValue()

  return <div>
    <span className='title'>首页</span>
    <button onClick={() => {
      dispatch({ type: 'incremented_age' })
    }}>增加</button>
    {state.age}
    <button onClick={() => {
      dispatch({ type: 'reduce_age' })
    }}>减少</button>
    <SdProvidor>
      <Uselect />
    </SdProvidor>
    <Articli title='明朝那些事'>
      《明朝那些事儿》是一套在网络上连载的关于中国明朝历史的作品，作者为当年明月。[注1][参1][参2]于2006年3月10日在天涯社区首次发表，讲述了明朝二百七十六年的历史，其内容始于明太祖朱元璋的诞生，终于崇祯帝朱由检在煤山自缢。《明朝那些事儿》在网络连载期间，每月点击率逾百万人次。[参3]后来，《明朝那些事儿》集结成书籍刊行，在台湾发行了繁体中文版本。之后被翻译为日文、韩文及英文等多国语言[参4]。
      <code>code</code>
      <strong>strong</strong><br />
      <em>em</em><br />
      <dfn>dfn</dfn><br />
      <sapm>samp</sapm><br />
      <kbd>kbd</kbd><br />
      <var>var</var><br />
      <time>2024-3-18</time><br />
      <a>123</a>
    </Articli>
  </div>
}