/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable perfectionist/sort-imports */
/* eslint-disable perfectionist/sort-named-imports */
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Box,
} from '@mui/material';
import { FormData } from './types/typeUser';

type FormDialogProps = {
  open: boolean;
  onClose: () => void;
  fields: { name: keyof FormData; label: string }[];
  onSubmit: (data: FormData) => void;
};

export const FormDialogPop = ({ open, onClose, fields, onSubmit }: FormDialogProps) => {
  const methods = useForm<FormData>();

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    onSubmit(data);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <FormProvider {...methods}>
          <Box component="form" onSubmit={methods.handleSubmit(handleSubmit)}>
            {fields.map((field, index) => (
              <TextField
                key={index}
                {...methods.register(field.name)}
                label={field.label}
                variant="outlined"
                margin="normal"
                fullWidth
              />
            ))}
            <DialogActions>
              <Button onClick={onClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </DialogActions>
          </Box>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};
