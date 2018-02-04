<div align="center"><img src="assets/logo.svg" alt="Descartes' logo" height="300"><h1>Descartes</h1>
  A JS alternative to matplotlib, made for <a href="https://theorem.js.org">TheoremJS</a></div>

# Getting Started

Make sure you have **Node v8** or higher installed on your computer.

## Install the required programs

OS      | Command
------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
OS X    | Using [Homebrew](https://brew.sh/):<br>
`brew install pkg-config cairo pango libpng jpeg giflib`<br>
<br>
Using [MacPorts](https://www.macports.org/):<br>
`port install pkgconfig cairo pango libpng jpeg giflib`
Ubuntu  | `sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++`
Fedora  | `sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel`
Solaris | `pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto`
Windows | [Instructions node-canvas' our wiki](https://github.com/Automattic/node-canvas/wiki/Installation---Windows)

**Mac OS X v10.11+:** If you have recently updated to Mac OS X v10.11+ and are experiencing trouble when compiling, run the following command: `xcode-select --install`. Read more about the problem [on Stack Overflow](http://stackoverflow.com/a/32929012/148072).

## Install Descartes

To install Descartes on your machine, you'll need to type the following command in a terminal.

```bash
$ [sudo] npm i descartes.js
```

Then open your favorite code editor:

```javascript
const d = require("descartes.js");
/* Start coding here */
```

# Docs

**See the [wiki](https://github.com/arguiot/Descartes/wiki).**

# Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/arguiot/TheoremJS/tags).

# Authors

- **Arthur Guiot** - _Initial work_ - [@arguiot](https://github.com/arguiot)

Also look at the list of [contributors](https://github.com/arguiot/TheoremJS/contributors) who participated in this project. If you don't code but you have great ideas, don't hesitate to write your idea in the issue part. If your idea is accepted, I will add you to this list 😊.

# License

This project is licensed under the MIT License - see the

<license> file for details</license>

Copyright © 2017 Arthur Guiot All Rights Reserved.
