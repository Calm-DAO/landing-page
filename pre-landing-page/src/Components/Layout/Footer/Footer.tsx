import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import mainLogo from "../../../assets/logo.png";
import styles from "./Footer.module.scss";
import { FaDiscord, FaMedium, FaTwitter, FaReddit } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Container>
      <Grid container spacing={2} className={styles.footer_wrapper}>
        <Grid item md={3} sm={6} xs={12} className={styles.footer_one_wrapper}>
          <div className={styles.footer_logo_wrapper}>
            <img src={mainLogo} alt="logo" className={styles.header_logo} />
            <Typography
              variant="h6"
              color="inherit"
              className={styles.header_title}
            >
              CalmDAO
            </Typography>
          </div>
          <div>
            <ul style={{ display: "flex" }}>
              <li>
                <Link
                  to="https://twitter.com/calmdao66"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    fontSize: "30px",
                    padding: "0 10px",
                  }}
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  to="https://discord.gg/rXdeVczEbE"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    fontSize: "30px",
                    padding: "0 10px",
                  }}
                >
                  <FaDiscord />
                </Link>
              </li>
              <li>
                <Link
                  to="https://medium.com/@calmdao66"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    fontSize: "30px",
                    padding: "0 10px",
                  }}
                >
                  <FaMedium />
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{
                    textDecoration: "none",
                    color: "#000000",
                    fontSize: "30px",
                    padding: "0 10px",
                  }}
                >
                  <FaReddit />
                </Link>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className={styles.footer_two_wrapper}>
          <div>
            <Typography variant="subtitle1" color="inherit">
              Products
            </Typography>
          </div>

          <ul style={{ display: "flex", flexDirection: "column" }}>
            <li>
              <Link to="/">Bonds</Link>
            </li>
            <li>
              <Link to="/">Staking</Link>
            </li>
            <li>
              <Link to="/">CalmDAO</Link>
            </li>
          </ul>
        </Grid>
        <Grid
          item
          md={3}
          sm={6}
          xs={12}
          className={styles.footer_three_wrapper}
        >
          <div>
            <Typography variant="subtitle1" color="inherit">
              Learn
            </Typography>
          </div>

          <ul style={{ display: "flex", flexDirection: "column" }}>
            <li>
              <Link to="/">Documention</Link>
            </li>
            <li>
              <Link to="/">Medium</Link>
            </li>
          </ul>
        </Grid>
        <Grid item md={3} sm={6} xs={12} className={styles.footer_four_wrapper}>
          <div>
            <Typography variant="subtitle1" color="inherit">
              Join the community
            </Typography>
          </div>

          <ul style={{ display: "flex", flexDirection: "column" }}>
            <li>
              <Link to="/">Join Discord</Link>
            </li>
          </ul>

          <div>
            <Typography variant="h6" color="inherit">
              CalmDAO Weekly
            </Typography>
            <Typography variant="subtitle1" color="inherit">
              Get updates on new products, features, events, and more.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
