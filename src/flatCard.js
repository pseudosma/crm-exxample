import React from "react";
import Grid from "@material-ui/core/Grid";

const cardStyle = {
  backgroundColor: "#78909c",
  height: "100%",
  width: "100%",
  paddingTop: "10px",
  paddingBottom: "10px",
  margin: "5%",
  maxWidth: "150px"
  //borderRadius: '0px 10px 0px 10px',
};

class FlatCard extends React.Component {
  render() {
    return (
      <div style={cardStyle}>
        <Grid
          container
          direction="column"
          alignContent="center"
          justify="center"
        >
          <Grid item>{this.props.contents}</Grid>
        </Grid>
      </div>
    );
  }
}

export default FlatCard;
