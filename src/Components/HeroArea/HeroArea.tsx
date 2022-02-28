import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import styles from "./HeroArea.module.scss";
import polygonImage from "../../assets/poweredByPolygon.png";

const HeroArea: React.FC = () => {
  return (
    <div className={styles.heroArea_wrapper}>
      <Container>
        <Grid container spacing={1} className={styles.heroArea_content}>
          <Grid item md={6} sm={12} xs={12}>
            <div className={styles.heroArea_button}>
              {/* <span>NEW</span> <h6>CalmDAO</h6>
              <p>Zap into Staked OHM with any asset</p>{" "} */}
              <h6>Releasing Soon!</h6>
              {/* <img src={arrayImage} alt="array" /> */}
            </div>
            <div className={styles.heroArea_info}>
              <Typography variant="h5" color="inherit">
                {/* The Decentralized Reserve Currency */}
                The Decentralized Reserve Currency for NFT Transactions
              </Typography>
              <Typography variant="h6" color="inherit">
                {/* Olympus is building a community-owned decentralized financial
                infrastructure to bring more stability and transparency for the
                world. */}
                CALM is the most stable rebase token in DeFi 2.0 used for NFT
                transactions.
              </Typography>
              <img
                src={polygonImage}
                alt="Powered by Polygon"
                style={{ marginLeft: "-10px" }}
              />
            </div>
          </Grid>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            className={styles.heroArea_right_wrapper}
          >
            <a
              href="https://discord.gg/rXdeVczEbE"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="contained"
                color="primary"
                className={styles.heroArea_rightButton}
              >
                Join Our Discord
              </Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroArea;
