import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import PersonIcon from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';
import VisibilityIcon from '@material-ui/icons/Visibility';

import ROUTES from 'routes';

const ItemsList = ({
  items,
  fieldsToUse,
  handleRemoveButtonHandler,
  isCompanyList,
  onUpdateCompany,
  onEditCompanyButtonToggle,
  onListContactsButtonToggle,
}) => {
  const history = useHistory();

  return (
    <List>
      {items &&
        items.map((item) => {
          return (
            <ListItem key={item._id}>
              {isCompanyList ? (
                <ListItemAvatar>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.isValid}
                        onChange={(event) => onUpdateCompany(event, item)}
                        disableRipple
                        name="isValid"
                        color="primary"
                      />
                    }
                    label=""
                  />
                </ListItemAvatar>
              ) : (
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
              )}
              {isCompanyList ? (
                <ListItemText
                  primary={item[fieldsToUse[0]]}
                  secondary={`active: ${item[fieldsToUse[1]]}`}
                />
              ) : (
                <ListItemText primary={item[fieldsToUse[0]]} secondary={item[fieldsToUse[1]]} />
              )}
              <ListItemSecondaryAction>
                {isCompanyList && (
                  <IconButton
                    edge="end"
                    aria-label="view"
                    onClick={() => history.push(`${ROUTES.COMPANY}/${item.pathName}`)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                )}
                {isCompanyList && (
                  <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => onEditCompanyButtonToggle(item)}
                  >
                    <EditIcon />
                  </IconButton>
                )}
                {!isCompanyList && item.contacts.length > 0 && (
                  <IconButton
                    edge="end"
                    aria-label="contacts list"
                    onClick={() => onListContactsButtonToggle(item.contacts)}
                  >
                    <InfoIcon />
                  </IconButton>
                )}
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleRemoveButtonHandler(item._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </List>
  );
};

ItemsList.defaultProps = {
  fieldsToUse: ['title', 'subtitle'],
  isCompanyList: false,
  onUpdateCompany: () => {},
  onEditCompanyButtonToggle: () => {},
  onListContactsButtonToggle: () => {},
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleRemoveButtonHandler: PropTypes.func.isRequired,
  onUpdateCompany: PropTypes.func,
  onEditCompanyButtonToggle: PropTypes.func,
  onListContactsButtonToggle: PropTypes.func,
  isCompanyList: PropTypes.bool,
  fieldsToUse: PropTypes.arrayOf(PropTypes.string),
};

export default React.memo(ItemsList);
