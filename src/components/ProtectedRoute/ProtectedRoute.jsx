import React from 'react';
import { Redirect, Route } from 'react-router';

export default function ProtectedRoute(props) {
    if (localStorage.getItem('userToken')) {
        if (props.loginUser) {
            if (props.context) {
                return (<props.context>
                    <Route path={props.path}> <props.component loginUser={props.loginUser} /> </Route>
                </props.context>)
            }
        }
        return (<props.context><Route path={props.path}> <props.component /> </Route></props.context>)
    }
    else {
        return (<Redirect to='/login' />);

    }
}
