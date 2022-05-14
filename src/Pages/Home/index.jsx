import React from 'react'
import { Header } from '../../Components/Header'
import { MainContent } from '../../Components/Posts/MainContent'
import { MainPost } from '../../Components/Posts/MainPost'
import { OldPosts } from '../../Components/Posts/OldPosts'
import './style.css'

export const Home = ()=>{
    return(
        <>
        <main>
            <div className='container'>
                <Header />
                <MainPost />
            </div>
        </main>

        <div className='line'></div>
        
        <section className='content'>
            
            <MainContent /> 
            <OldPosts/>
            
        </section>
        </>
    )
}