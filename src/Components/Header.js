import '../Styles/header.css'
import image from '../assets-images/header.jpg'
export default function Header() {
  return (
    <div data-testid="header" className='header'>
      <div className='headertitle'>
        <p className='headertitlesm'>Travel</p>
        <p className='headertitlelg'>Tales</p>
      </div>
      <img className='headerimg' src={image} alt='' />

    </div>
  )
}
