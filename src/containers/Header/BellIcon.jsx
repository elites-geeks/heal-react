import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
function BellIcon({notifications}) {
    return (
        <div>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={notifications.length} color="secondary">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
        </div>
    )
}

export default BellIcon
