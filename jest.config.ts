// Copyright (C) 2022 Varghese Mathew (Matt)
// Distributed under GNU GENERAL PUBLIC LICENSE Version 3
// See ~/license.txt for details
// Blog: https://mattvarghese-cs.blogspot.com/2022/01/minimal-typescript-react-project.html
// GitHub: https://github.com/mattvarghese/minimal-typescript-react-template

import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // resource files will get replaced by a constant string when testing
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/tests/__mocks__/fileMock.ts",

    // style imports will get replaced by an empty object when testing
    "\\.(scss|sass|css)$": "<rootDir>/src/tests/__mocks__/styleMock.ts"
  }
};

export default config;
