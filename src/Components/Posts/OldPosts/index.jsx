import  imagePost2  from '../../../images/post-2.png'
import  imagePost3  from '../../../images/post-3.png'
import  imagePost4  from '../../../images/post-4.png'
import './style.css'

export function OldPosts(){
  return (
    <div className="oldPosts container">
      <div className="single-oldPost">
        <div className="oldPost-image">
          <img src={imagePost2} alt="foto da noticia" />
        </div>

        <div className='oldPost-content'>
          <p className="post-date">
            Janeiro 04, 2022
          </p>
          
          <h2 className="post-title">
            10 dicas para conseguir a vaga desejada
          </h2>
          
          <p className="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. 
          </p>
        </div>
      </div>
      <div className="single-oldPost">
        <div className="oldPost-image">
          <img src={imagePost3} alt="foto da noticia" />
        </div>

        <div className='oldPost-content'>
          <p className="post-date">
            Janeiro 04, 2022
          </p>
          
          <h2 className="post-title">
            Deixe seu código mais semântico com essas dicas
          </h2>
          
          <p className="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. 
          </p>
        </div>
      </div>
      <div className="single-oldPost">
        <div className="oldPost-image">
          <img src={imagePost4} alt="foto da noticia" />
        </div>

        <div className='container oldPost-content'>
          <p className="post-date">
            Janeiro 04, 2022
          </p>
          
          <h2 className="post-title">
            Use essas dicas nas suas aplicações mobile
          </h2>
          
          <p className="post-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique. 
          </p>
        </div>
      </div>
    </div>
  
  )
}
