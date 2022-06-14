import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { charactersSelector } from '../../store/selectors/characters';
import { setFavoriteCharacter } from '../../store/actionCreators/characters';

const Characters: React.FC = () => {
  const { character } = useSelector(charactersSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {character?.name}
        </Typography>
        <Typography variant="h5" component="div">
          {`${character?.species}, ${character?.location.name}, ${character?.gender}`}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {`Total episods: ${character?.episode.length}, status ${character?.status}`}
        </Typography>
        <Typography variant="body2">
          {`Created: ${character?.created}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          endIcon={<FavoriteIcon />}
          onClick={() => dispatch(setFavoriteCharacter(character!))}
        >
          Like
        </Button>
        <Button
          size="small"
          onClick={() => navigate('characters/favorite')}
        >
          See favorite characters
        </Button>
      </CardActions>
    </Card>
  );
};

export default Characters;
