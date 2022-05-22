import './Card.css'
import img from '../../images/profit.svg'

const Card = ({title, value, icon, percentage}) => {
    return (
        <div className='card'>
            <div className='cardHeader'>
                <div className='title'>
                    <p>{title}</p>
                </div>
                <div className='percentage'>
                    <img src={img} alt='' />
                    <p>{percentage}</p>
                </div>
            </div>

            <div className='cardMiddle'>
                <p>{value}</p>
            </div>

            <div className='cardBottom'>
                <div>
                    <img src={icon} alt='' />
                </div>
            </div>
        </div>
    );
}

export default Card;