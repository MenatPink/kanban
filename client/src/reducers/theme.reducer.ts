import { PayloadAction } from '@reduxjs/toolkit';
import actions from '../enum/actions.enum';

const theme = (state = { darkMode: true }, action: PayloadAction) => {
  switch (action.type) {
    case actions.SWITCH_THEME:
      return { ...state, darkMode: action.payload };
    default:
      return state;
  }
};

export default theme;
