import React from "react";
import { Layout, Typography } from "antd";
import AboutStyled from "./aboutStyled";
import Chat from "./chat";
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function PageAbout() {
  return (
    <AboutStyled>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Title>Это обо мне и про меня</Title>
        </Header>
        <Content style={{ padding: "0 15%", marginTop: "5%" }}>
          <div style={{ padding: 24, minHeight: 380 }}>
            <Title level={3}>Общие сведения</Title>
            <Title level={4}>
              <p>Меня зовут Михаил Муравьев,</p>
              <p>и я студент 3-го курса ФПМИ.</p>
            </Title>
            <Title level={3} style={{ textAlign: "right" }}>
              Образование
            </Title>
            <Title level={4} style={{ textAlign: "right" }}>
              <p>Закончил 11 классов МБОУ СОШ №175 (2007 - 2018)</p>
              <p>После поступил в НГТУ.</p>
            </Title>
            <Title level={3}>Интересы и вообще</Title>
            <Title level={4}>
              <p>
                В основном, помимо учебы, я ничем не занимаюсь{" "}
                <img
                  alt=""
                  src="https://i.ytimg.com/vi/kR8n6Ee123Y/maxresdefault.jpg"
                  width="5%"
                  height="5%"
                />
                .
              </p>
              <p>
                Выделяющихся интересов не имею, ну или не могу их выделить из
                общего числа.
              </p>
              <p> </p>
              <p>
                Параллельно учебе, как и большая часть людей, слушаю музыку,
              </p>
              <p>смотрю фильмы, стримы на Твиче или видео на Ютьюбе.</p>
              <p>
                В редкое свободное время играю в различные игры и тому подобное.
              </p>
              <p> </p>
              <p>
                Но в основном всё время тратится на учёбу, либо на попытки
                учиться.
              </p>
            </Title>
            <Title level={3} style={{ textAlign: "right" }}>
              Ссылки
            </Title>
            <Title level={4} style={{ textAlign: "right" }}>
              <a href="https://vk.com/blessinrng">VK</a>
              {" | "}
              <a href="https://github.com/CHIMDAVIVEC">Github</a>
              {" | "}
              <a href="https://gitlab.com/reckfulwastaken">Gitlab</a>
            </Title>
          </div>
          <Title level={3} style={{ textAlign: "center" }}>
            КОММЕНТАРИИ{" "}
            <img
              alt=""
              src="https://cdn.betterttv.net/emote/5e1bd08688e62a5f14dc6316/2x"
            />
          </Title>
          <Chat />
        </Content>
        <Footer>
          <img
            alt=""
            src="https://i0.wp.com/itc.ua/wp-content/uploads/2017/10/Blade-Runner-2049_43.jpg?fit=1777%2C735&quality=100&strip=all&ssl=1"
            width="100%"
            height="166.5"
          />
        </Footer>
      </Layout>
    </AboutStyled>
  );
}

export default PageAbout;
