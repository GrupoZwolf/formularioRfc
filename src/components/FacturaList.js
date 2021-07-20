import React, { useEffect, useState } from 'react'
import { FacturaCard } from './FacturaCard'

export const FacturaList = ({ rfc }) => {
    
    const [facturas, setData] = useState({
        data: []
    })
    
    useEffect(() => {
        const bringData = async () => {
            await fetch(`http://app-factura-carnes.herokuapp.com/api/factura/get-factura-list?rfc=${ rfc }`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then( (res) => res.json() )
            .then( async (res) => {
                const resData = await res;
                if(resData.status === "error" ){

                } else {
                    setData({
                        data: resData.data
                    })
                }
            })
        }

        if (!rfc){
            console.log('no hay rfc :c')
        } else {
            bringData();
        }









        return () => {
            
        }
    }, [rfc])



    return (
        <div className="container">
            <div className="row py-5">
                {
                    (facturas.data.length === 0) ? <p>Agrega tus datos fiscales!</p> : facturas.data.map((element) => {

                        return (
                        <>
                        <div className="col-sm-4">
                            <FacturaCard key={ element.uuid } factura={ element }  />
                        </div>
                        </>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
