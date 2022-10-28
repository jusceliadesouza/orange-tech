import React from 'react'

function Header() {
  return (
    <header className='container bg-zinc-900 p-4 flex justify-between items-center my-0 mx-auto'>
      <div className='row gap-5'>
        <img src={'https://hermes.digitalinnovation.one/assets/diome/logo.svg'} alt="Logo Dio" className='avatar' />

        <input className='search' placeholder='Buscar'/>

        <a href='' className='menu'>Live Code</a>
        <a href='' className='menu'>Global</a>
      </div>

      <div className="row gap-4">
        <h1>Home</h1>

        <button className={'btn column'}>
          Entrar
        </button>
        <button className={'btn column'}>Cadastrar</button>
      </div>
    </header>
  )
}

export default Header