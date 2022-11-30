import { PayloadAction } from '@reduxjs/toolkit';
import actions from '../enum/actions.enum';
import { initialState } from '../store/initialState';

const board = (
  state = {activeBoard: initialState.boards[0]},
  action: PayloadAction<number>
) => {
  switch (action.type) {
    case actions.SWITCH_BOARD:
      return { ...state, activeBoard: initialState.boards[action.payload]};
    default:
      return state;
  }
};

export default board;
