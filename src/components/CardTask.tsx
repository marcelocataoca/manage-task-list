import {
  Button,
  CardContent,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/cardTask.scss";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";

interface CardProps {
  title: string;
  handleDelete: () => void;
}

export function CardTask({ title, handleDelete }: CardProps) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      task: "",
      priority: { value: "hight", label: "Hight" },
    },
  });

  function handleAddTaskList() {
    console.log(taskName);
    console.log(priority);
  }

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: 15 }}>
      <CardContent>
        <div className="headerCard">
          <Typography
            gutterBottom
            className="titleCard"
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <IconButton onClick={() => handleDelete()}>
            <DeleteIcon color="secondary" fontSize="small" />
          </IconButton>
        </div>
        <div className="inputForm">
          <form>
            <TextField
              autoFocus
              required
              margin="dense"
              id="task"
              style={{marginTop: 0}}
              sx={{ minWidth: 160 }}
              onChange={(event) => setTaskName(event.target.value)}
              label="Qual a task?"
            />
            <Select
              onChange={(event) => setPriority(event.target.value as string)}
              labelId="simple-select-label"
              id="simple-select"
              style={{ marginLeft: 10 }}
              label="Priority:"
            >
              <MenuItem value={"low"}>Low</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hight"}>Hight</MenuItem>
            </Select>
            <Button
              variant="contained"
              style={{
                color: "white",
                marginLeft: 10,
                padding: 15,
                verticalAlign: "initial",
              }}
              onClick={handleAddTaskList}
            >
              Add
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
