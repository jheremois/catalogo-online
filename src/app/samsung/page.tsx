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
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
    {
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
    {
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
    {
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
    {
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
    {
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
    {
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
    {
      img: "smp/glxflip.png",
      name: "Iphone 14"
    },
  ]

  return (
    <>
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
                <img src="smp/glxflip.png" alt="" className=' w-28' />
                <p className='text-sm text-gray-600'>
                  Iphone 14
                </p>
                <button className='bg-mainBlack p-2 px-5 rounded-full uppercase text-sm font-semibold'>
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

