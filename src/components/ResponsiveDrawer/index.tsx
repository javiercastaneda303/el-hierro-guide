import * as React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button, Typography, CssBaseline, Toolbar, ListItemText, ListItemButton, ListItem, List, IconButton, Drawer, Divider, Box, AppBar } from '@mui/material'

import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MenuIcon from '@mui/icons-material/Menu'

import './style.css'

const drawerWidth = 240

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window
}

export default function ResponsiveDrawer(props: Props) {
  // se los coloco yo para que los items del Drawer hagan lo que yo quiero
  const navigate = useNavigate()
  const [t, i18n] = useTranslation('global')

  // para navegar, va en una función
  // deuda técnica, ¿un hook para ésto?  useMediaQuerry
  let location = useLocation().pathname.split('/')[1]
  const goTo = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
    navigate(`${location}/${lang}`)
  }

  //por defecto lo que traia el Drawer
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Divider />
      <List>
        {['home', 'aboutMe', 'myClients', 'offer'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(`${text}/${i18n.language}`)}>
              <ListItemText primary={t(`header.${text}`)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['cs', 'de', 'en', 'es', 'pl'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => goTo(text)}>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <img src={`/icons/${text}.png`} className="labelDrawer" alt="PonerCountriAqui" style={{ cursor: 'pointer' }} />
              <ListItemText primary={t(`header.${text}`)} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
        <Toolbar />
      </Box>
    </Box>
  )
}
