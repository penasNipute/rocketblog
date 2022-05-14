import logo from '../../images/logo.svg'
import './style.css'

export const Header = ()=>{
   return (
     <div className='header'>
         <a href='/'>
         <img src={logo} alt='LogoMarca' />
         </a>
         <nav>
            <ul>
                <li>
                    <a href='/'  className='current'>
                        Home
                    </a>
                </li>
                 <li>
                    <a href='#'>
                       Sobre
                    </a>
                </li>
                 <li>
                    <a href='#'>
                        Categorias
                    </a>
                </li>
                <li>
                    <a href='#'>
                        Contacto
                     </a>
                </li>
            </ul>
         </nav>
         <div className='search'>
                <input type='search' id='search' placeholder='Buscar' />
                <label  className='icon-search' for='search'>
                </label>
         </div>
    </div>
)
}