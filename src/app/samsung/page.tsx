"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import AltHeader from '../components/AtlHeader';
import Footer from '../components/Footer';
import ContactFrame from '../components/ContactFrame';
import ProductModal from '../components/ProductModal';

export default function Samsung() {

  const [open, setOpen] = useState(false)
  const [openPhone, setOpenPhone] = useState({
    name: "",
    img: "",
    description: "",
    price: ""
  })

  const phones = [
    {
      name: "Samsung s23 ultra",
      img: "smP/sm23ultra.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "48,000"
    },
    {
      name: "Samsung s23",
      img: "smP/sm23.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "39,000"
    },
    {
      name: "Samsung galaxy flip z",
      img: "smP/smflipz.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "25,000"
    },
    {
      name: "Samsung galaxy flip z fold 2",
      img: "smP/smflipzfold.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "35,000'"
    },

    {
      name: "samsung A04E",
      img: "smP/smA04E.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "5,350"
    },
    {
      name: "samsung A04",
      img: "smP/smA04.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "6,100"
    },
    {
      name: "samsung A14",
      img: "smP/smA14.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "7,150"
    },
    {
      name: "Samsung Galaxy S10 Plus",
      img: "smP/smS10plus.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "10,250"
    },
    {
      name: "Samsung Galaxy A34 5G",
      img: "smP/smGA34.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "13,950"
    },
    {
      name: "Samsung Galaxy A54 5G",
      img: "smP/smGA54.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "15,850"
    },
  ];

  return (
    <>
      <ProductModal open={open} setOpen={setOpen} activePhone={openPhone}/>
      <AltHeader titColor='56AFFB' subTitle='Samsung'/>
      <div className="">
        <div className="bg-mainBlack relative">
          <div 
            className="text-white absolute top-0 w-full h-full text-center py-6 px-20 flex flex-col items-center gap-2"
            style={{
              
            }}
          >
            <h1 className='text-2xl font-bold'>
              Mejores telefonos del momento
            </h1>
            <p className='text-sm text-gray-200'>
              uno de estos puede llama tu atencion
            </p>
          </div>
          <img src="smP/smBanner.png" alt="" className='w-full' />
        </div>
        <div className="p-6">
          <hr className=' border-b-2 border-mainBlack'/>
          <h2 
            className=' text-4xl text-center font-bold p-4 px-11 pb-10' 
            style={{color: "#5D78EF"}}
          >
            Catalogo mas nuevo
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {
              phones.map((phone, i)=>(
              <div className="text-white text-center items-center flex flex-col gap-2 mb-5" key={i}>
                <img src={phone.img} alt="" className=' h-36' />
                <p className='text-sm text-gray-600'>
                  {phone.name}
                </p>
                <button 
                  className='bg-mainBlack p-2 px-5 rounded-full uppercase text-sm font-semibold'
                  onClick={()=> {
                    setOpen(true) 
                    setOpenPhone(phone)
                  }}
                >
                  Comprar
                </button>
              </div>
              ))
            }
          </div>
        </div>
        <div className="pb-4">
          <ContactFrame/>
        </div>
      </div>
    </>
  )
}

