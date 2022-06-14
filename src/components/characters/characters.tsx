import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingSelector } from '../../store/selectors/loader';
import { getCharacters } from '../../store/actionCreators/characters';
import Loader from '../loader/loader';
import CharactersList from '../charactersList/charactersList';
import SearchForm from '../searchForm/searchForm';

const Characters: React.FC = () => {
  const { loading, errorMessage } = useSelector(loadingSelector);
  const dispatch = useDispatch();

  const charactersList = useMemo(() => {
    return dispatch(getCharacters());
  }, [dispatch]);

  useEffect(() => {}, [charactersList]);

  if (loading) {
    return <Loader />;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <>
      <SearchForm />
      <CharactersList />
    </>
  );
};

export default Characters;
