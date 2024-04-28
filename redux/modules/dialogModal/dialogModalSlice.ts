import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DialogModal } from './@types';

export const dialogModalSlice = createSlice({
    name: 'dialogModal',
    initialState: {
        open: true,
        title: '',
        content: '',
        status: '',
        countDown: 3000,
    } as DialogModal,
    reducers: {
        openDialog: (state, action: PayloadAction<DialogModal>) => {
            state.open = true;
            state.title = action.payload.title;
            state.content = action.payload.content;
            state.status = action.payload.status;
            state.confirmText = action.payload.confirmText;
            state.onConfirm = action.payload.onConfirm;
            state.cancelText = action.payload.cancelText;
            state.countDown = action.payload.countDown;
        },
        closeDialog: (state) => {
            state.open = false;
            state.title = '';
            state.content = '';
            state.status = '';
            state.confirmText = 'confirm';
            state.onConfirm = () => {};
        },
    },
});

export const { openDialog, closeDialog } = dialogModalSlice.actions;
export const dialogModalSelector = (state: { dialogModal: DialogModal }) => state.dialogModal;
export default dialogModalSlice.reducer;
