import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toggle from '../ui/buttons/toggle';

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
    margin: theme.spacing(1, 4),
    display: 'flex',
    alignContent: 'center',
    height: 10,
    width: 15,
  },
}));

export default function Pricing() {
  const classes = useStyles();

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
            <Toggle />
          </div>
          <nav>
            <Button
              href="/dashboard"
              variant="contained"
              color="primary"
              className={classes.link}
            >
              Dashboard
            </Button>
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
              // className="sign"
              color="primary"
            >
              Sign Up
            </Button>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
