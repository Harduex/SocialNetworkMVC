import React from 'react';
import Layout from './layouts/layout';


function Chat(props) {
    return (
        <Layout title={props.title}>
            <div>
                <div className="chat-container">
                    <header className="chat-header">
                        <h1><i className="fas fa-envelope" /> Chat</h1>
                        <a id="leave-btn" className="chat-btn" href="/chat">Leave Room</a>
                    </header>
                    <main className="chat-main">
                        <div className="chat-sidebar">
                            <h3><i className="fas fa-users" /> You:</h3>
                            <p id="your-chat-user">{props?.user.username}</p>

                            <h3><i className="fas fa-users" /> Chat with:</h3>
                            <p id="chat-user">{props?.chatUser.username}</p>
                        </div>
                        <div className="chat-messages" />
                    </main>
                    <div className="chat-form-container">
                        <form id="chat-form">
                            <input id="msg" type="text" placeholder="Enter Message" required autoComplete="off" />
                            <button className="chat-btn"><i className="fas fa-paper-plane" /> Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


export default Chat;