import { Select } from '@src/components'
import { SdProvidor } from '@src/context/sdContext'
import React, { useCallback, useContext, useDebugValue, useEffect, useLayoutEffect, useReducer, useState } from 'react'
import Uselect from './components/Uselect'

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
  </div>
}