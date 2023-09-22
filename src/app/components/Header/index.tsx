"use client";
import Image from 'next/image'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = ()=>{
    
    const [openMenu, setOpenMenu] = useState(false)

    return(
      <>
        <div className='fixed w-screen z-50'>
          <header className='bg-dark flex justify-between p-4 overflow-hidden rounded-b-3xl items-center'>
            <div className="">
              <img src='fstech.png' alt="App logo" width={30}/>
            </div>
            <div className="">
              <button onClick={()=>{
                setOpenMenu(true)
              }}>
                <Image width={120} height={120} src="/vresources/menu.png" alt="" className='w-8' />
              </button>
            </div>
          </header>
          {
            openMenu&&
            <div className="bg-black bg-opacity-70 h-screen absolute top-0 w-screen z-120 text-lowGray">
              <div className="bg-black p-4">
                <div className="flex justify-between items-center ">
                  <h3 className='text-3xl font-bold'>
                    Mas Opciones
                  </h3>
                  <button
                    onClick={()=>{
                      setOpenMenu(false)
                    }}
                  >
                    <Image width={200} height={200} src="/vresources/closeMenu.png" alt="" className='w-10' />
                  </button>
                </div>
                <div className="">
                  <div className="flex flex-col gap-2 p-2 py-5 text-2xl font-semibold">
                    <Link href={''}>
                      Ofertas
                    </Link>
                    <Link href={'ios'}>
                      Apple
                    </Link>
                    <Link href={'samsung'}>
                      Samsung
                    </Link>
                    <Link href={'otros'}>
                      Otros
                    </Link>
                    <Link target='_blank' href={'https://api.whatsapp.com/send?phone=8293754670&text='}>
                      Contactos
                    </Link>
                  </div>
                  <div className="text-center border-b-2 pb-3">
                    We seek the union between the digital and physical worlds, helping companies 
                  </div>
                </div>
              </div>
    
            </div>
          }
        </div>
        <div className="h-14"></div>
      </>
    )
}

export default Header