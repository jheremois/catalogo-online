"use client";
import Image from 'next/image'
import Link from 'next/link';
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
    <main className='bg-background pt-8'>
      <div className="flex justify-center flex-col items-center gap-4">
        <div className="bg-dark w-fit text-white p-2 px-6 text-2xl font-bold shadow-xl rounded-full">
          Ofertas de la semana
        </div>
        <div id='loadMoreB' className="bg-dark w-fit text-white p-2 px-6 text-xl font-medium rounded-full">
          Ver mas
        </div>
        {/* componente 1 */}
        <div className="flex flex-col overflow-hidden"
          style={{
            height: 640
          }}
        >
          <div className="">
            <img src="publicFrame.png" alt="" />
          </div>
          <div className="w-full flex flex-col -translate-y-16">
            <div className="-skew-y-12 text-center text-5xl font-bold py-3 bg-black w-full h-44 text-white">Disponibles</div>
            <div className=" bg-black z-10 -translate-y-16 flex ">
              <div className="w-full">
                <div className="flex flex-col gap-6">
                  <button className='
                    w-fit text-white font-semibold text-lg p-2 pl-5 shadow-lg shadow-gray-700 pr-8 bg-ligthGray rounded-r-full
                    border-r-2 border-t-2 border-b-2 border-mainPurple
                  '>
                    Ver mas
                  </button>
                  <img src="sideLPhone.png" alt="" />
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-2 -translate-y-10">
                  <p className='text-white text-xl text-center font-bold pl-10'>
                    IPhone 14
                  </p>
                  <div className="flex justify-end w-f">
                    <img src="sideRPhone.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-skew-y-12 z-0 text-center text-5xl font-bold bg-background w-full py-14 text-white -translate-y-44">
          </div>
        </div>
        {/* componente 1 */}
        {/* componente de lista */}
        <div className="w-full px-4">
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
          <div className="">
            <div className='theMLists bg-white p-2 grid grid-cols-3 gap-2 rounded-lg shadow-lg'>
              <div className="minList">
                <img src="mList.png" alt="" width={300} />
              </div>
              <div className="minList">
                <img src="mList.png" alt="" width={300} />
              </div>
              <div className="minList">
                <img src="mList.png" alt="" width={300} />
              </div>
              <div className="minList">
                <img src="mList.png" alt="" width={300} />
              </div>
              <div className="minList">
                <img src="mList.png" alt="" width={300} />
              </div>
              <div className="minList">
                <img src="mList.png" alt="" width={300} />
              </div>
            </div>
            <div className="flex justify-center m-4">
              <button className=' m-auto bg-dark rounded-full px-8 p-2 text-white font-bold text-2xl shadow-lg'>
                ver mas
              </button>
            </div>
          </div>
        </div>
        {/* componente de lista */}
        <div className="flex justify-center px-4">
          <div className="rounded-2xl contactInfo p-4 flex flex-col gap-3">
            <p className='text-center font-semibold text-white'>
            &quot;Financiamiento disponible para tus dispositivos electrónicos, sin complicaciones.&quot;
            </p>
            <div className="flex justify-between">
              <button className='bg-white px-8 p-2 rounded-full font-bold'>
                Contactar
              </button>
              <div className="flex gap-3">
                <Link href={''}>
                  <img src="instagram.png" alt="" />
                </Link>
                <Link href={''}>
                  <img src="phone.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-dark text-sm text-white p-4" style={{
          color: "#C0C0C0"
        }}>
          <p>
          © 2023 Ovion Company, All rights reserved. developed by Ovion company 
          </p>
        </div>
      </div>
    </main>
  )
}
