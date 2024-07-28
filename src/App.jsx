import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data/data'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {

  const cardElements = cardData.map((item, index) =>
    <Card
      // You can pass the entire object as a prop
      key={index}
      item={item}
      // Or pass individual properties
      // coverImg={card.coverImg}
      // rating={card.stats.rating}
      // reviewCount={card.stats.reviewCount}
      // location={card.location}
      // title={card.title}
      // price={card.price}
      // openSpots={card.openSpots}
      
      // or pass as a spread
      // {...item}
    />
  )

  return (
    <>
      <div>
        <Navbar />
        <div className='container mx-auto'>
          <Hero />
          <div className='flex justify-center space-x-6 overflow-auto mt-4 mb-4'>
            {cardElements}
          </div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
