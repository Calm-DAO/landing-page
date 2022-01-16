import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FaDiscord, FaMedium, FaTwitter, FaReddit } from "react-icons/fa";

type Anchor = "right";

export default function MenuDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ marginTop: "50px" }}>
        <ListItem button>
          <ListItemText
            primary={
              <Link
                to="https://eric-choi.gitbook.io/calmdao/"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                FAQs
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
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
            }
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
