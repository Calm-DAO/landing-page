import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Logo from "../../../assets/logo.png";
import styles from "./Footer.module.scss";
import { FaDiscord, FaMedium, FaTwitter, FaReddit } from "react-icons/fa";
// import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer_wrapper}>
      <Container>
        <Grid container spacing={2}>
          <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_one_wrapper}
          >
            <div className={styles.footer_logo_wrapper}>
              <img src={Logo} alt="logo" className={styles.header_logo} />
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
                  <a
                    href="https://twitter.com/calm_dao"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/rXdeVczEbE"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li>
                  <a
                    href="https://medium.com/@calmdao66"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaMedium />
                  </a>
                </li>
                {/* <li>
                  <a
                    href="/"
                    style={{
                      textDecoration: "none",
                      color: "#000000",
                      fontSize: "30px",
                      padding: "0 10px",
                    }}
                    target="_blank"
                  >
                    <FaReddit />
                  </a>
                </li> */}
              </ul>
            </div>
          </Grid>
          {/* <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_two_wrapper}
          >
            <div className={styles.footer_two_title}>
              <Typography variant="subtitle1" color="inherit">
                Products
              </Typography>
            </div>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>
                <a href="/">Bonds</a>
              </li>
              <li>
                <a href="/">Staking</a>
              </li>
              <li>
                <a href="/">CalmDAO</a>
              </li>
            </ul>
          </Grid> */}
          {/* <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_three_wrapper}
          >
            <div className={styles.footer_three_title}>
              <Typography variant="subtitle1" color="inherit">
                Learn
              </Typography>
            </div>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>
                <a href="/">Documention</a>
              </li>
              <li>
                <a href="/">Medium</a>
              </li>
            </ul>
          </Grid> */}
          {/* <Grid
            item
            md={3}
            sm={6}
            xs={12}
            className={styles.footer_four_wrapper}
          >
            <div className={styles.footer_four_title}>
              <Typography variant="subtitle1" color="inherit">
                Join the community
              </Typography>
            </div>

            <ul style={{ display: "flex", flexDirection: "column" }}>
              <li>
                <a
                  href="https://discord.gg/rXdeVczEbE"
                  target="_blank"
                  style={{ fontWeight: "bold" }}
                >
                  Join Discord
                </a>
              </li>
            </ul>

            <div className={styles.footer_four_title}>
              <Typography variant="subtitle1" color="inherit">
                CalmDAO Weekly
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                Get updates on new products, features, events, and more.
              </Typography>
            </div>
          </Grid> */}
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
