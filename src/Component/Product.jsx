import { useState } from "react";
import useProductContext from "./Context/ProductContext";
export function Product({ key, product }) {
    const { productList, BindProductData } = useProductContext();
    const handleChange = (e, id) => {
        debugger;
        const updateProductList = productList.map(item => {
            if (item.id == id) {
                return { ...item, quantity: parseInt(e.target.value) }
            }
            return item;
        });
        BindProductData(updateProductList);
        console.log(updateProductList);
    }
const removeProduct = (e,id) =>{
const updateProductList =  productList.filter(item => item.id != id);
BindProductData(updateProductList);
}
    return (
        <>

            <div className="product-container">
                <div className="product-image">
                    <img className="product-poster" src={product.thumbnail} />
                </div>
                <div className="product-details">
                    <h4 className="product-name">{product.title}</h4>
                    <p className="price">{product.description}</p>
                    <p className="price">$ {product.price}</p>
                    <div className="quantity">
                        <label for="quantity">Quantity:
                            <span style={{ display: 'inline-block' }}>
                                <select id={product.id} onChange={(event) => handleChange(event, product.id)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                            </span>
                        </label>
                        {/* <input type="number" id="quantity" name="quantity" min="1" value="1"> */}
                    </div>
                    <button className="remove-button" onClick={(event)=> removeProduct(event,product.id)}>Remove</button>
                </div>
            </div>


        </>
    )
}