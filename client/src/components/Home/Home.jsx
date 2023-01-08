import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Collection from "./resume";
import ResponsiveAppBar from "./Nav";
import Calc from "./calc";
import Swipeable from "./tips";
import { Grid, Typography } from "@mui/material";
import Calendario from "../Calendario/Calendario";
import { makeStyles } from "@mui/styles";
import Fitbit from "../SignUp/Fitbit";
import { getSleepByDate } from "../../actions/getSleepData";
import { getRecordsQuery } from "../../actions/newRecord";
import GraphHome from "../Graphs/Graph-home";
import CustomizedAccordions from "../Graph-Week/detailsGraphs";
import { getUsersPlanExpDate } from "../../actions/plan";
import { useAuthContext } from "../../actions/authContext";

const Home = () => {
  const { payPlan } = useAuthContext();
  // const expiDate= window.localStorage.getItem("PLAN_EXPIRATION_DATE")
  // debugger
  const currentUser = useSelector((state) => state?.users.currentUser);
  const planExpirationDate = useSelector((state) => state?.users.planExpirationDate);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getUsersPlanExpDate(currentUser.id))
    let today = new Date().toISOString().split('T')[0]
    const yesterday = new Date(Date.now() - 28800000)
      .toISOString()
      .split("T")[0];
    dispatch(getSleepByDate(yesterday));
    let id = currentUser.id
    let date = yesterday
    dispatch(getRecordsQuery(id,date))
    // debugger
    // if (planExpirationDate<today) {
      // payPlan(planExpirationDate);
    // }
  }, [dispatch, currentUser]);

  let user = {
    name: currentUser.names?currentUser.names : '🥰',
  };
 
  


  const greet = () => {
    var text = "";
    var now = new Date();
    var time = now.getHours();
    if (time >= 5 && time < 13) {
      text = "Buenos días! ☀️ ";
    } else if (time >= 13 && time < 21) {
      text = "Buenas tardes! 🌎";
    } else {
      text = "Buenas noches! 🌙 ";
    }
    return text;
  };

  
  const classes = useStyles();

  return (
    <Grid
      className={classes.home}
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={3}
      flex={4}
      p={2}
    // maxWidth='100vw'
    >
      <ResponsiveAppBar />
      <Grid item>
        <Typography className={classes.saludo} variant="h4">
          ¡Hola {user.name} {greet()}
        </Typography>
      </Grid>

      <Grid
        item
      >
        <Fitbit />
      </Grid>

      {/* <Grid
        item
      >
        <Typography variant="h6">{Date()}</Typography>
      </Grid> */}
<Grid
        item
      >
        <Calendario />
      </Grid>

      <Grid>
        <GraphHome/>
      </Grid>
      <CustomizedAccordions/>
      <Grid
        className={classes.Collection}
        item
      >
        <Collection/>
      </Grid>

    

      <Grid className={classes.calc} item>
        <Calc />
      </Grid>

      <Grid className={classes.swipeableHome} item>
        <Swipeable className={classes.swipeable} />
      </Grid>

    </Grid>
  );
};

export default Home;

const useStyles = makeStyles(() => ({}));
