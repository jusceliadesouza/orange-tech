import { Link } from 'react-router-dom'

import Header from '../components/Header'

export function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Header />

      <main className='w-full max-w-[80%] my-0 mx-auto row justify-between'>
        <section className='flex flex-col gap-5 justify-center min-h-screen'>
          <div className=' absolute top-0 '></div>
          <div className='text-5xl'>
            <span >Implemente</span>
            <br />
            <span className='text-white'>o seu futuro global agora!</span>
          </div>

          <p>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo com os melhores experts.
          </p>

          <button onClick={() => null} className='after btn  btn-primary '>Começar</button>
        </section>

        <div>
          <img src={""} alt="imagem principal" />
        </div>
      </main>
    </div>
  )
}