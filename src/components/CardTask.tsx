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
    control
  } = useForm({ 
    resolver: yupResolver(taskShema)
  });

  const handleAddTaskList = () => {
    console.log(taskName);
    console.log(priority);  
  }

  const onError = (error: any) => {
    console.log('erro: ', error);
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
          <form onSubmit={handleSubmit(handleAddTaskList, onError)}>
            <TextField
              autoFocus              
              id="task"
              {...register('task')}
              onChange={(event) => setTaskName(event.target.value as string)}
              style={{marginTop: 0}}
              sx={{ minWidth: 160 }}
              label="Qual a task?"
              error={errors.task}
            />         
            <Typography variant="inherit" color="textSecondary">
                {errors.task?.message}
            </Typography>
                          
            <Select
              {...register('priority')}
              onChange={(event) => setPriority(event.target.value as string)}             
              id="priority"
              style={{ marginLeft: 10 }}
              label="Priority:"
              error={errors.priority}      
            >
              <MenuItem value={"low"}>Low</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hight"}>Hight</MenuItem>
            </Select>
            <Typography variant="inherit" color="textSecondary">
                {errors.priority?.message}
            </Typography>
            <Button
              variant="contained"
              type="submit"
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
