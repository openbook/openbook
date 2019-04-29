const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
  'public',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/openbook/openbook.git',
  },
  (outcome) => {
    console.log('Deploy Complete!', outcome)
  }
)