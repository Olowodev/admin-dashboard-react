import './Card.css'
import img from '../../images/profit.svg'

const Card = ({title, value, icon, percentage, loading}) => {
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
                <div>{value}</div>
            </div>
            
            
            <div className='cardBottom'>
            {!loading ?
                <div className='cardBottomDiv'>
                    <img src={icon} alt='' />
                </div>
                            :
                            null}
            </div>

        </div>
    );
}

export default Card;