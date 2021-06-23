import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles(theme => ({
  base: {
    transform: "translateZ(0px)",
    flexGrow: 1
  },
  exampleWrapper: {
    position: "relative",
    marginTop: theme.spacing(3),
    height: 380
  },
  radioGroup: {
    margin: theme.spacing(1, 0)
  },
  speedDial: {
    position: "absolute",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
      top: theme.spacing(2),
      left: theme.spacing(2)
    }
  }
}));

const actions = [
  { icon: <Icon>close</Icon>, name: "Close Task" },
  { icon: <Icon>star</Icon>, name: "Subscribe to this Task" },
  { icon: <Icon>warning</Icon>, name: "Escalate Task" },
  { icon: <Icon>link</Icon>, name: "Open a Related Task" },
  { icon: <Icon>mode_comment</Icon>, name: "Add Internal Comment" },
  { icon: <Icon>add_comment</Icon>, name: "Add Comment" }
];

// class SpeedDials extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state= {
//       direction: "up",
//       open: false,
//       hidden: false,
//     };
//     this.handleOpen = this.handleClose.bind(this);
//     this.handleClose = this.handleClose.bind(this);
//   }

//   handleClose = (event) => {
//     this.setState({open: false});
//   };

//   handleOpen = (event) => {
//     this.setState({open: true});
//   };

//   render() {
//     const classes = useStyles();
//     return(
//       <div className={classes.base}>
//       <div className={classes.exampleWrapper}>
//         <SpeedDial
//           ariaLabel="SpeedDial example"
//           className={classes.speedDial}
//           hidden={this.state.hidden}
//           icon={<SpeedDialIcon />}
//           onClose={this.handleClose}
//           onOpen={this.handleOpen}
//           open={this.state.open}
//           direction={this.state.direction}
//         >
//           {actions.map(action => (
//             <SpeedDialAction
//               key={action.name}
//               icon={action.icon}
//               tooltipTitle={action.name}
//               onClick={this.handleClose}
//             />
//           ))}
//         </SpeedDial>
//       </div>
//     </div>
//     );
//   }
// }

// export default SpeedDials;

export default function SpeedDials(parentFunc) {
  const classes = useStyles();
  const [direction, setDirection] = React.useState("up");
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleClose = event => {
    setOpen(false);
  };

  const handleOpen = event => {
    setOpen(!open);
  };

  const handleSelectItem = event => {
    setOpen(false);
    parentFunc();
  };

  return (
    <div className={classes.base}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          color="black"
          ariaLabel="SpeedDial example"
          className={classes.speedDial}
          hidden={hidden}
          icon={<SpeedDialIcon />}
          onClose={handleClose}
          onClick={handleOpen}
          open={open}
          direction={direction}
        >
          {actions.map(action => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={handleSelectItem}
            />
          ))}
        </SpeedDial>
      </div>
    </div>
  );
}
