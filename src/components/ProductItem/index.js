


import './index.css'


const ProductItem =(props) => {

    const {eachItemProduct} = props 

    const {id,price,imageUrl,rating,title,brand} =eachItemProduct

    return(

        <li className="list-items-product-item-container">
           <img src={imageUrl} alt={title} className="image-urls"/>
           
            <h1 className="title-ele">{title}</h1>
            <p className="brand-name">by {brand}</p>
            <div className="price-rating-container">
                <p className="price">Rs {price}</p>
                <div className="star-img-container">
                   <p className="star-img">{rating}</p>    
                </div>
            </div>
         

        </li>
    )


}



export default ProductItem