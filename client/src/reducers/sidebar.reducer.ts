import { PayloadAction } from '@reduxjs/toolkit';
import actions from '../enum/actions.enum';
// import { initialState, State } from '../store/initialState';

const sidebar = (
  state = { sidebarStatus: false },
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
