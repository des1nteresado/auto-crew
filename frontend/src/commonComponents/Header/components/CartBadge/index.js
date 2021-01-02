import React from 'react';
import Badge from '@material-ui/core/Badge';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -11,
    top: -3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    fontSize: 12,
    color: theme.palette.white,
    backgroundColor: theme.palette.black,
  },
}))(Badge);

const CartBadge = ({ value, children }) => {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={value} color="secondary">
        {children}
      </StyledBadge>
    </IconButton>
  );
};

CartBadge.propTypes = {
  value: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default CartBadge;
