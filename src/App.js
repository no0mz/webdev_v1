import './App.css';
import img01 from './imgs/pexels-ave-calvar-martinez-4297437.jpg';
import img02 from './imgs/pexels-phil-kallahar-983200.jpg';
import img03 from './imgs/pexels-rodion-kutsaiev-7976210.jpg';
import Main from './components/main';
import Slider from './components/Slider';
import Navbar from './components/navbar';

const navbarLinks = [
  {url: '#', title: 'Home'},
  {url: '#', title: 'Art'},
  {url: '#', title: 'Contact Us'},
];

function App() {
  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Main imageSrc={img01} />
      <Slider imageSrc={img02} 
      title={'Transformative'} 
      subtitle={'New perspectives provided through art.'} />

      <Slider imageSrc={img03} 
      title={'Unique'} 
      subtitle={'Custom made pieces just for you. '} 
      flipped={true} />
    </div>

  );
};

export default App;
