import actions from '../enum/actions.enum';

export const switchBoardAction = (index: number) => ({
  type: actions.SWITCH_BOARD,
  payload: index
});
