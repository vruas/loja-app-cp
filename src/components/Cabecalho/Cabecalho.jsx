import Link from "next/link";

export default function Cabecalho() {
  return (
        <header className="bg-gray-500 text-white h-16">
          <nav className="flex flex-row justify-around">
            <Link className="link-cabecalho" href="/produtos/dinamicos/vestuario/dunk-low">TÊNIS</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicos/vestuario/calca-cargo">VESTUÁRIO</Link>
            <Link className="link-cabecalho" href="/produtos/dinamicos/vestuario/bone-fire">ACESSÓRIOS</Link>
          </nav>
        </header>
  )
}