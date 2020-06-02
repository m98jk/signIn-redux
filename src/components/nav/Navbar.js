import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toggle from '../ui/buttons/toggle';

/// notification

import { AccountCircle, Notifications } from '@material-ui/icons';
import { IconButton, Badge } from '@material-ui/core';

//

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  Toggle: {
    margin: theme.spacing(1, 6),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 6,
    width: 15,
  },
}));

export default function Pricing() {
  const classes = useStyles();
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dark = useSelector((state) => state.dark);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Nabeel
          </Typography>

          <div className={classes.Toggle}>
            <IconButton color={dark ? 'secondary' : 'primary'}>
              <Badge
                badgeContent={counter}
                color={dark ? 'primary' : 'secondary'}
              >
                <Notifications />
              </Badge>
            </IconButton>
            <Toggle />
          </div>
          <nav>
            <Button
              href="/dashboard"
              variant="contained"
              color={dark ? 'secondary' : 'primary'}
              className={classes.link}
            >
              Dashboard
            </Button>
            {logged ? (
              <>
                <Button
                  href="signin"
                  className={classes.link}
                  variant="contained"
                  color="primary"
                >
                  Sign In
                </Button>
                <Button
                  className={classes.link}
                  href="/signup"
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <a href="/profile" className="inline-block h-3 w-3 ">
                <AccountCircle
                  fontSize="large"
                  color={dark ? 'secondary' : 'primary'}
                />
              </a>
            )}
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
