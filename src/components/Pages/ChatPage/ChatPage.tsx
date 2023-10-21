import st from './ChatPage.module.css'
import { Button, Flex, Space } from 'antd';
import React, { useEffect, useState, FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Avatar, Divider, List, Skeleton, Form, message, Input } from 'antd';
import { NavLink } from 'react-router-dom';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
};
// interface DataType {
//     gender: string;
//     name: {
//         title: string;
//         first: string;
//         last: string;
//     };
//     email: string;
//     picture: {
//         large: string;
//         medium: string;
//         thumbnail: string;
//     };
//     nat: string;
// }
interface ChatMessageType {
    message: string,
    photo: string,
    userId: number,
    userName: string
}
type ChatMessagesPropType = {
    webSocket: null | WebSocket
}

const ChatMessages: FC<ChatMessagesPropType> = ({ webSocket }) => {
    const [data, setData] = useState<ChatMessageType[]>([]);
    const [messagesChat, setMessagesChat] = useState<ChatMessageType[]>([]);
    // useEffect(() => {
    //     webSocket?.addEventListener('message', (mes) => {
    //         console.log(mes);

    //         setData((prevMes) => {
    //             return ([...JSON.parse(mes.data).reverse(), ...prevMes])
    //         });
    //     })
    // }, []);
    const getMessagWS = (mes) => {
        console.log(mes);

        setData((prevMes) => {
            return ([...JSON.parse(mes.data).reverse(), ...prevMes])
        });
    }
    useEffect(() => {
        webSocket?.addEventListener('message', getMessagWS);
        return () => {
            webSocket?.removeEventListener('message', getMessagWS)
        }
    }, [webSocket]);
    useEffect(() => {
        setMessagesChat(data)
    }, [data])
    return (
        <div
            onScroll={function (ev) {
                if (ev.target)
                    ev.target.style.boxShadow = 'inset 0 2px 2px .5px #e4e8f4';
                if (ev.target.scrollTop > 5 && ev.target.scrollTop < ev.target.scrollHeight - ev.target.clientHeight)
                    ev.target.style.boxShadow = 'inset 0 -2px 2px .5px #e4e8f4, inset 0 2px 2px .5px #e4e8f4';
                if (ev.target.scrollTop < 5)
                    ev.target.style.boxShadow = 'inset 0 -2px 2px .5px #e4e8f4';
            }}
            id="scrollableDiv"
            style={{
                height: 300,
                overflow: 'auto',
                padding: '0 16px',
                border: '1px solid rgba(140, 140, 140, 0.35)',
                backgroundColor: 'white',
                rotate: '180deg',
                boxShadow: 'inset 0 -2px 2px .5px #e4e8f4',
                borderRadius: '5px',
                marginBottom: '15px'
            }}
        >
            <InfiniteScroll
                dataLength={messagesChat.length}
                next={() => { }}
                hasMore={messagesChat.length < 50}
                loader={<Skeleton style={{ rotate: '180deg' }} avatar paragraph={{ rows: 1 }} active />}
                endMessage={<Divider style={{ rotate: '180deg' }} plain>It is all, nothing more 🤐</Divider>}
                scrollableTarget="scrollableDiv"
            >
                <List
                    dataSource={messagesChat}
                    renderItem={(item) => {
                        return (
                            <List.Item key={item.userId} style={{ rotate: '180deg' }}>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.photo} />}
                                    title={<NavLink to={`/profile/${item.userId}`}>{item.userName}</NavLink>}
                                // description={item.email}
                                />
                                <div>{item.message}</div>
                            </List.Item>
                        )
                    }}
                />
            </InfiniteScroll>
        </div>
    );
}

// const ChatMessages = () => {
//     const messages = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//     return (
//         <div className={st.chat__messages}>
//             <Flex vertical gap={20}>
//                 {messages.map((mes: any, ind: number) => <ChatMessag key={ind} messag={mes} />
//                 )}
//             </Flex>
//         </div>
//     )
// }
// type ChatMessagType = {
//     messag: any
// }
// const ChatMessag:FC<ChatMessagType> = ({}) => {
//     const messag = {
//         url: '',
//         author: 'Semen',
//         text: 'Hello world!!!'
//     };
//     return (
//         <div className={st.chat__messag}>
//             <div className={st.chat__avatar}>
//             <Avatar size={44} style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
//             </div>
//             <div className="st chat__text">

//             </div>
//         </div>
//     )
// }
type ChatFormPropType = {
    isOpenWS: boolean,
    webSocket: null | WebSocket
}
const ChatForm: FC<ChatFormPropType> = ({ isOpenWS, webSocket }) => {
    const [form] = Form.useForm();
    const onFinish = (mes) => {
        if (mes && mes?.textarea.length > 0) {
            message.success('Submit success!');
            webSocket?.send(mes.textarea)
        }
    };
    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    return (
        <div className={st.chat__form}>
            <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item name="textarea">
                    <TextArea
                        showCount
                        maxLength={100}
                        style={{ height: 120, resize: 'none' }}
                        onChange={onChange}
                        placeholder="write message"
                    />
                </Form.Item>
                <Form.Item>
                    <Space>
                        <Button type="primary" htmlType="submit" disabled={!isOpenWS}>
                            Submit
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    )
}

const Chat = () => {
    let [webSocket, setWebSocket] = useState<null | WebSocket>(null);
    const [isOpenWS, setIsOpenWS] = useState(false);

    const connectToWS = () => {
        setIsOpenWS(false);
        let ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
        ws.addEventListener('close', reconnectToWS);
        setWebSocket(ws);
    }
    const setOpenTrueWS = () => {
        setIsOpenWS(true);
        webSocket?.removeEventListener('open', setOpenTrueWS)
    }
    const reconnectToWS = (mes) => {
        webSocket?.removeEventListener('close', reconnectToWS);
        setWebSocket(null);
        setTimeout(() => {
            connectToWS();
        }, 3000)
    }

    useEffect(() => {
        connectToWS();
    }, []);
    
    useEffect(() => {
        webSocket?.addEventListener('open', setOpenTrueWS)
    }, [webSocket]);
    return (
        <div className={st.chat__body}>
            <ChatMessages webSocket={webSocket} />
            <ChatForm isOpenWS={isOpenWS} webSocket={webSocket} />
        </div>
    )
}

export default function ChatPage(): React.JSX.Element {
    return (
        <div className={st.chat}>
            <h2 className={st.chat__title}>Chat</h2>
            <Chat />
        </div>
    )
}

