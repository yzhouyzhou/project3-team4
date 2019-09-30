import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import FaceIcon from '@material-ui/icons/Face';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import HomeIcon from '@material-ui/icons/Home';
import PlaceIcon from '@material-ui/icons/Place';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { NavLink } from 'react-router-dom';
import "./style.css";

export const mainListItems = (
  <div>
    <ListItem button >
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <NavLink to="/home" style={{ textDecoration: 'none', color: 'white' }}
      activeStyle={{ color: 'cyan'}}>
        <ListItemText primary="Dashboard"/>
        </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalHospitalIcon />
      </ListItemIcon>
      <NavLink to="/emergency" style={{ textDecoration: 'none', color: 'white' }}
      activeStyle={{ color: 'cyan'}}>
        <ListItemText primary="Emergency"/>
        </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FaceIcon />
      </ListItemIcon>
      <NavLink to="/patients" style={{ textDecoration: 'none', color: 'white' }}
      activeStyle={{ color: 'cyan'}}>
        <ListItemText primary="User Profile"/>
        </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <NavLink to="/liveChat" style={{ textDecoration: 'none', color: 'white' }}
      activeStyle={{ color: 'cyan'}}>
        <ListItemText primary="Live Chat"/>
        </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PlaceIcon />
      </ListItemIcon>
      <NavLink to="/location" style={{ textDecoration: 'none', color: 'white' }}
      activeStyle={{ color: 'cyan'}}>
        <ListItemText primary="Location"/>
        </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <NavLink to="/reports" style={{ textDecoration: 'none', color: 'white' }}
      activeStyle={{ color: 'cyan'}}>
        <ListItemText primary="Reports"/>
        </NavLink>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AddAlertIcon />
      </ListItemIcon>
      <NavLink to="/notifications" style={{ textDecoration: 'none', color: 'white' }}
      activeStyle={{ color: 'cyan'}}>
        <ListItemText primary="Notifications"/>
        </NavLink>
    </ListItem>
  </div>
);
