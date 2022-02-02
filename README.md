# minimal-typescript-react-template
A minimal project template to create TypeScript React Web Applications 
using NodeJS and Visual Studio Code.

## Reference
https://mattvarghese-cs.blogspot.com/2022/01/minimal-typescript-react-project.html

## Copyright and License
Copyright (C) 2022 Varghese Mathew (Matt)

Distributed under GNU GENERAL PUBLIC LICENSE Version 3

See ~/license.txt for details

# Usage
For more details, see ~/documentation.pdf

## Downloading code
> `git clone https://github.com/mattvarghese/minimal-typescript-react-template.git`

Open the resulting minimal-typescript-react-template folder in Visual Studio Code

## To run development server
In Visual Studio Code (VSCode) > Terminal > Run Task > *npm: start*

This will pull node_modules and do necessary compilation and start development server. It will also open your default browser and navigate to the App

Be sure once you’re done to use CTRL+C in the VSCode terminal to exit out of the development server.

## To debug with VSCode
You have to be running development server to debug using VSCode. Follow steps above. Then,

Open App.tsx, and put a breakpoint inside the App function, or wherever you desire.

In VSCode, on the left margin, Click the tab/button for “Run and Debug (CTRL+SHIFT+D)”

On the top, just below the menu bar, select from the drop down for "Launch Chrome against localhost" and click the green arrow button.

Google Chrome will launch to the App URL, and your breakpoint will hit. When you click continue for your breakpoint, the App loads inside Chrome.

As called out, be sure to close the development server using CTRL+C in the VSCode terminal

### Other browsers for debugging
Chromium browser has been added for support for raspberry pi where neither chrome nor edge are available. You must have chromium-browser installed to use this
> `sudo apt install chromium-browser`

Microsoft Edge has also been added, because why not?

### Unit Test debugging
In VSCode, set whatever breakpoints in your .test.tsx files as desired. Then, on the left margin, click the tab/button for "Run and Debug (CTRL+SHIFT+D)". On the top, just below the menu bar, select from the drop down for "Run tests using Jest" and click the green arrow button. 

## To Build and Run production
Do VSCode > Terminal menu > Run Build Task, or VSCode > Terminal Menu > Run Task > *npm: build*. This builds the code into ~/dist folder.

Then, to run the production server, do VSCode > Terminal Menu > Run Task > *npm: serve*

On newer windows versions, this might give you an error related to execution policy. If so, run this command in the terminal before serving
> `Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass`

## Clean Everything
To delete the node_modules folder, dist folder etc. and thereby do a cleanup of build, VSCode > Terminal menu > Run Task > *npm: clean*

*You do not need to clean everything before every build / start / change etc. This option is there for when you need to package up files / clear dependencies and build etc.*

# Using without Visual Studio Code
Even though this project template is developed with the perspective of using with Visual Studio Code, you can still use it without VSCode. Do the following steps
- Download code. Then do the below commands from the root folder.
- Do `npm run start`, **or** `npm start`, to run the development server
- Do `npm run build` to build production
- Do `npm run serve` to serve production locally
- Do `npm test`, **or** `npm run test` to run unit tests
- Do `npm run clean` to clean up everything

# To disconnect from GitHub repository
Delete the `.git` folder and the `.gitignore` file in the root directory

.