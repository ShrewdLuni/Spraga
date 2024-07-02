import { ReactNode } from 'react';
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({children} : LayoutProps) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  )
}