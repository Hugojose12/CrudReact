import React, { Component } from 'react';

export default class addproduct extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            price: '',
        }
    }

    onSubmit = e =>  {
        e.preventDefault();
        this.props.addProduct(this.state.name, this.state.price)
        this.setState({
            name: '',
            price: '',
        })
        this.props.history.push({
            pathname: '/',
            state: { success: true }
        });
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Product name</label>
                        <input 
                            type="text"
                            name="name" 
                            className="form-control" 
                            id="exampleInputName"
                            placeholder="" 
                            onChange={this.onChange}
                            value={this.state.name} />
                    </div>
                    <div className="form-group">
                        <label>Product price</label>
                        <input 
                            type="text" 
                            name="price"
                            className="form-control" 
                            id="exampleInputPrice"
                            placeholder="" 
                            onChange={this.onChange} 
                            value={this.state.price}/>
                    </div>
                    <button type="submit" className="btn btn-primary float-left">ADD</button>
                </form>
            </div>
        )
    }
}
 