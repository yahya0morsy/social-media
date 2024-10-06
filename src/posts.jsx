import x from '../src/data'
import heartc from '../images/heart (1).png'
import heart from '../images/heart.png'
function Posts() {
    
   //document.getElementById('').src = heartc
   function likeit(id){
    if(document.getElementById(id+'1').src.includes(heart)){ document.getElementById(id+'1').src = heartc}
    else{ document.getElementById(id+'1').src = heart}
    
    
   
       
   }
    return (
     <div>
       {x.map((post,index)=>{
        if(post.img){
            return(
                <div className='border-2 relative border-gray-800 rounded-md post mx-2 my-10 ' key={index}>
                    <div className='absolute top-0  flex flex-col  place-items-center justify-center text-white text-xl right-1  ' >
                        <div className='hover:text-black w-5 rounded-lg flex flex-row place-items-center justify-center hover:bg-white' >:</div>
                         <div className='border-2 rounded-md text-base  hidden dropdown border-gray-600' id={post.id+'2'} >delete</div>
                         </div>
                    <div className='flex flex-row place-items-start my-2 mx-1'>
                       <div className='text-white text-md' id='k'><img rel='jpeg' src={post.pic} className='w-10 h-fit bg-zinc-800 p-1 rounded-lg'></img></div>
                       <div className='text-white text-md mx-2 flex flex-row place-items-center'>{post.name}<div className='text-sm text-gray-500'>@{post.user}</div></div>
    
                    </div>
                    <div className='mx-1 my-1 grid grid-flow-col place-items-center'> {post.img.map((imag)=>{return(<img rel='jpeg' src={imag} className='w-fit h-fit  bg-zinc-800 p-1 rounded-lg'></img>)})}</div>
                    <div className='text-white text-md whitespace-pre-wrap p-3'>{post.text}</div>
                    <div className='grid grid-flow-col grid-cols-3 place-items-center grid-rows-1 text-lg text-white'>
                        <div className='flex felx-row place-items-end' ><img rel='png' src={heart} className='w-7 mx-2' id={post.id+'1'} onClick={()=>likeit(post.id)}/>{post.likes}</div>
                        <div>{post.likes}</div>
                        <div>{post.likes}</div>
                        
                    </div>
                
                
                </div>
            )
        }
        else if(!post.img){
            return(
                <div className='border-2 border-gray-800 rounded-md' key={index}>
                    <div className='flex flex-row place-items-start my-2 mx-1'>
                       <div className='text-white text-md' id='k'><img rel='jpeg' src={post.pic} className='w-10 h-fit bg-zinc-800 p-1 rounded-lg'></img></div>
                       <div className='text-white text-md mx-2 flex flex-row place-items-center'>{post.name}<div className='text-sm text-gray-500'> @{post.user}</div></div>
                    </div>
                
                    <div className='text-white text-md'>{post.text}</div>
                    
                
                
                </div>
            )
        }
       
       })}
     </div>
    )
  }
  export default Posts
  