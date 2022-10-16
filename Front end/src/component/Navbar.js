import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
  } from "@material-ui/core";
  import { useHistory } from "react-router-dom";
  import React from "react";
  
  import isAuth, { userType } from "../lib/isAuth";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(8),
    },
    title: {
      flexGrow: 1,
    },
    colour:
    {
      background: "black"
    },
  }));
  
  
  const Navbar = (props) => {
    const classes = useStyles();
    let history = useHistory();
  
    const handleClick = (location) => {
      console.log(location);
      history.push(location);
    };
  
    return (
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            JobiFy
          </Typography>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="black" onClick={() => handleClick("/welcome")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  Employees
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/welcome")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : (
            <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                Signup
              </Button>
              <Button color="inherit" onClick={() => handleClick("/welcome")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>

              </Button>
              <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
                <Button color="inherit" onClick={() => handleClick("/")}>
                
                </Button>
            <Button color="inherit" onClick={() => handleClick("/profile")}>
                Update Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Job
              </Button>
            <Button color="inherit" onClick={() => handleClick("/AcceptedApplicants")}>
                Accepted
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/applications")}>
                Job Apllications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                LOGOUT
              </Button>
  
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  