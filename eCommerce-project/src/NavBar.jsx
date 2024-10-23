
function NavBar(){
    const username = "Manjeedan";
    const cartCount = 0;

    return(
        <header className="header-bar"> 
        <nav className="navbar">
            <div className = "logo">Mebius</div>
            <ul className="nav-links">
                <li>
                    <a href = "#">Home</a>
                </li>
                <li>
                    <a href = "#">Shop</a>
                </li>
            </ul>
            <div className = "user-info">
                <span>{cartCount} <img src = "https://cdn-icons-png.flaticon.com/512/3081/3081986.png" alt="cart"></img> Cart </span>
                <span className="user-name">Hi, {username}</span>
            </div>
        </nav>
        </header>
    )
}

export default NavBar;