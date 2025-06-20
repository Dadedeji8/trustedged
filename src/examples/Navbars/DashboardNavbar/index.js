/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from 'react'

// react-router components
import { useLocation, Link } from 'react-router-dom'

// prop-types is a library for typechecking of props.
import PropTypes from 'prop-types'

// @material-ui core components
import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'

// Material Dashboard 2 React example components
import Breadcrumbs from 'examples/Breadcrumbs'

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from 'examples/Navbars/DashboardNavbar/styles'

// Material Dashboard 2 React context
import {
  useMaterialUIController,
  setTransparentNavbar,
  setMiniSidenav,
} from 'context'

// Icons
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthProvider } from 'context/AuthContext'
import { useAuth } from 'context/AuthContext'

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState()
  const [controller, dispatch] = useMaterialUIController()
  const {
    miniSidenav,
    transparentNavbar,
    fixedNavbar,
    darkMode,
  } = controller
  const route = useLocation().pathname.split('/').slice(1)
  const { profile } = useAuth()
  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType('sticky')
    } else {
      setNavbarType('static')
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      setTransparentNavbar(
        dispatch,
        (fixedNavbar && window.scrollY === 0) || !fixedNavbar
      )
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener('scroll', handleTransparentNavbar)

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar()

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleTransparentNavbar)
  }, [dispatch, fixedNavbar])

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav)


  return (
    <AppBar
      position={absolute ? 'absolute' : navbarType}
      color="inherit"
      sx={(theme) =>
        navbar(theme, { transparentNavbar, absolute, light, darkMode })
      }
      className='w-full px-5'
    >

      <MDBox className="flex items-center justify-between  w-full">
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={light}
          />
        </MDBox>
        <MDBox color={light ? 'white' : 'inherit'} className="flex items-center">
          <Link to="/profile">
            <IconButton sx={navbarIconButton} disableRipple>
              {
                profile?.profilePhoto ? <img src={profile?.profilePhoto} className='rounded-full' style={{ width: '30px', height: '30px', objectFit: 'cover' }} /> :

                  <AccountCircleIcon className='size-[30px]' />
              }

            </IconButton>
          </Link>
          <IconButton
            size="large"
            disableRipple
            color="inherit"
            sx={navbarMobileMenu}
            onClick={handleMiniSidenav}
          >
            {miniSidenav ?
              <MenuOpenIcon className='size-[30px] ' />
              :
              <MenuIcon className='size-[30px] ' />
            }

          </IconButton>

        </MDBox>
      </MDBox>

    </AppBar>
  )
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
}

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
}

export default DashboardNavbar
