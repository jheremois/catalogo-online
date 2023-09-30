"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import Header from './components/Header';
import ProductModal from './components/ProductModal';
import "animate.css/animate.min.css";
import ContactFrame from './components/ContactFrame';



export default function Home() {

  const [open, setOpen] = useState(false)
  const [openPhone, setOpenPhone] = useState({
    name: "",
    img: "",
    description: "",
    price: ""
  })

  const devices = [ 
    {
      name: "iPhone 15 Pro Max",
      img: "iosP/ip15proMax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "99,000"
    },
    {
      name: "iPhone 15 Pro",
      img: "iosP/ip15pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "80,000"
    },
    {
      name: "iPhone 15 Plus",
      img: "iosP/ip15plus.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "60,000"
    },
    {
      name: "iPhone 15",
      img: "iosP/ip15.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "55,000"
    },
    {
      name: "iPhone 14 Pro Max",
      img: "iosP/ip14promax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "62,000"
    },
    {
      name: "iPhone 14 Pro",
      img: "iosP/ip14pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "52,000"
    },
    {
      name: "iPhone 14",
      img: "iosP/ip14.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "39,900"
    },
    {
      name: "iPhone 13 Pro Max",
      img: "iosP/ip13promax.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "49,500"
    },
    {
      name: "iPhone 13 Pro",
      img: "iosP/ip13pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "39,000"
    },
    {
      name: "iPhone 13",
      img: "iosP/ip13.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "34,000"
    },
  ]
  const otherDevices = [ 
    {
      name: "REDMI NOTE 12 PRO",
      img: "otrosP/remiN12pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "15,400"
    },
    {
      name: "REDMI NOTE 11 PRO",
      img: "otrosP/remiN11pro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "15,000"
    },
    {
      name: "Echo dot 5",
      img: "otrosP/amz4.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "4,900"
    },
    {
      name: "Tableta Amazon Fire HD 10, pantalla de 10.1 pulgadas",
      img: "otrosP/amz10.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "7,500"
    },
    {
      name: "Tableta Amazon Fire HD 8, pantalla HD de 8",
      img: "otrosP/amz8.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "5,800"
    },
    {
      name: "Fire tv stick 4k",
      img: "otrosP/amzFire.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "3,500"
    }
  ]

  return (
    <>
      <Header/>
      <main className='bg-background pt-8'>
      <ProductModal open={open} setOpen={setOpen} activePhone={openPhone}/>
        <div className="flex justify-center flex-col items-center gap-4">
          <div className="bg-dark w-fit text-white p-2 px-6 text-2xl font-bold shadow-xl rounded-full">
            Ofertas de la semana
          </div>
          {/* <div id='loadMoreB' className="bg-dark w-fit text-white p-2 px-6 text-xl font-medium rounded-full">
            Ver mas
          </div> */}
          {/* componente 1 */}
          <div className="flex flex-col overflow-hidden w-full"
            style={{
              height: 685
            }}
          >
            <div className="pt-5 m-auto">
              <img src="publicFrame.png" alt=""  className='translate-y-0 slideIn'/>
            </div>
            <div className="w-full flex flex-col -translate-y-16">
              <div className="-skew-y-12 text-center text-5xl font-bold py-3 bg-black w-full h-44 text-white">Disponibles</div>
              <div className=" bg-black z-10 -translate-y-16 flex">
                <div className="w-full">
                  <div className="flex flex-col gap-6">
                    <Link href={'ios'} className='
                      w-fit text-white font-semibold text-lg p-2 pl-5 shadow-lg shadow-gray-700 pr-8 bg-ligthGray rounded-r-full
                      border-r-2 border-t-2 border-b-2 
                    '
                    style={{
                      borderBlockColor: "#CDB7A9",
                      borderRightColor: "#CDB7A9"
                    }}
                    >
                      Ver mas
                    </Link >
                    <img src="sideLPhone.png" alt="" className='translate-y-0 slideTop'/>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col gap-2 -translate-y-10">
                    <p className='text-white text-xl text-center font-bold pl-10'>
                      IPhone 15
                    </p>
                    <div className="flex justify-end w-f">
                      <img src="sideRPhone.png" alt="" className='translate-y-0 slideSide'/>
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
                  <div 
                    className="text-center cursor-pointer" 
                    key={index} onClick={()=> {
                      setOpen(true) 
                      setOpenPhone(device)
                    }}
                  >
                    <div className="catItem p-6">
                      <img src={device.img} alt="" className=' h-40 m-auto'/>
                    </div>
                    <div className="text-lg mt-2">
                      {device.name}
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="">
              <div className='theMLists bg-white p-2 grid grid-cols-3 gap-2 rounded-lg shadow-lg'>
                {
                  otherDevices.map((device, i)=>(
                    <div 
                      className="minList bg-background p-2 rounded-lg flex justify-center items-center" key={i}
                      onClick={()=> {
                        setOpen(true) 
                        setOpenPhone(device)
                      }}
                    >
                      <img src={device.img} alt="" className=' h-20'/>
                    </div>
                  ))
                }
              </div>
              <div className="flex justify-center m-4">
                <Link href={'otros'} className=' m-auto bg-dark rounded-full px-8 p-2 text-white font-bold text-2xl shadow-lg'>
                  ver mas
                </Link>
              </div>
            </div>
          </div>
          {/* componente de lista */}
          <ContactFrame/>
        </div>
      </main>
    </>
  )
}
