import { faCamera, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Addnew.css'

const Addnew = () => {
  return (
    <div className='addnew'>
        <form>
            <div className='formContainer'>
                <div className='header'>
                    <p>Add a New Product</p>
                </div>
                <div className='imageSelect'>
                    <FontAwesomeIcon icon={faCamera} />
                </div>
                <div className='formInput'>
                    <label>Product Name</label>
                    <input />
                </div>
                <div className='formInput'>
                    <label>Category</label>
                    <input />
                </div>
                <div className='formInput'>
                    <label>Color</label>
                    <input type='color' />
                </div>
                <div className='formInputContainer'>
                    <div className='formInput2'>
                        <label>Price</label>
                        <input />
                    </div>
                    <div className='formInput3'>
                        <input type='checkbox' />
                        <p>Negotiable</p>
                    </div>
                </div>

                <div className='formInput4'>
                    <label>Descriptions</label>
                    <textarea></textarea>
                </div>
                <button className='button'>
                    <div className='addNewButton'>
                        <FontAwesomeIcon icon={faSave} />
                        <p>Save Product</p>
                    </div>
                </button>
            </div>
        </form>
    </div>
  )
}

export default Addnew;
