import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content:center;
`

export const TopWrapper = styled.div`
    position:fixed;
    top:0;
    border-bottom: 1px solid #dcdfe6;
    width:100vw;
    padding:5px 20px;
    display: flex;
    align-items: center;
    justify-content:center;

    .top-content{
        display: flex;
        justify-content: space-between;
        width:1024px;
    }
    .top-left{
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 800;
        color: #888;
        img{
            height:45px;
        }
        span{
            padding-left: 10px;
        }
    }
    .top-right{
        display: flex;
        align-items: center;
        font-size: 14px;
        .buy{
            color:var(--color-blue);
            padding-right: 10px;
            font-weight: 500;
            cursor: pointer;
        }
        .info{
            padding-right: 10px;
        }
        .user{
            padding-right: 10px;
        }
        .upgrade{
            font-size: 12px;
            margin-right: 10px;
        }
        .theme{
            
        }
    }

`

export const ContentWrapper = styled.div`
  padding-top: 70px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  .content-content{
    width:1024px;  
  }
`
export const FooterWrapper = styled.div`
    position:fixed;
    bottom:0;
    border-top: 1px solid #dcdfe6;
    width:100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:10px;
    .footer-content{
        display: flex;
        align-items: center;
        width: 1024px;
    }
    .clear{
        font-size:18px;
        padding-right: 15px;
        cursor: pointer;
    }
    .submit{
        margin-left: 15px;
    }
`

export const BotTalkWrapper = styled.div`
    border: 1px solid #eeec;
    background-color: #eee;
    padding:10px;
    margin-top: 10px;
    display: flex;
    border-radius: 4px;
    img{
        height:24px;
        margin-right: 10px;
    }
    .info{
        line-height:24px;
    }
`

export const HumanTalkWrapper = styled.div`
    background-color: #eee6;
    padding:10px;
    margin-top: 10px;
    display: flex;
    border-radius: 4px;
    .human{
        height:24px;
        font-size: 24px;
        color:var(--color-blue);
        margin-right: 10px;
    }
    .info{
        line-height:24px;
    }
`