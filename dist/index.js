function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var _templateObject;
var AvatarContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\nborder-radius: 10px;\nbackground-color: red;\nwidth: 45px;\nheight: 45px;\ncolor: white;\n"])));
function Avatar(data) {
  var getShortName = function getShortName(name) {
    return name.toUpperCase().split(" ").map(function (l) {
      return l.charAt(0);
    });
  };

  return React.createElement(AvatarContainer, null, data.icon ? React.createElement("img", {
    src: data.icon,
    width: "100%",
    height: "100%"
  }) : React.createElement("p", null, getShortName(data.name)));
}

var _templateObject$1;
var Wrapper = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\nwidth: 72px;\n"])));
function ServersList(_ref) {
  var servers = _ref.servers;
  return React.createElement(Wrapper, null, servers.map(function (server) {
    return React.createElement(Avatar, Object.assign({}, server));
  }));
}

exports.ServersList = ServersList;
//# sourceMappingURL=index.js.map
