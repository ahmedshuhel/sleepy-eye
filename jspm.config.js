SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  transpiler: "plugin-babel",

  map: {
    "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
    "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
    "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.3",
    "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
    "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
    "core-js": "npm:core-js@2.1.1",
    "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
    "path": "github:jspm/nodelibs-path@0.2.0-alpha",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.5",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha"
  },

  packages: {
    "sleepy-eye": {
      "format": "esm",
      "main": "main.js"
    },
    "npm:aurelia-binding@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.1.2": {
      "map": {
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
        "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.1.3",
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.1.2",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.1.2",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.1.3",
        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.1.1",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.1.1",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-framework@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.1.2": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.1.2": {
      "map": {
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-loader@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0"
      }
    },
    "npm:aurelia-logging-console@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-metadata@1.0.0-beta.1.1.4": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.1.3": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-router@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
        "aurelia-history": "npm:aurelia-history@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
        "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.1.1"
      }
    },
    "npm:aurelia-templating@1.0.0-beta.1.1.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.1.3",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.1.3",
        "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.1.1",
        "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1.1.4",
        "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.1.1",
        "aurelia-path": "npm:aurelia-path@1.0.0-beta.1.1.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.1.1",
        "core-js": "npm:core-js@2.1.1"
      }
    }
  }
});
