import React from 'react';
import {List, ListItem, ListItemText, ListItemAvatar} from '@mui/material';
import './Recipe.css';

function Recipe(props) {
    return (
        <List className="recipe__list">
          <ListItem disablePadding>
              <ListItemAvatar>
                {/* <InboxIcon /> */}
              </ListItemAvatar>
              <ListItemText primary={props.text} secondary="Khana ke recipe" />
          </ListItem>
        </List>
        // <div>
        //     <li>{props.text}</li>
        // </div>
    )
}

export default Recipe
