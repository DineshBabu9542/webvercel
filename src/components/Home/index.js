import { Component } from 'react'


import Header from '../Header'

import './index.css'



class Home extends Component{

    render(){

        return(
            <div>
              <Header/>
            <div className='home-container'>
            <div className="home-image-container">
                 <img className="home-img" src="https://res.cloudinary.com/did7zzt4e/image/upload/v1688061522/OIP_1_ykimzv.jpg"/>

            </div>     

            <div>
                
                    <p className="style-content-para">One simple step is to buy less, and by virtue, buy better, meaning clothes that are well constructed and from high quality fabrics. Garments with a higher price point naturally demand our greater care for them, and the better we look after them, the longer they last.

                        But just because an item is considered a basic, it shouldnt mean we disregard quality and craftsmanship  in fact, quite the opposite. Those pieces of clothing that get the most airtime should invariably be the highest quality garments in our wardrobes. Its a false economy to scrimp on them, because a theyll very quickly look old and tired; and b you all need to replace them frequently, adding to the sustainability problem.</p>
                
                 <div className="home-btn-container">
                    <button type="button" className="shop-now-btn">Shop Now</button>
                 </div>
                 </div>
            </div>

            </div>   
        )
    }
}

export default Home