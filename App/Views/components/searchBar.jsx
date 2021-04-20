import React from 'react';


function SearchBar(props) {
    return (
        <div className={props.className}>
            <form class="searchbar">
                <input type="search" placeholder="Search..." name="search" className="searchbar-input" onkeyup="buttonUp();" required />
                <input type="submit" class="searchbar-submit" value="GO" />
                <span class="searchbar-icon">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
            </form>
        </div>
    )
}


export default SearchBar;
