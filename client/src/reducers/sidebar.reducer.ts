import { PayloadAction } from '@reduxjs/toolkit';
import actions from '../enum/actions.enum';

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
