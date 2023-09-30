"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import AltHeader from '../components/AtlHeader';
import Footer from '../components/Footer';
import ContactFrame from '../components/ContactFrame';
import ProductModal from '../components/ProductModal';

export default function Otros() {


  const redmiPhones = [
    {
      name: "REDMI 12C",
      img: "otrosP/remi12c.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "7,000"
    },
    {
      name: "REDMI 12",
      img: "otrosP/remi12.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "9,100"
    },
    {
      name: "REDMI NOTE 12",
      img: "otrosP/remiN12.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "9,900"
    },
    {
      name: "REDMI NOTE 12s",
      img: "otrosP/remiN12s.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "12,050"
    },
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
    }
  ];


  const amazonProducts = [
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

  const certificados = [
    {
      name: "Apple watch series 8",
      img: "otrosP/certified/apW8.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "18,500"
    },
    {
      name: "Apple watch SE 2 Gen 2",
      img: "otrosP/certified/apWse.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "15,000"
    },
    {
      name: "AirPods Pro (2.ª gen)",
      img: "otrosP/certified/apApro.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "13,500"
    },
    {
      name: "AirPods (3.ª gen)",
      img: "otrosP/certified/apA3.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "10,500"
    },
    {
      name: "AirPods (2.ª gen)",
      img: "otrosP/certified/apA2.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "8,500"
    },
    {
      name: "Cable usb c a lightning",
      img: "otrosP/certified/apCc.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "1,500"
    },
    {
      name: "usb c brick",
      img: "otrosP/certified/apC.png",
      description: "Desbloqueado 2 Meses de Garantia",
      price: "1,500"
    },
  ]

  const [open, setOpen] = useState(false)
  const [openPhone, setOpenPhone] = useState({
    name: "",
    img: "",
    description: "",
    price: "0"
  })

  return (
    <>
      <AltHeader titColor='B67D35' subTitle='Otros' />
      <div className="bg-white">
        <ProductModal open={open} setOpen={setOpen} activePhone={openPhone} />
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
          <hr className=' border-b-2 border-mainBlack' />
          <h2
            className=' text-4xl text-center font-bold p-4 px-11'
            style={{ color: "#5D78EF" }}
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
                  redmiPhones.map((phone, i) => (
                    <div
                      className=" cursor-pointer text-white text-center items-center flex flex-col gap-2 mb-5 w-40" key={i}
                      onClick={() => {
                        setOpen(true)
                        setOpenPhone(phone)
                      }}
                    >
                      <div className="w-40 h-36 rounded-xl flex justify-center items-center" style={{ background: "#F2F2F2" }}>
                        <img src={phone.img} alt="" className=' h-28' />
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
                  amazonProducts.map((phone, i) => (
                    <div
                      className=" cursor-pointer text-white text-center items-center flex flex-col gap-2 mb-5 w-40" key={i}
                      onClick={() => {
                        setOpen(true)
                        setOpenPhone(phone)
                      }}
                    >
                      <div className="w-40 h-36 rounded-xl flex justify-center items-center" style={{ background: "#F2F2F2" }}>
                        <img src={phone.img} alt="" className=' h-28' />
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
              Accesorios
            </h4>
            <div className=" overflow-x-auto">
              <div className="flex gap-2 w-fit">
                {
                  certificados.map((phone, i) => (
                    <div
                      className=" cursor-pointer text-white text-center items-center flex flex-col gap-2 mb-5 w-40" key={i}
                      onClick={() => {
                        setOpen(true)
                        setOpenPhone(phone)
                      }}
                    >
                      <div className="w-40 h-36 rounded-xl flex justify-center items-center" style={{ background: "#F2F2F2" }}>
                        <img src={phone.img} alt="" className=' h-28' />
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
          <ContactFrame />
        </div>
      </div>
    </>
  )
}

