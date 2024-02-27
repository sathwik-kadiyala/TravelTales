import '../Styles/sideinfo.css'
import defaultimg from '../assets-images/user.jpg'
export default function Sideinfo({ userinfo }) {
  // console.log("sideinfo",userinfo)
  return (
    <div className='aboutme'>
      <img className='aboutimg' src={userinfo && userinfo.img ? userinfo.img : defaultimg} alt='' />
      <div className='aboutitem'>
        <p className='abouttitle'>ABOUT ME</p>
        <p className='aboutdesc'> {userinfo && userinfo.desc ? userinfo.desc : "Please go through your profile for for updating details."}</p>
      </div>
    </div>
  )
}
