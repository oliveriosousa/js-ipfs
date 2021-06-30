# Mutable File System examples

The MFS is a file system abstraction built on top of IPFS. It supports all the operations you would expect such as creating directories, adding files to them, renaming, coping, deleting, etc.

This demo allows you to upload files from your computer and use them to explore MFS methods from within your web browser.

![screenshot](img/screenshot_1.png)

![screenshot](img/screenshot_2.png)

## Before you start

First clone this repo, install dependencies in the project root and build the project.

```console
$ git clone https://github.com/ipfs/js-ipfs.git
$ cd js-ipfs
$ npm install
$ npm run build
```

## Running the example

Navigate into this directory:

```console
$ cd js-ipfs/examples/browser-mfs
$ npm install
$ npm start
```

Then open [http://localhost:1234](http://localhost:1234) in your browser.
