import { createContext, useEffect, useState } from "react";


export const SdContext = createContext([])

export const SdProvidor = (props: any) => {
  const { children } = props
  const [list, setList] = useState < any > ([])
  useEffect(() => {
    setList([
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
    ])
  }, [])
  return <SdContext.Provider value={list}>
    {children}
  </SdContext.Provider>
}