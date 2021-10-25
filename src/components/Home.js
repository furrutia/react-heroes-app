import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';

export const Home = () => {

    const { user } = useContext( AuthContext );

    return (
        <div>
            <h1>Home</h1>
            <hr/>
            <>
                <pre className="container">
                    { JSON.stringify( user, null, 3) }
                </pre>
            </>
        </div>
    )
}
