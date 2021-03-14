import * as React from 'react';
import { MyAppBar } from './MyAppbar';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { MyDrawer } from './MyDrawer';

export interface IComboBarProps {
    styleClasses: any
    handleDrawerOpen: () => void,
    handleDrawerClose: () => void,
    barStatus : boolean
}

export function ComboBar (props: IComboBarProps) {

  return (
    !props.styleClasses ? null : 
      <React.Fragment>
        <MyAppBar 
            styleClasses = {props.styleClasses}
            barStatus = {props.barStatus}
            handleDrawerOpen = {props.handleDrawerOpen}
            handleDrawerClose = {props.handleDrawerClose} />
        <MyDrawer 
            styleClasses = {props.styleClasses}
            barStatus = {props.barStatus}
            handleDrawerOpen = {props.handleDrawerOpen}
            handleDrawerClose = {props.handleDrawerClose} />    
      </React.Fragment>
  
       
  );
}
