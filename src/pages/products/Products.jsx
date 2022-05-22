import React from 'react'
import Navbar from '../../components/navBar/NavBar'
import ProductPageCard from '../../components/productPageCard/ProductPageCard'
import ProductTable from '../../components/productTable/ProductTable'
import { productCard } from '../../data'
import Addnew from '../../components/addNew/Addnew'
import './Products.css'

const Products = () => {
  return (
    <div>
        <div>
            <Navbar page='Products' />
            <div className='productContainer'>
                <div>
                    <div className='cardContainer'>
                        {productCard.map((card, index) => (
                            <ProductPageCard key={index} data={card} />
                        ))}
                    </div>
                    <ProductTable />
                </div>
                <div>
                    <Addnew />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products