import { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout = ({ children }:Props) => {
    return (
    <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f9f9f9' }}>
    {children}
    </div>
    );
   };
   export default Layout;