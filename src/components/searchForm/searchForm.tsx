import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Autocomplete, TextField } from '@mui/material';
import { charactersSelector } from '../../store/selectors/characters';
import { getCharacterById } from '../../store/actionCreators/characters';
import { Character } from '../../types/characters';
import './searchForm.css';

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const { characters } = useSelector(charactersSelector);
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>, character: Character) => {
    dispatch(getCharacterById(character!.id!));
    navigate(`/characters/${character.id}`, { replace: true });
  };

  return (
    <Autocomplete
      className="SearchForm"
      disablePortal
      id="characters"
      options={characters?.results!}
      sx={{ width: 300 }}
      renderInput={(character) => <TextField {...character} label="Search character" />}
      noOptionsText="No available character"
      getOptionLabel={(character) => `${character.name}`}
      onChange={changeHandler}
    />
  );
};

export default SearchForm;
