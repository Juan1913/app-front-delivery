import * as React from "react";
import SideBar from "./SideBar";

interface LayoutProps {

    children?: React.ReactNode;

}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden relative">
        {/* <SideBar /> */}
        <SideBar/>
        {/* Main content */}
        <div className="flex-1 bg-gray-100">
             <main className="p-3 sm:p-4 md:p-5 w-full">
               {children}
             </main>
        </div>

    </div>
  );
}


export default Layout;