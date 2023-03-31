import { useSearchParams } from 'react-router-dom';
import { PayWrapper } from './style';
import {
    ScanOutlined
} from '@ant-design/icons';
import { Divider } from 'antd';
import Alipay from '/alipay.png';
import Demo from '/demo.png';
import { useRequest } from 'ahooks';
import { payList } from '../utils';
import { getQr, getQrState } from '../service';

const info = [
    {
        name: '商家',
        value: 'OpenAI chatGPT',
    },
    {
        name: '商家',
        value: 'OpenAI chatGPT',
    },
    {
        name: '商家',
        value: 'OpenAI chatGPT',
    },
    {
        name: '商家',
        value: 'OpenAI chatGPT',
    }
]

const Pay = () => {

    // TODO: 获取二维码 刷新机制

    const type = location.search?.split?.('?')?.[1]?.split?.('=')?.[1] || '1';

    // 获取二维码 订单数据
    const { data } = useRequest(getQr)

    // 刷新机制
    const { state } = useRequest(() => getQrState(data), {
        pollingInterval: 3000,
        refreshDeps: [data],
    })

    return <PayWrapper>
        <div className="top">
            <img src={Alipay} /><span>支付宝扫码支付</span>
        </div>
        <div className="content">
            <div className="pay-info"> ( 扫码支付时，请不要关闭本页面 )</div>
            <div className="pay-num">￥{payList?.find(i => i?.id === type)?.price}</div>
            <div className="qr">
                {false && <div className='shadow'>点击刷新</div>}
                <img src={Demo} />
            </div>
            <Divider />
            {
                info?.map(i => <div className="pay-detail">
                    <div>{i?.name}</div>
                    <div>{i?.value}</div>
                </div>)
            }
            <Divider dashed />
            <div className='pay-messsage'>
                <ScanOutlined className='scan' />
                <div>
                    <div>请使用支付宝扫一扫</div>
                    <div>扫描二维码完成支付</div>
                </div>
            </div>
        </div>
        <div className='footer'>
            <div>手机用户可保存上方二维码到手机中</div>
            <div>在支付宝扫一扫中选择“相册”即可</div>
        </div>
    </PayWrapper>
}

export default Pay;