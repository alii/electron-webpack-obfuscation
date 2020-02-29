# electron-webpack-obfuscation

A barebones boilerplate to get webpack & babel working with electron.

### Prerequisites

You must have [Node.js](https://nodejs.org/en/) and [yarn <= 1.23.0 > 1.22.0](https://github.com/yarnpkg/yarn/tree/master) installed on your computer. As well as a `git` implementation. I can reccomend [git-scm](https://git-scm.com/downloads).

Use of `yarn` is highly reccomended over `npm`. We will not accept PRs with a `package-lock.json`!! :smile:

### Writing with this boilerplate

I reccomend using this with VSCode, and installing the ESLint & Prettier extensions for VSCode. They will enable a clean code style for you and help you maintain your code quickly and easily.

### Installation

```bash
$ git clone https://github.com/aabbccsmith/electron-webpack-obfuscation
$ cd electron-webpack-obfuscation
$ yarn install
```

After running these, configure your `package.json` and add deps where appropriate.

### Usage

To start the app in development, run `yarn start-dev`. For compiling, run `yarn dist`.

## Building

To compile the app, we use `electron-builder`. It's very versatile and supports many operating systems. Additionally, it supports the publishing of apps to GitHub, Amazon AWS S3 or even custom servers.
Building is simple, simply run `yarn dist` and wait for the magic to happen. You will see a folder called `dist` is created. You may delete this after the build process has completed. Your releases (installers, zips, dmgs, etc...) can be found under `release/`

### FAQ

What's the best way to get this boilerplate in to my own repo?

- If you don't want to have this as your origin, or you are looking to get this boilerplate into your own (maybe even private) repo, then go ahead and fork this. Afterwards, you can run the **Installation** instructions again, but replacing the clone URL to your repo.

How can I add React!?

- Wait patiently, is my only answer. I will eventually have enough time to post an announcement as an issue documenting the installation guide for React. This is the perfect, no clutter boilerplate for React, too.

You are passively sponsoring OSS (Open Source Software) by using this boilerplate. Thank you! If you liked it, please give this repo a star :)
