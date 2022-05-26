import './Table.css'

const Table = ({trackingId, pp, product, customer, date, amount, paymentMethod, status}) => {
    return (
        <tr>
            <td>{trackingId}</td>
            <td className='product'>
                <img src={pp} alt="product" />
                <p>{product}</p>
            </td>
            <td>{customer}</td>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{paymentMethod}</td>
            <td className={`status  ${status}`}>
                <span>
                    <p>{status}</p>
                </span>
            </td>
        </tr>
    );
}

export default Table;