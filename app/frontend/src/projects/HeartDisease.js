import React, { useState } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Container,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Button,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Axios from "axios";

const color = "#0a939e";

const theme = createMuiTheme({
  palette: {
    common: { black: color, white: color },
    primary: { main: color, dark: color, light: color },
    secondary: { main: "#fff", dark: "#fff", light: "#fff" },
    text: { primary: color, secondary: color },
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid white`,
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: "#fff",
  },
  gridLayout: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "space-evenly",
    },
  },
  textField: {
    "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
      display: "none",
    },
    marginLeft: theme.spacing(1),
  },
}));
function HeartDisease() {
  const fillvalue = "";
  const classes = useStyles();
  const [target, setTarget] = useState(undefined);
  const [state, setState] = useState({
    age: fillvalue,
    sex: "0",
    cp: "0",
    trestbps: fillvalue,
    chol: fillvalue,
    fbs: "0",
    restecg: "0",
    thalach: fillvalue,
    exang: "1",
    oldpeak: fillvalue,
    slope: "0",
    ca: "0",
    thal: "1",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setState({
      ...state,
      [event.target.name]: value,
    });
  };

  const handleSubmit = () => {
    let incomplete;
    for (const property in state) {
      if (state[property].length === 0) {
        incomplete = true;
        break;
      } else {
        incomplete = false;
        state[property] = parseFloat(state[property]);
      }
    }
    if (incomplete) {
      alert("Fill all values");
    } else {
      // const localhost = "http://127.0.0.1:8000/api/heart_disease/";
      const localhost = "/api/heart_disease/";
      Axios.get(localhost, {
        params: state,
      })
        .then(function (response) {
          setTarget(response.data.prediction[0]);
          window.scrollTo(0,5000)
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setState({
            age: "",
            sex: "0",
            cp: "0",
            trestbps: "",
            chol: "",
            fbs: "0",
            restecg: "0",
            thalach: "",
            exang: "1",
            oldpeak: "",
            slope: "0",
            ca: "0",
            thal: "1",
          });
        });
    }
  };
  return (
    <Container style={{ paddingBottom: "5vh" }}>
      <Typography
        variant="h3"
        style={{ color: "white", textAlign: "center", marginTop: "2vh" }}
      >
        Heart Disease Predictor
      </Typography>
      <Grid
        container
        className={classes.gridLayout}
        spacing={2}
        alignItems="center"
        alignContent="center"
        // justify="space-evenly"
        style={{ background: "#383838", marginTop: "5vh" }}
      >
        <ThemeProvider theme={theme}>
          {/* Age */}
          <Grid item xs={12} md={4}>
            <FormControl variant="filled" margin="normal" fullWidth>
              <InputLabel className={classes.cssLabel} htmlFor="my-age">
                Age
              </InputLabel>
              <Input
                name="age"
                type="number"
                className={classes.textField}
                value={state.age}
                onChange={handleChange}
                id="my-age"
                aria-describedby="my-age-text"
              />
              <FormHelperText style={{ color: "white" }} id="my-age-text">
                Enter your age in years
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* Blodd Pressure */}
          <Grid item xs={12} md={4}>
            <FormControl variant="filled" margin="normal" fullWidth>
              <InputLabel className={classes.cssLabel} htmlFor="my-trestbps">
                Resting Blood Pressure
              </InputLabel>
              <Input
                name="trestbps"
                type="number"
                className={classes.textField}
                value={state.trestbps}
                onChange={handleChange}
                id="my-trestbps"
                aria-describedby="my-trestbps-text"
              />
              <FormHelperText style={{ color: "white" }} id="my-trestbps-text">
                Enter your resting blood pressure
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* Serum Cholestrol */}
          <Grid item xs={12} md={4}>
            <FormControl variant="filled" margin="normal" fullWidth>
              <InputLabel className={classes.cssLabel} htmlFor="my-chol">
                Serum Cholestoral
              </InputLabel>
              <Input
                name="chol"
                type="number"
                className={classes.textField}
                value={state.chol}
                onChange={handleChange}
                id="my-chol"
                aria-describedby="my-chol-text"
              />
              <FormHelperText style={{ color: "white" }} id="my-chol-text">
                Enter your serum cholestoral in mg/dl
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* Maximum heart rate achieved */}
          <Grid item xs={12} md={4}>
            <FormControl variant="filled" margin="normal" fullWidth>
              <InputLabel className={classes.cssLabel} htmlFor="my-thalach">
                Maximum heart rate achieved
              </InputLabel>
              <Input
                name="thalach"
                type="number"
                className={classes.textField}
                value={state.thalach}
                onChange={handleChange}
                id="my-thalach"
                aria-describedby="my-thalach-text"
              />
              <FormHelperText style={{ color: "white" }} id="my-thalach-text">
                Enter your maximum heart rate achieved
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* ST depression */}
          <Grid item xs={12} md={4}>
            <FormControl variant="filled" margin="normal" fullWidth>
              <InputLabel className={classes.cssLabel} htmlFor="my-oldpeak">
                ST depression
              </InputLabel>
              <Input
                name="oldpeak"
                type="number"
                className={classes.textField}
                value={state.oldpeak}
                onChange={handleChange}
                id="my-oldpeak"
                aria-describedby="my-oldpeak-text"
              />
              <FormHelperText style={{ color: "white" }} id="my-oldpeak-text">
                Enter your ST depression induced by exercise relative to rest
              </FormHelperText>
            </FormControl>
          </Grid>
          {/* filler */}
          <Grid item xs={12} md={4}></Grid>

          {/* sex */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Sex
              </FormLabel>
              <RadioGroup
                aria-label="sex"
                name="sex"
                value={state.sex}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"0"}
                  control={<Radio color="primary" />}
                  label="Female"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="Male"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Fasting blood sugar */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Fasting blood sugar {">"} 120 mg/dl
              </FormLabel>
              <RadioGroup
                aria-label="fbs"
                name="fbs"
                value={state.fbs}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"0"}
                  control={<Radio color="primary" />}
                  label="Yes"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="No"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Exercise Induced Angina */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Exercise Induced Angina
              </FormLabel>
              <RadioGroup
                aria-label="exang"
                name="exang"
                value={state.exang}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"0"}
                  control={<Radio color="primary" />}
                  label="Yes"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="No"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Thalium Stress Results */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Thalium Stress Results
              </FormLabel>
              <RadioGroup
                aria-label="thal"
                name="thal"
                value={state.thal}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="Normal"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"2"}
                  control={<Radio color="primary" />}
                  label="Fixed defect"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"3"}
                  control={<Radio color="primary" />}
                  label="Reversable defect"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Resting Electrocardiographic Results */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Resting Electrocardiographic Results
              </FormLabel>
              <RadioGroup
                aria-label="restecg"
                name="restecg"
                value={state.restecg}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"0"}
                  control={<Radio color="primary" />}
                  label="Nothing to note"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="ST-T Wave abnormality"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"2"}
                  control={<Radio color="primary" />}
                  label="Possible or definite left ventricular hypertrophy"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Slope of the peak exercise ST segment */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Slope of the peak exercise ST segment
              </FormLabel>
              <RadioGroup
                aria-label="slope"
                name="slope"
                value={state.slope}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"0"}
                  control={<Radio color="primary" />}
                  label="Upsloping"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="Flatsloping"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"2"}
                  control={<Radio color="primary" />}
                  label="Downslopins"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Chest Pain */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Chest Pain Type
              </FormLabel>
              <RadioGroup
                aria-label="cp"
                name="cp"
                value={state.cp}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"0"}
                  control={<Radio color="primary" />}
                  label="Typical angina"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="Atypical angina"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"2"}
                  control={<Radio color="primary" />}
                  label="Non-anginal pain"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"3"}
                  control={<Radio color="primary" />}
                  label="Asymptomatic"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          {/* Number of Major Vessels colored by flourosopy */}
          <Grid item xs={12} md={4}>
            <FormControl component="fieldset">
              <FormLabel style={{ color: "white" }} component="legend">
                Number of Major Vessels colored by flourosopy
              </FormLabel>
              <RadioGroup
                aria-label="ca"
                name="ca"
                value={state.ca}
                onChange={handleChange}
              >
                <FormControlLabel
                  value={"0"}
                  control={<Radio color="primary" />}
                  label="0"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"1"}
                  control={<Radio color="primary" />}
                  label="1"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"2"}
                  control={<Radio color="primary" />}
                  label="2"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"3"}
                  control={<Radio color="primary" />}
                  label="3"
                  style={{ color: "white" }}
                />
                <FormControlLabel
                  value={"4"}
                  control={<Radio color="primary" />}
                  label="4"
                  style={{ color: "white" }}
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            container
            direction="column"
            spacing={3}
            alignContent="center"
            justify="center"
            alignItems="center"
            item
            xs={12}
          >
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                startIcon={<SendIcon />}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
            {target !== undefined && (
              <Grid item>
                <Typography id='output' align="center" color="secondary" variant="h6">
                  Dr. I Know Everything says you {!target ? "do not " : ""}have
                  heart disease
                </Typography>
              </Grid>
            )}
          </Grid>
        </ThemeProvider>
      </Grid>
    </Container>
  );
}

export default HeartDisease;
