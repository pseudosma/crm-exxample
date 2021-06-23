import React from "react";
import Collapse from "@material-ui/core/Collapse";

const DialogType = {
  Dialog: 0,
  Internal: 1,
  Attachment: 2,
  History: 3,
  TimeLog: 4
};

export class DialogData {
  constructor(type, headerData, contents) {
    this.headerColor = "";
    this.headerInfo = <div />;
    this.controls = <div />;
    this.contents = contents;
    if (type === DialogType.Dialog) {
      this.headerColor = "";
    } else if (type === DialogType.Internal) {
      this.headerColor = "";
    } else if (type === DialogType.Attachment) {
      this.headerColor = "";
    } else if (type === DialogType.History) {
      this.headerColor = "";
    } else if (type === DialogType.TimeLog) {
      this.headerColor = "";
    }
  }
}

const dialogStyle = {
  height: "100%",
  width: "100%",
  borderRadius: "10px 10px 10px 10px"
};

const dialogContentsStyle = {
  height: "100%",
  width: "100%",
  borderRadius: "10px 10px 10px 10px"
};

class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  //Props
  //DialogData
  //RevealState

  render() {
    return (
      <div>
        <Collapse in={this.props.RevealState}>
          <div
            style={{
              width: "100%",
              borderRadius: "10px 10px 10px 10px",
              backgroundColor: ""
            }}
          />
        </Collapse>
      </div>
    );
  }
}
