import React, { Component } from "react";
import ListComments from "./list";
import AddComment from "./add";
import { Space } from "antd";

export default class Home extends Component {
  constructor(props) {
    super(props);
    const sock = new WebSocket("ws://localhost:8000/comment");
    sock.onopen = function () {
      console.log("open");
    };

    const self = this;
    sock.onmessage = function (e) {
      const message = JSON.parse(e.data);
      const dataToSend = JSON.stringify(message);
      self.setState({ comment: dataToSend });
    };

    this.state = {
      actions: sock,
      comment: {},
    };
  }

  render() {
    return (
      <div className="container">
        <Space direction="vertical">
          <AddComment {...this.state} />
          <ListComments {...this.state} />
        </Space>
      </div>
    );
  }
}
