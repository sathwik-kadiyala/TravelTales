import '../Styles/Posts.css'
import Post from './Post'

export default function Posts({postdata}) {
  
// console.log("posts",postdata)
  return (
    <div className='postsside'>
      {
        postdata?.map((i,index)=>{
          return(
            <Post key={index} id={i.id} imge={i.img} title={i.title} author={i.author} desc={i.desc} />
          )
        })
      }
    </div>
  )
}
