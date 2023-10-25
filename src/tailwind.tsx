
function Tailwind() {
  return (
    <>
    <div className="flex justify-between items-center h-30 w-100 border-4 px-10 bg-[#000] text-slate-100 shadow-6xl ">
        <span className=" ">LOGO</span>
    <ul className="flex gap-x-20 pl-40 text-base phone:flex-col uppercase devide-x devide-dashed">
        <li>Home</li>
        <li>About</li>
        <li>Info</li>
        <li>Profile</li>
    </ul>
    <div className="p-10 text-lg font-bold sm:text-base">
        <button className="border rounded-full p-1.5 shadow-lg  bg-transparent"> Sign In</button>
    </div>
    </div>
    
  </>
  )
}

export default Tailwind