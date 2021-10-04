import React from 'react'

export const Header = ({titulo}) => {
    return (
        <nav>
            <div className="new-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo center">{titulo}</a>
            </div>
        </nav>
    )
}
