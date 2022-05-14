import './style.css'
import seta from '../../../images/arrow-right.svg'
import imageMain from '../../../images/featured-image.png'

export function MainPost(){
    return(
        <div className="mainPost">
            <div className="main-text">
                <h1>
                    Veja o guia definitivo para conquistar seus objetivos como DEV em 2022
                </h1>
  
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique placerat hac. 
                </p>
  
                <a href="#">
                    Veja Mais
                    <img src={seta} alt='icone seta para direita' />
                </a>
            </div>
            <div className="main-image">
                <img src={imageMain} alt="foto da noticia" />
            </div>
        </div>
        )
}