import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

export const FormularioFactura = () => {
    const { uid } = useParams();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState({
        monto: ''
    })

    const handleType = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }

    const onSubmit = async (data) => {
        switch (data.cfid) {
            case "Gastos generales":
                data.cfid = "G03"
                break;
            case "Adquision de mercancias":
                data.cfid = "G01"
                break;
            case "Por Definir":
                data.cfid = "P01"
                break;
            default:
                break;
        }
        data.uid = uid;
        const response = await fetch('http://localhost:5000/api/factura/create-factura', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((res) => res.json())
        .then(async (res) => {
            const resData = await res;
            return resData;
        })
        if (response.response === "error") {
            console.log(response)
        } else {
            console.log(response)
        }
    }


    return (
        <div className="container fs-5">
                <div className="row">
                    <div className="col text-left pt-5">
                        <h5 className="h2 uppercase text-center">
                            Generar tu factura
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-5">
                        <form onSubmit={handleSubmit(onSubmit)} className={ !errors ? 'was-validated' : 'needs-validated'   }  >
                            
                            <div className="mb-3 text-left">
                                <label htmlFor="monto" className="form-label">monto</label>
                                <input value={ data.monto } type="tel" className="form-control fs-6" id="monto" {...register("monto", {required: true})} onChange={ handleType } />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="cfid">Uso de CFID</label>
                                <select className="form-control" id="cfid" {...register("cfid", {required: true})}>
                                    <option>Gastos generales</option>
                                    <option>Adquision de mercancias</option>
                                    <option>Por Definir</option>
                                </select>
                            </div>

                            <div className="col mx-auto text-center py-5">
                                    <button type="submit" className="btn btn-primary btn-lg" >Enviar</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
    )
}
