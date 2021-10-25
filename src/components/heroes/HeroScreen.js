import React, { useContext, useMemo } from 'react'
import { Redirect, Switch, useParams } from 'react-router'
import { AuthContext } from '../../auth/AuthContext';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { user } = useContext( AuthContext );

    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);

    if ( !hero ) {
        return <Redirect to="/404NotFound" />;
    };

    const handleReturn = () => {
        if ( history.length <= 2 ) {
            history.push('/login');
        } else {
            history.goBack();
        };
    };

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero; 

    return (
            <div>
                {
                    user.logged
                    ?
                    (
                        <>
                            <div className="row mt-5">
                    
                                <div className="col-4">
                    
                                    <img src={`../assets/heroes/${ heroeId }.jpg`} alt={ superhero } className="img-thumbnail animate__animated animate__fadeInLeft"  />
                    
                                </div>
                    
                                <div className="col-8">
                                    <h3 className="animate__animated animate__fadeInRight"> { superhero } </h3>
                                    <hr/>
                    
                                    <ul className="list-group list-group flush">
                                        <li className="list-group-item"> <b> Alter ego: </b> { alter_ego } </li>
                                        <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                                        <li className="list-group-item"> <b> First appearance: </b> { first_appearance } </li>
                                    </ul>
                    
                                    <hr/>
                    
                                    <h5> Characters </h5>
                                    <p> { characters } </p>
                    
                                    <button className="btn btn-outline-info" onClick={ handleReturn }>
                                        Return
                                    </button>
                                </div>
                    
                            </div>

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

    );
}
