import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const[mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(()=> setMounted(true),[])
  if(!mounted) return null

  return (
    <>
    
      <Head>
        <title>Instagram</title>
      </Head>
      
      <div className="flex h-screen flex-col items-center bg-slate-100 dark:bg-slate-800 dark:text-white">
      
      <main className="flex h-4/5 items-center">
        
        <div className="hidden shirink-0 sm:flex items-center ">
          <Image src="/border.png" width={420} height={580} />
          
        </div>
        
        <div className='columns-1 content-center '> 
          <div className='flex flex-col border-2 align-middle px-10 pt-10 bg-white  dark:bg-slate-800 dark:text-white' >
          <button className=" mb-1 rounded-lg  bg-slate-800 dark:bg-white text-white dark:text-black"
      onClick={() => setTheme(theme === 'light'? 'dark' :'light')}
      >
      {theme === 'light' ? 'Dark' : 'Light'}
      </button>
            <img className='px-10 py-4 hidden dark:flex' src='/logow.png' /> 
            <img className='px-10 py-4 dark:hidden' src='/logo.png' /> 
            <input className='rounded-sm border-r-2 border-2 mt-5 p-2 mb-1 text-xs w-full bg-slate-100 dark:bg-slate-800 dark:text-white' type="text" placeholder="Telefone, usuário ou email" />
            <input className='rounded-sm border-2 text-xs p-2 mb-2 w-auto bg-slate-100 dark:bg-slate-800 dark:text-white' type="password" placeholder="Senha" />
            <button className='bg-blue-300 rounded-xs mb-3 text-white text-sm p-1' > Entrar </button>
         
          <div className='flex justify-between '>
            <span className='w-full border-t-2 self-center'></span>
            <span className='text-xs text-opacity-75 text-slate-500 bold align-top'>OU</span>
            <span className='w-full border-t-2 self-center'></span>
          </div>

          <div className='flex-col'>
            <button className='w-full mt-4 text-xs justify-center align-middle content-center self-center text-blue-800 font-bold'>Entrar com o Facebook </button>
            <button className='w-full mt-4 text-xs self-center mb-5'>Esqueceu a senha? </button>
          </div>
        </div>
                  
        <div className='text-xs mt-2 border-2 flex-col bg-white rounded-sm dark:bg-slate-800 dark:text-white'>
          <p className='flex align-middle justify-center p-5'> Não tem uma conta? <a href='#' className='text-blue-600 ml-2'>Cadastre-se</a></p>
        </div>
   
          <span className='text-xs flex justify-center py-2'> Obtenha o Aplicativo</span>
        
        <div className='flex justify-center align-middle h-fit'>
        <Image src="/appstore.png" width={136} height={40} />
        <Image src="/playstore.png" width={136} height={40} />
        </div>
      </div>
      </main>
               
      <div className="flex w-fit justify-center text-xs text-gray-500 flex-wrap  ">
       <a className='mx-2' href=''>Meta </a>
       <a className='mx-2' href=''>Sobre </a>
       <a className='mx-2' href=''>Blog </a>
       <a className='mx-2' href=''>Carreiras </a>
       <a className='mx-2' href=''>Ajuda</a>
       <a className='mx-2' href=''>API </a>
       <a className='mx-2' href=''>Privacidade </a>
       <a className='mx-2' href=''>Termos </a>
       <a className='mx-2' href=''>Principais contas </a>
       <a className='mx-2' href=''>Hastags</a>
       <a className='mx-2' href=''>Localizações</a>
       <a className='mx-2' href=''>Instagram Lite </a>
      </div>
   
      <div  className="flex w-fit justify-center my-2   text-xs text-gray-500 flex-wrap">
       <a className='mx-2' href=''>Dança </a>
       <a className='mx-2' href=''>Comida e bebida</a>
       <a className='mx-2' href=''>Casa e jardim</a>
       <a className='mx-2' href=''>Música </a>
       <a className='mx-2' href=''>Artes visuais </a>
       </div>

       <div  className="flex w-fit justify-center my-3  text-xs text-gray-500 flex-wrap">
         <select className='bg-transparent' name="Português (Brasil)">
          <option> Português (Brasil)</option>
         </select>
         <p>© 2022 Instagram from Meta</p>
        </div>
        
    </div>
    </>
  )
}

export default Home
