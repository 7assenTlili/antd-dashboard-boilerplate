export function getView(width) {
  if (width > 1220) {
    return "DesktopView";
  }
  if (width > 767) {
    return "TabView";
  }
  return "MobileView";
}

const actions = {
  TOGGLE_COLLAPSE: "TOGGLE_COLLAPSE",
  TOGGLE_ON_WINDOW_SIZE: "TOGGLE_ON_WINDOW_SIZE",
  toggleCollapse: () => ({
    type: actions.TOGGLE_COLLAPSE,
  }),
  toggleOnWindowSizeChange: ({ width }) => {
    const view = getView(width);
    console.log("Collapse =", view !== "DesktopView");
    return {
      type: actions.TOGGLE_ON_WINDOW_SIZE,
      payload: {
        view,
        collapsed: view !== "DesktopView",
      },
    };
  },
};

export default actions;
