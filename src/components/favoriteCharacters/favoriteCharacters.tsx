import React from 'react';
import { useSelector } from 'react-redux';
import { Box, List, ListItem, Typography } from '@mui/material';
import { charactersSelector } from '../../store/selectors/characters';

const FavoriteCharacters: React.FC = () => {
  const { favoriteCharacters } = useSelector(charactersSelector);

  if (!favoriteCharacters.length) {
    return <Typography>You have no favorite characters</Typography>;
  }

  return (
    <Box sx={{ width: '100%' }}>
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
