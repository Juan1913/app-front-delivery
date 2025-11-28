import * as React from "react";

interface LayoutProps {

    children?: React.ReactNode;

}

const Layout = ({}: LayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden relative">
        {/* <SideBar /> */}
        <SideBar />
        {/* Main content */}
        <div className="flex-1 bg-gray-100">
             <main className="p-3">

             </main>
        </div>

    </div>
  );
}


export default Layout;