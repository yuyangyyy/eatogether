import './SearchRecipe.scss'
import React from 'react'
import SearchRecipeLeft from './SearchRecipeLeft'
import SearchRecipeRight from './SearchRecipeRight'

const SearchRecipe = () => {
    return(
        <div className="search-recipe-wrapper">
            <SearchRecipeLeft/>
            <SearchRecipeRight/>
        </div>
    )
}

export default SearchRecipe