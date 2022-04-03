function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function ServersList(_ref) {
  var servers = _ref.servers;
  return React.createElement("div", null, "Example Component: ", servers[0].name);
}

exports.ServersList = ServersList;
//# sourceMappingURL=index.js.map
