"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import AltHeader from '../components/AtlHeader';
import Footer from '../components/Footer';
import ContactFrame from '../components/ContactFrame';
import ProductModal from '../components/ProductModal';

export default function Otros() {

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
    {
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
    }
  ];
  
  const [open, setOpen] = useState(false)
  const [openPhone, setOpenPhone] = useState({
    name: "",
    img: "",
    description: "",
    price: "0"
  })

  return (
    <>
      <AltHeader titColor='B67D35' subTitle='Otros'/>
      <div className="bg-white">
        <ProductModal open={open} setOpen={setOpen} activePhone={openPhone}/>
        <div className="bg-mainBlack relative">
          <div 
            className="text-white absolute top-0 w-full h-full text-center py-6 px-20 flex flex-col items-center gap-2"
            style={{
              
            }}
          >
            
          </div>
          <img src="otrosP/otrosBanner.png" alt="" className='w-full' />
        </div>
        <div className="px-6">
          <h2 
            className=' text-3xl text-center font-bold p-4' 
          >
            Otros dispositivos
          </h2>
          <hr className=' border-b-2 border-mainBlack'/>
          <h2 
            className=' text-4xl text-center font-bold p-4 px-11' 
            style={{color: "#5D78EF"}}
          >
            Catalogo mas nuevo
          </h2>
          {/* Listas */}  
          <div className="">
            <h4 className='text-2xl font-bold pb-4'>
              Xiaomi
            </h4>
            <div className=" overflow-x-auto">
              <div className="flex gap-2 w-fit">
                {
                  phones.map((phone, i)=>(
                  <div 
                    className=" cursor-pointer text-white text-center items-center flex flex-col gap-2 mb-5 w-40" key={i}
                    onClick={()=> {
                      setOpen(true) 
                      setOpenPhone(phone)
                    }}
                  >
                    <div className="w-40 h-36 rounded-xl flex justify-center items-center" style={{background: "#F2F2F2"}}>
                      <img src={phone.img} alt="" className='' width={100}/>
                    </div>
                    <p className='text-sm text-gray-600'>
                      {phone.name}
                    </p>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="">
            <h4 className='text-2xl font-bold py-4'>
                Productos de amazon
            </h4>
            <div className=" overflow-x-auto">
              <div className="flex gap-2 w-fit">
                {
                  phones.map((phone, i)=>(
                  <div 
                    className=" cursor-pointer text-white text-center items-center flex flex-col gap-2 mb-5 w-40" key={i}
                    onClick={()=> {
                      setOpen(true) 
                      setOpenPhone(phone)
                    }}
                  >
                    <div className="w-40 h-36 rounded-xl flex justify-center items-center" style={{background: "#F2F2F2"}}>
                      <img src={phone.img} alt="" className='' width={100}/>
                    </div>
                    <p className='text-sm text-gray-600'>
                      {phone.name}
                    </p>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="pb-8">
            <h4 className='text-2xl font-bold py-4'>
                Productos certificados
            </h4>
            <div className=" overflow-x-auto">
              <div className="flex gap-2 w-fit">
                {
                  phones.map((phone, i)=>(
                  <div 
                    className=" cursor-pointer text-white text-center items-center flex flex-col gap-2 mb-5 w-40" key={i}
                    onClick={()=> {
                      setOpen(true) 
                      setOpenPhone(phone)
                    }}
                  >
                    <div className="w-40 h-36 rounded-xl flex justify-center items-center" style={{background: "#F2F2F2"}}>
                      <img src={phone.img} alt="" className='' width={100}/>
                    </div>
                    <p className='text-sm text-gray-600'>
                      {phone.name}
                    </p>
                  </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4">
          <ContactFrame/>
        </div>
      </div>
      <Footer/>
    </>
  )
}

