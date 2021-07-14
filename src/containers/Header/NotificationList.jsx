import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FolderList({ notifications }) {
    const classes = useStyles();
    const genNotif = () => {
        notifications.map((elem, idx) => (
            <ListItem key={idx}>
                <ListItemAvatar>
                    <Avatar>
                        <WorkIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={`New appointment reservation from `} secondary="Jan 9, 2014" />
            </ListItem>
        ));
    }
    return (
        <List className={classes.root}>
            {genNotif()}
        </List>
    );
}
