import React from 'react'

export const NotFound404 = ({ history }) => {

    const handle404 = () => {
        if ( history.length <= 2 ) {
            history.push('/login');
        } else {
            history.goBack();
        };
    };

    return (
        <div className="container container-fluid border border-warning mt-3 p-3">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1> ¡Ocurrió un Error! </h1>
                        <h2> 404 Not Found </h2>

                        <div className="alert alert-warning text-center" role="alert">
                            No pudimos encontrar la sección que está buscando. Por favor cierre sesión y vuelva a abrirla.
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-primary" onClick={ handle404 } > Volver </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
