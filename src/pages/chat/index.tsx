import { ContentWrapper, FooterWrapper, TopWrapper, Wrapper, BotTalkWrapper, HumanTalkWrapper, UpgradeWrapper } from "./style";
import ChatGPT from '/ChatGPT.png';
import Alipay from '/alipay.png';
import {
    RedoOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Button, Input, Modal, Form, message } from 'antd';
import { useRequest } from 'ahooks';
import { useEffect, useState } from "react";
import { payList } from "../utils";
import { getUserInfo, loginServer, sendMessage } from "../service";
import { ConvercationItem, ROLE, UserInfo } from "../types";

interface ChatProps {
    content: string;
}

const BotTalk = ({ content }: ChatProps) => <BotTalkWrapper>
    <img src={ChatGPT} />
    <div className="info">
        {content}
    </div>
</BotTalkWrapper>


const HumanTalk = ({ content }: ChatProps) => <HumanTalkWrapper>
    <UserOutlined className="human" />
    <div className="info">
        {content}
    </div>
</HumanTalkWrapper>

const TOKEN = 'user_token';

const Chat = () => {

    /** 用户输入信息 */
    const [text, setText] = useState<string | undefined>();

    /** 用户信息token */
    const sessionData = sessionStorage.getItem(TOKEN);
    const [token, setToken] = useState(sessionData ? JSON.parse(sessionData) : null);
    console.log(token);
    /** 使用token获取用户信息 */
    const { data: userInfo } = useRequest<UserInfo, any>(() => getUserInfo(token), { refreshDeps: [token], ready: !!token });

    /** 注册登陆 */
    const { loading: loginLoading, runAsync: loginServe } = useRequest(loginServer, { manual: true });


    /** 消息发送 */
    const { loading: messageLoading, runAsync: messageServe } = useRequest(sendMessage, { manual: true });


    const [form] = Form.useForm();

    /** 登陆弹窗 */
    const [loginVisible, setLoginVisible] = useState(false);

    /** 对话信息 */
    const [conversation, setConversation] = useState<ConvercationItem[]>([])

    /** 对话 */
    const handleSubmit = () => {
        if (!text) {
            return;
        }
        if (!token) {
            setLoginVisible(true);
        } else {
            const oldConversation = [...conversation];
            const newConversation = [...conversation, { role: ROLE.USER, content: text }]
            setConversation(newConversation);
            setText('');
            /** 发送信息给后端 */
            messageServe({ history: oldConversation, input: text, uuid: token, nickname: userInfo?.name }).then(res => {
                setConversation(c => [...c, { role: ROLE.BOT, content: res as string }])
            })
        }
    }

    /** 注册登录 */
    const handleLogin = () => {
        form.validateFields().then(res => {
            console.log(res);
            loginServe({ username: res?.username, password: res?.password }).then(userData => {
                /** 前端保存用户信息 */
                setToken(userData);
                sessionStorage.setItem(TOKEN, JSON.stringify(userData))
            }).catch(e => {
                message.error('注册失败!');
            }).finally(() => {
                setLoginVisible(false);
            });
        })
    }

    /** 提升弹窗控制 */
    const [upgradeVisiable, setUpgradeVisiable] = useState(false);

    /** 选中的套餐 */
    const [pay, setPay] = useState<string>(payList?.[0]?.id);

    /** 提升提交 */
    const handlePay = () => {
        window.open(`/pay?type=${pay}`);
        setUpgradeVisiable(false);
        Modal.info({
            title: '提示',
            content: '支付完成？请刷新页面～',
            onOk() {
                location.reload();
            },
        });
    }

    return <Wrapper>
        <TopWrapper>
            <div className="top-content">
                <div className="top-left">
                    <img src={ChatGPT} />
                    <span>陈斌斌是狗屎</span>
                </div>
                <div className="top-right">
                    {userInfo && <>
                        {/* <div className="buy"><a>购买openAI账号</a></div> */}
                        <div className="user">{userInfo?.name || '用户名'}</div>
                        <div className="info">会员:{userInfo?.days || 0}天</div>
                        <Button className="upgrade" type="primary" size="small" onClick={() => setUpgradeVisiable(true)}>提升</Button>
                        {/* <Button className="theme">🌞</Button> */}
                    </>}
                </div>
            </div>
        </TopWrapper>
        <ContentWrapper>
            <div className="content-content">
                {
                    conversation?.length === 0 && <div className="empty">

                        <div className="title">AI</div>
                        <div>自然语言模型人工智能对话</div>

                    </div>
                }
                {
                    conversation.map(i => i?.role === 'bot' ? <BotTalk content={i?.content} /> : <HumanTalk content={i?.content} />)
                }
            </div>
        </ContentWrapper>
        <FooterWrapper>
            <div className="footer-content">
                <RedoOutlined className="clear" onClick={() => setConversation([])} />
                <Input.TextArea value={text} onChange={(e) => { setText(e.target.value) }} rows={3} />
                <Button type="primary" className="submit" onClick={handleSubmit}> 发送</Button>
            </div>
        </FooterWrapper>
        <Modal
            open={loginVisible}
            onCancel={() => setLoginVisible(false)}
            title="登陆或注册"
            width={300}
            footer={null}
        >
            <Form form={form}>
                <Form.Item name="name" rules={[{ required: true, message: "请输入邮箱" }]}>
                    <Input placeholder="请输入邮箱" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "请输入密码" }]}>
                    <Input placeholder="请输入密码" type="password" />
                </Form.Item>
            </Form>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Button loading={loginLoading || messageLoading} type="primary" onClick={handleLogin}>注册并登陆</Button>
            </div>
        </Modal>
        <Modal
            open={upgradeVisiable}
            title="开通VIP"
            width={710}
            footer={null}
            onCancel={() => {
                setUpgradeVisiable(false)
                setPay('3d');
            }}
        >
            <UpgradeWrapper>
                <div style={{ color: '#606266' }}>
                    购买计划
                </div>
                <div className="pay-list">
                    {
                        payList?.map(item => <div className={`${pay === item?.id ? 'active' : ''} pay-item`} onClick={() => { setPay(item?.id) }}>
                            <div>{item?.label}</div>
                            <div>￥{item?.price}元</div>
                        </div>)
                    }
                </div>
                <div className="pay-way">支付方式 <img src={Alipay} /> 支付宝支付</div>
                <div className="pay-info">( 重复开通会员天数会叠加 )</div>
                <div className="pay-btn">
                    <Button type="primary" onClick={handlePay}>立刻开通</Button>
                </div>
            </UpgradeWrapper>
        </Modal>
    </Wrapper >
}

export default Chat;