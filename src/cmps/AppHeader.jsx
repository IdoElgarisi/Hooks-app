import { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from "react-router-dom";

export const AppHeader = (props) => {
  // console.log(' AppHeader props: ', props);
  const loggedInUser = useSelector(state => state.userModule.loggedInUser)
  const history = useHistory()
  const params = useParams()

  const [burgerMenu, setMenu] = useState(false)
  const onGoBack = () => {
    history.goBack()
  }

  const toggleMenu = () => {
    setMenu(!burgerMenu)
  }

  const checkClick = () => {
console.log('clickkkk checkkkk');
  }

  return (
    <div className="app-header-container">
      {/* <div className="screen" onClick={() => { checkClick() }}></div> */}
      <div className={`screen ${burgerMenu ? 'screen-open' : ''}`} onClick={checkClick}></div>
      <header className="app-header flex align-center space-between">
        <h1>Robot Shop</h1>
        <div className="burger-menu" onClick={toggleMenu}>☰</div>
        <section className={`navbar-container ${burgerMenu ? 'open' : ''}`}>
          <nav className="navbar flex column align-center justify-center">
            <div className='navbar-item flex align-center justify-center'>
              <NavLink activeClassName="active-nav" exact to="/" onClick={toggleMenu}>Home</NavLink>
            </div>
            <div className='navbar-item flex align-center justify-center'>
              <NavLink activeClassName="active-nav" exact to="/robot" onClick={toggleMenu}>Shop</NavLink>
            </div>
            <div className='navbar-item flex align-center justify-center'>
              <NavLink activeClassName="active-nav" to="/about" onClick={toggleMenu}>About</NavLink>
            </div>
            <div className='navbar-item flex align-center justify-center'>
              <NavLink activeClassName="active-nav" to="/stats" onClick={toggleMenu}>Charts</NavLink>
            </div>
            <div className='navbar-item flex align-center justify-center' onClick={toggleMenu}>
              <button onClick={onGoBack}>Back</button>
            </div>
          </nav>
        </section>
        {/* <div> */}
        {/* <p>{loggedInUser.name}</p> */}
        {/* </div> */}
      </header>
    </div>
  )
}


