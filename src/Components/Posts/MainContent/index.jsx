import './style.css'
import { MainContentPost } from './MainContentPost'
import { MainContentSidePost } from './MainContentSidePost'

export function MainContent() {
  return (
        <div className="container main-content">
            <MainContentPost />
            <MainContentSidePost />
        </div>
  )
}

