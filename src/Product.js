import React,{useState} from 'react'
import ProductInfo from './ProductInfo'
import './index.css'
function Product() {
  const [item,setItem]=useState(ProductInfo);
  const [cakeItem,setCakeItem]=useState(ProductInfo);
  const selectCake=(pos)=>{
    setCakeItem(ProductInfo[pos]);

  }
  return (
      <>
    <div className='container'>
        <h1>cake factory</h1>
        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text.</p>
       
      <div className='cakeimage'>
        <p>select any cake item</p>
         {
           item.map((item,pos)=>{
           
             return(
               
                  <img className='cake' src={item.image} onClick={()=>{selectCake(pos)}}></img>
             )
           })
         }
          
          <div className='cakeinfo'>
          <h1>{cakeItem.name}</h1>
          <img className='cake_details' src={cakeItem.image}></img>
          <p>{cakeItem.price}</p>
          <p>{cakeItem.details}</p>
          </div>
    </div>
    </div>
    </>
  )
}

export default Product;
