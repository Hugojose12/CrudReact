import React, {Component} from 'react';
import TableRow from './tablerow';

export default class listproducts extends Component {

		TableRow() {
			return this.props.products.map(e =>
				<TableRow product={e} deleteProduct={this.props.deleteProduct} key={e.id}/> 
			)
		}

		render () {
			return (
					<div>
						<h1 className="text-center mb-4 mt-4">Products</h1>
						<table className="table table-striped">
							<thead>
								<tr>
									<th>Name</th>
									<th>Price</th>
									<th colSpan="2">Action</th>
								</tr>
							</thead>
							<tbody>
								{this.TableRow()}
							</tbody>
						</table>
						
					</div>
			)
	}
}
