import React from 'react'
import './Home.css'
import RecipeCard from './RecipeCard'


                
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
