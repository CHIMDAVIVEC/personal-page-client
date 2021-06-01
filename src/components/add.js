import React, { Component } from "react";
import { Button, Form, Input, Space } from "antd";
import cogoToast from "cogo-toast";
import axios from "axios";
import "antd/dist/antd.css";

const { TextArea } = Input;

export default class AddComment extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);

    this.onChangeContent = this.onChangeContent.bind(this);
    this.onFinish = this.onFinish.bind(this);

    this.state = {
      content: "",
      user: "",
    };
  }

  onChangeContent(e, field) {
    this.setState({
      [field]: e.target.value,
    });
  }

  onFinish = () => {
    const comment = {
      content: this.state.content,
      user: this.state.user,
    };
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };
    axios
      .post("http://localhost:8000/api/comments/add", comment, headers)
      .then((res) => {
        const json = { type: "comment" };
        json.data = res.data;
        console.log(json);
        this.props.actions.send(JSON.stringify(json));
        this.setState({ content: "", user: "" });
        this.formRef.current.resetFields();
      })
      .catch((err) =>
        cogoToast
          .error("Не удалось добавить комментарий!", { hideAfter: 5 })
          .then(() => this.setState({ content: "", user: "" }))
      );
  };

  render() {
    return (
      <>
        <Form layout="inline" onFinish={this.onFinish} ref={this.formRef}>
          <Space direction="vertical">
            {"Имя:"}
            <Form.Item name="user">
              <Input
                placeholder="Как тебя зовут?"
                value={this.state.user}
                onChange={(e) => this.onChangeContent(e, "user")}
                style={{ width: 200 }}
                required
              ></Input>
            </Form.Item>
            {"Сообщение:"}
            <Form.Item name="content">
              <TextArea
                rows={2}
                style={{ width: 400 }}
                showCount
                maxLength={100}
                required
                value={this.state.content}
                placeholder="Напишите чего-нибудь здесь..."
                onChange={(e) => this.onChangeContent(e, "content")}
              ></TextArea>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Отправить
              </Button>
            </Form.Item>
          </Space>
        </Form>
      </>
    );
  }
}
