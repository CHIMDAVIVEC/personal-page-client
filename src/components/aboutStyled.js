import styled from "styled-components";

const AboutStyled = styled.div`
  .ant-layout-footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    background: #fff;
  }
  .ant-layout-header,
  .ant-layout-footer {
    flex: 0 0 auto;
  }
  .ant-layout-header {
    height: 64px;
    padding: 0 50px;
    line-height: 64px;
    background: #fff;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  }
  h1.ant-typography,
  .ant-typography h1 {
    align
    margin-bottom: 0.5em;
    color: #000000a1;
    font-weight: 600;
    font-size: 27px;
    line-height: 2;
  }
  h3.ant-typography,
  .ant-typography h3 {
    align
    margin-bottom: 0.5em;
    color: #000000a1;
    font-weight: 600;
    font-size: 22px;
    line-height: 2;
  }
  h4.ant-typography,
  .ant-typography h4 {
    align
    margin-bottom: 0.5em;
    color: #000000a1;
    font-weight: 600;
    font-size: 17px;
    line-height: 0.5;
  }
  .ant-layout {
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 0;
    background: #fff;
    box-sizing: border-box;
  }
  .ant-layout-content {
    flex: auto;
    min-height: 0;
  }
`;

export default AboutStyled;
