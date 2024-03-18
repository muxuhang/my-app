import React, { useContext, useEffect } from "react"
import { Select } from '@src/components'
import { SdContext } from '@src/context/sdContext'


const Uselect = () => {
  const { list, setList } = useContext(SdContext)
  return <>
    <Select list={list}></Select>
    <Select style={{ marginTop: 5 }} list={list} search></Select>
    {/* <SdContext.Consumer>
      {({ list }) => {
        return <div>
          <Select list={list} style={{ marginTop: 5 }}></Select>
          <Select style={{ marginTop: 5 }} list={list} search></Select>
        </div>
      }}
    </SdContext.Consumer> */}
  </>
}
export default Uselect;