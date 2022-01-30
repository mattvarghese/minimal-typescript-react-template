// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/license.txt for details

import React from "react";

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