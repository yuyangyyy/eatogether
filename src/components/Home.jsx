import React from 'react'

import Display from './Display'
import RecipeCard from './RecipeCard'

import './Home.css'


class Home extends React.Component{
    render(){
        return(

            <div className="home">
               <Display />
               <RecipeCard />               
            </div>
        )
    }
}

export default Home
