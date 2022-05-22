import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProductTable.css'

const ProductTable = () => {
    return (
        <div className='productTable'>
            <div className='tableHead'>
                <h1>Top Selling Products</h1>
                <p>See More</p>
            </div>
            <table className='table'>
                    <th className='th'>
                        <div>
                            <p>SN</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Name</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Price</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Total Order</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                    <th className='th'>
                        <div>
                            <p>Total Sales</p>
                            <FontAwesomeIcon icon={faCaretDown}/>
                        </div>
                    </th>
                <tbody className='tbody'>
                    <tr>
                        <td>
                            <p>1</p>
                        </td>
                        <td>
                            <div>
                                <div>
                                    <img />
                                </div>
                                <p>Sticker</p>
                            </div>
                        </td>
                        <td>
                            <p>$10</p>
                        </td>
                        <td>
                            <p>30,000 pieces</p>
                        </td>
                        <td>
                            <p>$300,000</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default ProductTable;