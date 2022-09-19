import React from 'react'
const NavBar=({theme,onChangeTheme})=>{
    return<div>
        <header>
        <nav className={theme==='dark'?"bg-gray-900 text-white flex md:justify-between drop-shadow-xl py-6 border-b-4 border-gray-900 sm:justify-end":" flex md:justify-between drop-shadow-xl py-6 border-b-4 border-gray-400 bg-slate-200 sm:justify-end"}>
            <h1 className="font-bold text-blue-500 text-2xl px-4 sm:hidden md:block">BProZ</h1>
            <ul className="font-bold flex flex-row space-x-6 px-4">
          <li className="list-none">home</li>
          <li className="list-none">contact</li>
          <li className="list-none">teams</li>
          </ul>
          <button className={theme==='dark'?'bg-white text-black mx-8 rounded-lg px-4 text-sm font-bold':'bg-black text-white mx-8 rounded-lg px-4 text-sm font-bold'} onClick={onChangeTheme}>{theme}</button>
        </nav>
      </header>
    </div>
}
export default NavBar;