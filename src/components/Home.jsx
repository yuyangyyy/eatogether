import React from 'react'
import Display from '../Display'
import './Home.css'
import RecipeCard from '../RecipeCard'
import GuestSearch from '../GuestSearch'

                

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <GuestSearch />
                <Display />
                <RecipeCard />               
            </div>
        )
    }
}

export default Home
