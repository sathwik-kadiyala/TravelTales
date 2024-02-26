import { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import '../Styles/singlepost.css'

export default function SinglePost({setUpdate,single,setSingle, userinfo, user, postdata ,setPostdata}) {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params) {
      setSingle(postdata.find((item) => item.id === parseInt(params.id)))
    }
  }, [])

  const handleRemove = () => {

    const updatedPosts = postdata.filter((item) => item.id !== single?.id);
    setPostdata(updatedPosts);
    setSingle('')
    navigate('/');
  };
  console.log(single?.email,user?.email)
  function handleUpdate(){
    setUpdate(true)
      navigate('/write')
  }
  // console.log(userinfo)
  // console.log(single)
  // console.log(postdata)
  return (
    <div className='single'>
      <img className='singleimg' src={single.img} alt='No image'></img>
      <div className='singleinfo'>
        <p className='singletitle'>
          {single?.title}
          {/* ((userinfo?.email === single?.author) || (single?.author === user?.email)) */}
          { (single?.email === user?.email) &&
            <div className='singleicons'>
              <i className="singleitems fa-solid fa-pen-to-square" onClick={()=>handleUpdate()}></i>
              <i className=" singleitems fa-solid fa-trash" onClick={handleRemove}></i>
            </div>
          }
        </p>
        <p className='singleauthor'> Author: {single.author}</p>
        <p className='singledesc'>{single.desc}</p>
      </div>
    </div>
  )
}
