import React from 'react';

export default function tablerow(props) {
    return (
        <tr>
		    <td>
				{props.product.name}
			</td>
			<td>
				${props.product.price}
			</td>
			<td>
				<button className="btn btn-primary mr-2">Edit</button>
                <button className="btn btn-danger" onClick={props.deleteProduct.bind(this, props.product.id)}>Delete</button>
			</td>
		</tr>
    )
}
