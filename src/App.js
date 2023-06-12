import Header from './components/Header'
import Hero from './components/Hero';
import Card from './components/Card';


function App(){
  return(
    <div className='mainPage'>
      <Header />
      <Hero />
      <Card 
      img="katie.png"
      rating="5.0"
      reviewCount={6}
      country="USA"
      title="Life lessons with Katie Zaferes"
      price={136}
      />
    </div> 
  )
}

export default App