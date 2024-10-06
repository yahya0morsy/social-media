import { useNavigate } from "react-router-dom";
import Navbar from "./bar"
import Posts from "./posts"
import { useEffect } from "react";
function Home() {
  
  useEffect(() => {
    document.getElementById('home').style.boxShadow = 'rgba(217, 0, 36, 1) 0px 5px 15px'
  }, []);
  
    return (
      <div className="w-screen h-fit relative flex flex-col place-items-center bg-zinc-900">
        <div className="fixed bottom-0 z-10"><Navbar/></div>
        <div className="z-0"><Posts/></div>
        </div>
    )
  }
  export default Home
  