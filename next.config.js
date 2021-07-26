// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

module.exports = {
  assetPrefix: '',
  // https://github.com/vercel/next.js/issues/21079
  images: {
    loader: "imgix",
    path: "/",
  },
}