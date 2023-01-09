import {createSlice} from '@reduxjs/toolkit';
import {CARDS_PER_STEP, NameSpace} from '../../const';
import {
  changeFilmStatusToView,
  fetchFavoriteFilmsAction,
  fetchFilmsAction,
  fetchPromoAction
} from '../api-actions';
import {MainData} from '../../types/main-data';
import {DEFAULT_GENRE} from '../../types/genres';
import {filterFilmsByGenre} from '../../utils/genre';

const initialState: MainData = {
  films: [],
  promo: null,
  isDataLoaded: false,
  currentGenre: DEFAULT_GENRE,
  filteredFilms: [],
  cardCount: 0,
  favoriteFilms: [],
  favoriteCount: 0
};

export const mainData = createSlice({
  name: NameSpace.MainScreen,
  initialState,
  reducers: {
    resetMainScreen: (state) => {
      state.currentGenre = DEFAULT_GENRE;
      state.filteredFilms = state.films;
      state.cardCount = state.films.length < CARDS_PER_STEP ? state.films.length : CARDS_PER_STEP;
    },
    changeGenre: (state, action) => {
      const filteredFilms = filterFilmsByGenre(state.films, action.payload.currentGenre);

      state.currentGenre = action.payload.currentGenre;
      state.filteredFilms = filteredFilms;
      state.cardCount = filteredFilms.length < CARDS_PER_STEP ?
        filteredFilms.length :
        CARDS_PER_STEP;
    },

    increaseCardCount: (state) => {
      state.cardCount = (state.cardCount + CARDS_PER_STEP) < state.filteredFilms.length ?
        state.cardCount + CARDS_PER_STEP :
        state.filteredFilms.length;
    },

    resetCardCount: (state) => {
      state.cardCount = state.filteredFilms.length < CARDS_PER_STEP ?
        state.filteredFilms.length :
        CARDS_PER_STEP;
    },

    setFavoriteCount: (state, action) => {
      state.favoriteCount = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        const films = action.payload;

        state.films = films;
        state.filteredFilms = films;
        state.cardCount = films.length < CARDS_PER_STEP ? films.length : 8;
        state.isDataLoaded = false;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
      })

      .addCase(fetchFavoriteFilmsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchFavoriteFilmsAction.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = action.payload.length;
        state.isDataLoaded = false;
      })
      .addCase(changeFilmStatusToView.fulfilled, (state, action) => {
        state.promo = action.payload;
        if (action.payload.isFavorite) {
          state.favoriteCount = state.favoriteCount + 1;
        } else {
          state.favoriteCount = state.favoriteCount - 1;
        }
      });
  }
});

export const {
  resetMainScreen,
  changeGenre,
  increaseCardCount,
} = mainData.actions;
