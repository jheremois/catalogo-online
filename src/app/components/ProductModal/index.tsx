import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'

export default function ProductModal({open = false, setOpen = (par: any)=>{}, activePhone = {name: 'a', img: '', price: '', description: ''}}) {
  //const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel 
                className="relative transform overflow-hidden rounded-3xl bg-white text-left transition-all py-9 px-6"
                style={{
                  boxShadow: "10px 10px 5px 0px rgba(0, 0, 0, 0.383)"
                }}
              >
                <div className="bg-white flex justify-center items-center flex-col text-center gap-2">
                    <img src={activePhone.img} alt="" className=' h-36'/>
                    <h1 className='font-semibold'>
                        {activePhone.name}
                    </h1>
                    <p>
                    Equipo nuevo. Desbloqueado 2 meses de garantia
                    </p>
                    <div>
                        Precio 
                        <br />
                        {activePhone.price}$RD
                    </div>
                </div>
                <div className="px-4 py-3 flex justify-center items-center">
                  {/* <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-full bg-black text-white font-semibold text-xl p-2 px-6 "
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  > 
                  Comprar
                  </button> */}
                  <Link 
                    target='_blank'
                    /* href={"https://wa.me/p/6785454001516571/18298395327"} */
                    href={`https://api.whatsapp.com/send?phone=8293754670&text=${activePhone.name}, precio: ${activePhone.price}, ${activePhone.description}.`}
                    className="mt-3 inline-flex w-full justify-center rounded-full bg-black text-white font-semibold text-2xl p-2 px-6 "
                  >
                    Comprar
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
