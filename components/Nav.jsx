//link next js
import Link from "next/link"
//next hooks
import { usePathname } from "next/navigation"

const links =[
    { path: '/', name: 'home'},
    { path: '/projects', name: 'my projects'},
    { path: '/contacts', name: 'contacts'}
]

const Nav = ({ containerStyles, linkStyles, underlineStyles}) => {
    const path = usePathname();
    return (
   <nav className={`${containerStyles}`}>
    {links.map((link, index) =>{
        return (
            <Link
                href={link.path}
                key={index}
                className={`capitalize ${linkStyles}`}
                >
                {link.name}
            </Link>
        )   
    })}
    </nav>
  )
  
}

export default Nav