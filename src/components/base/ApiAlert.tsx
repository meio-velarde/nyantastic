import {Alert} from "@mui/material";
import React from "react";
import {ArrowDropDown} from "@mui/icons-material";

export interface ApiAlertProps {
    message: string
}

export const ApiAlert: React.FC<ApiAlertProps> = ({ message }) => {
    return (
        <Alert variant="outlined" severity={"error"}>
            {message}
        </Alert>
    )
}

export default ApiAlert