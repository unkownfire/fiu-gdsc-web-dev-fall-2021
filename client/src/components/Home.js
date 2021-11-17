import React from 'react'
import {Link} from 'react-router-dom'
import RecipeCard from './RecipeCard'
import {Row, Col, Container} from 'react-bootstrap'
import CardGrid from './CardGrid/CardGrid'
function Home() {
    return (
      <div>
        <Link to="/Dashboard" className="link">To Dashboard</Link>

        <CardGrid num="8"/>
        
      </div>
    )
}

export default Home;
