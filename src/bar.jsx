import { useNavigate } from 'react-router-dom'
import { Route } from 'react-router-dom'
import home from '../images/home.png'
import Search from '../images/search.png'
import Bell from '../images/bell.png'
import profile from '../images/user.png'
import add from '../images/icons8-add-50.png'
function Navbar() {
  let navigate = useNavigate()
   function clicker(item){
    document.getElementById('menu').style.boxShadow = 'none'
    document.getElementById('alerts').style.boxShadow = 'none'
    document.getElementById('home').style.boxShadow = 'none'
     document.getElementById('search').style.boxShadow = 'none'
     document.getElementById('add').style.boxShadow = 'none'
     document.getElementById(item).style.boxShadow ='rgba(217, 0, 36, 1) 0px 5px 15px'
    
   }
  
    return (
      <div className="w-screen h-8 bg-zinc-700 rounded-lg">
        <ul className="grid grid-flow-row grid-cols-5 grid-rows-1 mx-2 ">
          <li className="bg-white w-14 h-8 mx-2 text-xl rounded-lg -my-2 flex flex-row justify-center hover:shadow-lg hover:shadow-red-800 active:shadow-lg active:shadow-red-900 focus:shadow-2xl focus:shadow-red-900 border-2 border-zinc-700" id='menu' onClick={()=>{clicker('menu'), navigate('/profile')}}><img className='p-1' rel='png' src={profile}/></li>
          <li className="bg-white w-14 h-8 mx-2 text-xl rounded-lg -my-2 flex flex-row justify-center hover:shadow-lg hover:shadow-red-800 active:shadow-lg active:shadow-red-900 focus:shadow-2xl focus:shadow-red-900 border-2 border-zinc-700" id='alerts' onClick={()=>clicker('alerts')}><img className='p-1' rel='png' src={Bell}/></li>
          <li className="bg-white w-14 h-8 mx-2 text-xl rounded-lg -my-2 flex flex-row justify-center hover:shadow-lg hover:shadow-red-800 active:shadow-lg active:shadow-red-900 focus:shadow-2xl focus:shadow-red-900 border-2 border-zinc-700" id='home' onClick={()=>{clicker('home'), navigate('/home')}}><img className='p-1' rel='png' src={home}></img></li>
          <li className="bg-white w-14 h-8 mx-2 text-xl rounded-lg -my-2 flex flex-row justify-center  hover:shadow-lg hover:shadow-red-800 active:shadow-lg active:shadow-red-900 focus:shadow-2xl focus:shadow-red-900 border-2 border-zinc-700" id='add' onClick={()=>clicker('add')}><img className='p-1' rel='png' src={add}/></li>
          <li className="bg-white w-14 h-8 mx-2 text-xl rounded-lg -my-2 flex flex-row justify-center  hover:shadow-lg hover:shadow-red-800 active:shadow-lg active:shadow-red-900 focus:shadow-2xl focus:shadow-red-900 border-2 border-zinc-700" id='search' onClick={()=>clicker('search')}><img className='p-1' rel='png' src={Search}/></li>
</ul>
      </div>
    )
  }
  export default Navbar
  