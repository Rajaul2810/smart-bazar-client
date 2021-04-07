import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import Home from '../Home/Home';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faTable } from '@fortawesome/free-solid-svg-icons'


const Admin = () => {

    return (
        <div className="admin">
            <div className="link">
                <ul className="admin-ul">
                    <li> <Link className="bazar" to='/home' >Smart Bazar</Link></li> <br/>
                    <li> <Link className="product" to='/admin/manageProduct' ><FontAwesomeIcon icon={faTable} />Manage Product</Link></li> <br/>
                    <li> <Link className="product" to='/admin/addProduct' ><FontAwesomeIcon icon={faPlus} />Add Product</Link></li>
                </ul>

            </div>

            <div className="details">

                <Switch>
                    <Route path="/admin/manageProduct">
                        <ManageProduct />
                    </Route>
                    <Route path="/admin/addProduct">
                        <AddProduct />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Switch>

                <h1>admin</h1>
            </div>

        </div>
    );
};

export default Admin;