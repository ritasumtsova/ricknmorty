import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, Box } from '@mui/material';
import { charactersSelector } from '../../store/selectors/characters';

const CharactersList: React.FC = () => {
  const { characters } = useSelector(charactersSelector);

  return (
    <Box sx={{ width: '100%' }}>
      <List>
        {characters?.results.length && characters?.results.map((character) => {
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

export default CharactersList;
