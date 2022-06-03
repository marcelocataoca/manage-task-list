import { Button, CardContent, IconButton, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/cardTask.scss";

interface CardProps {
  title: string;
  handleDelete: () => void
}

export function CardTask({ title, handleDelete }: CardProps) {

  return (
    <Card sx={{ minWidth: 275 }} style={{ marginTop: 15 }}>
      <CardContent>
        <div className="headerCard">
          <Typography gutterBottom className="titleCard" variant="h5" component="div">
            {title}
          </Typography>
          <IconButton onClick={() => handleDelete()}>
            <DeleteIcon color="secondary" fontSize="small" />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
}
