'use strict'

/* global Hls HlsjsIpfsLoader */
/* eslint-env browser */

import Ipfs from 'ipfs'

document.addEventListener('DOMContentLoaded', async () => {
  const testHash = 'QmdpAidwAsBGptFB3b6A9Pyi5coEbgjHrL3K2Qrsutmj9K'
  const repoPath = 'ipfs-' + Math.random()
  const node = await Ipfs.create({ repo: repoPath })

  Hls.DefaultConfig.loader = HlsjsIpfsLoader
  Hls.DefaultConfig.debug = false
  if (Hls.isSupported()) {
    const video = document.getElementById('video')
    const hls = new Hls()
    hls.config.ipfs = node
    hls.config.ipfsHash = testHash
    hls.loadSource('master.m3u8')
    hls.attachMedia(video)
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      const play = video.play();

      if (play !== undefined) {
        play.then(_ => {
          console.log("Autoplay!")
        }).catch(error => {
          console.log("Autoplay was prevented!")
          console.error(error)
        });
      }
    })
  }
})
