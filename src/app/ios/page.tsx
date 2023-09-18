"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import AltHeader from '../components/AtlHeader';
import Footer from '../components/Footer';
import ContactFrame from '../components/ContactFrame';

export default function Ios() {

  const phones = [
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
    {
      img: "iosP/ip14.png",
      name: "Iphone 14"
    },
  ]

  return (
    <>
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
              Mejores telefonos del momento
            </h1>
            <p className='text-sm text-gray-200'>
              uno de estos puede llama tu atencion
            </p>
          </div>
          <img src="iosP/iosBanner.png" alt="" className='w-full' />
        </div>
        <div className="p-6">
          <hr className=' border-b-2'/>
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
                <img src="iosP/ip14.png" alt="" className=' w-28' />
                <p className='text-sm text-gray-300'>
                  iPhone 14
                </p>
                <button className='bg-mainBlue p-2 px-5 rounded-full uppercase text-sm font-semibold'>
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
      <Footer/>
    </>
  )
}

