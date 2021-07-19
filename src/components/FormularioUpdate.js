import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';








export const FormularioUpdate = () => {
    const { rfc } = useParams();
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
        ciudad: '',
        delegacion: '',
        localidad: '',
        cfdis: '',
        numregidtrib: '',
        usocfdi: '',
        estado: ''
    })
    const [isDisable, setisDisable] = useState(false)

    

   
    useEffect(() => {
        const bringData = async () => {
            await fetch(`http://localhost:5000/api/clientes/getByRFC?rfc=${ rfc }`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then( (res) => res.json())
            .then( async (res) => {
                const resData = await res;
                if (resData.status==="error"){

                } else {
                    setData({
                        nombre: (resData.Data.Contacto.Nombre) ? resData.Data.Contacto.Nombre : '',
                        apellidos: (resData.Data.Contacto.Apellidos) ? resData.Data.Contacto.Apellidos : '',
                        telefono: (resData.Data.Contacto.Telefono) ? resData.Data.Contacto.Telefono : '',
                        razons: (resData.Data.RazonSocial) ? resData.Data.RazonSocial : '',
                        rfc: (resData.Data.RFC) ? resData.Data.RFC : '',
                        email: (resData.Data.Contacto.Email) ? resData.Data.Contacto.Email : '',
                        email2: (resData.Data.Contacto.Email2) ? resData.Data.Contacto.Email2 : '',
                        email3: (resData.Data.Email3) ? resData.Data.Email3 : '',
                        calle: (resData.Data.Calle) ? resData.Data.Calle : '',
                        numero_exterior: (resData.Data.Numero) ? resData.Data.Numero : '',
                        numero_interior: (resData.Data.Interior) ? resData.Data.Interior : '',
                        codpos: (resData.Data.CodigoPostal) ? resData.Data.CodigoPostal : '',
                        colonia: (resData.Data.Colonia) ? resData.Data.Colonia : '',
                        ciudad: (resData.Data.Ciudad) ? resData.Data.Ciudad : '',
                        delegacion: (resData.Data.Delegacion) ? resData.Data.Delegacion : '',
                        localidad: (resData.Data.Localidad) ? resData.Data.Localidad : '',
                        cfdis: (resData.Data.cfdis) ? resData.Data.cfdis : '',
                        numregidtrib: (resData.Data.NumRegIdTrib) ? resData.Data.NumRegIdTrib : '',
                        usocfdi: (resData.Data.UsoCFDI) ? resData.Data.UsoCFDI : '',
                        uid: resData.Data.UID,
                        estado: (resData.Data.Estado) ? resData.Data.Estado : ''
                    })
                    
                }
                return resData;
            })
        }
        if(rfc) {
            bringData();
        } else {
            
        }
    }, [rfc])



    const onSubmit = async (dataForm) => {
        
        const response = await fetch('http://localhost:5000/api/clientes/update', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({...dataForm, uid: data.uid})
        })
        .then( (res) => res.json() )
        .then(async (res) => {
            const resData = await res;
            return resData;
        })
        if(response.status === "success"){
            setisDisable(true);
        } else {
            setisDisable(false);
        }
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
                            Actualiza tus datos fiscales
                        </h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-5">
                        <form onSubmit={handleSubmit(onSubmit)} className={ ( errors === {} ) ?  'was-validated' : 'needs-validated' } noValidate="">
                            
                            <div className="mb-3 text-left">
                                <label htmlFor="rfc" className="form-label">RFC</label>
                                <input value={ data.rfc } type="text" className={`form-control fs-6 ${ errors.rfc ? 'is-invalid' : ' ' } `} id="rfc" {...register("rfc", {required: true})} onChange={ handleType } />
                            </div>
                            

                            <div className="row">
                                <div className="col-6 mb-3 text-left">
                                    <label htmlFor="name" className="form-label">Nombre</label>
                                    <input value={ data.nombre } type="text" className={ `form-control fs-6 ${ errors.nombre ? 'is-invalid' : ' ' } `} id="name" {...register("nombre", {required: true})} onChange={ handleType } />
                                </div>

                                <div className="col-6 mb-3 text-left">
                                    <label htmlFor="apeidos" className="form-label">Apellidos</label>
                                    <input value={ data.apellidos } type="text" className={ `form-control fs-6 ${ errors.apellidos ? 'is-invalid' : ' ' } `} id="apeidos" {...register("apellidos", {required: true})} onChange={ handleType } />
                                </div>
                            </div>

                            <div className=" mb-3 text-left">
                                <label htmlFor="razons" className="form-label">Razon Social</label>
                                <input value={ data.razons } type="text" className={ `form-control fs-6 ${ errors.razons ? 'is-invalid' : ' ' } `} id="razons" {...register("razons", {required: true,})} onChange={ handleType } />
                            </div>


                            <div className=" mb-3 text-left">
                                <label htmlFor="telefono" className="form-label">Telefono</label>
                                <input value={ data.telefono } type="text" className={ `form-control fs-6 ${ errors.telefono ? 'is-invalid' : ' ' } `} id="telefono" {...register("telefono", {required: true,})} onChange={ handleType } />
                            </div>

                            
                            <div className="mb-3 text-left">
                                <label htmlFor="exampleInputMail" className="form-label">Correos:</label>
                                <input value={ data.email }  type="text" className={ `form-control fs-6 ${ errors.email ? 'is-invalid' : ' ' } `}  id="email" required {...register("email", {required: true,  pattern: /^\S+@\S+$/i})} onChange={ handleType } />
                                <input value={ data.email2 }  type="text" className={ `form-control fs-6 ${ errors.email2 ? 'is-invalid' : ' ' } `} id="email2" {...register("email2", { pattern: /^\S+@\S+$/i})} onChange={ handleType } />
                                <input value={ data.email3 }  type="text" className={ `form-control fs-6 ${ errors.email3 ? 'is-invalid' : ' ' } `} id="email3" {...register("email3", { pattern: /^\S+@\S+$/i})} onChange={ handleType } />
                            </div>


                            <div className="row">
                                <div className="col-3 mb-3 text-left">
                                    <label htmlFor="codpos" className="form-label"><abbr title="Codigo Postal">C.P</abbr></label>
                                    <input value={ data.codpos } type="text" className={ `form-control fs-6 ${ errors.codpos ? 'is-invalid' : ' ' } `} id="codpos" {...register("codpos", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-4 mb-3 text-left">
                                    <label htmlFor="Estado" className="form-label">Estado</label>
                                    <input value={ data.estado } type="text" className={ `form-control fs-6 ${ errors.estado ? 'is-invalid' : ' ' } `} id="Estado"  {...register("estado", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-5 mb-3 text-left">
                                    <label htmlFor="ciudad" className="form-label">Ciudad</label>
                                    <input value={ data.ciudad } type="text" className={ `form-control fs-6 ${ errors.ciudad ? 'is-invalid' : ' ' } `} id="ciudad" {...register("ciudad", {required: true})} onChange={ handleType } />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-4 mb-3 text-left">
                                    <label htmlFor="localidad" className="form-label">Localidad</label>
                                    <input value={ data.localidad } type="text" className={ `form-control fs-6 ${ errors.localidad ? 'is-invalid' : ' ' } `} id="localidad" {...register("localidad", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-4 mb-3 text-left">
                                    <label htmlFor="colonia" className="form-label">Colonia</label>
                                    <input value={ data.colonia } type="text" className={ `form-control fs-6 ${ errors.colonia ? 'is-invalid' : ' ' } `} id="colonia" {...register("colonia", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-4 mb-3 text-left">
                                    <label htmlFor="delegacion" className="form-label">Delegacion</label>
                                    <input value={ data.delegacion } type="text" className={ `form-control fs-6 ${ errors.delegacion ? 'is-invalid' : ' ' } `} id="delegacion" {...register("delegacion", {required: true})} onChange={ handleType } />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-6 mb-3 text-left">
                                    <label htmlFor="calle" className="form-label">Calle</label>
                                    <input value={ data.calle } type="text" className={ `form-control fs-6 ${ errors.calle ? 'is-invalid' : ' ' } `} id="calle" {...register("calle", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-3 mb-3 text-left">
                                    <label htmlFor="numero_exterior" className="form-label">Num. Ext.</label>
                                    <input value={ data.numero_exterior } type="text" className={ `form-control fs-6 ${ errors.numero_exterior ? 'is-invalid' : ' ' } `} id="numero_exterior" required {...register("numero_exterior", {required: true})} onChange={ handleType } />
                                </div>
                                <div className="col-3 mb-3 text-left">
                                    <label htmlFor="numero_interior" className="form-label">Num. Int.</label>
                                    <input value={ data.numero_interior } type="text" className={ `form-control fs-6 ${ errors.numero_interior ? 'is-invalid' : ' ' } `} id="numero_interior" {...register("numero_interior")} onChange={ handleType } />
                                </div>
                            </div>


                            <div className="row pb-4">
                                <div className="col-5">
                                    <label htmlFor="numregidtrib" className="form-label">Num. registro tribunal</label>
                                    <input value={ data.numregidtrib } type="text" className={ `form-control fs-6 ${ errors.numregidtrib ? 'is-invalid' : ' ' } `} id="numregidtrib" {...register("numregidtrib")} onChange={ handleType } />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="usocfdi" className="form-label">Uso CFDI</label>
                                    <input value={ data.usocfdi } type="text" className={ `form-control fs-6 ${ errors.usocfdi ? 'is-invalid' : ' ' } `} id="usocfdi" {...register("usocfdi")} onChange={ handleType } />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="cfdis" className="form-label">CFDIS</label>
                                    <input value={ data.cfdis } type="text" className={ `form-control fs-6 ${ errors.cfdis ? 'is-invalid' : ' ' } `} id="cfdis" {...register("cfdis")} onChange={ handleType } />
                                </div>
                            </div>


                            
                            <div className="col mx-auto text-center">
                                    <button type="submit" className="btn btn-primary btn-lg" disabled={ isDisable } >Envíar</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
    )
}
