import React, { useContext } from 'react'
import { Redirect, Switch } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';

export const UserScreen = () => {

    const { user } = useContext( AuthContext );

    if( user.logged ) {
        console.log(user);
    } else {
        console.log('NO HAY USUARIO!');
    };

    return (
        <div>
            <h1>UserScreen</h1>
            <hr/>

            {
                user.logged
                ?
                (
                    <>

                        <pre className="container">
                            { JSON.stringify( user, null, 3) }
                        </pre>

                    </>

                )
                :
                (
                    <Switch>
                        <Redirect to="/login" />
                    </Switch>
                )
            }

        </div>
    )
}
