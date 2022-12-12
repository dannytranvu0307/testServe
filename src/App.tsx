import React from 'react';
import {useState , useEffect} from 'react'

function App() {
const [theme , setTheme] = useState('light');

const localTheme = localStorage.getItem('theme');
 console.log(localTheme)

 useEffect(()=>{
   if(localTheme==='dark'){
    setTheme('dark')
   }
 },[])
useEffect(()=>{
 
 if(theme==='dark'){
    document.documentElement.classList.add("dark")
    localStorage.setItem('theme','dark');
  }else{
    document.documentElement.classList.remove("dark")
    localStorage.setItem('theme','light');
  }

},[theme])

const handletoggle = ()=>{
  if(localTheme === undefined ){
    localStorage.setItem('theme',theme);
  }
  setTheme(theme ==='dark' ?'light':'dark')
}
  return (
    <div className="">
 <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
    <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
      <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
    </span>
  </div>
  <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
    </div>

    <button className='w-15 bg-gray-200 rounded-lg' onClick={handletoggle}> darkmode</button>
    </div>
  );
}

export default App;
