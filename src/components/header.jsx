function Header(){
    return (
        <header>
            <a href="# " className="logo"><span>BE</span>FIT</a>

            <div id="menu" className="fas fa-bars"></div>

            <nav className="navbar">
                <ul>
                    <li><a className="active" href="#home">home</a></li>
                    <li><a className="#about">about</a></li>
                    <li><a className="#service">service</a></li>
                    <li><a className="#trainer">trainer</a></li>
                    <li><a className="#plan">plan</a></li>
                    <li><a className="#register">register</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;