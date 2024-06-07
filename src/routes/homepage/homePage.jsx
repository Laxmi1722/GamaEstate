import React from 'react'
import './homePage.scss'
import SearchBar from '../../components/searchBar/SearchBar';

const HomePage = () => {
    return (
        <div className='homePage'>
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get your Dream Place</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vel, accusantium assumenda aspernatur quas repudiandae earum ducimus cumque minima aut laboriosam, iusto voluptatibus numquam non nesciunt eaque. Rem, asperiores optio!
                    </p>
                    <SearchBar />
                    <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
                </div>

            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage