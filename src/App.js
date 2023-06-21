/* eslint-disable no-sequences */
import "./index.css"
import HorizontalRow from "./components/HorizontalRow";
import Navbar from "./components/Navbar";
import CardWithBackground from "./components/CardWithBackground"
import MainImages from "./components/MainImages";
import Article from "./components/Article";
import Footer from "./components/Footer";
import FooterEnd from "./components/FooterEnd";

function App() {
  return (<>
    <Navbar />
    <HorizontalRow />
    <CardWithBackground bgcolor="#f80" />
    <MainImages
      heading="Latest Blog Posts"
      image1="https://expertvagabond.com/wp-content/uploads/roman-colosseum-visitors-guide-900x600.jpg.webp"
      image2="https://expertvagabond.com/wp-content/uploads/annecy-france-travel-guide-900x600.jpg.webp"
      image3="https://expertvagabond.com/wp-content/uploads/driving-costa-rica-blog-900x600.jpg.webp" />
    <MainImages
      heading="Adventure Travel"
      image1="https://expertvagabond.com/wp-content/uploads/travel-sak-yant-tattoos-900x600.jpg.webp"
      image2="https://expertvagabond.com/wp-content/uploads/travel-tips-matt-900x600.jpg.webp"
      image3="https://expertvagabond.com/wp-content/uploads/travel-ring-road-iceland-900x600.jpg.webp" />
    <MainImages
      heading="Travel Photography"
      image1="https://expertvagabond.com/wp-content/uploads/travel-photography-advice-1-900x600.jpg.webp"
      image2="https://expertvagabond.com/wp-content/uploads/travel-camera-picks-900x600.jpg.webp"
      image3="https://expertvagabond.com/wp-content/uploads/travel-northern-lights-900x600.jpg.webp" />
    <MainImages
      heading="Digital Nomad Lifestyle"
      image1="https://expertvagabond.com/wp-content/uploads/travel-digital-nomad.jpg.webp"
      image2="https://expertvagabond.com/wp-content/uploads/travel-job-ideas.jpg.webp"
      image3="https://expertvagabond.com/wp-content/uploads/travel-making-money.jpg.webp" />
    <Article />
    <Footer />
    <FooterEnd />
  </>
  )

}

export default App;
