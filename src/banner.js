import React from "react";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import ReportProblemOutlined from "@material-ui/icons/ReportProblemOutlined";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";

const BannerType = {
  Holiday: 0,
  Weekend: 1,
  Special: 2
};

const alertStyle = {
  color: "white",
  backgroundColor: "#ef9a9a",
  width: "99%",
  marginBottom: "5px"
};
const noticeStyle = {
  color: "white",
  backgroundColor: "#b3e5fc",
  width: "99%",
  marginBottom: "5px"
};

class Banner extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: true };
    this.toggleOpen = this.toggleOpen.bind(this);

    this.bt = noticeStyle;
    this.i = <InfoOutlined style={{ padding: "2px 2px 2px 2px" }} />;
    this.s = "";
    if (props.bannerType === BannerType.Holiday) {
      this.s =
        "This is an official holiday, if there is an emergency, please use a Level II escalation";
    } else if (props.bannerType === BannerType.Weekend) {
      this.s =
        "The office is closed, if there is an emergency, please use a Level II escalation.";
    } else if (props.bannerType === BannerType.Special) {
      this.bt = alertStyle;
      this.i = <ReportProblemOutlined style={{ padding: "2px 2px 2px 2px" }} />;
      this.s =
        "This client is not configured as a normal customer, and it may require special attention.  It is a managed customer.";
    }
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <Collapse in={this.state.open}>
        <div onClick={this.toggleOpen} style={this.bt}>
          <div style={{ float: "left" }}>{this.i}</div>
          <Typography>{this.s}</Typography>
        </div>
      </Collapse>
    );
  }
}

export default Banner;
