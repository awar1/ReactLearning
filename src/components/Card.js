
import star from '../assets/star.png'
import katie from '../assets/katie.png'
function Card(props){
    const imgPath = `images/${props.card.coverImg}`;
    console.log(imgPath)
    return(
        <div className='card'>
            <div className='info'> 
                <img src={imgPath} alt='katie' className='card-photo' />
                <p className='info-text'>Sold Out</p>
            </div>
            <div className='card-rating'>
                <img src={star} alt='star' className='star' />
                <p>{props.rating} <span className='span'>
                    ({props.reviewCount}) &#x2022; {props.country}</span></p>
            </div>
            <div className='card-text'>
                <p>props.title</p>
                <p><strong>FROM ${props.price}</strong> / person</p>
            </div>
                    
        </div>
    )
}

export default Card