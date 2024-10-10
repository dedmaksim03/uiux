import React from "react";

const Layout = ({ children }) => {
    return (
        <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f9f1f9' }}>
            {children}
        </div>
    );
};
export default Layout;