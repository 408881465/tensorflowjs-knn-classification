// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function imageClassificationWithImage() {
  var imgEl, result;
  return regeneratorRuntime.async(function imageClassificationWithImage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('Loading mobilenet..'); // Load the model.

          _context.next = 3;
          return regeneratorRuntime.awrap(mobilenet.load());

        case 3:
          net = _context.sent;
          console.log('Successfully loaded model'); // Make a prediction through the model on our image.

          imgEl = document.getElementById('img');
          _context.next = 8;
          return regeneratorRuntime.awrap(net.classify(imgEl));

        case 8:
          result = _context.sent;
          console.log(result);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

function imageClassificationWithWebcam() {
  var webcam, img, result;
  return regeneratorRuntime.async(function imageClassificationWithWebcam$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log('Loading mobilenet..'); // Load the model.

          _context2.next = 3;
          return regeneratorRuntime.awrap(mobilenet.load());

        case 3:
          net = _context2.sent;
          console.log('Successfully loaded model'); // Create an object from Tensorflow.js data API which could capture image
          // from the web camera as Tensor.

          _context2.next = 7;
          return regeneratorRuntime.awrap(tf.data.webcam(webcamElement));

        case 7:
          webcam = _context2.sent;

        case 8:
          if (!true) {
            _context2.next = 21;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(webcam.capture());

        case 11:
          img = _context2.sent;
          _context2.next = 14;
          return regeneratorRuntime.awrap(net.classify(img));

        case 14:
          result = _context2.sent;
          document.getElementById('console').innerText = "\n      prediction: ".concat(result[0].className, "\n\n      probability: ").concat(result[0].probability, "\n    "); // Dispose the tensor to release the memory.

          img.dispose(); // Give some breathing room by waiting for the next animation frame to
          // fire.

          _context2.next = 19;
          return regeneratorRuntime.awrap(tf.nextFrame());

        case 19:
          _context2.next = 8;
          break;

        case 21:
        case "end":
          return _context2.stop();
      }
    }
  });
}

var start = function start() {
  var createKNNClassifier, createMobileNetModel, createWebcamInput, mobilenetModel, knnClassifierModel, webcamInput, initializeElements, saveClassifier, uploadModel, downloadModel, putImageToPage, addDatasetClass, imageClassificationWithTransferLearningOnWebcam;
  return regeneratorRuntime.async(function start$(_context14) {
    while (1) {
      switch (_context14.prev = _context14.next) {
        case 0:
          createKNNClassifier = function createKNNClassifier() {
            return regeneratorRuntime.async(function createKNNClassifier$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    console.log('Loading KNN Classifier');
                    _context3.next = 3;
                    return regeneratorRuntime.awrap(knnClassifier.create());

                  case 3:
                    return _context3.abrupt("return", _context3.sent);

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }
            });
          };

          createMobileNetModel = function createMobileNetModel() {
            return regeneratorRuntime.async(function createMobileNetModel$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('Loading Mobilenet Model');
                    _context4.next = 3;
                    return regeneratorRuntime.awrap(mobilenet.load());

                  case 3:
                    return _context4.abrupt("return", _context4.sent);

                  case 4:
                  case "end":
                    return _context4.stop();
                }
              }
            });
          };

          createWebcamInput = function createWebcamInput() {
            var webcamElement;
            return regeneratorRuntime.async(function createWebcamInput$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    console.log('Loading Webcam Input');
                    _context5.next = 3;
                    return regeneratorRuntime.awrap(document.getElementById('webcam'));

                  case 3:
                    webcamElement = _context5.sent;
                    _context5.next = 6;
                    return regeneratorRuntime.awrap(tf.data.webcam(webcamElement));

                  case 6:
                    return _context5.abrupt("return", _context5.sent);

                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }
            });
          };

          _context14.next = 5;
          return regeneratorRuntime.awrap(createMobileNetModel());

        case 5:
          mobilenetModel = _context14.sent;
          _context14.next = 8;
          return regeneratorRuntime.awrap(createKNNClassifier());

        case 8:
          knnClassifierModel = _context14.sent;
          _context14.next = 11;
          return regeneratorRuntime.awrap(createWebcamInput());

        case 11:
          webcamInput = _context14.sent;

          initializeElements = function initializeElements() {
            document.getElementById('load_button').addEventListener('change', function (event) {
              return uploadModel(knnClassifierModel, event);
            });
            document.getElementById('save_button').addEventListener('click', function _callee() {
              return regeneratorRuntime.async(function _callee$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", downloadModel(knnClassifierModel));

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              });
            });
            document.getElementById('class-a').addEventListener('click', function () {
              return addDatasetClass(0);
            });
            document.getElementById('class-b').addEventListener('click', function () {
              return addDatasetClass(1);
            });
            document.getElementById('class-c').addEventListener('click', function () {
              return addDatasetClass(2);
            });
          };

          saveClassifier = function saveClassifier(classifierModel) {
            var datasets, datasetObject, jsonModel, downloader;
            return regeneratorRuntime.async(function saveClassifier$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return regeneratorRuntime.awrap(classifierModel.getClassifierDataset());

                  case 2:
                    datasets = _context8.sent;
                    datasetObject = {};
                    Object.keys(datasets).forEach(function _callee2(key) {
                      var data;
                      return regeneratorRuntime.async(function _callee2$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.next = 2;
                              return regeneratorRuntime.awrap(datasets[key].dataSync());

                            case 2:
                              data = _context7.sent;
                              datasetObject[key] = Array.from(data);

                            case 4:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      });
                    });
                    jsonModel = JSON.stringify(datasetObject);
                    downloader = document.createElement('a');
                    downloader.download = "model.json";
                    downloader.href = 'data:text/text;charset=utf-8,' + encodeURIComponent(jsonModel);
                    document.body.appendChild(downloader);
                    downloader.click();
                    downloader.remove();

                  case 12:
                  case "end":
                    return _context8.stop();
                }
              }
            });
          };

          uploadModel = function uploadModel(classifierModel, event) {
            var inputModel, fr;
            return regeneratorRuntime.async(function uploadModel$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    inputModel = event.target.files;
                    console.log("Uploading");
                    fr = new FileReader();

                    if (inputModel.length > 0) {
                      fr.onload = function _callee3() {
                        var dataset, tensorObj;
                        return regeneratorRuntime.async(function _callee3$(_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                dataset = fr.result;
                                tensorObj = JSON.parse(dataset);
                                Object.keys(tensorObj).forEach(function (key) {
                                  tensorObj[key] = tf.tensor(tensorObj[key], [tensorObj[key].length / 1024, 1024]);
                                });
                                classifierModel.setClassifierDataset(tensorObj);
                                console.log("Classifier has been set up! Congrats! ");

                              case 5:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        });
                      };
                    }

                    _context10.next = 6;
                    return regeneratorRuntime.awrap(fr.readAsText(inputModel[0]));

                  case 6:
                    console.log("Uploaded");

                  case 7:
                  case "end":
                    return _context10.stop();
                }
              }
            });
          };

          downloadModel = function downloadModel(classifierModel) {
            return regeneratorRuntime.async(function downloadModel$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    saveClassifier(classifierModel);

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            });
          };

          putImageToPage = function putImageToPage(event) {
            var input = event.target;
            var reader = new FileReader();

            reader.onload = function () {
              var dataURL = reader.result;
              var output = document.getElementById('output');
              output.src = dataURL;
            };

            reader.readAsDataURL(input.files[0]);
          };

          addDatasetClass = function addDatasetClass(classId) {
            var img, activation;
            return regeneratorRuntime.async(function addDatasetClass$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return regeneratorRuntime.awrap(webcamInput.capture());

                  case 2:
                    img = _context12.sent;
                    // Get the intermediate activation of MobileNet 'conv_preds' and pass that
                    // to the KNN classifier.
                    activation = mobilenetModel.infer(img, 'conv_preds'); // Pass the intermediate activation to the classifier.

                    knnClassifierModel.addExample(activation, classId); // Dispose the tensor to release the memory.

                    img.dispose();

                  case 6:
                  case "end":
                    return _context12.stop();
                }
              }
            });
          };

          imageClassificationWithTransferLearningOnWebcam = function imageClassificationWithTransferLearningOnWebcam() {
            var img, activation, result, classes;
            return regeneratorRuntime.async(function imageClassificationWithTransferLearningOnWebcam$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    console.log("Machine Learning on the web is ready");

                  case 1:
                    if (!true) {
                      _context13.next = 21;
                      break;
                    }

                    if (!(knnClassifierModel.getNumClasses() > 0)) {
                      _context13.next = 17;
                      break;
                    }

                    _context13.next = 5;
                    return regeneratorRuntime.awrap(webcamInput.capture());

                  case 5:
                    img = _context13.sent;
                    // Get the activation from mobilenet from the webcam.
                    activation = mobilenetModel.infer(img, 'conv_preds'); // Get the most likely class and confidences from the classifier module.

                    _context13.next = 9;
                    return regeneratorRuntime.awrap(knnClassifierModel.predictClass(activation));

                  case 9:
                    result = _context13.sent;
                    classes = ['A', 'B', 'C'];
                    document.getElementById('console').innerText = "\n        prediction: ".concat(classes[result.label], "\n\n        probability: ").concat(result.confidences[result.label], "\n      ");
                    console.log(result.label);
                    message = new Paho.MQTT.Message(result.label);
                    message.destinationName = "World";
                    client.send(message); // Dispose the tensor to release the memory.

                    img.dispose();

                  case 17:
                    _context13.next = 19;
                    return regeneratorRuntime.awrap(tf.nextFrame());

                  case 19:
                    _context13.next = 1;
                    break;

                  case 21:
                  case "end":
                    return _context13.stop();
                }
              }
            });
          };

          _context14.next = 21;
          return regeneratorRuntime.awrap(initializeElements());

        case 21:
          _context14.next = 23;
          return regeneratorRuntime.awrap(imageClassificationWithTransferLearningOnWebcam());

        case 23:
        case "end":
          return _context14.stop();
      }
    }
  });
};

window.onload = function () {
  start();
};
},{}],"C:/Users/40888/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58853" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/40888/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/tensorflowjs-knn-classification.e31bb0bc.js.map