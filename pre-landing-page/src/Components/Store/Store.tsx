import React from "react";
import styles from "./Store.module.scss";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Store: React.FC = () => {
  return (
    <div className={styles.store_wrapper}>
      <Container>
        <Grid container spacing={1} className={styles.store_content}>
          <Grid
            item
            md={7}
            sm={7}
            xs={12}
            className={styles.store_left_content}
          >
            <Typography variant="h3" color="inherit">
              A true Store of Value doesn’t exist—yet
            </Typography>
          </Grid>
          <Grid
            item
            md={5}
            sm={5}
            xs={12}
            className={styles.store_right_content}
          >
            <Typography variant="subtitle1" color="inherit">
              A Store of Value is an asset that is stable or increases in value
              over time.
            </Typography>
            <br />
            <Typography variant="subtitle1" color="inherit">
              Stablecoins are vulnerable to inflationary policies, while Bitcoin
              or Ethereum suffer from market crashes or manipulation. None of
              these is a true Store of Value.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Store;
