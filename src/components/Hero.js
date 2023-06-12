import img_grid from '../assets/grid.png'

function Hero(){
    return(
      <div className='content'>
        <div className='wrapper'>
          <img src={img_grid} className='content-img' alt='grid' />
        </div>
        <div className='description'>
          <h1>Online Experiences</h1>
          <h3>Join unique interactive activities led by
            one-of-a-kind hosts - all without leaving home
          </h3>
        </div>
      </div>
    )
  }

export default Hero