function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = _interopDefault(require('styled-components'));
var solid = require('@heroicons/react/solid');

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
var success = "#3ba55d";

var _path, _path2;

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

function SvgPartner(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    "aria-label": "Discord Partner",
    className: "Partner_svg__flowerStar-2tNFCR",
    "aria-hidden": "false",
    width: 16,
    height: 16,
    viewBox: "0 0 16 15.2",
    fill: "currentColor",
    color: "#5865f2"
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    color: "#fff",
    d: "M10.59 6.4l-1.398.9c-.2.1-.3.1-.5 0-.1-.1-.299-.2-.399-.3-.4-.1-.699 0-.999.2l-.499.3-2.497 1.7c-.6.3-1.299.2-1.598-.4-.4-.5-.2-1.2.3-1.6l2.996-2c.799-.5 1.798-.7 2.697-.5.799.2 1.398.6 1.898 1.2.2.2.1.4 0 .5zM13.487 7.8c0 .4-.2.8-.5 1l-3.096 2c-.599.4-1.198.6-1.897.6-.3 0-.5 0-.8-.1-.799-.2-1.398-.6-1.897-1.2-.1-.2 0-.4.1-.5l1.398-.9c.1-.1.3-.1.4 0 .2.1.399.2.499.3.4 0 .7 0 .999-.2l.699-.4L11.39 7l.3-.2c.499-.3 1.298-.2 1.597.3.2.3.2.5.2.7z"
  })));
}

var _path$1, _path2$1;

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
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

  return _extends$1.apply(this, arguments);
}

function SvgVerified(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    "aria-label": "Verified",
    "aria-hidden": "false",
    width: 16,
    height: 16,
    viewBox: "0 0 16 15.2"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    color: "#3ba55d",
    fillRule: "evenodd",
    d: "M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    color: "#fff",
    d: "M7.4 11.17L4 8.62l1-1.36 2 1.53L10.64 4 12 5z"
  })));
}

var _templateObject, _templateObject2, _templateObject3;
var AvatarContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\nposition: relative;\n"])));
var AvatarShape = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\nborder-radius: 50%;\nbackground-color: ", ";\nwidth: 48px;\nheight: 48px;\ncolor: white;\noverflow: hidden;\ntext-align: center;\ntransition: 0.15s ease-out;\nuser-select: none;\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\np {\n    height: full;\n    font-family: whitney;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n&:hover {\n    border-radius: 16px;\n    cursor: pointer;\n    background: ", ";\n}\n\n&:active {\n    transition: 0.08s linear;\n    transform: translateY(0.7px);\n}\n"])), primary, brandColor);
var NamePopup = styled.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteralLoose(["\nbackground: ", ";\ncolor: white;\nposition: absolute;\nleft: calc(100% + 22px);\nwidth: max-content;\npadding: 8px;\npadding-left: 12px;\nborder-radius: 4px;\ntop: 6px;\nuser-select: none;\n\ndisplay: flex;\ngap: 4px;\nalign-items: center;\n\nfont-family: whitney !important;\nfont-weight: 900;\nfont-size: 16px;\n\n::before {\n    position: absolute;\n    left: -4px;\n    border-top-left-radius: 2px;\n    transform: rotate(-45deg);\n    top: calc(50% - (10px / 2));\n    height: 8px;\n    width: 8px;\n    background: ", ";\n    content: '';\n}\n"])), floating, floating);
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
  }) : React__default.createElement("p", null, getShortName(data.name))), isHovering && React__default.createElement(NamePopup, null, data.verified ? React__default.createElement(SvgVerified, null) : data.partnered ? React__default.createElement(SvgPartner, null) : null, data.name));
}

var _templateObject$1, _templateObject2$1, _templateObject3$1;
var ButtonContainer = styled.div(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteralLoose(["\nposition: relative;\n"])));
var ButtonShape = styled.div(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteralLoose(["\nborder-radius: 50%;\nbackground-color: ", ";\nwidth: 48px;\nheight: 48px;\ncolor: ", ";\noverflow: hidden;\ntext-align: center;\ntransition: 0.15s ease-out;\nuser-select: none;\nposition: relative;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\np {\n    height: full;\n    font-family: whitney;\n    font-size: 16px;\n    font-weight: bold;\n}\n\n&:hover {\n    border-radius: 16px;\n    cursor: pointer;\n    background: ", ";\n    color: white;\n}\n\n&:active {\n    transition: 0.08s linear;\n    transform: translateY(0.7px);\n}\n"])), primary, function (props) {
  return props.iconColor || props.color;
}, function (props) {
  return props.color;
});
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
  }, React__default.createElement(ButtonShape, {
    color: data.color,
    iconColor: data.iconColor
  }, data.icon ? React__default.createElement(data.icon, {
    width: "29px",
    height: "20px"
  }) : React__default.createElement("p", null, getShortName(data.name))), isHovering && React__default.createElement(NamePopup$1, null, data.name));
}

var _templateObject$2;
var GuildSperator = styled.div(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteralLoose(["\nwidth: 32px;\nheight: 2px;\nbackground: ", ";\nborder-radius: 1px;\n"])), primary);

var _path$2;

function _extends$2() {
  _extends$2 = Object.assign || function (target) {
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

  return _extends$2.apply(this, arguments);
}

function SvgDiscordLogo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    className: "DiscordLogo_svg__homeIcon-r0w4ny",
    "aria-hidden": "false",
    width: 28,
    height: 20
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    fill: "currentColor",
    d: "M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
  })));
}

var _templateObject$3;
var Wrapper = styled.div(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteralLoose(["\nwidth: 72px;\nbackground: ", ";\nheight: -webkit-fill-available;\ndisplay: flex;\nalign-items: center;\nflex-direction: column;\npadding-top: 12px;\ngap: 8px;\n"])), tertiary);
function ServersList(_ref) {
  var servers = _ref.servers;
  return React__default.createElement(Wrapper, null, React__default.createElement(CircleButton, {
    name: "Home",
    icon: SvgDiscordLogo,
    color: brandColor,
    iconColor: "#dcddde"
  }), React__default.createElement(GuildSperator, null), servers.map(function (server) {
    return React__default.createElement(Avatar, Object.assign({}, server));
  }), React__default.createElement(CircleButton, {
    name: "Add a Server",
    icon: solid.PlusIcon,
    color: success
  }), React__default.createElement(GuildSperator, null), React__default.createElement(CircleButton, {
    name: "There's a super gift waiting for you!",
    icon: solid.LightningBoltIcon,
    color: success
  }));
}

var _templateObject$4, _templateObject2$2, _templateObject3$2, _templateObject4;
var Wrapper$1 = styled.div(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteralLoose(["\nposition: absolute;\nleft: 0;\nright: 0;\nbottom: 0;\ntop: 0;\nbackground: rgba(0, 0, 0, 0.6);\nz-index: 100; /* ffffff0a */\n\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"])));
var SuperModal = styled.div(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteralLoose(["\nwidth: 28em;\nheight: /*36em*/ 18em;\nbackground: /* #F6F6F6 */ ", ";\nborder-radius: 4px;\noverflow: hidden;\nposition: relative;\nuser-select: none;\n\nimg {\n    opacity: 0.4;\n    height: 100%;\n}\n\n::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: /*45%*/ 100%;\n    background: linear-gradient(0deg, ", ", transparent);\n}\n"])), tertiary, tertiary);
var Header = styled.div(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteralLoose(["\npadding: 12px 12px 12px 12px;\ndisplay: flex;\nalign-items: center;\ngap: 4px;\nposition: relative;\nbackground: rgba(240, 240, 255, 0.1);\nbackdrop-filter: blur(2px);\n\n& > h2 {\n    color: white;\n    font-size: 17px;\n    font-family: whitney;\n    font-weight: 500;\n    margin: 0;\n    flex: 1;\n}\n"])));
var CloseButton = styled.button(_templateObject4 || (_templateObject4 = _taggedTemplateLiteralLoose(["\noutline: none;\nborder: none;\nheight: 25px;\nbackground: transparent;\ncolor: white;\ncursor: pointer;\nopacity: 0.7;\ntransition: 0.15s ease-out;\n\n:hover {\n    opacity: 1;\n}\n"])));
function SuperGift() {
  return React__default.createElement(Wrapper$1, null, React__default.createElement(SuperModal, null, React__default.createElement("div", {
    style: {
      width: "100%",
      position: "absolute",
      zIndex: 10
    }
  }, React__default.createElement(Header, null, React__default.createElement("h2", null, "Claim Your Gift"), React__default.createElement(CloseButton, null, React__default.createElement(solid.XIcon, {
    width: 24
  })))), React__default.createElement("img", {
    src: "/assets/superimage.png"
  })));
}

exports.ServersList = ServersList;
exports.SuperGift = SuperGift;
//# sourceMappingURL=index.js.map
