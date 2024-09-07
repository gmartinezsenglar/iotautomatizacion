
import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.png'

export default function Header() {
    return (
    <header className="bg-wild-watermelon-50 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src= {logo} alt="IOT Logo" width={150} height={50} />
      </div>
    </header>
    )
}