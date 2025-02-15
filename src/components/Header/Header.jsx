import './Header.css'


function Header(){
    return(
        <div className='header-container'>
            <div className="header">
                <div className="header-left">
                    <button>IMAGE</button>
                </div>
                <div className="header-right">
                    <a href="" className="nav-link">About Me</a>
                    <a href="" className="nav-link">Work</a>
                    <a href="" className="nav-link">Contact Me</a>
                    <a href="" className="nav-link">CV</a>
                </div>
            </div>
        </div>
    )


}

export default Header