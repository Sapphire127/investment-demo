import React from "react";
import MyForm from "./MyForm.tsx";
import MySnackbar from "./MySnackbar.tsx";
import MyMessage from "./MyMessage.tsx";

export default function Home () {
    return (
        <>
            <MyForm />
            <MySnackbar />
            <MyMessage />
        </>
    );
}