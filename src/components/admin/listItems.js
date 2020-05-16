import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { ListSubheader } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Home, GitHub, Telegram, LocationCity } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link to="/" className="td">
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </Link>

    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocationCity />
      </ListItemIcon>
      <ListItemText primary="Volunteers" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current Week" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current Month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Overall" />
    </ListItem>
  </div>
);
export const socailListItems = (
  <div>
    <ListSubheader inset>Socail Links</ListSubheader>
    <a href="https://github.com/m98jk" className="td">
      <ListItem button>
        <ListItemIcon>
          <GitHub />
        </ListItemIcon>
        <ListItemText primary="Source Code" />
      </ListItem>
    </a>
    <a href="http://t.me/m98jk" className="td">
      <ListItem button>
        <ListItemIcon>
          <Telegram />
        </ListItemIcon>
        <ListItemText primary="ME" />
      </ListItem>
    </a>
  </div>
);
