import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {

    return (
        <div>
            <h1>MarvelScreen</h1>
            <hr/>

            {/* <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre> */}

            <HeroList publisher={'Marvel Comics'} />
        </div>
    )
}
