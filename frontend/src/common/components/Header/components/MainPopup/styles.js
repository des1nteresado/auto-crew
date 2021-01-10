import Search from 'static/images/search.svg';
import SearchActive from 'static/images/search-hover.svg';
import Favourites from 'static/images/favorites.svg';
import FavouritesActive from 'static/images/favorites-hover.svg';
import Cart from 'static/images/cart.svg';
import CartActive from 'static/images/cart-hover.svg';
import Profile from 'static/images/profile.svg';
import ProfileActive from 'static/images/profile-hover.svg';
import Menu from 'static/images/menu.svg';

const styles = (theme) => ({
  header: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backdropFilter: 'blur(75px)',
    ' -webkit-backdrop-filter': 'blur(75px)',
    background: 'rgba(255, 255, 255, 0.75)',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    [theme.breakpoints.down('xs')]: {
      height: 50,
    },
  },
  searchInput: {
    borderBottom: 'solid rgba(0, 0, 0, .25) 1px',
    width: 540,
    margin: '0 50px',
    '& img': {
      marginRight: 7,
    },
    [theme.breakpoints.down('400')]: {
      margin: '0 25px',
    },
  },
  logo: {
    cursor: 'pointer',
    marginLeft: 170,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  searchButton: {
    cursor: 'pointer',
    width: 16,
    height: 16,
    backgroundImage: `url(${Search})`,
    '&:hover': {
      backgroundImage: `url(${SearchActive})`,
    },
    '&:active': {
      backgroundImage: `url(${SearchActive})`,
    },
  },
  favoritesButton: {
    cursor: 'pointer',
    width: 16,
    height: 16,
    backgroundImage: `url(${Favourites})`,
    '&:hover': {
      backgroundImage: `url(${FavouritesActive})`,
    },
    '&:active': {
      backgroundImage: `url(${FavouritesActive})`,
    },
  },
  cartButton: {
    cursor: 'pointer',
    width: 16,
    height: 16,
    backgroundImage: `url(${Cart})`,
    '&:hover': {
      backgroundImage: `url(${CartActive})`,
    },
    '&:active': {
      backgroundImage: `url(${CartActive})`,
    },
  },
  mainActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: 300,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'unset',
    },
  },
  women: {
    marginRight: 10,
  },
  signInButton: {
    marginRight: 10,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginLeft: 20,
    },
  },
  signUpButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  userProfile: {
    cursor: 'pointer',
    display: 'flex',
    '& .MuiTypography-root': {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    '&:hover .MuiTypography-root': {
      color: theme.palette.black,
    },
    '&:hover $profileIcon': {
      backgroundImage: `url(${ProfileActive})`,
    },
    '&:active .MuiTypography-root': {
      color: theme.palette.black,
    },
    '&:active $profileIcon': {
      backgroundImage: `url(${ProfileActive})`,
    },
  },
  profileIcon: {
    cursor: 'pointer',
    width: 16,
    height: 16,
    marginRight: 20,
    backgroundImage: `url(${Profile})`,
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  menuButton: {
    cursor: 'pointer',
    width: 20,
    height: 15,
    backgroundImage: `url(${Menu})`,
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  filters: {
    display: 'block',
    minWidth: 140,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuContainer: {
    boxShadow: '0px 0px 25px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  menuList: {
    '& .MuiListItem-button:hover': {
      color: theme.palette.black,
      backgroundColor: theme.palette.white,
    },
  },
  logoutButton: {
    marginTop: 20,
  },
});

export default styles;
