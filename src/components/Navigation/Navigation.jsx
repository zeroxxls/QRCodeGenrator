import { Link } from "react-router-dom"
import s from './Navigation.module.css'

export const Navigation =()=>{
    return(
        <nav className={s.top_bar}>
            <Link className= {s.nav} to="/generate">Gen QR code</Link>
            <Link className= {s.nav} to="/scan">Scan QR code</Link>
            <Link className= {s.nav} to="/">Scan History</Link>
            <Link className= {s.nav} to="/">Gen History</Link>
        </nav>
    )
}