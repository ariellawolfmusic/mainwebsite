exports.config = {
  modules:[
  "copy",
  "rename",
  "less",
  "hogan-static",
  "minify-html",
  "minify-img",
  "minify-css"],
  copy: {
    extensions:["png", "html","js", "jpg", "ico",
    "eot", "svg", "ttf", "woff", "woff2", "gif", "tiff"]
  },
  minifyHtml: {
    options: {
      collapseWhitespace: true,
      removeComments: true,
      removeEmptyAttributes: true
    }
  },
  minifyImg: {
    options: {
      interlaced: false,
      progressive: false,
      optimizationLevel: 2
    },
    exts: [ "gif","jpeg","jpg","png", "tiff" ]
  },
  rename: {
    map:[
    [/public\/html\/([a-z]+)\.html$/, "$1.html"]
    ]
  },
  hoganStatic: {
    partials:["html/partials"],
    globals: {
      version: "2.3.32"
    },
    contexts: {
      turtlemania: {
        title:"ELECTRIC TURTLES Scripture",
        desc:"ELECTRIC TURTLES Scripture",
      },
      press: {
        title:"ELECTRIC TURTLES Contact",
        desc:"ELECTRIC TURTLES Contact",
      },
      live: {
        title:"ELECTRIC TURTLES Live",
        desc:"ELECTRIC TURTLES Live",
      },
      pictures: {
        title:"ELECTRIC TURTLES Pictures",
        desc:"ELECTRIC TURTLES Pictures",
      },
      videos: {
        title:"ELECTRIC TURTLES Videos",
        desc:"ELECTRIC TURTLES Videos",
      },

      turtletimecapsule: {
        title:"ELECTRIC TURTLES TIME CAPSULE",
        desc: "GO BACK IN TURTLE TIME",
      },
      index: {
        title:"Ariella Wolf Official Website",
        desc: "Ariella Wolf",
      },
      main: {
        title:"ELECTRIC TURTLES",
        desc: "ELECTRIC TURTLES",
      },
       music: {
        title:"ELECTRIC TURTLES Music",
        desc: "ELECTRIC TURTLES",
      },
      epk: {
        title:"ELECTRIC TURTLES EPK",
        desc: "ELECTRIC TURTLES",
      }
    }
  }
}
