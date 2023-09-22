"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import AltHeader from '../components/AtlHeader';
import Footer from '../components/Footer';
import ContactFrame from '../components/ContactFrame';
import ProductModal from '../components/ProductModal';

export default function Ios() {
  const [filter, setFilter] = useState('phones'); // Inicialmente muestra teléfonos

  const phones = [
    {
      name: "iPhone 14 Pro Max",
      img: "iosP/ip14promax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "48,000'"
    },
    {
      name: "iPhone 14 Pro",
      img: "iosP/ip14pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "39,000'"
    },
    {
      name: "iPhone 14",
      img: "iosP/ip14.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "25,000'"
    },
    {
      name: "iPhone 13 Pro Max",
      img: "iosP/ip13promax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "35,000'"
    },
    {
      name: "iPhone 13 Pro",
      img: "iosP/ip13pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "29,000'"
    },
    {
      name: "iPhone 13",
      img: "iosP/ip13.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "25,000'"
    },
    {
      name: "iPhone 12 Pro Max  ",
      img: "iosP/ip12promax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "22,000'"
    },
    {
      name: "iPhone 12 Pro  ",
      img: "iosP/ip12pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "17,000'"
    },
    {
      name: "iPhone 12  ",
      img: "iosP/ip12.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "1,000'"
    },
    {
      name: "iPhone 11 Pro Max ",
      img: "iosP/ip11promax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "18,000'"
    },
    {
      name: "iPhone 11 Pro ",
      img: "iosP/ip11pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "15,000'"
    },
    {
      name: "iPhone 11 ",
      img: "iosP/ip11.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "13,000'"
    },
    {
      name: "iPhone XS Max ",
      img: "iosP/ip10xsmax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "12,000'"
    },
    {
      name: "iPhone XS ",
      img: "iosP/ip10xs.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "9,000'"
    },
    {
      name: "iPhone X ",
      img: "iosP/ip10.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "8,500'"
    },
    /* {
      name: "iPhone 8 Plus ",
      img: "iosP/ip8plus.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "10,500"
    },
    {
      name: "iPhone 8 ",
      img: "iosP/ip8.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "8,000"
    },
    {
      name: "iPhone 7 Plus",
      img: "iosP/ip7plus.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "10,000"
    },
    {
      name: "iPhone 7",
      img: "iosP/ip7.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "5,500"
    } */
  ];

  const macbooks = [
    {
      name: "MacBook Pro M2 Pro Chip",
      img: "iosP/mac/mac14pro.png",
      description: "Tableta potente",
      price: "30,000'"
    },
    {
      name: "13-inch MacBook Pro with M2 chip",
      img: "iosP/mac/mac13pro.png",
      description: "Tableta potente",
      price: "30,000'"
    },
    {
      name: "MacBook Air 15-Inch",
      img: "iosP/mac/macAir.png",
      description: "Tableta potente",
      price: "30,000'"
    },
    // ... (otros cargadores)
  ];

  const ipads = [
    {
      name: "ipad pro (6 gen)",
      img: "iosP/ipad/ipad6.png",
      description: "Tableta potente",
      price: "30,000'"
    },
    {
      name: "ipad air (5 gen)",
      img: "iosP/ipad/ipad5.png",
      description: "Tableta potente",
      price: "30,000'"
    },
    {
      name: "ipad (10 gen)",
      img: "iosP/ipad/ipad10.png",
      description: "Tableta potente",
      price: "30,000'"
    },
    // ... (otros iPads)
  ];

  const currentProducts = filter === 'phones' ? phones : filter === 'macbooks' ? macbooks : ipads;
  const [open, setOpen] = useState(false)
  const [openPhone, setOpenPhone] = useState({
    name: "",
    img: "",
    description: "",
    price: ""
  })

  return (
    <>
      <ProductModal open={open} setOpen={setOpen} activePhone={openPhone}/>
      <AltHeader titColor='FFD8EB' subTitle='Apple'/>
      <div className="bg-mainBlack">
        <div className=" relative">
          <div 
            className="text-white absolute top-0 w-full bg-gray-400 h-full text-center py-6 px-20 flex flex-col items-center gap-2"
            style={{
              background: "linear-gradient(180deg, #927380 0%, rgba(0, 0, 0, 0.00) 59.24%)"
            }}
          >
            <h1 className='text-2xl font-bold'>
              Mejores teléfonos del momento
            </h1>
            <p className='text-sm text-gray-200'>
              Uno de estos puede llamar tu atención
            </p>
          </div>
          <img src="iosP/iosBanner.png" alt="" className='w-full' />
        </div>
        <div className="p-6">
          <hr className=' border-b-2'/>
          <h2 
            className=' text-4xl text-center font-bold p-4 px-11 pb-4' 
            style={{color: "#5D78EF"}}
          >
            Catálogo más nuevo
          </h2>
          <div className="text-center my-4 pb-6">
            <button
              className={`${
                filter === 'phones' ? 'bg-mainBlue' : 'bg-gray-400'
              } text-white px-4 py-2 mx-2 rounded-full`}
              onClick={() => setFilter('phones')}
            >
              Teléfonos
            </button>
            <button
              className={`${
                filter === 'macbooks' ? 'bg-mainBlue' : 'bg-gray-400'
              } text-white px-4 py-2 mx-2 rounded-full`}
              onClick={() => setFilter('macbooks')}
            >
              MacBook
            </button>
            <button
              className={`${
                filter === 'ipads' ? 'bg-mainBlue' : 'bg-gray-400'
              } text-white px-4 py-2 mx-2 rounded-full`}
              onClick={() => setFilter('ipads')}
            >
              iPads
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {currentProducts.map((product, i) => (
              <div className="text-white text-center items-center flex flex-col gap-2 mb-5" key={i}>
                <img src={product.img} alt="" className=" h-28 w-auto m-auto" />
                <p className="text-sm text-gray-300">{product.name}</p>
                <button 
                  className="bg-mainBlue p-2 px-5 rounded-full uppercase text-sm font-semibold"
                  onClick={()=> {
                    setOpen(true) 
                    setOpenPhone(product)
                  }}
                >
                  Comprar
                </button>
              </div>
            ))}
          </div>

        </div>
        <div className="pb-4">
          <ContactFrame/>
        </div>
      </div>
    </>
  )
}
