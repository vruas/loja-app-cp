import Link from "next/link";

export default function Calca({params}) {
    return (
      <div>
          <h1></h1>
          <div>
              <p>Valor: {params.calca}</p>
              <p> <Link href="/">Voltar</Link></p>
              <figure>
                <Image src=""
                    width={500}
                    height={500}
                    alt="Boné"
                    />
                  <figcaptio></figcaptio>
              </figure>
              
          </div>
      </div>
    ); 
  }

  