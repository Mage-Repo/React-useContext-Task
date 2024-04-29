import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddToCartList } from './Component/AddToCartList'
import { ProductContextProvider } from './Component/Context/ProductContext'

function App() {
  const ProductList = [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://th.bing.com/th/id/OIP.nLi2A0Beu5RPL7TTAaH2mQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7",
      "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://th.bing.com/th/id/OIP.AndDiJ6byCyHJtg4ZsO2bgHaJN?w=137&h=180&c=7&r=0&o=5&pid=1.7",
      "images": [
        "https://i.dummyjson.com/data/products/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://th.bing.com/th/id/OIP.kL9QtGa1wa0S0zZ7a4Wm_AHaHa?w=198&h=198&c=7&r=0&o=5&pid=1.7",
      "images": [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "quantity": 1,
      "thumbnail": "https://th.bing.com/th/id/OIP.bvVyeMDLUwlCk475Uch39wHaML?w=115&h=184&c=7&r=0&o=5&pid=1.7",
      "images": [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg"
      ]
    }
  ]
  const [productList, setProductList] = useState(ProductList);
  debugger;
  console.log(productList);
  const BindProductData = (data) => {
    debugger;
    setProductList(data)
  }
  return (
    <>
      <ProductContextProvider value={{ productList, BindProductData }}>
        <AddToCartList />
      </ProductContextProvider>
    </>
  )
}

export default App
