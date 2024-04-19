import React from "react"
import Logo from "./Logo";
const Header: React.FC = () => {
    return (
        <header className="fixed top-0 right-0 w-full 
        bg-brown_1 px-20 py-6 opacity-95 z-10">
            <div className="max-w-[10%]">
                <Logo />
            </div>

        </header>
    )
};

export default Header;
