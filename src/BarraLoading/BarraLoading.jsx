import React from "react";
import classes from "./BarraLoading.module.css";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import { margin } from "@mui/system";

function BarraLoading() {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.progress}>
          <CakeOutlinedIcon
            style={{
              position: "absolute",
              color: "#DE6097",
              fontFamily: "Material Icons",
              alignItems: "center",
              marginTop: "-13px",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default BarraLoading;

