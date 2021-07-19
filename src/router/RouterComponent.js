import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { FacturaList } from '../components/FacturaList';
import { FormularioFactura } from '../components/FormularioFactura';
import { FormularioRegistro } from '../components/FormularioRegistro';
import { FormularioUpdate } from '../components/FormularioUpdate';
import { MainMenu } from '../components/MainMenu'; 


export const RouterComponent = () => {
    
    return (
        <>
        <Switch>
            <Route exact path="/profile" >
                <MainMenu rfc="XAXX010101000" ></MainMenu>
            </Route>
            <Route exact path="/create" component={ FormularioRegistro }></Route>
            <Route exact path="/edit/:rfc" component={ FormularioUpdate  } ></Route>
            <Route exact path="/crearFactura/:uid" component={ FormularioFactura }></Route>
            <Route exact path="/facturas">
                <FacturaList rfc="XAXX010101000"></FacturaList>
            </Route>
            <Redirect to="/profile" ></Redirect>
        </Switch>
        </>
    )
}
