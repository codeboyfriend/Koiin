import { Link } from 'react-router-dom'

const Header = ({ 
    mode,
    setMode 
}) => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className='logo'>
          <h4><i className="bi bi-coin"></i>Koiin</h4>
        </div>
      </Link>
      <div className='mode'>
        <i onClick={() => setMode(!mode)} className={mode ? 'bi bi-brightness-high-fill' : 'bi bi-moon-fill'}></i>
      </div>
    </div>
  )
}

export default Header