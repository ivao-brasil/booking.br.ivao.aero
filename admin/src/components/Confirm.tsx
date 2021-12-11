import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { FunctionComponent } from 'react';

export interface ConfirmProps {
  text: string;
  onConfirm: (value: boolean) => void;
  deletion?: boolean;
}

export const Confirm: FunctionComponent<ConfirmProps> = ({ text, onConfirm, deletion = false }) => {
  return (
    <Dialog onClose={() => onConfirm(false)} open>
      <DialogTitle>Confirmation</DialogTitle>
      <DialogContent>
        <DialogContentText>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onConfirm(false)}>Cancel</Button>
        <Button onClick={() => onConfirm(true)} variant="contained" color={deletion ? 'error' : 'primary'}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};
