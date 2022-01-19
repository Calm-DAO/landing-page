import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./Introduc.module.scss";

const Introducing: React.FC = () => {
  return (
    <div className={styles.introduc_wrapper}>
      <Container>
        <Grid container spacing={2} className={styles.introduc_content}>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            className={styles.introduc_left_side}
          >
            <Typography
              variant="h6"
              color="inherit"
              className={styles.introduc_left_title}
            >
              Real Team, Real Product
            </Typography>
            <Typography
              variant="subtitle1"
              color="inherit"
              className={styles.introduc_left_description}
            >
              {`We've implemented codes ourselves, unlike other OHM forks that
              hire contractors to copy codes. 
              We are the engineers.`}
            </Typography>
            <a
              href="https://docs.calmdao.finance/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.introduc_left_button}
              >
                View Documentation
              </Button>
            </a>
          </Grid>
          {/* <Grid
            item
            md={6}
            sm={6}
            xs={12}
            className={styles.introduc_right_side}
          >
            <div className={styles.img_wrapper}></div>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Introducing;