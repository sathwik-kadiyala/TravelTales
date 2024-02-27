import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp'
import { useState } from 'react';
import Private from './Components/Private';
import Home from './Components/Home';
import SinglePost from './Components/SinglePost';
import Write from './Components/Write';
import Settings from './Components/Settings'
import northernlights from './assets-images/northernlights.jpg'
import niagara from './assets-images/niagarafalls.jpg'
import ganesh from './assets-images/ganesh.jpg'

function App() {
  const initialstate=[{
    id:1,
    img: northernlights,
    title: 'Shine of Skies-The Northen Lights',
    author:'Bhanu Prakash',
    desc:"Wrapped in layers of warm clothing, I ventured out into the crisp Arctic air, my breath forming delicate clouds that dissipated into the darkness. The anticipation mingled with excitement as I gazed up at the star-studded sky, wondering when the elusive lights would reveal themselves. Suddenly, a faint glow emerged on the horizon, gradually intensifying into vibrant hues of green, purple, and blue, swirling and dancing across the night sky like celestial ribbons.Mesmerized by the otherworldly display, I found myself lost in a trance, entranced by the sheer magnitude and beauty of the Northern Lights. It was as if time stood still, and I was transported to a realm where reality blurred with fantasy. The silence of the Arctic wilderness amplified the intensity of the moment, enveloping me in a sense of serenity and wonder.As the Northern Lights continued their celestial ballet, I felt a deep sense of humility and insignificance in the face of such cosmic grandeur. In that fleeting moment, I realized the profound interconnectedness of all things—the intricate dance of particles and light, the vast expanse of the universe, and the fleeting beauty of life itself. With each flicker and ripple of the Aurora, I felt a renewed sense of wonder and gratitude for the magnificence of the natural world. It was a humbling reminder of our place in the universe—a reminder to cherish every moment, embrace the unknown, and celebrate the magic that surrounds us. As the night drew to a close and the Northern Lights gradually faded into the darkness, I carried with me the memory of that transcendent experience—a memory that would forever be etched in my heart and soul. In the silence of the Arctic night, I whispered a silent thank you to the universe for granting me the privilege of witnessing one of nature's most magnificent spectacles—a dance of light and color that continues to inspire and captivate all who gaze upon it      In the end, my encounter with the Northern Lights was more than just a journey to witness a celestial phenomenon; it was a journey of self-discovery, reflection, and profound connection with the beauty and majesty of the universe. And as I returned to the warmth of my cozy cabin, I carried with me a newfound sense of awe and reverence for the wonders of the natural world—an awe that continues to inspire me to explore, to discover, and to dance under the stars.",
  },
  {
    id:2,
    img: niagara,
    title: 'Reflecting on My Niagara Falls Experience',
    author:'Varun Chand',
    desc:"As I stood on the precipice overlooking the falls, I was immediately struck by the sheer scale and power of the rushing waters. The thunderous roar of the falls echoed through the air, vibrating in my chest and stirring my soul with its primal energy. Mist rose from the churning waters, enveloping me in a cool embrace as I gazed out at the mesmerizing spectacle before me.In that moment, time seemed to stand still as I was transported into a world of pure wonder and beauty. The sheer force of the water cascading over the edge was both humbling and exhilarating, a reminder of the awesome power of nature and our own place within it. I watched in awe as rainbows danced in the mist, casting vibrant arcs of color across the sky—a fleeting reminder of the beauty that can be found even in the midst of chaos. As I explored the surrounding area, I was struck by the sense of majesty and grandeur that permeated every inch of the landscape. From the towering cliffs to the lush greenery that surrounded me, there was a sense of reverence for the natural world that filled me with a deep sense of peace and tranquility. I found myself lost in the moment, soaking in the beauty of my surroundings and reflecting on the timeless power of the falls. But perhaps the most profound aspect of my Niagara Falls experience was the sense of connection that I felt with the millions of visitors who had come before me. Standing on the edge of the falls, I was joined by people from all walks of life, each one drawn to this sacred place by a shared sense of wonder and awe. In that moment, I felt a deep sense of kinship with my fellow travelers, united by our shared appreciation for the beauty and majesty of the natural world. As I reluctantly tore myself away from the falls and made my way back to the bustling streets of Niagara Falls, I carried with me a renewed sense of wonder and gratitude for the world around me. My encounter with Niagara Falls had been a journey into the heart of nature itself, a reminder of the beauty and power that surround us every day. And as I looked out at the falls one last time, I whispered a silent thank you to the universe for granting me the privilege of witnessing one of its most magnificent creations—a memory that would stay with me for a lifetime.",
  },
  {
    id:3,
    img: ganesh,
    title: 'Immersed in Devotion',
    author:'Vipul Avinash',
    desc:"In the heart of Hyderabad, amidst the bustling streets and vibrant neighborhoods, lies a tradition that is deeply ingrained in the city's cultural fabric—the Ganesh Nimarjan, a celebration of devotion, community, and spiritual renewal. My own experience at this sacred event was nothing short of transformative, a journey into the heart of Hindu spirituality and the rich tapestry of Indian culture. As the day of Ganesh Chaturthi dawned, the city came alive with anticipation and excitement. Devotees from all walks of life gathered in the streets, carrying colorful idols of Lord Ganesha, the beloved elephant-headed deity revered as the remover of obstacles and the harbinger of good fortune. The air was filled with the sounds of drumbeats, chanting, and joyous celebrations, creating an atmosphere of pure jubilation and reverence.As the procession made its way through the streets of Hyderabad, I was struck by the sense of unity and camaraderie that permeated the crowd. Families, friends, and strangers alike came together to honor Lord Ganesha, their devotion transcending barriers of age, class, and religion. It was a celebration of diversity and inclusivity, a testament to the unifying power of faith and devoti As we approached the banks of the Hussain Sagar Lake, where the final act of the Ganesh Nimarjan would take place, the atmosphere became charged with emotion. Devotees offered prayers and performed rituals, expressing their gratitude to Lord Ganesha for his blessings and guidance. Amidst the swirling incense and flower petals, I felt a profound sense of peace and connection to something greater than myself—a feeling that transcended words and touched the very depths of my soul. And then, as the sun began to set and the golden hues of twilight bathed the lake in a warm glow, the moment of Nimarjan arrived. With reverence and solemnity, devotees carried the idols of Lord Ganesha into the water, immersing them in the lake amidst cries of Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya (Oh Lord Ganesha, come back soon next year). It was a bittersweet moment, filled with both joy and sadness as we bid farewell to our beloved deity, knowing that he would return once again to bless us with his presence in the coming year.As I watched the idols disappear beneath the shimmering waters of the lake, I felt a sense of renewal and hope wash over me. The Ganesh Nimarjan was not just a ritual—it was a symbol of faith, resilience, and the cyclical nature of life itself. It reminded me of the importance of letting go of attachments, embracing change, and trusting in the divine plan that guides us all.As I made my way home, my heart full of gratitude and reverence, I carried with me the memories of the Ganesh Nimarjan—the sights, the sounds, the smells—all etched into my being as a reminder of the beauty and sanctity of life. And as I looked forward to the next year's celebration, I knew that I would carry the spirit of Lord Ganesha with me always, guiding me through life's challenges and blessings with unwavering grace and love.",
}
  ];
  const[userinfo,setUserinfo]=useState(null)
  const[update,setUpdate]=useState(false)
  const [user, setUser] = useState(null);
  const [single, setSingle] = useState({});
  const [postdata, setPostdata] = useState(initialstate)
  // console.log(userinfo)
  return (
    <div className="App">
      <Navbar userinfo={userinfo} user={user} setuser={setUser} />
  
      <Routes>
        <Route element={<Private user={user} />}>
          <Route path='/' element={<Home userinfo={userinfo} postdata={postdata}/>} />
          <Route path='/:id' element={<SinglePost setUpdate={setUpdate} single={single} setSingle={setSingle} setPostdata={setPostdata} user={user} postdata={postdata}/>} />
          <Route path='/settings' element={<Settings user={user} setuserinfo={setUserinfo}/>} />
          <Route path='/write' element={<Write setUpdate={setUpdate} update={update}single={single} userinfo={userinfo} user={user} postdata={postdata} setpostdata={setPostdata}/>} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login user={setUser} />} />
      </Routes>
    </div>
  );
}



export default App;
