'use strict'

import Ipfs from 'ipfs'

const main = async () => {
  const repoPath = `ipfs-${Math.random()}`
  const ipfs = await Ipfs.create({ repo: repoPath })

  const directoryName = 'directory'

  // Our list of files
  const inputFiles = createFiles(directoryName)

  const directoryHash = await streamFiles(ipfs, directoryName, inputFiles)

  const fileList = await ipfs.ls(directoryHash)

  log(`\n--\n\nDirectory contents:\n\n${directoryName}/ ${directoryHash}`)

  let i = 0;
  for await (const file of fileList) {
    const content = [];

    for await (const chunk of ipfs.cat(file.cid)) {
      content.push(chunk)
    }

    log(` ${i < fileList.length - 1 ? '\u251C' : '\u2514'}\u2500 ${file.name} ${file.path} ${content.toString()}`)
    addContent(file.name, content)
    i++;
  }
}

const createFiles = (directory) => {
  return [{
    path: `${directory}/file1.txt`,

    // content could be a stream, a url, a Uint8Array, a File etc
    content: 'one'
  }, {
    path: `${directory}/file2.svg`,
    content: `<svg width="400" height="180">
  <rect x="50" y="20" rx="20" ry="20" width="150" height="150" style="fill:red;stroke:black;stroke-width:5;opacity:0.5" />
  Sorry, your browser does not support inline SVG.
</svg>`
  }, {
    path: `${directory}/file3.json`,
    content: `{
      name: 'IPFS is awesome'
    }`
  }]
}

const streamFiles = async (ipfs, directory, files) => {
  // Create a stream to write files to
  const stream = new ReadableStream({
    start(controller) {
      for (const file of files) {
        // Add the files one by one
        controller.enqueue(file)
      }

      // When we have no more files to add, close the stream
      controller.close()
    }
  })

  const data = await ipfs.add(stream)
  log(`Added ${data.path} hash: ${data.cid.toString()}`)

  // The last data event will contain the directory hash
  if (data.path === directory) {
    return data.cid
  }
}

const log = (line) => {
  document.getElementById('output').appendChild(document.createTextNode(`${line}\r\n`))
}

const addContent = (name, content) => {
  const details = document.createElement("details");
  details.innerHTML = `<summary>${name}</summary>${content}`
  document.getElementById("content").appendChild(details);
}

main()
