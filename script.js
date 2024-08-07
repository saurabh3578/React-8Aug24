import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
    'div',
    {id:'parent'},
    React.createElement(
        'div',
        {id:'child'},
        [React.createElement(
            'h1',
            {id:'header1'},
            "Hi from React H1"
        ),
        React.createElement(
            'h2',
            {id:'header2'},
            "Hi from React H2"
        )
    ]
    )
)

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);