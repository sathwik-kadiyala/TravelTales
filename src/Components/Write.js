import { useState ,useEffect} from 'react'
import '../Styles/Write.css'
import { useNavigate } from 'react-router-dom'
import write from '../assets-images/write.jpg'
export default function Write({ single,userinfo,user,postdata,setpostdata }) {

    const [imgsrc, setImgsrc] = useState('')
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const navigate=useNavigate();
    useEffect(() => {
      if (single?.author===userinfo?.author || single?.author===user.email) {
          setImgsrc(single.img);
          setTitle(single.title);
          setDesc(single.desc);
      }
  }, [single]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
           // console.log(file)
            const imageUrl = URL.createObjectURL(file);
            setImgsrc(imageUrl);
        }
    };
    // console.log(user)
    // console.log("write",userinfo)
    // console.log("write",single)
    // console.log("write",postdata)
    function handleSubmit() {
        const newPost = {
            id: postdata.length + 1,
            img: imgsrc? imgsrc:write,
            title: title,
            author: userinfo? userinfo.author :user.email,
            desc: desc
        };
        setpostdata(prevPostdata => [...prevPostdata, newPost]);
        setImgsrc('');
        setTitle('');
        setDesc('');
        navigate('/');
    }
    return (
        <div className="write">
          <img
            className="writeImg"
            src={imgsrc? imgsrc:write}
            alt='Upload Image'
            
          />
          <form onSubmit={(e)=>e.preventDefault()} className="writeForm">
            <div className="writeFormGroup">
              <label htmlFor="fileInput">
              <i className=" writeIcon fa-solid fa-file-circle-plus"></i>
              </label>
              <input id="fileInput" 
              type="file" 
              style={{ display: "none" }} 
              onChange={handleFileChange}/>
              <input
              value={title}
                className="writeInput"
                placeholder="Title"
                type="text"
                autoFocus={true}
                onChange={(e)=>setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
              <textarea
              value={desc}
                className="writeInput writeText"
                placeholder="Tell your story..."
                type="text"
                autoFocus={true}
                onChange={(e)=>setDesc(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit} className="writeSubmit" type="submit">
              Post
            </button>
          </form>
        </div>
      );
}
