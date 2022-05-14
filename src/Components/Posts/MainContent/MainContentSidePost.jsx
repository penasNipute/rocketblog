import './style-mainContentSidePost.css'

export function MainContentSidePost() {
  return (
    <div className="main-content-side-post">
      <div className="single-side-post">
        <p className="post-date">
          Janeiro 04, 2022
        </p>
        <h2 className="side-post-title">
          Conheça as principais técnicas para conseguir uma vaga internacional em programação
        </h2>
        <p className="side-post-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sit vitae, sed tristique.
        </p>  
      </div>  
      <div className="single-side-post">
        <p className="post-date">
          Janeiro 04, 2022
        </p>
        <h2 className="side-post-text">
          Veja a evolução do Front-end na prática
        </h2 >
        <p className="side-post-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh nibh eu in aliquet ut adipiscing neque. 
        </p>  
      </div>  
    </div>
  )
}
