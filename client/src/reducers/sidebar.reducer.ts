import { PayloadAction } from '@reduxjs/toolkit';
import actions from '../enum/actions.enum';
import { initialState } from '../store/initialState';

interface State {
  sidebarStatus: boolean;
}

const sidebar = (
  state: State = initialState,
  action: PayloadAction<boolean>
) => {
  switch (action.type) {
    case actions.SIDEBAR_OPENED:
      return { ...state, sidebarStatus: true };
    case actions.SIDEBAR_CLOSED:
      return { ...state, sidebarStatus: false };
    default:
      return state;
  }
};

export default sidebar;
