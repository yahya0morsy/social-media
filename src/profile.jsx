import { useEffect } from "react"
import Navbar from "./bar"
import k from '../images/ll.jpeg'
import y from '../src/users.jsx'
function Profile(){
    useEffect(() => {
        document.getElementById('menu').style.boxShadow = 'rgba(217, 0, 36, 1) 0px 5px 15px'
      }, []);
    return(
        <div className="w-screen h-fit relative flex flex-col place-items-center bg-zinc-900">
        <div className="fixed bottom-0 z-10 lg:left-0"><Navbar/></div>
        <div className="profile bg-gray-800 rounded-xl flex flex-col  my-5 mb-20">
            <div className="place-self-center my-2 whitespace-pre"><img rel="png" src={k} className="w-20 rounded-full"/></div>
            <div className="text-base text-white mx-2 my-2 place-self-center">{y.displayedname} </div>
            <div className="text-sm text-white mx-2 my-2 place-self-center">{y.bio} </div>
            <div className="text-base text-white mx-2 my-5">username: {y.username}</div>
            <div className="text-base text-white mx-2 my-5">date of birth: {y.birthdate}</div>
            <div className=" flex-col hidden " id="passreset">
                <div className="text-base text-white mx-2 flex flex-col"><p>current password:</p><input type="text" className="rounded-md border-2 text-black border-black w-36"/></div>
                <div className="text-base text-white mx-2 flex flex-col"><p>new password:</p><input type="text" className="rounded-md border-2 text-black border-black w-36"/></div>
                <div className="text-base text-white mx-2 flex flex-col"><p>confirm new password:</p><input type="text" className="rounded-md border-2 text-black border-black w-36"/></div>
                <button className="rounded-lg border-2 w-20 my-2 mx-2 border-black bg-white hover:bg-gray-600 active:bg-slate-600">change</button>
            </div>
            <div className="grid grid-flow-row grid-cols-2 grid-rows-1 gap-32">
                <button className="text-red-700" onClick={()=>document.getElementById('passreset').style.display = 'flex'}>change password</button>
                <button>log out</button>
            </div>
            
            </div>
            
      
        </div>
    )
}
export default Profile