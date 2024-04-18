import React from "react";
import MyForm from "./MyForm.tsx";
import MySnackbar from "./MySnackbar.tsx";
import MyMessage from "./MyMessage.tsx";
import { Button } from "antd";

export default function Home () {

    const jump = () => {
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