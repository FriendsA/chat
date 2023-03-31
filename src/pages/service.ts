import { UserInfo } from "./types";

/** 获取用户信息 */
export const getUserInfo = (token: string): Promise<UserInfo> =>
  test(
    {
      name: "陈斌斌是狗屎",
      days: 3,
    },
    1000
  );
//   fetch(`xxx`, { method: "post", body: JSON.stringify({ token }) }).then(
//     (res) => res.json()
//   );

/** 注册登陆 */
export const loginServer = (params: any) => test("xxx", 1000);
//   fetch(`xxx`, { method: "post", body: JSON.stringify(params) }).then((res) =>
//     res.json()
//   );

/** 发送消息 */
export const sendMessage = (params: any) => test(list[1].content, 1000);
//   fetch(`xxx`, { method: "post", body: JSON.stringify(params) }).then((res) =>
//     res.json()
//   );

/** 获取二维码 */
export const getQr = (params: any) =>
  fetch(`xxx`, { method: "post", body: JSON.stringify(params) }).then((res) =>
    res.json()
  );

/** 获取二维码状态*/
export const getQrState = (params: any) =>
  fetch(`xxx`, { method: "post", body: JSON.stringify(params) }).then((res) =>
    res.json()
  );

const test = (data: any, time: number) =>
  new Promise((res, reject) => {
    setTimeout(() => {
      res(data);
    }, time);
  });

const list = [
  { role: "user", content: "你是谁" },
  {
    role: "bot",
    content:
      "我是一个AI语言模型，没有“我”的个体存在，只是一个程序，用于回答用户的问题和提供帮助。",
  },
  { role: "user", content: "你都能干什么" },
  {
    role: "bot",
    content:
      "作为AI语言模型，我可以进行自然语言处理，回答一些常见问题，提供一些基本信息，以及执行一些简单的操作，作为AI语言模型，我可以进行自然语言处理，回答一些常见问题，提供一些基本信息，以及执行一些简单的操作，作为AI语言模型，我可以进行自然语言处理，回答一些常见问题，提供一些基本信息，以及执行一些简单的操作，作为AI语言模型，我可以进行自然语言处理，回答一些常见问题，提供一些基本信息，以及执行一些简单的操作，比如翻译、计算、搜索等等。",
  },
  { role: "user", content: "你还能干什么" },
  { role: "bot", content: "作为一个AI语音助手，我可以做以下事情：" },
  { role: "user", content: "你是谁" },
  {
    role: "bot",
    content:
      "我是一个AI语言模型，没有“我”的个体存在，只是一个程序，用于回答用户的问题和提供帮助。",
  },
  { role: "user", content: "你都能干什么" },
  {
    role: "bot",
    content:
      "作为AI语言模型，我可以进行自然语言处理，回答一些常见问题，提供一些基本信息，以及执行一些简单的操作，比如翻译、计算、搜索等等。",
  },
  { role: "user", content: "你还能干什么" },
  { role: "bot", content: "作为一个AI语音助手，我可以做以下事情：" },
];
