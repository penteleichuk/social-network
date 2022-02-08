import {useMatch} from "react-router-dom";
import React from "react";

export const withRouter = (Component: any) =>{
    return (props: any) => {
        const match = useMatch('/profile/:userId/');
        return <Component {...props} match={match}/>;
    };
}