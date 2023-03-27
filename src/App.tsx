// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/license.txt for details
// Blog: https://mattvarghese-cs.blogspot.com/2022/01/minimal-typescript-react-project.html
// GitHub: https://github.com/mattvarghese/minimal-typescript-react-template

import React from "react";
import "./App.scss";

interface IProps {
    heading: string;
    body: string;
}

const App: React.FunctionComponent<IProps> = (props: IProps): JSX.Element | null => {
    const { heading, body } = props;
    return (
        <div>
            <h1>{heading}</h1>
            <p>{body}</p>
        </div>
    );
};

export default App;
