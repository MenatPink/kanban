import actions from '../enum/actions.enum'


export const switchThemeAction = (theme: boolean) => ({
    type: actions.SWITCH_THEME,
    payload: theme
})