import React from 'react'
import Display from './Display'
import './Home.css'
import RecipeCard from './RecipeCard'


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
