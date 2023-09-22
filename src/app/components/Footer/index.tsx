import Link from "next/link"

const Footer = ()=>{
    return(
        <>
            <div className=" bg-dark text-sm text-white p-4" style={{
            color: "#C0C0C0"
          }}>
            <div>
            © 2023 Ovion Company, All rights reserved. developed by 
            <Link 
              target="_blank"
              href="https://www.ovioncompany.com/"
              className=" text-mainBlue"
            > Ovion company </Link>
            </div>
          </div>
        </>
    )
}

export default Footer