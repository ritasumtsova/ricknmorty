import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Box,
  List,
  ListItem,
  Typography,
  Button,
} from '@mui/material';
import { charactersSelector } from '../../store/selectors/characters';

const FavoriteCharacters: React.FC = () => {
  const { favoriteCharacters } = useSelector(charactersSelector);
  const navigate = useNavigate();

  if (!favoriteCharacters.length) {
    return <Typography>You have no favorite characters</Typography>;
  }

  const backToCharacters = () => {
    navigate('/characters');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Button onClick={backToCharacters}>Back to characters</Button>
      <List>
        {favoriteCharacters.map((character) => {
          return (
            <ListItem key={character.id}>
              {`Name: ${character.name}, status: ${character.status}`}
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default FavoriteCharacters;
