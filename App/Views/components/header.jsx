import React from 'react';
import SearchBar from './searchBar'

function Header(props) {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">{props?.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user/feed">Feed</a>
                        </li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        {/* <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </li> */}
                        <li >
                            <SearchBar />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/user/profile">Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/auth/logout">Logout</a>
                        </li>
                    </ul>


                </div>
            </nav>
        </header>
    )
}


export default Header;
