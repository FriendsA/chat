import styled from "styled-components";

export const PayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f7f7f7;
  .top {
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-bottom: 1px solid #ddd;
    background: #fff;
    span {
      font-size: 20px;
      color: #333;
      font-weight: normal;
      vertical-align: middle;
      margin-left: 10px;
    }
  }
  .content {
    width: 800px;
    padding: 0 135px;
    margin: 0 auto;
    margin-top: 15px;
    background: #fff url(/wave.png) top center repeat-x;
    text-align: center;
    color: #333;
    border: 1px solid #e5e5e5;
    border-top: none;
    .pay-info {
      padding-top: 30px;
      color: red;
    }
    .pay-num {
      font-size: 48px;
      margin-top: 20px;
    }
    .qr {
      img{
        width: 280px;
        height: 280px;
      }
      .shadow {
        width: 260px;
        height: 260px;
        position: absolute;
        background-color: #000000;
        opacity: 0.85;
        left: 50%;
        top: 43%;
        transform: translate(-50%, -50%);
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 16px;
      }
    }
    .pay-detail {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .pay-messsage {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 20px;
      .scan {
        color: #409eff;
        font-size: 40px;
        margin-right: 10px;
      }
      div {
        line-height: 18px;
      }
    }
  }
  .footer {
    text-align: center;
    margin: 10px auto;
    color: #888888;
    font-size: 12px;
    line-height: 20px;
    font-family: "simsun";
  }
`;
