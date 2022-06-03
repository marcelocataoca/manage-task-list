import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useModal } from "../hooks/useModal";

interface ModalProps {
  titleList: string[];
  setList: (titleList: string[]) => void;
}

export function Modal({ titleList, setList }: ModalProps) {
  const [nameOwner, setNameOwner] = useState<string | null>(null);
  const { isModalVisible, setIsModalVisible } = useModal();

  function handleClose() {
    setIsModalVisible(!isModalVisible);
  }

  function handleRegister() {
    setList([...titleList, nameOwner!]);
    handleClose();
  }

  return (
    <Dialog
      open={isModalVisible}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Tasks List
      </DialogTitle>
      <Box component="form" noValidate autoComplete="off">
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            onChange={(event) => setNameOwner(event.target.value)}
            label="Responsável"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleRegister} disabled={!nameOwner}>Salvar</Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}
