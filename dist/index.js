function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var primary = "#36393f";
var tertiary = "#202225";
var floating = "#18191c";

var _templateObject, _templateObject2, _templateObject3;
var AvatarContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\nposition: relative;\n"])));
var AvatarShape = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\nborder-radius: 50%;\nbackground-color: ", ";\nwidth: 48px;\nheight: 48px;\ncolor: white;\noverflow: hidden;\ntext-align: center;\ntransition: 0.15s ease-out;\nuser-select: none;\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\np {\n    height: full;\n    font-family: whitney;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n&:hover {\n    border-radius: 16px;\n    cursor: pointer;\n}\n"])), primary);
var NamePopup = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\nbackground: ", ";\ncolor: white;\nposition: absolute;\nleft: calc(100% + 22px);\nwidth: max-content;\npadding: 8px;\npadding-left: 12px;\nborder-radius: 4px;\ntop: 6px;\nuser-select: none;\n\nfont-family: whitney !important;\nfont-weight: 900;\nfont-size: 16px;\n\n::before {\n    position: absolute;\n    left: -4px;\n    border-top-left-radius: 2px;\n    transform: rotate(-45deg);\n    top: calc(50% - (10px / 2));\n    height: 8px;\n    width: 8px;\n    background: ", ";\n    content: '';\n}\n"])), floating, floating);
function Avatar(data) {
  var _useState = React.useState(false),
      isHovering = _useState[0],
      setHoveringState = _useState[1];

  function getShortName(name) {
    return name.split(" ").map(function (l) {
      return l.charAt(0);
    });
  }

  var mouseMoveCallback = React.useCallback(function () {
    setHoveringState(!isHovering);
  }, [isHovering]);
  return React__default.createElement(AvatarContainer, {
    onMouseEnter: mouseMoveCallback,
    onMouseLeave: mouseMoveCallback
  }, React__default.createElement(AvatarShape, null, data.icon ? React__default.createElement("img", {
    src: data.icon,
    width: "100%",
    height: "100%"
  }) : React__default.createElement("p", null, getShortName(data.name))), isHovering && React__default.createElement(NamePopup, null, data.name));
}

var _templateObject$1;
var Wrapper = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\nwidth: 72px;\nbackground: ", ";\nheight: 100%;\ndisplay: flex;\nalign-items: center;\nflex-direction: column;\npadding-top: 16px;\ngap: 8px;\n"])), tertiary);
function ServersList(_ref) {
  var servers = _ref.servers;
  return React__default.createElement(Wrapper, null, servers.map(function (server) {
    return React__default.createElement(Avatar, Object.assign({}, server));
  }));
}

exports.ServersList = ServersList;
//# sourceMappingURL=index.js.map
