import React from "react";

export default React.createContext({
  isGrid: false,
  isDark: false,
  setDark: () => {},
  onSwitchView: () => {}
});
