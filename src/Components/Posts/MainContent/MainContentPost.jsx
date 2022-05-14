import imagePost1 from '../../../images/post-1.png'
import './style-mainContentPost.css'

export function MainContentPost(){
  return (
    <div className="main-content-post">
      <div className="post-image">
        <img src={imagePost1} alt="foto da noticia" />
      </div>

      <div className='post-content'>
        <p className="post-date">
          Janeiro 04, 2022
        </p>
        
        <h2 className="post-title">
          Começando no ReactJS em 2022
        </h2>
        
        <p className="post-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. Sed volutpat aenean.
        </p>
      </div>
    </div>
  
  )
}