import React from 'react'
import { AppBar, Grid, IconButton, InputBase, Toolbar, Badge } from '@mui/material'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import SearchIcon from '@mui/icons-material/Search';
import DTIconButton from './DTIconButton'

/* root refers to the outermost element (in this case AppBar) */
// const styles = theme => ({
//     root: {
//         bgcolor: '#fff'
//     },
//     searchInput: {
//         opacity: '0.6',
//         padding: '0px 8px' `0px ${theme.spacing(1)}px`,
//         fontSize: '0.8rem'
//     },
//     '& .MuiSvgIcon-root': {
//         marginRight: theme.spacing(1)
//     }
// })

/* override the existing MUI style */
export default function Header() {
    return (
         <AppBar position="static" 
            sx={{
                bgcolor: '#fff',
                boxShadow: 1,
                transform: 'translateZ(0)'
            }}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item>
                        <InputBase 
                            sx={{
                                opacity: '0.6',
                                padding: '0px 8px',
                                fontSize: '0.8rem',
                                '&:hover': {
                                    bgcolor:'#f2f2f2'
                                },
                                '& .MuiSvgIcon-root': {
                                    marginRight: '6px'
                                }
                            }}
                            placeholder="Search Input"
                            startAdornment={<SearchIcon fontSize="small" />}
                        />
                    </Grid>
                    <Grid item sm>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsNoneIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent={666} color="primary">
                                <ChatBubbleOutlineIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                        <DTIconButton>
                                <PowerSettingsNewIcon/>
                        </DTIconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
