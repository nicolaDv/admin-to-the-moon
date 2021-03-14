import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';


import { mainListItems, secondaryListItems } from './listItems';

export interface IMyDrawer {
  styleClasses: any,
  handleDrawerOpen: () => void,
  handleDrawerClose: () => void,
  barStatus: boolean
}

export function MyDrawer(props: IMyDrawer) {

  return (   
    !props.styleClasses ? null : 
    <Drawer variant="permanent" classes={{paper: clsx(props.styleClasses.drawerPaper, !props.barStatus && props.styleClasses.drawerPaperClose),}}open={props.barStatus}>
    <div className={props.styleClasses.toolbarIcon}>
      <IconButton onClick={props.handleDrawerClose}>
      <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <List>{mainListItems}</List>
    <Divider />
    <List>{secondaryListItems}</List>
  </Drawer>

  );
}
