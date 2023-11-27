import React from 'react'
import MenuCards from '../layouts/MenuCards'
import img1 from "../assets/img/menu1.jpg"
import img2 from "../assets/img/menu2.jpg"
import img3 from "../assets/img/menu3.jpg"
import img4 from "../assets/img/menu4.jpg"
import img5 from "../assets/img/menu5.jpg"
import img6 from "../assets/img/menu6.jpg"

const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor'>
        <h1 className='font-semibold text-center text-4xl mt-24 mb-8'>Our Menu</h1>
        <div className='flex flex-wrap pb-8 gap-8 justify-center'>
            <MenuCards img={img1} tittle="Espresso" />
            <MenuCards img={img2} tittle="Cappuccino" />
            <MenuCards img={img3} tittle="Latte" />
            <MenuCards img={img4} tittle="Americano" />
            <MenuCards img={img5} tittle="Macchiato" />
            <MenuCards img={img6} tittle="Doppio" />
            
            
        </div>
    </div>
  )
}
export default Menu;