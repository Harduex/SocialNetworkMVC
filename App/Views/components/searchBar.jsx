import React from 'react';


function SearchBar(props) {
    return (
        <div className={props.classNameName}>
            <form className="searchbar" action="/search">
                <input type="search" placeholder="Search..." name="keyword" className="searchbar-input" onClick={() => buttonUp} required />
                <input type="submit" className="searchbar-submit" value="GO" />
                <span className="searchbar-icon">
                    <i className="fa fa-search" aria-hidden="true"></i>
                </span>
            </form>
        </div>
    )
}


export default SearchBar;
