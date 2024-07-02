import { ReactNode } from 'react';
import { Sidebar } from "./Sidebar"

interface DashboardLayoutProps {
  children: ReactNode;
}

export const DashboardLayout = ({children} : DashboardLayoutProps) => {
  return (
    <div className="w-full h-full flex flex-row">
      <Sidebar/>
      {children}
    </div>
  )
}