import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom'


const Breadcrum = (props) => {
    const { product } = props;
    return (
        <div className='breadcrum'>
            <Link style={{ textDecoration: 'none' }} to='/'>
                HOME
            </Link>
            <img src={arrow_icon} alt='' />

            <Link style={{ textDecoration: 'none' }} to='/'>
                SHOP
            </Link>
            <img src={arrow_icon} alt='' />

            {product.category}

            <img src={arrow_icon} alt='' />
            {product.name}
        </div>
    )
}

export default Breadcrum
