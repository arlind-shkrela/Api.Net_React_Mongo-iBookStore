import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from './components/Dashboard';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './components/listItems';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import GetBooks from './components/Books/GetBooks';
import GetAuthors from './components/Authors/GetAuthors';
import GetCustomers from './components/Customers/GetCustomer'
import CreateBook from './components/Books/CreateBook';
import CreateAuthor from './components/Authors/CreateAuthor';
import EditAuthor from './components/Authors/EditAuthor';
import EditBook from './components/Books/EditBook';
import ViewAuthor  from './components/Authors/ViewAuthor';
import ViewBook from './components/Books/ViewBook';
import CreateCustomer from './components/Customers/CreateCustomer';
import EditCustomer from './components/Customers/EditCustomer';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));
function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div>
    <Router>

<div className={classes.root}>
    <CssBaseline />
    <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Dashboard
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <List>{mainListItems}</List>
      
     <List>{secondaryListItems}</List>
    </Drawer>

    <Divider />
          <Route path="/" exact component={Dashboard} />   
          <Route path="/dashboard" exact component={Dashboard} /> 
          
          <Route path="/books" exact component={GetBooks} />
          <Route path="/books/add" exact component={CreateBook} />
          <Route path="/books/edit/:id" exact component={EditBook} />
          <Route path="/books/view/:id" exact component={ViewBook} />


          <Route path="/authors" exact component={GetAuthors} />
          <Route path="/authors/add" exact component={CreateAuthor} />
          <Route path="/authors/edit/:id" exact component={EditAuthor} />
          <Route path="/authors/view/:id" exact component={ViewAuthor} />

          <Route path="/customers" exact component={GetCustomers} />
          <Route path="/customers/add" exact component={CreateCustomer} />
          <Route path="/customers/edit/:id" exact component={EditCustomer} />

    

    <Divider />
    </div>
    </Router>

<Box pt={4}>
<Copyright />
</Box>  
</div>

  );
}

export default App;
