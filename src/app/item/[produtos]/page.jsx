import React from 'react' 
import Image from "next/image";
import Link from "next/link";

export default function Produtos({params}) {
  return (
    
    <div className='bg'>
        <figure className='flex flex-col items-center justify-center' >
            <Image src={`/img/${params.produtos}.jpg`} alt="Produtos" width={320} height={320}></Image>
            <h1 className='text-2xl font-bold'>{params.produtos}</h1>
        </figure>
        <p className='flex flex-col items-center justify-center'><Link href="/">Voltar</Link></p>
    </div>
  
  )
}