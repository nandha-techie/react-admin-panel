import './navbar.scss';


const Navbar = ()=>{
    return(
        <nav>
            <div className='logo'>
                <img src='images/logo.svg' alt="logo name" />
                <h3>Admin Panel</h3>
            </div>
            <div className="navIcons"> 
                <img src="images/search.svg" alt="search" className='icon' />
                <img src="images/app.svg" alt="app" className='icon' />
                <img src="images/expand.svg" alt="expand" className='icon' />
                <div className="notification">
                    <img src="images/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className='userProfile'>
                    <img src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="profile" />
                    <span>James</span>
                </div>
                <img src="images/setting.svg" alt="" />
            </div>
        </nav>
    )
}

export default Navbar;