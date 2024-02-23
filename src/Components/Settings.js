import '../Styles/settings.css'
import { useState } from 'react';
import userimg from '../assets-images/user.jpg';
import { useNavigate } from 'react-router-dom';

export default function Settings({setuserinfo}) {
  const navigate=useNavigate()
  const [imgsrc, setImgsrc] = useState('')
  const[name,setName]=useState('')
  const[about,setAbout]=useState('')
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
       // console.log(file)
        const imageUrl = URL.createObjectURL(file);
        setImgsrc(imageUrl);
    }
};
function handleSubmit() {
  const userinf = {
    img: imgsrc,
    author:name,
    desc: about
}
  setuserinfo(userinf)
  navigate('/')
}
  return (
      <div className="settingsWrapper">
        <form onSubmit={(e)=>e.preventDefault()}className="settingsForm">
          <label className='settingslabel'>Profile Picture</label>
          <div className="settingsPP">
          <div className="settingsPP">
            <img
              src={imgsrc? imgsrc:userimg}
              alt=''
            />
            </div>
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              onChange={handleFileChange}
            />
          </div>
          <label className='settingslabel'>Username</label>
          <input type="text" 
          placeholder="Enter Username" name="name"
          onChange={(e)=>setName(e.target.value)} />
          <label className='settingslabel'>About yourself</label>
          <textarea  className='settingstextarea'
           placeholder="Tell the world about your world....." 
           onChange={(e)=>setAbout(e.target.value)}/>
          <button onClick={handleSubmit} className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
  );
}
