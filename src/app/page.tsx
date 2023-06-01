"use client";
import Image from 'next/image'
import { useState } from 'react';
import Header from './components/Header';

export default function Home() {

  const [openMenu, setOpenMenu] = useState(false)

  const devices = [
    {
      name: "iphone 14",
      img: "vresources/phone.png"
    },
    {
      name: "iphone 14",
      img: "vresources/phone.png"
    },
    {
      name: "iphone 14",
      img: "vresources/phone.png"
    },
    {
      name: "iphone 14",
      img: "vresources/phone.png"
    },
    {
      name: "iphone 14",
      img: "vresources/phone.png"
    },
    {
      name: "iphone 14",
      img: "vresources/phone.png"
    },
  ]

  return (
    <main className='bg-background py-8'>
      <div className="flex justify-center flex-col items-center gap-8">
        <div className="bg-dark w-fit text-white p-2 px-6 text-2xl font-bold shadow-xl rounded-full">
          Ofertas de la semana
        </div>
        <div id='loadMoreB' className="bg-dark w-fit text-white p-2 px-6 text-xl font-medium rounded-full">
          Ver mas
        </div>
        <div className="w-full p-4">
          <div className="font-bold m-auto bg-dark w-fit text-white p-2 px-6 text-xl rounded-full shadow-lg">
            Catalogo mas nuevo
          </div>
          <div className="grid grid-cols-2 py-6 gap-3">
            {
              devices.map((device, index)=>(
                <div className=" text-center" key={index}>
                  <div className="text-lg mb-2">
                    {device.name}
                  </div>
                  <div className="catItem p-6">
                    <img src={device.img} alt="" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  )
}
