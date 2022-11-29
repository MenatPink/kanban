import actions from '../enum/actions.enum';

export const openSidebarAction = () => {
  console.log('this was clicked')
  return {
    type: actions.SIDEBAR_OPENED,
  }};
