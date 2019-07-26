import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from './components/addproduct';
import Listproducts from './components/listproducts';
import Products from './Products.json';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: Products,
    }
  }

  addProduct = (name, price) => {
    const addProduct = {
      name: name,
      price: price,
      id: this.state.products.length,
    }

    this.setState({
      products: [...this.state.products, addProduct]
    })
  }

  deleteProduct = id => {
    const deleteProduct = this.state.products.filter(product => product.id !== id)
    this.setState({ products: deleteProduct})
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand">React CRUD Products</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/add'} className="nav-link">Add Product</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/add' render={(routerProps) => (<Addproduct {...routerProps} addProduct={this.addProduct} />)} />
              {/* <Route path='/edit/:id' component={ Edit } /> */}
              <Route path='/' render={(routerProps) => (<Listproducts {...routerProps} products={this.state.products} deleteProduct={this.deleteProduct}/>)} />
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
