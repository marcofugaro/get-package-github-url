(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.getPackageGithubUrl = factory());
}(this, (function () { 'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var index = (function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(packageName) {
    var _ref2, repository, url;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://registry.npmjs.org/' + packageName).then(function (res) {
              return res.json();
            });

          case 2:
            _ref2 = _context.sent;
            repository = _ref2.repository;

            if (!(!repository || repository.type !== 'git')) {
              _context.next = 6;
              break;
            }

            return _context.abrupt('return', null);

          case 6:
            url = repository.url;


            if (url.startsWith('git+')) {
              url = url.slice('git+'.length);
            }

            if (url.endsWith('.git')) {
              url = url.slice(0, -'.git'.length);
            }

            if (url.startsWith('git://')) {
              url = url.slice('git://'.length);
            }

            if (url.startsWith('ssh://')) {
              url = url.slice('ssh://'.length);
            }

            if (url.startsWith('git@github.com:')) {
              url = 'github.com/' + url.slice('git@github.com:'.length);
            }

            if (url.startsWith('git@github.com/')) {
              url = 'github.com/' + url.slice('git@github.com/'.length);
            }

            // finally add the correct protocol
            if (!url.startsWith('https://')) {
              url = 'https://' + url;
            }

            return _context.abrupt('return', url);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function getPackageGithubUrl(_x) {
    return _ref.apply(this, arguments);
  }

  return getPackageGithubUrl;
})();

return index;

})));
