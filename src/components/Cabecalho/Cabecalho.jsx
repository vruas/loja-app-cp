import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-gray-500 text-white h-16">
          <nav className='flex justify-around items-center h-16'>
            <Link className='link-cabecalho' href="/item/camisa">Camisa</Link>
            <Link className='link-cabecalho' href="/item/calca">Calça</Link>
            <Link className='link-cabecalho' href="/item/sapato">Sapato</Link>
            <Link className='link-cabecalho' href="/item/oculos">Oculos</Link>
            <Link className='link-cabecalho' href="/item/bone">Boné</Link>
          </nav>
        </header>
  )
}