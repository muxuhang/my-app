import { Button } from "@src/components";
import { createContext, useCallback, useEffect, useReducer, useState } from "react";


export const SdContext = createContext([])

export const SdProvidor = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer((state, action) => {
    // TODO 不严谨
    if (JSON.stringify(state) !== JSON.stringify(action.list)) {
      state = action.list
    }
    return state
  }, [])
  useEffect(() => {
    dispatch({
      list: [
        { id: '01', name: '济南' },
        { id: '02', name: '青岛' },
        { id: '03', name: '菏泽' },
        { id: '04', name: '德州' },
        { id: '05', name: '聊城' },
        { id: '06', name: '枣庄' },
        { id: '07', name: '威海' },
        { id: '08', name: '烟台' },
        { id: '09', name: '泰安' },
        { id: '10', name: '滨州' },
        { id: '11', name: '东营' },
        { id: '12', name: '临沂' },
        { id: '13', name: '日照' },
        { id: '14', name: '济宁' },
        { id: '15', name: '淄博' },
        { id: '16', name: '潍坊' },
      ]
    })
  }, [])
  useEffect(() => {
    callback()
  }, [state])
  const callback = useCallback(() => {
    console.log(state)
    return state
  }, [state])
  return <SdContext.Provider value={{
    list: state,
    setList: dispatch
  }}>
    {children}
  </SdContext.Provider >
}