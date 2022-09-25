const withMarkdoc = require('@markdoc/next.js')

const HTML_PAGES = ['ask']

module.exports = withMarkdoc()({
  pageExtensions: ['js', 'md', 'mdoc'],
  rewrites() {
    return [
      {
        source: '/',
        destination: '/index.html',
      },
      {
        source: '/choreography',
        destination: '/choreography/index.html',
      },
      {
        source: '/fourbyfour',
        destination: '/fourbyfour/index.html',
      },
      {
        source: '/fourbyfour/ask',
        destination: '/fourbyfour/ask.html',
      },
      {
        source: '/fourbyfour/audio',
        destination: '/fourbyfour/audio.html',
      },
      {
        source: '/fourbyfour/heatherdesaulniers',
        destination: '/fourbyfour/heatherdesaulniers.html',
      },
      {
        source: '/fourbyfour/kids',
        destination: '/fourbyfour/kids.html',
      },
      {
        source: '/fourbyfour/program',
        destination: '/fourbyfour/program.html',
      },
      {
        source: '/fourbyfour/video',
        destination: '/fourbyfour/video.html',
      },
      {
        source: '/photos',
        destination: '/photos/index.html',
      },
      {
        source: '/writing',
        destination: '/writing/index.html',
      },
    ]
  },
})
