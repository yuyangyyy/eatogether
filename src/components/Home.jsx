import React from 'react'

import RecipeCard from './RecipeCard'

import './Home.css'


                
class Home extends React.Component{
    render(){
        return(
            <div className="home">          
                <RecipeCard />               
            </div>
        )
    }
}

export default Home
