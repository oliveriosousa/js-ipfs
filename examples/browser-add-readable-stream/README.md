# Using duplex streams to add files to IPFS in the browser

If you have a number of files that you'd like to add to IPFS and end up with a hash representing the directory containing your files, you can invoke [`ipfs.add`](https://github.com/ipfs/js-ipfs/blob/master/packages/interface-ipfs-core/SPEC/FILES.md#add) with an array of objects.

But what if you don't know how many there will be in advance? You can add multiple files to a directory in IPFS over time by using [`ipfs.addReadableStream`](https://github.com/ipfs/js-ipfs/blob/master/packages/interface-ipfs-core/SPEC/FILES.md#addreadablestream).

## Clone repo and run the example

```bash
> git clone https://github.com/ipfs/js-ipfs.git
> cd js-ipfs/examples/browser-add-readable-stream
> npm install
> npm run start
```

Now open your browser at `http://localhost:1234`
