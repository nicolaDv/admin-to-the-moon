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
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export interface IAppProps {
  styleClasses: any,
  barStatus: boolean,
  handleDrawerOpen: () => void,
  handleDrawerClose: () => void,
}

export function MyAppBar (props: IAppProps) {

  return (
    !props.styleClasses ? null : 
    
    <AppBar position="absolute" className={clsx(props.styleClasses.appBar, props.barStatus && props.styleClasses.appBarShift)} >
        <Toolbar className={props.styleClasses.toolbar} >
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={props.handleDrawerOpen}
        className={clsx(props.styleClasses.enuButton, props.barStatus && props.styleClasses.menuButtonHidden)}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="h1" variant="h6" color="inherit" noWrap className={props.styleClasses.title}>
        Dashboard
      </Typography>
      <IconButton color="inherit">
        <Badge badgeContent={99} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton color="inherit">
        <Badge badgeContent={0} color="secondary">
          <AccountCircleIcon />
        </Badge>
      </IconButton>
    </Toolbar>
    </AppBar>
    
  );
}
