<div align="center"><img src="assets/logo.svg" alt="Descartes' logo" height="300"><h1>Descartes</h1>
  A JS alternative to matplotlib, made for <a href="https://theorem.js.org">TheoremJS</a></div>
  
# Examples
See the docs for examples: **[Docs](https://github.com/arguiot/Descartes/wiki/Examples)**

# Getting Started

Make sure you have **Node v8** or higher installed on your computer.

## Install the required programs

<table>
	<thead>
		<tr>
			<th>OS</th>
			<th>Command</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>OS X</td>
			<td>Using <a href="https://brew.sh/" rel="nofollow">Homebrew</a>:<br><code>brew install pkg-config cairo pango libpng jpeg giflib</code><br><br>Using <a href="https://www.macports.org/" rel="nofollow">MacPorts</a>:<br><code>port install pkgconfig cairo pango libpng jpeg giflib</code></td>
		</tr>
		<tr>
			<td>Ubuntu</td>
			<td><code>sudo apt-get install libcairo2-dev libjpeg-dev libpango1.0-dev libgif-dev build-essential g++</code></td>
		</tr>
		<tr>
			<td>Fedora</td>
			<td><code>sudo yum install cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel</code></td>
		</tr>
		<tr>
			<td>Solaris</td>
			<td><code>pkgin install cairo pango pkg-config xproto renderproto kbproto xextproto</code></td>
		</tr>
		<tr>
			<td>Windows</td>
			<td><a href="https://github.com/Automattic/node-canvas/wiki/Installation:-Windows">Instructions node-canvas' wiki</a></td>
		</tr>
	</tbody>
</table>

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
