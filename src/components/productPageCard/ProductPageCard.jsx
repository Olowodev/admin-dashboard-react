import './ProductPageCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductPageCard = ({data}) => {
    return (
        <div className='productPageCard'>
            <div className='cardTop'>
                <div className='iconContainer'>
                    <FontAwesomeIcon icon={data.icon} className='boxIcon' />
                </div>
                <div className='cardTopMiddle'>
                    <p>{data.title}</p>
                    <p>{data.value}</p>
                </div>
                <div className='cardTopLast'>
                    <p>+1000 Newly Added</p>
                </div>
            </div>
            <div className='svg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill={data.svgColor} fillOpacity="1" d="M0,256L24,250.7C48,245,96,235,144,224C192,213,240,203,288,202.7C336,203,384,213,432,208C480,203,528,181,576,176C624,171,672,181,720,197.3C768,213,816,235,864,250.7C912,267,960,277,1008,250.7C1056,224,1104,160,1152,144C1200,128,1248,160,1296,170.7C1344,181,1392,171,1416,165.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
}



export default ProductPageCard;