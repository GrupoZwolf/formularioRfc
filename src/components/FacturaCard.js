import React from 'react'
import FileSaver from 'file-saver';

export const FacturaCard = ({ factura }) => {

    const handleDownload = async () => {
        const response = await fetch(`http://localhost:5000/api/factura/get-factura-by-id?uuid=${ factura.UUID }`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type" : "application/xml"
            }
        }).then( (respons) => {
            return respons.blob();
        }).then(async (data) => {
            const resData = await data
            FileSaver.saveAs(resData, 'nameFile.xml');
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ `Folio: ${ factura.Folio }` }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Timbrado el: { factura.FechaTimbrado }</h6>
                <p className="card-text"> { `Receptor: ${ factura.Receptor }` } </p>
                    <button onClick={ handleDownload } className="btn btn-primary">
                        Descargar CFID
                    </button>
            </div>
        </div>
    )
}
