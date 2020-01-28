import React from "react";
import { useContext } from "react";
import { ApplicationContext } from 'store/context';

const LogView: React.FC = () => {
    const {logData} = useContext(ApplicationContext);

    return (<p>{logData}</p>);
}

export default LogView;
