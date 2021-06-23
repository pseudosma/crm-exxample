import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

import FlatCard from "./flatCard";
import SpeedDials from "./speedDial";
import Banner from "./banner";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  input: {
    color: "white"
  },
  title: {
    "& .Mui-disabled": {
      color: "white"
    },
    "& .MuiFormHelperText-filled": {
      color: "white"
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black"
    },
    "& .MuiInput-helperText": {
      borderBottomColor: "white"
    }
  },
  appBar: {
    backgroundColor: "#cfd8dc",
    //width: "100%",
    //color: 'black',
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar
}));

export default function Test() {
  const classes = useStyles();
  const [openDialog, addDialog] = React.useState(false);
  const [filters, setFilters] = React.useState(() => [
    "dialog",
    "internal",
    "attachments"
  ]);

  const handleFilter = (event, newFilter) => {
    setFilters(newFilter);
  };
  const handleDialogOpen = () => {
    addDialog(true);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justify="space-between"
          >
            <Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
              <FlatCard
                contents={
                  <Typography
                    style={{ color: "white" }}
                    align="center"
                    variant="h6"
                    noWrap
                  >
                    173509
                  </Typography>
                }
              />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8}>
              <TextField
                disabled
                fullWidth
                className={classes.title}
                InputProps={{ className: classes.input }}
                style={{ color: "white" }}
                helperText="Task Title"
                value="Example Task"
              />
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              <Icon style={{ fontSize: "12pt" }}>edit</Icon>
            </Grid>
            <Grid item xl={1} lg={1} md={1} sm={1} xs={1}>
              <Chip
                style={{ backgroundColor: "red", color: "white" }}
                label="Waiting On Owner"
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.toolbar}>
          <div style={{ height: "70px" }} />
          <Grid container pacing={8} alignItems="center" justify="space-around">
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Icon style={{ color: "red", fontSize: "24pt" }}>warning</Icon>
            </Grid>
            <Grid item xl={3} lg={3} md={3} sm={3} xs={3}>
              <Icon style={{ color: "red", fontSize: "24pt" }}>phone</Icon>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Divider />
              <div align="center">
                <Typography align="center" variant="caption">
                  Last Updated: Jan 05 2020, 2:10 PM
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Divider />
          <br />
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div>
              <Collapse in={true}>
                <div>
                  <div
                    style={{
                      padding: "5px 5px 5px 10px",
                      width: "100%",
                      borderRadius: "10px 10px 0px 0px",
                      backgroundColor: "#cfd8dc"
                    }}
                  >
                    <div
                      align="left"
                      style={{
                        float: "left",
                        display: "inline-block"
                      }}
                    />
                    <div align="right">
                      <Icon style={{ color: "white", fontSize: "14pt" }}>
                        edit
                      </Icon>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      width: "100%",
                      borderRadius: "0px 0px 10px 10px",
                      backgroundColor: "white",
                      borderWidth: "0px 2px 2px 2px",
                      borderColor: "#cfd8dc",
                      borderStyle: "solid"
                    }}
                  >
                    {" "}
                    <div align="center">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-auto-width">
                          Agency > John Doe
                        </InputLabel>
                        <Select
                          disabled
                          autoWidth
                          style={{ width: "200px" }}
                          inputProps={{
                            name: "age",
                            id: "age-auto-width"
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={20}>Agency > Jerry Doe</MenuItem>
                          <MenuItem value={30}>Agency > Larry Doe</MenuItem>
                        </Select>
                        <FormHelperText>Owner</FormHelperText>
                      </FormControl>
                    </div>
                    <div align="center">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-auto-width">
                          Agency > Jim Doe
                        </InputLabel>
                        <Select
                          disabled
                          autoWidth
                          style={{ width: "200px" }}
                          inputProps={{
                            name: "age",
                            id: "age-auto-width"
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Agency > John Doe</MenuItem>
                          <MenuItem value={20}>Agency > Jerry Doe</MenuItem>
                          <MenuItem value={30}>Agency > Larry Doe</MenuItem>
                        </Select>
                        <FormHelperText>Assignee</FormHelperText>
                      </FormControl>
                    </div>
                    <div align="center">
                      <MuiPickersUtilsProvider disabled utils={DateFnsUtils}>
                        <KeyboardDatePicker
                          disableToolbar
                          variant="inline"
                          format="MM/dd/yyyy"
                          margin="normal"
                          id="date-picker-inline"
                          label="ETD"
                          KeyboardButtonProps={{
                            "aria-label": "change date"
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </Grid>
          <br />
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div>
              <Collapse in={true}>
                <div>
                  <div
                    style={{
                      padding: "5px 5px 5px 10px",
                      width: "100%",
                      borderRadius: "10px 10px 0px 0px",
                      backgroundColor: "#cfd8dc"
                    }}
                  >
                    <div
                      align="left"
                      style={{
                        float: "left",
                        display: "inline-block"
                      }}
                    />
                    <div align="left" style={{ display: "inline-block" }}>
                      <Typography variant="overline">Links</Typography>
                    </div>
                    <div
                      align="right"
                      style={{ display: "inline-block", float: "right" }}
                    >
                      <Icon style={{ color: "white", fontSize: "14pt" }}>
                        edit
                      </Icon>
                    </div>
                    <div
                      align="right"
                      style={{ display: "inline-block", float: "right" }}
                    >
                      <Icon style={{ color: "white", fontSize: "14pt" }}>
                        add
                      </Icon>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      width: "100%",
                      borderRadius: "0px 0px 10px 10px",
                      backgroundColor: "white",
                      borderWidth: "0px 2px 2px 2px",
                      borderColor: "#cfd8dc",
                      borderStyle: "solid"
                    }}
                  >
                    Task 1
                    <Divider />
                    Task 2
                    <Divider />
                    Task 3
                    <br />
                  </div>
                </div>
              </Collapse>
            </div>
          </Grid>
          <br />
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <div>
              <Collapse in={true}>
                <div>
                  <div
                    style={{
                      padding: "5px 5px 5px 10px",
                      width: "100%",
                      borderRadius: "10px 10px 0px 0px",
                      backgroundColor: "#cfd8dc"
                    }}
                  >
                    <div
                      align="left"
                      style={{
                        float: "left",
                        display: "inline-block"
                      }}
                    />
                    <div align="right">
                      <Icon style={{ color: "white", fontSize: "14pt" }}>
                        edit
                      </Icon>
                    </div>
                  </div>
                  <div
                    style={{
                      padding: "5px",
                      width: "100%",
                      borderRadius: "0px 0px 10px 10px",
                      backgroundColor: "white",
                      borderWidth: "0px 2px 2px 2px",
                      borderColor: "#cfd8dc",
                      borderStyle: "solid"
                    }}
                  >
                    {" "}
                    <div align="center">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-auto-width">
                          Unfinished Project
                        </InputLabel>
                        <Select
                          disabled
                          autoWidth
                          style={{ width: "200px" }}
                          inputProps={{
                            name: "age",
                            id: "age-auto-width"
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={20}>New Project</MenuItem>
                          <MenuItem value={30}>Side Proj3ct</MenuItem>
                        </Select>
                        <FormHelperText>Project</FormHelperText>
                      </FormControl>
                    </div>
                    <div align="center">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-auto-width">
                          Clarity > API
                        </InputLabel>
                        <Select
                          disabled
                          autoWidth
                          style={{ width: "200px" }}
                          inputProps={{
                            name: "age",
                            id: "age-auto-width"
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>CLAPI</MenuItem>
                          <MenuItem value={20}>Compleat</MenuItem>
                          <MenuItem value={30}>Other</MenuItem>
                        </Select>
                        <FormHelperText>Product</FormHelperText>
                      </FormControl>
                    </div>
                    <div align="center">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-auto-width">
                          Billing Code
                        </InputLabel>
                        <Select
                          disabled
                          autoWidth
                          style={{ width: "200px" }}
                          inputProps={{
                            name: "age",
                            id: "age-auto-width"
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>X</MenuItem>
                          <MenuItem value={20}>Z</MenuItem>
                          <MenuItem value={30}>Y</MenuItem>
                        </Select>
                        <FormHelperText>Billing Code</FormHelperText>
                      </FormControl>
                    </div>
                    <div align="center">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-auto-width">High</InputLabel>
                        <Select
                          disabled
                          autoWidth
                          style={{ width: "200px" }}
                          inputProps={{
                            name: "age",
                            id: "age-auto-width"
                          }}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>None</MenuItem>
                          <MenuItem value={20}>Medium</MenuItem>
                          <MenuItem value={30}>Death</MenuItem>
                        </Select>
                        <FormHelperText>Priority</FormHelperText>
                      </FormControl>
                    </div>
                    <div align="center">
                      <TextField
                        disabled
                        fullWidth
                        helperText="Internal Memo"
                        value="cost center 21"
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </Grid>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar}>
          <br />
          <br />
          <br />
          <Banner bannerType={0} />
          <Banner bannerType={1} />
          <Banner bannerType={2} />
          <br />
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div align="center">
                <ToggleButtonGroup
                  value={filters}
                  onChange={handleFilter}
                  arial-label="text formatting"
                >
                  <ToggleButton value="dialog" aria-label="Comments">
                    <Icon>insert_comment</Icon>
                  </ToggleButton>
                  <ToggleButton value="internal" aria-label="Internal Comments">
                    <Icon>mode_comment</Icon>
                  </ToggleButton>
                  <ToggleButton value="attachments" aria-label="Attachments">
                    <Icon>attach_file</Icon>
                  </ToggleButton>
                  <ToggleButton value="history" aria-label="History">
                    <Icon>history</Icon>
                  </ToggleButton>
                  <ToggleButton value="time" aria-label="Time Log">
                    <Icon>timer</Icon>
                  </ToggleButton>
                  <ToggleButton aria-label="Time Log">
                    <Icon>swap_verticle</Icon>
                  </ToggleButton>
                </ToggleButtonGroup>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Divider />
              <Collapse in={openDialog}>
                <TextField
                  fullWidth
                  label="Dense multiline"
                  margin="dense"
                  variant="filled"
                  multiline
                  rowsMax="4"
                />
              </Collapse>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "10px",
                        width: "100%",
                        borderRadius: "10px 10px 10px 10px",
                        backgroundColor: "#a5d6a7"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      />
                      <div align="left" style={{ display: "inline-block" }}>
                        <Typography>Task Owner Chaned</Typography>
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>Jan 1 2020, 1:00 PM</Typography>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "10px",
                        width: "100%",
                        borderRadius: "10px 10px 10px 10px",
                        backgroundColor: "#a5d6a7"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      />
                      <div align="left" style={{ display: "inline-block" }}>
                        <Typography>Task Tile Chaned</Typography>
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>Jan 1 2020, 1:00 PM</Typography>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "15px",
                        width: "100%",
                        borderRadius: "10px 10px 0px 0px",
                        backgroundColor: "#bdbdbd"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      >
                        <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
                      </div>
                      <div align="left" style={{ display: "inline-block" }}>
                        <Typography>John Doe</Typography>
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>Jan 1 2020, 2:00 PM</Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "5px",
                        width: "100%",
                        borderRadius: "0px 0px 10px 10px",
                        backgroundColor: "white",
                        borderWidth: "0px 2px 2px 2px",
                        borderColor: "#bdbdbd",
                        borderStyle: "solid"
                      }}
                    >
                      Here's an external comment!!!
                      <br />
                      <br />
                      Multiline too!
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "10px",
                        width: "100%",
                        borderRadius: "10px 10px 10px 10px",
                        backgroundColor: "#81d4fa"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      />
                      <div align="left" style={{ display: "inline-block" }}>
                        <Chip icon={<Icon>attachment</Icon>} label="File" />
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>
                          Attached by John Doe on Jan 1 2020, 2:00 PM
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "10px",
                        width: "100%",
                        borderRadius: "10px 10px 10px 10px",
                        backgroundColor: "#81d4fa"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      />
                      <div align="left" style={{ display: "inline-block" }}>
                        <Chip icon={<Icon>attachment</Icon>} label="File2" />
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>
                          Attached by John Doe on Jan 1 2020, 2:00 PM
                        </Typography>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "15px",
                        width: "100%",
                        borderRadius: "10px 10px 0px 0px",
                        backgroundColor: "#bdbdbd"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      >
                        <Avatar src="http://www.gravatar.com/avatar.php?gravatar_id=64b490fe11342e5662f54a9e20483fad" />{" "}
                      </div>
                      <div align="left" style={{ display: "inline-block" }}>
                        <Typography>Jim Doe</Typography>
                      </div>
                      <div
                        style={{
                          float: "right",
                          display: "inline-block",
                          marginLeft: "5px"
                        }}
                      >
                        <IconButton
                          style={{ backgroundColor: "grey" }}
                          size="small"
                        >
                          <Icon style={{ color: "white", fontSize: "16px" }}>
                            edit
                          </Icon>
                        </IconButton>
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>Jan 1 2020, 2:020 PM</Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "5px",
                        width: "100%",
                        borderRadius: "0px 0px 10px 10px",
                        backgroundColor: "white",
                        borderWidth: "0px 2px 2px 2px",
                        borderColor: "#bdbdbd",
                        borderStyle: "solid"
                      }}
                    >
                      Another comment!!!
                      <br />
                      <br />
                      hfjkhjhfkf
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "10px",
                        width: "100%",
                        borderRadius: "10px 10px 10px 10px",
                        backgroundColor: "#b39ddb"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      />
                      <div align="left" style={{ display: "inline-block" }}>
                        <Typography>0.5 Hours | Mentoring</Typography>
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>Jan 1 2020, 1:00 PM</Typography>
                      </div>
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div>
                <Collapse in={true}>
                  <div>
                    <div
                      style={{
                        padding: "15px",
                        width: "100%",
                        borderRadius: "10px 10px 0px 0px",
                        backgroundColor: "#ffc107"
                      }}
                    >
                      <div
                        align="left"
                        style={{
                          float: "left",
                          paddingRight: "8px",
                          marginTop: "-8px",
                          display: "inline-block"
                        }}
                      >
                        <Avatar src="http://www.gravatar.com/avatar.php?gravatar_id=64b490fe11342e5662f54a9e20483fad" />{" "}
                      </div>
                      <div align="left" style={{ display: "inline-block" }}>
                        <Typography>Jim Doe</Typography>
                      </div>
                      <div
                        style={{
                          float: "right",
                          display: "inline-block",
                          marginLeft: "5px"
                        }}
                      >
                        <IconButton
                          style={{ backgroundColor: "grey" }}
                          size="small"
                        >
                          <Icon style={{ color: "white", fontSize: "16px" }}>
                            edit
                          </Icon>
                        </IconButton>
                      </div>
                      <div style={{ float: "right", display: "inline-block" }}>
                        <Typography>Jan 1 2020, 2:021 PM</Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        padding: "5px",
                        width: "100%",
                        borderRadius: "0px 0px 10px 10px",
                        backgroundColor: "white",
                        borderWidth: "0px 2px 2px 2px",
                        borderColor: "#ffc107",
                        borderStyle: "solid"
                      }}
                    >
                      Internal comment!!!
                      <br />
                      <br />!
                    </div>
                  </div>
                </Collapse>
              </div>
            </Grid>
          </Grid>
          <div style={{ position: "fixed", bottom: "10px", right: "10px" }}>
            <SpeedDials parentFunc={handleDialogOpen} />
          </div>
        </div>
      </main>
    </div>
  );
}
