# electron-webpack-obfuscation

[![Dependencies](https://david-dm.org/aabbccsmith/electron-webpack-obfuscation.svg)](https://david-dm.org/aabbccsmith/electron-webpack-obfuscation)

A barebones boilerplate to get typescript, webpack, react, babel, obfuscation in prod AND hot reloading on the main and renderer working with electron. It's the real deal. :tada:

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) and [yarn 1.2](https://github.com/yarnpkg/yarn) installed on your computer. As well as a `git` implementation. I can reccomend [git-scm](https://git-scm.com/downloads).

Use of `yarn` is highly reccomended over `npm`. We will not accept PRs with a `package-lock.json`!! :smile:

### Writing with this boilerplate

I recommend using this with either WebStorm or VSCode, and installing the ESLint & Prettier extensions for VSCode. They will enable a clean code style for you and help you maintain your code quickly and easily.

### Installation

```bash
$ git clone https://github.com/aabbccsmith/electron-webpack-obfuscation
$ cd electron-webpack-obfuscation
$ rm -rf .git
$ yarn install
```

After running these, you are ready to start writing code! It's that simple.

### Usage

To start the app in development, run `yarn dev`. For compiling, run `yarn dist`.

## Building

To compile the app, we use `electron-builder`. It's very versatile and supports many operating systems. Additionally, it supports the publishing of apps to GitHub, Amazon AWS S3 or even custom servers.
Building is simple, simply run `yarn dist` and wait for the magic to happen. You will see a folder called `dist` is created. You may delete this after the build process has completed. Your releases (installers, zips, dmgs, etc...) can be found under `release/`

### FAQ

What's the best way to get this into my own repo?

- You should fork this repo before cloning down

You are passively sponsoring OSS (Open Source Software) by using this boilerplate. Thank you! If you liked it, please give this repo a star :)
