import { Select } from '@src/components'
import { SdProvidor, SdContext } from '@src/context/sdContext'
import React, { useCallback, useContext, useDebugValue, useEffect, useLayoutEffect, useReducer, useState } from 'react'


const reducer = (state, action) => {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  } else {
    return {
      age: state.age - 1
    };
  }
}
export default function HomePage() {
  const [list, setList] = useState([])
  const [state, dispatch] = useReducer(reducer, { age: 42 });
  useCallback(() => {

  }, [])

  useEffect(() => {
    // console.log('useEffect', state)
  }, [state])
  useLayoutEffect(() => {
    // console.log('useLayoutEffect')
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
      <SdContext.Consumer>
        {(list) => {
          return <div>
            <Select list={list}></Select>
            <Select style={{ marginTop: 5 }} list={list} search></Select>
          </div>
        }}
      </SdContext.Consumer>
    </SdProvidor>
  </div>
}