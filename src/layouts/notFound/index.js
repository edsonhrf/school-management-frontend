import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { Button } from "@mui/material";

function NotFound() {
  return (
    <div className={styles["not-found-layout"]}>
      <div className={styles["background-image"]}></div>
      <div className={styles["content"]}>
        <h1>404 - Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{
              backgroundColor: "#ffea00",
              color: "#000000",
              fontWeight: "bold",
            }}
          >
            Go to Home Page
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
