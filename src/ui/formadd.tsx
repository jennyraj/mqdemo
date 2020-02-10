import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialogAdd() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleClickOpen}>
                Add Patient
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Patient</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstname"
                        label="First Name"
                        type="string"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="lastnamename"
                        label="Last Name"
                        type="string"
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="birthdate"
                        label="Birth Date"
                        type="date"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button  onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button  variant="contained" onClick={handleClose} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
