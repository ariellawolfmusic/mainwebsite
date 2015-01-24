exports.config = {
  modules:["copy", "rename", "adhoc-module"],
  rename: {
    map:[
      [/public\/html\/([a-z]+)\.html$/, "$1.html"]
    ]
  },
  adhocModule: {
    modules:[
      require("./scripts/hogan-compile")({
        partials:["html/partials"],
        globals: {
          version: "3.0.0"
        },
        contexts: {
          about: {
            title:"FAQ/Tips - Mimosa",
            desc:"Common questions and issues.",
            header:"FAQ & Mimosa Tips",
            lead:"Questions answered & tricks discussed"
          },
          commands: {
            title:"Commands - Mimosa",
            desc:"At the command line is where Mimosa's magic happens.",
            header:"Commands",
            lead:"Interact with your project via the command line"
          },
          configuration: {
            title:"Configuration - Mimosa",
            desc:"While preferring as little config as possible, Mimosa is hugely configurable.",
            header:"Configuration",
            lead:"Configuration explained & Mimosa core's configuration options"
          },
          extend: {
            title:"How to Build Mimosa Modules - Mimosa",
            desc:"Mimosa is extensible, making it easy to add your own functionality via modules.",
            header:"Building A Mimosa Module",
            lead:"Plug custom functionality into Mimosa"
          },
          modules: {
            title:"Modules - Mimosa",
            desc:"Mimosa is pluggable so new functionality can be added.",
            header:"Modules",
            lead:"Extend Mimosa's default functionality"
          },
          started: {
            title:"Get Started - Mimosa",
            desc:"Getting started is super easy, you'll be coding in no time.",
            header:"Get Started",
            lead:"Installation and project setup. You'll be coding in minutes."
          },
          index: {

          }
        }
      })
    ]
  }
}