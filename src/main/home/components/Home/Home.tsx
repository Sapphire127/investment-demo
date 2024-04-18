import React from "react";
import MyForm from "./MyForm.tsx";
import MySnackbar from "./MySnackbar.tsx";
import MyMessage from "./MyMessage.tsx";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Home () {

    const navigate = useNavigate();

    const jump = () => {
        navigate("chart");
        console.log("jump!");
    }

    return (
        <>
            <MyForm />
            <MySnackbar />
            <MyMessage />
            <Button onClick={jump}>JUMP</Button>
        </>
    );
}