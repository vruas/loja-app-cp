import Link from "next/link";

export default function Tenis ({params}) {
    return(
        <>
        <div>
            <p>Valor: {params.tenis}</p>
        </div>
        <p><Link href="/"/>Voltar</p>
        <figure>
            <Image src="/img/dunk-low.jpeg"
            alt="Tênis Nike Dunk Low"
            width={500}
            height={500}/>
            <figcaption>Tênis Nike Dunk Low</figcaption>
        </figure>
       
        </>
    );
}