import Link from "next/link";
import Image from "next/image";

export default function Bone({params}) {
    return(
        <>
        <div>
            <p>Valor: {params.bone}</p>
        </div>
                <p><Link href="/">Voltar</Link></p>
                <figure>
                    <Image src=""
                    width={500}
                    height={500}
                    alt=""
                    />
                    
                <figcaption></figcaption>
            </figure>
        </>
    );
}