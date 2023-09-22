import Link from "next/link"

const ContactFrame = ()=>(
    <div className="flex justify-center px-4">
        <div className="rounded-2xl contactInfo p-4 mb-5 flex flex-col gap-3">
            <p className='text-center font-semibold text-white'>
            &quot;Financiamiento disponible para tus dispositivos electrónicos, sin complicaciones.&quot;
            </p>
            <div className="flex justify-between">
            <Link 
                target='_blank' href={'https://api.whatsapp.com/send?phone=8293754670&text='} 
                className='bg-white px-8 p-2 rounded-full font-bold'
            >
                Contactar
            </Link>
            <div className="flex gap-3">
                <Link target='_blank' href={'https://www.instagram.com/fstechcelulares/'}>
                    <img src="instagram.png" alt="" />
                </Link>
                <Link 
                    target='_blank' href={'https://api.whatsapp.com/send?phone=8293754670&text='} 
                >
                    <img src="phone.png" alt="" />
                </Link>
            </div>
            </div>
        </div>
    </div>
)

export default ContactFrame