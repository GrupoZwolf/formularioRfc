import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormularioRegistro = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [data, setData] = useState({
        nombre: '',
        apellidos: '',
        telefono: '',
        razons: '',
        rfc: '',
        email: '',
        email2: '',
        email3: '',
        calle: '',
        numero_exterior: '',
        numero_interior: '',
        codpos: '',
        colonia: '',
        estado: ''
    })

    

   
    


    const onSubmit = async (data) => {
        const response = await fetch('http://localhost:5000/api/clientes/add', {
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
    }

    const handleType = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }


    return (
        <div className="container fs-5">
                <div className="row">
                    <div className="col text-left pt-5">
                        <h5 className="h2 uppercase text-center">
                            Registra tus datos fiscales
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-5">
                        <form onSubmit={handleSubmit(onSubmit)} className={ errors === {} ? 'was-validated' : 'needs-validated' } noValidate>
                            
                            <div className="mb-3 text-left">
                                <label htmlFor="rfc" className="form-label">RFC</label>
                                <input value={ data.rfc } type="text" className="form-control fs-6" id="rfc" {...register("rfc", {required: true})} onChange={ handleType } />
                            </div>
                            

                            <div className="row">
                                <div className="col-6 mb-3 text-left">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input value={ data.nombre } type="text" className="form-control fs-6" id="name" {...register("nombre", {required: true})} onChange={ handleType } />
                                </div>

                                <div className="col-6 mb-3 text-left">
                                    <label htmlFor="apeidos" className="form-label">Apellidos</label>
                                    <input value={ data.apellidos } type="text" className="form-control fs-6" id="apeidos" {...register("apellidos", {required: true})} onChange={ handleType } />
                                </div>
                            </div>

                            <div className=" mb-3 text-left">
                                <label htmlFor="razons" className="form-label">Razon Social</label>
                                <input value={ data.razons } type="text" className="form-control fs-6" id="razons" {...register("razons", {required: true,})} onChange={ handleType } />
                            </div>


                            <div className=" mb-3 text-left">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input value={ data.telefono } type="text" className="form-control fs-6" id="telefono" {...register("telefono", {required: true,})} onChange={ handleType } />
                            </div>

                            
                            <div className="mb-3 text-left">
                                <label htmlFor="exampleInputMail" className="form-label">Correos:</label>
                                <input value={ data.email }  type="text" className="form-control fs-6"  id="email" {...register("email", {required: true,  pattern: /^\S+@\S+$/i})} onChange={ handleType } />
                                <input value={ data.email2 }  type="text" className="form-control fs-6" id="email2" {...register("email2", { pattern: /^\S+@\S+$/i})} onChange={ handleType } />
                                <input value={ data.email3 }  type="text" className="form-control fs-6" id="email3" {...register("email3", { pattern: /^\S+@\S+$/i})} onChange={ handleType } />
                            </div>


                            <div className="row">
                                <div className="col-3 mb-3 text-left">
                                    <label htmlFor="codpos" className="form-label"><abbr title="Codigo Postal">C.P</abbr></label>
                                    <input value={ data.codpos } type="text" className="form-control fs-6" id="codpos" {...register("codpos", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-4 mb-3 text-left">
                                    <label htmlFor="Estado" className="form-label">Estado</label>
                                    <input value={ data.estado } type="text" className="form-control fs-6" id="Estado"  {...register("estado", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-5 mb-3 text-left">
                                    <label htmlFor="colonia" className="form-label">Colonia</label>
                                    <input value={ data.colonia } type="text" className="form-control fs-6" id="colonia" {...register("colonia", {required: true})} onChange={ handleType } />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 mb-3 text-left">
                                    <label htmlFor="calle" className="form-label">Calle</label>
                                    <input value={ data.calle } type="text" className="form-control fs-6" id="calle" {...register("calle", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-3 mb-3 text-left">
                                    <label htmlFor="numero_exterior" className="form-label">Num. Ext.</label>
                                    <input value={ data.numero_exterior } type="text" className="form-control fs-6" id="numero_exterior" {...register("numero_exterior", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-3 mb-3 text-left">
                                    <label htmlFor="numero_interior" className="form-label">Num. Int.</label>
                                    <input value={ data.numero_interior } type="text" className="form-control fs-6" id="numero_interior" {...register("numero_interior")} onChange={ handleType } />
                                </div>
                            </div>


                            
                            



                            
                            <div className="col mx-auto text-center">
                                    <button type="submit" className="btn btn-primary btn-lg" >Enviar</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
    )
}
