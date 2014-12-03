# Temp

This is a relatively blank ember-cli app which demonstrates some combination of dependencies
(as yet unknown) which breaks the `ember s` process when a file changes, spamming the console
with:

```
(node) warning: Recursive process.nextTick detected. This will break in the next version of node. Please use setImmediate for recursive deferral.
```

and then freezing.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* `gem install compass`

## Reproducing the problem

* `ember server`
* Once the serve process has fully started-up, make some trivial edit to application.hbs and then save the file
* the server should pick up the change, start reprocessing the trees and then…
* `(node) warning: Recursive process.nextTick detected. This will break in the next version of node. Please use setImmediate for recursive deferral.`

