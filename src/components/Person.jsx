import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  List,
  ListItem,
  Typography,
  Button,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Person = ({ person }) => {
  return (
    <Card sx={{ maxWidth: 345, textAlign: "center" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {person.name}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          sx={{ fontSize: 20, color: "#FF6C6C", fontWeight: 500 }}
        >
          {person.price}
        </Typography>
        <List
          sx={{
            width: 335,
            maxWidth: "100%",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
          }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary={person.textBody} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary={person.body2} />
            </ListItemButton>
          </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{ mb: 2 }}>
        <Button
          color="primary"
          variant="contained"
          sx={{ margin: "0 auto", width: 240, height: 40, borderRadius: 2 }}
        >
          Записатись
        </Button>
      </CardActions>
    </Card>
  );
};
export default Person;
