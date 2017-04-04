import * as React from "react";
import CircularProgress from "material-ui/CircularProgress";
const MainPanelWait = () => {
  return (
      <div className="main-panel main-panel-wait">
        <CircularProgress size={60} />
      </div>
      );
};

export default MainPanelWait;
