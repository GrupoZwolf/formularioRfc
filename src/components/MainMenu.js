import React, { useEffect, useState } from 'react'
import { DataCard } from './DataCard'


//RFC PRUEBA: X12345X12345X
//RFC Prueba 2 : XAXX010101000


export const MainMenu = ({ rfc }) => {




    const [usuarios, setData] = useState({
        data: []
    })



    useEffect(() => {
        const bringData = async () => {
            await fetch(`http://localhost:5000/api/clientes/getListByRFC?rfc=${ rfc }`, {
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
                        data: resData.Data
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
        <div className="container pt-5">
            <div className="row">
                {
                    (usuarios.data.length === 0) ? <p>Agrega tus datos fiscales!</p> : usuarios.data.map((element) => {

                        return (
                        <>
                        <div className="col-sm-4">
                            <DataCard usuario={ element } key={ element.UID } />
                        </div>
                        </>
                        )
                    }
                    )
                }
            </div>
            <div className="row py-5">
                <div className="col">
                    <a href="/create">
                        <button className="btn btn-large btn-primary"> Crear Datos Fiscales </button>
                    </a>
                </div>
            </div>
        </div>
    )
}
