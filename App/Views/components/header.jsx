import React from 'react';
import SearchBar from './searchBar'

function Header(props) {
    return (
        <header>
            {props?.loader &&
                <div class="loader-wrapper">
                    <span class="loader">
                        <span class="loader-inner"></span>
                    </span>
                </div>
            }
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="javascript:;">{props?.title || 'Home'}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {props?.logged === false &&
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li >
                                <SearchBar />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/chat">Chat</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/auth/logout">Logout</a>
                            </li>
                        </ul>
                    </div>
                }
            </nav>
        </header>
    )
}


export default Header;
