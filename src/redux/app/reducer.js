import actions, { getView } from "./actions";

const initState = {
  collapsed: window.innerWidth <= 1220,
  view: getView(window.innerWidth),
};

export default function appReducer(state = initState, action) {
  if (action.type === actions.TOGGLE_COLLAPSE) {
    return {
      ...state,
      collapsed: !state.collapsed,
    };
  }

  if (action.type === actions.TOGGLE_ON_WINDOW_SIZE) {
    if (state.view !== action.payload.view) {
      return {
        ...state,
        collapsed: action.payload.collapsed,
        view: action.view,
      };
    }
  }

  return state;
}
