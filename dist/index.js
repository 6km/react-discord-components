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
var brandColor = "#5865F2";

var _templateObject, _templateObject2, _templateObject3;
var AvatarContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\nposition: relative;\n"])));
var AvatarShape = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\nborder-radius: 50%;\nbackground-color: ", ";\nwidth: 48px;\nheight: 48px;\ncolor: white;\noverflow: hidden;\ntext-align: center;\ntransition: 0.15s ease-out;\nuser-select: none;\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\np {\n    height: full;\n    font-family: whitney;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n&:hover {\n    border-radius: 16px;\n    cursor: pointer;\n    background: ", ";\n}\n"])), primary, brandColor);
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

var _templateObject$1, _templateObject2$1, _templateObject3$1;
var ButtonContainer = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\nposition: relative;\n"])));
var ButtonShape = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\nborder-radius: 50%;\nbackground-color: ", ";\nwidth: 48px;\nheight: 48px;\ncolor: white;\noverflow: hidden;\ntext-align: center;\ntransition: 0.15s ease-out;\nuser-select: none;\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\np {\n    height: full;\n    font-family: whitney;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n&:hover {\n    border-radius: 16px;\n    cursor: pointer;\n    background: ", ";\n}\n"])), primary, brandColor);
var NamePopup$1 = styled.div(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteralLoose(["\nbackground: ", ";\ncolor: white;\nposition: absolute;\nleft: calc(100% + 22px);\nwidth: max-content;\npadding: 8px;\npadding-left: 12px;\nborder-radius: 4px;\ntop: 6px;\nuser-select: none;\n\nfont-family: whitney !important;\nfont-weight: 900;\nfont-size: 16px;\n\n::before {\n    position: absolute;\n    left: -4px;\n    border-top-left-radius: 2px;\n    transform: rotate(-45deg);\n    top: calc(50% - (10px / 2));\n    height: 8px;\n    width: 8px;\n    background: ", ";\n    content: '';\n}\n"])), floating, floating);
function CircleButton(data) {
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
  return React__default.createElement(ButtonContainer, {
    onMouseEnter: mouseMoveCallback,
    onMouseLeave: mouseMoveCallback
  }, React__default.createElement(ButtonShape, null, data.icon ? React__default.createElement(data.icon, {
    width: "29px",
    height: "20px"
  }) : React__default.createElement("p", null, getShortName(data.name))), isHovering && React__default.createElement(NamePopup$1, null, data.name));
}

var _templateObject$2;
var GuildSperator = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\nwidth: 32px;\nheight: 2px;\nbackground: ", ";\nborder-radius: 1px;\n"])), primary);

var _path;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function SvgDiscordLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: "DiscordLogo_svg__homeIcon-r0w4ny",
    "aria-hidden": "false",
    width: 28,
    height: 20
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
  })));
}

var _templateObject$3;
var Wrapper = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\nwidth: 72px;\nbackground: ", ";\nheight: 100%;\ndisplay: flex;\nalign-items: center;\nflex-direction: column;\npadding-top: 12px;\ngap: 8px;\n"])), tertiary);
function ServersList(_ref) {
  var servers = _ref.servers;
  return React__default.createElement(Wrapper, null, React__default.createElement(CircleButton, {
    name: "Home",
    icon: SvgDiscordLogo
  }), React__default.createElement(GuildSperator, null), servers.map(function (server) {
    return React__default.createElement(Avatar, Object.assign({}, server));
  }), React__default.createElement(GuildSperator, null));
}

exports.ServersList = ServersList;
//# sourceMappingURL=index.js.map
