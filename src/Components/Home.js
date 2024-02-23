import '../Styles/Home.css'
import Header from './Header'
import Posts from './Posts'
import Sideinfo from './Sideinfo'

export default function Home({userinfo,postdata}) {
  // console.log("home",userinfo)
  return (<>
    <Header />
    <div className='home'>
      <div className='posts'>
        <Posts postdata={postdata}/>
        </div>
      <div className='sideinfo'>
        <Sideinfo userinfo={userinfo} />
      </div>

    </div>
    </>
    )
}
