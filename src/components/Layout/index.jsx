import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
// import Sidebar from "./Sidebar";
import Container from './Container';

export function Layout() {
  return <div className='layout'>
    <Header />
    {/* <Sidebar /> */}
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </div>
}