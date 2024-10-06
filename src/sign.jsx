import anime from 'animejs/lib/anime.es.js';
import { useNavigate } from 'react-router-dom'
function Sign(){
    let navigate = useNavigate()
    function hiderdw(){
        let x 
       if(parseFloat(window.getComputedStyle(document.getElementById('item')).width)==450){x=260}
       else if(parseFloat(window.getComputedStyle(document.getElementById('item')).width)==350){x=300}
        anime({
            targets: '.item',
            translateY: x
          });
          

    }
    function hiderup(){
        anime({
            targets: '.item',
            translateY: 0
          });
        }
    return(
        <div className="w-screen h-screen flex flex-col justify-center">
            <div className="flex flex-col text-red-800 place-self-center">
                <div className="grid relative grid-flow-row grid-cols-1 grid-rows-2 gap-0">
                <div className='item absolute flex flex-row justify-center bg-red-700 z-10 rounded-md' id='item'>
                    <div className='text-white text-6xl font-bold place-self-center'>WELCOME</div>
                </div>
                    <div className="sign1 relative bg-transparent border-4 border-red-700 border-b-0 rounded-b-none rounded-md">
                    <div className='flex flex-row justify-center'><p className='text-2xl text-white'>Sign up</p></div>
                        <div className='text-white text-sm md:text-base font-medium my-3'>Username:<input type='text' className='rounded-md mx-1'/></div>
                    <div className=''><button onClick={()=>hiderup()}>have an account? sign in</button></div>
                    </div>
                    <div className="sign1 bg-transparent border-4 border-red-700 border-t-0 rounded-t-none rounded-md">
                        <div className='flex flex-row justify-center'><p className='text-2xl text-white'>Sign in</p></div>
                    <div className='text-white text-base sm:text-lg my-3 mx-2 font-medium'>Username:<input type='text' className='rounded-md mx-1 text-black'/></div>
                    <div className='flex flex-row text-white text-base sm:text-lg my-2 mx-2 font-medium'>password:<input type='password' className='rounded-md mx-1'/><div className=''><button className='text-black rounded-lg hover:cursor-pointer active:translate-x-2 duration-200 active:translate-y-2 active:bg-slate-600 border-2 border-black bg-white'
                                                                                                                                                                                 onClick={()=>navigate('/home')}>submit</button></div></div>
                    <div className='mx-2 text-blue-500 text-base sm:text-lg hover:cursor-pointer'>forger password ?</div>
                    <div className='flex flex-row justify-center'><button onClick={()=>hiderdw()}>dont have an account? register</button></div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Sign