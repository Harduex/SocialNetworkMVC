import React from 'react';
import Layout from './layouts/layout';


function Chat(props) {
    return (
        <Layout title={props.title}>
            <div className="join-container">
                <header className="join-header">
                    <h1>Chat</h1>
                </header>
                <main className="join-main">
                    <form action="/chat/room">
                        <h3>Select User</h3>
                        <div className="form-control">
                            <select name="username" id="username">
                                {props?.following.map((user) => <option value={user?.username}>{user?.username}</option>)}
                            </select>
                        </div>
                        <button type="submit" className="chat-btn">Join Chat</button>
                    </form>
                </main>
            </div>
        </Layout>
    )
}


export default Chat;