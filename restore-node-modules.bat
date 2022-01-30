rem Copyright (C) 2022 Varghese Mathew (Matt)
rem Distributed under GNU GENERAL PUBLIC LICENSE Version 3
rem See ~/license.txt for details
if not exist "node_modules" (
    npm install react react-dom
    npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
    npm install --save-dev webpack webpack-cli webpack-dev-server
    npm install --save-dev html-webpack-plugin style-loader css-loader file-loader
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest
    npm install --save-dev ts-loader
)
