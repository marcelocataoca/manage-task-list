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
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from "react";
import * as yup from 'yup';

interface CardProps {
  title: string;
  handleDelete: () => void;
}

export function CardTask({ title, handleDelete }: CardProps) {
  const [taskName, setTaskName] = useState("");
  const [priority, setPriority] = useState("");

  const taskShema = yup.object({
    task: yup
      .string()
      .required(),
    priority: yup
      .string()
      .required()
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(taskShema)
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
          <form onSubmit={handleSubmit(handleAddTaskList)}>
            <TextField
              autoFocus            
              margin="dense"
              id="task"
              style={{marginTop: 0}}
              sx={{ minWidth: 160 }}
              label="Qual a task?"
              {...register("task")}
            />
           <p>{errors.task?.message}</p>
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
            {errors.task && <span>Task is required</span>}
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
