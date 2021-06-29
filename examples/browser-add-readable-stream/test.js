'use strict'

module.exports = {
  'Add readable stream example': function (browser) {
    browser
      .url(process.env.IPFS_EXAMPLE_TEST_URL)
      .waitForElementVisible('#output')
      .waitForElementVisible('#content')

    browser.expect.element('#output').text.to.contain('directory/ QmVgJePRxp1vhRxDcJWdmuFGfUB5S5RYTtG1NR3bQM4BBn')
    browser.expect.elements('#content > *').count.to.equal(3)

    browser.end()
  }
}
