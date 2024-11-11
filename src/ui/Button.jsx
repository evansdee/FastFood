import { Link } from "react-router-dom"

export default function Button({children,disabled,to,type='small',onClick}) {


  const base = "bg-yellow-400  focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 hover:bg-yellow-200 transition-color duration-450 uppercase rounded-full font-semibold text-slate-800 inline-block"

  const style = {
    primary: base + " md:px-6 md:px-4 px-4 py-3 font-bold",
    small: base + " px-4 py-2",
    round: base + " px-2.5 py-1",
    secondary: 'md:px-6 md:px-4 px-3 py-2.5 font-semibold hover:bg-stone-300 rounded-full border-2 border-stone-300 text-stone-400 transition-color duration-450'
  }

  if(to) return <Link to={to} className={style[type]}>{children}</Link>


  if(onClick) return (
    <button disabled={disabled} className={style[type]} onClick={onClick}>{children}</button>
  )

  return (
    <button disabled={disabled} className={style[type]} >{children}</button>
  )
}
