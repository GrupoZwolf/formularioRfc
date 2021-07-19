import React from 'react'

export const FacturaCard = ({ factura }) => {

    const handleDownload = () => {

    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ `Folio: ${ factura.Folio }` }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Timbrado el: { factura.FechaTimbrado }</h6>
                <p className="card-text"> { `Receptor: ${ factura.Receptor }` } </p>
                    <button onClick={ handleDownload }>
                        Descargar CFID
                    </button>
            </div>
        </div>
    )
}
