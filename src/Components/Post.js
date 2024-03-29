import React from '../Styles/Post.css'
import { useNavigate } from 'react-router-dom'
export default function Post({imge,title,author,desc,id}) {
  const navigate=useNavigate()
  const handleClick=(id)=>{
    navigate(`/${id}`)
    // console.log(id)
  }
  
  // console.log(author)
  return (
    <div className='Post' onClick={()=>handleClick(id)}>
      <img className='postimg' src={imge} alt='no image'></img>
      <div className='postinfo'>
        <p className='posttitle'>{title}</p>
        <p className='author'> By : {author}</p>
        <p className='postdesc'>{desc}</p>
      </div>
    </div>
  )
}
