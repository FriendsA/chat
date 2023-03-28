import { ContentWrapper, FooterWrapper, TopWrapper, Wrapper, BotTalkWrapper, HumanTalkWrapper } from "./styled";
import ChatGPT from '/ChatGPT.png';
import {
    RedoOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Button, Input } from 'antd';

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

const Chat = () => {

    const conversation = [
        { role: 'user', content: '你是谁' }, 
        { role: 'bot', content: '我是一个AI语言模型，没有“我”的个体存在，只是一个程序，用于回答用户的问题和提供帮助。'},
        { role: 'user', content: '你都能干什么' },
        { role: 'bot', content: '作为AI语言模型，我可以进行自然语言处理，回答一些常见问题，提供一些基本信息，以及执行一些简单的操作，比如翻译、计算、搜索等等。' },
        { role: 'user', content: '你还能干什么' },
        { role: 'bot', content: '作为一个AI语音助手，我可以做以下事情：' },
    ]

    return <Wrapper>
        <TopWrapper>
            <div className="top-content">
                <div className="top-left">
                    <img src={ChatGPT} />
                    <span>陈斌斌是狗屎</span>
                </div>
                <div className="top-right">
                    <div className="buy"><a>购买openAI账号</a></div>
                    <div className="user">用户名</div>
                    <div className="info">会员:3天</div>
                    <Button className="upgrade" type="primary" size="small">提升</Button>
                    <Button className="theme">🌞</Button>
                </div>
            </div>
        </TopWrapper>
        <ContentWrapper>
            <div className="content-content">
                {
                    conversation.map(i => i?.role === 'bot' ? <BotTalk content={i?.content} /> : <HumanTalk content={i?.content} />)
                }
            </div>
        </ContentWrapper>
        <FooterWrapper>
            <div className="footer-content">
                <RedoOutlined className="clear" />
                <Input.TextArea rows={3} maxLength={3} />
                <Button type="primary" className="submit">发送</Button>
            </div>
        </FooterWrapper>
    </Wrapper>
}

export default Chat;