import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {

    const { user, dispatch } = useContext( AuthContext );
    const history = useHistory();

    const handleLogout = () => {
        history.replace('/login');

        dispatch({
            type: types.logout
        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> SuperHeroes </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink 
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/search"
                        >
                            Buscar
                        </NavLink>
                    </div>
                </div>

                <div className="d-flex">
                    <ul className="navbar-nav ml-auto">
                        {
                            ( user.logged )
                            &&
                            <span className="nav-item nav-link text-info">
                                { user.username }
                            </span>
                        }
                        <button 
                            className="nav-item nav-link btn" 
                            onClick={ handleLogout }
                        >
                            Logout
                        </button>
                    </ul>
                </div>                
            </div>

        </nav>
    )
}