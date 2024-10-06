import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex w-full justify-center">
        <div className="px-6 py-6 flex gap-2 w-[1280px] rounded-t-[15px] bg-[#21949a]">
          <div className="w-[60%] ">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="logo" width={100} height={100} className=""/>
              <h2 className="">Innovation Lab</h2>
            </div>
            <p className="text-gray-800">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, veniam.</p>
          </div>
          <div className="flex justify-between w-[40%] pr-8">
          <div className="">
            <h2 className="text-[16px] font-semibold">Company</h2>
            <ul className="pt-5 flex flex-col gap-2">
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-[16px] font-semibold">Company</h2>
            <ul className="pt-5 flex flex-col gap-2">
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-[16px] font-semibold">Company</h2>
            <ul className="pt-5 flex flex-col gap-2">
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
              <li className="text-sm text-gray-800">
                <Link href="">About Us</Link>
              </li>
            </ul>
          </div>
          </div>
          
        </div>
    </footer>
  )
}

export default Footer