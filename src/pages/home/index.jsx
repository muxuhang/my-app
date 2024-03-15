import React from 'react'
import { Outlet } from "react-router-dom";


export default function HomePage() {
  return <div>
    <span className='title'>首页</span>
    <Outlet></Outlet>
  </div>
}