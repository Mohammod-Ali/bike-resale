import React from 'react';

const MyProductCart = ({product, productDeleteHandler}) => {
    // console.log(product)
    const { img, productName, resalePrice, categoryId, location, condition
    } = product

    return (
        <>
            <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{productName}</div>
              <div className="text-sm opacity-50">{location}</div>
            </div>
          </div>
        </td>
        <td>
          {categoryId}
          <br/>
          <span className="badge badge-ghost badge-sm">Condition: {condition}</span>
        </td>
        <td>Price: {resalePrice}</td>
        <th>
          <button onClick={() => productDeleteHandler(product)} className="btn btn-ghost btn-xs">DELETE</button>
        </th>
      </tr>
        </>
    );
};

export default MyProductCart;