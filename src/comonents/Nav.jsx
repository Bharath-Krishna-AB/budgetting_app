//rrd imports
import { NavLink } from 'react-router-dom'

//Assets
import logomark from '../assets/logomark.svg'


function Nav({userName}) {
  return (
    <nav>
        <NavLink to='/' aria-label='Go to home'>
            <img src={logomark} alt="" height={30} />
            <span>HomeBudget</span>
        </NavLink>
    </nav>
  )
}

export default Nav