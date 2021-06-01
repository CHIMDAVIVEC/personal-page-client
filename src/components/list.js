import React, { Component } from "react";
import moment from "moment/min/moment-with-locales";
import axios from "axios";
import { Comment, Layout, Tooltip, Space } from "antd";
import "antd/dist/antd.css";

const { Content } = Layout;

export default class ListComments extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get("http://localhost:8000/api/comments/")
      .then((resp) => this.setState({ comments: resp.data }))
      .catch((err) => console.log(err));
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      comments: [JSON.parse(nextProps.comment).data, ...this.state.comments],
    });
  }

  commentList() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.user}
          content={comment.content}
          socket={this.props.actions}
          datetime={
            <Tooltip
              title={moment(Date.parse(comment.createdAt)).locale("ru").format(
                "YYYY-MM-DD HH:mm:ss"
              )}
            >
              <span>{moment(Date.parse(comment.createdAt)).locale("ru").fromNow()}</span>
            </Tooltip>
          }
          key={comment._id}
        />
      );
    });
  }
  render() {
    return (
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        {this.commentList().map((comment, k) => (
          <Content
            style={{
              background: "WhiteSmoke",
              width: "70%",
            }}
            key={k}
          >
            {comment}
          </Content>
        ))}
      </Space>
    );
  }
}
