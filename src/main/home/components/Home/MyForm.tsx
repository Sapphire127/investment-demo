import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './MyForm.css';

function MyForm() {
    return (
        <form className='MyForm'>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                type="submit"
            >
                Submit
            </Button>
        </form>
    );
}

export default MyForm;