import React from 'react'
import FileSaver from 'file-saver';

export const FacturaCard = ({ factura }) => {

    const handleDownloadXML = async () => {
        const response = await fetch(`http://app-factura-carnes.herokuapp.com/api/factura/get-factura-by-id?uuid=${ factura.UUID }&type=xml`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type" : "application/xml"
            }
        }).then( (respons) => {
            return respons.blob();
        }).then(async (data) => {
            const resData = await data
            FileSaver.saveAs(resData, `factura${factura.folio}.xml`);
        })
    }

    const handleDownloadPDF = async () => {
        const response = await fetch(`http://app-factura-carnes.herokuapp.com/api/factura/get-factura-by-id?uuid=${ factura.UUID }&type=pdf`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                "Content-type" : "application/pdf"
            }
        }).then( (respons) => {
            return respons.blob();
        }).then(async (data) => {
            const resData = await data
            FileSaver.saveAs(resData, `factura${factura.folio}.pdf`);
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{ `Folio: ${ factura.Folio }` }</h5>
                <h6 className="card-subtitle mb-2 text-muted">Timbrado el: { factura.FechaTimbrado }</h6>
                <p className="card-text"> { `Receptor: ${ factura.Receptor }` } </p>
                <div className="row">
                    <div className="col">
                        <button onClick={ handleDownloadXML } className="btn btn-primary">
                            Descargar XML
                        </button>
                    </div>
                    <div className="col">
                        <button onClick={ handleDownloadPDF } className="btn btn-primary">
                            Descargar PDF
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
