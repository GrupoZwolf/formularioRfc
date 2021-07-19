import React from 'react'

export const DataCard = ({ usuario }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ `${ usuario.Contacto.Nombre } ${ usuario.Contacto.Apellidos }, ${ usuario.RFC } ` }</h5>
                <h6 className="card-subtitle mb-2 text-muted"> { usuario.Contacto.Email }</h6>
                <p className="card-text"> { `${ usuario.Pais }, ${ usuario.Estado }, ${ usuario.Colonia }, ${ usuario.Calle } ${ usuario.Numero }, ${ usuario.CodigoPostal } ` } </p>
                <a href={`/edit/${ usuario.RFC }`} className="card-link"><button className="btn btn-primary" >Editar</button></a>
                <a href={`/crearFactura/${ usuario.UID }`} className="card-link"><button className="btn btn-primary" >Crear Factura</button></a>
                <a href={`/facturas`} className="card-link"><button className="btn btn-primary" >Facturas</button></a>
            </div>
        </div>
    )
}
