import React from 'react';

const MyOrdersCard = ({myOrder, i}) => {
    const {name, email, productName, price } = myOrder
    return (
        <>
        <tbody>
            <tr>
              <th>{i+1}</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{productName}</td>
              <td>{price}</td>
            </tr>

           
          </tbody>
        </>
    );
};

export default MyOrdersCard;