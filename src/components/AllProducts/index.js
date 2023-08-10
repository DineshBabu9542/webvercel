

import { Component } from "react";


import ProductItem from '../ProductItem'


import './index.css'
import Cookies from "js-cookie";



class AllProducts extends Component{


   state={
    productDetailsList:[]
   }

    componentDidMount(){
        
        this.productDetailsListItems()

    }

    productDetailsListItems = async() => {
       
        let jwtToken = Cookies.get('jwt_token')

        let url="https://apis.ccbp.in/products"

        const person={
            method:"GET",

            headers:{
                Authorization:`Bearer ${jwtToken}`
            }
        }

        const response = await fetch(url,person)

        const data = await response.json()


        const listItems = data.products.map(eachItem => ({
            brand:eachItem.brand,
            id:eachItem.id,
            imageUrl:eachItem.image_url,
            price:eachItem.price,
            rating:eachItem.rating,
            title:eachItem.title
        }))

        this.setState({productDetailsList:listItems})

    }

    render(){
       
        const {productDetailsList} =this.state
        
        

        

        return(
            <div className="all-products-container">
                <h1>All Products</h1>
                <ul className="un-order-list-items">
                {productDetailsList.map(eachProduct => (

                    <ProductItem key={eachProduct.id} eachItemProduct={eachProduct}/>

                ))}
                  
                </ul>
            </div>
        )
    }
}

export default AllProducts