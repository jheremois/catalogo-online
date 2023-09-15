import Link from "next/link"

const ContactFrame = ()=>(
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
)

export default ContactFrame