import React__default, { createElement, useState, useCallback } from 'react';
import styled from 'styled-components';
import { PlusIcon, LightningBoltIcon, XIcon } from '@heroicons/react/solid';

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
  return /*#__PURE__*/createElement("svg", _extends({
    "aria-label": "Discord Partner",
    className: "Partner_svg__flowerStar-2tNFCR",
    "aria-hidden": "false",
    width: 16,
    height: 16,
    viewBox: "0 0 16 15.2",
    fill: "currentColor",
    color: "#5865f2"
  }, props), _path || (_path = /*#__PURE__*/createElement("path", {
    fillRule: "evenodd",
    d: "M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
  })), _path2 || (_path2 = /*#__PURE__*/createElement("path", {
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
  return /*#__PURE__*/createElement("svg", _extends$1({
    "aria-label": "Verified",
    "aria-hidden": "false",
    width: 16,
    height: 16,
    viewBox: "0 0 16 15.2"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/createElement("path", {
    fill: "currentColor",
    color: "#3ba55d",
    fillRule: "evenodd",
    d: "M16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59S0 8.39 0 7.6s1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8S4.78.28 5.53 0 7.2.83 8 .83s1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59S16 6.81 16 7.6z"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/createElement("path", {
    fill: "currentColor",
    color: "#fff",
    d: "M7.4 11.17L4 8.62l1-1.36 2 1.53L10.64 4 12 5z"
  })));
}

let _ = t => t,
    _t,
    _t2,
    _t3;
var AvatarContainer = styled.div(_t || (_t = _`
position: relative;
`));
var AvatarShape = styled.div(_t2 || (_t2 = _`
border-radius: 50%;
background-color: ${0};
width: 48px;
height: 48px;
color: white;
overflow: hidden;
text-align: center;
transition: 0.15s ease-out;
user-select: none;
position: relative;
display: flex;
align-items: center;
justify-content: center;

p {
    height: full;
    font-family: whitney;
    font-size: 16px;
    font-weight: bold;
}

&:hover {
    border-radius: 16px;
    cursor: pointer;
    background: ${0};
}

&:active {
    transition: 0.08s linear;
    transform: translateY(0.7px);
}
`), primary, brandColor);
var NamePopup = styled.div(_t3 || (_t3 = _`
background: ${0};
color: white;
position: absolute;
left: calc(100% + 22px);
width: max-content;
padding: 8px;
padding-left: 12px;
border-radius: 4px;
top: 6px;
user-select: none;

display: flex;
gap: 4px;
align-items: center;

font-family: whitney !important;
font-weight: 900;
font-size: 16px;

::before {
    position: absolute;
    left: -4px;
    border-top-left-radius: 2px;
    transform: rotate(-45deg);
    top: calc(50% - (10px / 2));
    height: 8px;
    width: 8px;
    background: ${0};
    content: '';
}
`), floating, floating);
function Avatar(data) {
  var [isHovering, setHoveringState] = useState(false);

  function getShortName(name) {
    return name.split(" ").map(l => l.charAt(0));
  }

  var mouseMoveCallback = useCallback(() => {
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

let _$1 = t => t,
    _t$1,
    _t2$1,
    _t3$1;
var ButtonContainer = styled.div(_t$1 || (_t$1 = _$1`
position: relative;
`));
var ButtonShape = styled.div(_t2$1 || (_t2$1 = _$1`
border-radius: 50%;
background-color: ${0};
width: 48px;
height: 48px;
color: ${0};
overflow: hidden;
text-align: center;
transition: 0.15s ease-out;
user-select: none;
position: relative;
display: flex;
align-items: center;
justify-content: center;

p {
    height: full;
    font-family: whitney;
    font-size: 16px;
    font-weight: bold;
}

&:hover {
    border-radius: 16px;
    cursor: pointer;
    background: ${0};
    color: white;
}

&:active {
    transition: 0.08s linear;
    transform: translateY(0.7px);
}
`), primary, props => props.iconColor || props.color, props => props.color);
var NamePopup$1 = styled.div(_t3$1 || (_t3$1 = _$1`
background: ${0};
color: white;
position: absolute;
left: calc(100% + 22px);
width: max-content;
padding: 8px;
padding-left: 12px;
border-radius: 4px;
top: 6px;
user-select: none;

font-family: whitney !important;
font-weight: 900;
font-size: 16px;

::before {
    position: absolute;
    left: -4px;
    border-top-left-radius: 2px;
    transform: rotate(-45deg);
    top: calc(50% - (10px / 2));
    height: 8px;
    width: 8px;
    background: ${0};
    content: '';
}
`), floating, floating);
function CircleButton(data) {
  var [isHovering, setHoveringState] = useState(false);

  function getShortName(name) {
    return name.split(" ").map(l => l.charAt(0));
  }

  var mouseMoveCallback = useCallback(() => {
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

let _$2 = t => t,
    _t$2;
var GuildSperator = styled.div(_t$2 || (_t$2 = _$2`
width: 32px;
height: 2px;
background: ${0};
border-radius: 1px;
`), primary);

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
  return /*#__PURE__*/createElement("svg", _extends$2({
    className: "DiscordLogo_svg__homeIcon-r0w4ny",
    "aria-hidden": "false",
    width: 28,
    height: 20
  }, props), _path$2 || (_path$2 = /*#__PURE__*/createElement("path", {
    fill: "currentColor",
    d: "M23.021 1.677A21.227 21.227 0 0017.658 0c-.252.462-.483.935-.687 1.418a19.931 19.931 0 00-5.943 0C10.82.935 10.59.462 10.337.005c-1.856.32-3.659.88-5.37 1.677C1.567 6.78.65 11.754 1.111 16.652A21.504 21.504 0 007.691 20c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 01-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0013.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 006.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97zM9.681 13.638c-1.283 0-2.34-1.193-2.34-2.644S8.37 8.35 9.68 8.35c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644z"
  })));
}

let _$3 = t => t,
    _t$3;
var Wrapper = styled.div(_t$3 || (_t$3 = _$3`
width: 72px;
background: ${0};
height: -webkit-fill-available;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 12px;
gap: 8px;
`), tertiary);
function ServersList({
  servers
}) {
  return React__default.createElement(Wrapper, null, React__default.createElement(CircleButton, {
    name: "Home",
    icon: SvgDiscordLogo,
    color: brandColor,
    iconColor: "#dcddde"
  }), React__default.createElement(GuildSperator, null), servers.map(server => {
    return React__default.createElement(Avatar, Object.assign({}, server));
  }), React__default.createElement(CircleButton, {
    name: "Add a Server",
    icon: PlusIcon,
    color: success
  }), React__default.createElement(GuildSperator, null), React__default.createElement(CircleButton, {
    name: "There's a super gift waiting for you!",
    icon: LightningBoltIcon,
    color: success
  }));
}

let _$4 = t => t,
    _t$4,
    _t2$2,
    _t3$2,
    _t4;
var Wrapper$1 = styled.div(_t$4 || (_t$4 = _$4`
position: absolute;
left: 0;
right: 0;
bottom: 0;
top: 0;
background: rgba(0, 0, 0, 0.6);
z-index: 100; /* ffffff0a */

display: flex;
align-items: center;
justify-content: center;
`));
var SuperModal = styled.div(_t2$2 || (_t2$2 = _$4`
width: 28em;
height: /*36em*/ 18em;
background: /* #F6F6F6 */ ${0};
border-radius: 4px;
overflow: hidden;
position: relative;
user-select: none;

img {
    opacity: 0.4;
    height: 100%;
}

::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: /*45%*/ 100%;
    background: linear-gradient(0deg, ${0}, transparent);
}
`), tertiary, tertiary);
var Header = styled.div(_t3$2 || (_t3$2 = _$4`
padding: 12px 12px 12px 12px;
display: flex;
align-items: center;
gap: 4px;
position: relative;
background: rgba(240, 240, 255, 0.1);
backdrop-filter: blur(2px);

& > h2 {
    color: white;
    font-size: 17px;
    font-family: whitney;
    font-weight: 500;
    margin: 0;
    flex: 1;
}
`));
var CloseButton = styled.button(_t4 || (_t4 = _$4`
outline: none;
border: none;
height: 25px;
background: transparent;
color: white;
cursor: pointer;
opacity: 0.7;
transition: 0.15s ease-out;

:hover {
    opacity: 1;
}
`));
function SuperGift() {
  return React__default.createElement(Wrapper$1, null, React__default.createElement(SuperModal, null, React__default.createElement("div", {
    style: {
      width: "100%",
      position: "absolute",
      zIndex: 10
    }
  }, React__default.createElement(Header, null, React__default.createElement("h2", null, "Claim Your Gift"), React__default.createElement(CloseButton, null, React__default.createElement(XIcon, {
    width: 24
  })))), React__default.createElement("img", {
    src: "/assets/superimage.png"
  })));
}

export { ServersList, SuperGift };
//# sourceMappingURL=index.modern.js.map
