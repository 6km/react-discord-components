import React__default, { useState, useCallback, createElement } from 'react';
import styled from 'styled-components';
import { PlusIcon, LightningBoltIcon } from '@heroicons/react/solid';

var primary = "#36393f";
var tertiary = "#202225";
var floating = "#18191c";
var brandColor = "#5865F2";
var success = "#3ba55d";

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
  }) : React__default.createElement("p", null, getShortName(data.name))), isHovering && React__default.createElement(NamePopup, null, data.name));
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
    color: white;
}
`), primary, props => props.color);
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
    color: data.color
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
  return /*#__PURE__*/createElement("svg", _extends({
    className: "DiscordLogo_svg__homeIcon-r0w4ny",
    "aria-hidden": "false",
    width: 28,
    height: 20
  }, props), _path || (_path = /*#__PURE__*/createElement("path", {
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
    color: brandColor
  }), React__default.createElement(GuildSperator, null), servers.map(server => {
    return React__default.createElement(Avatar, Object.assign({}, server));
  }), React__default.createElement(CircleButton, {
    name: "Add a Server",
    icon: PlusIcon,
    color: success
  }), React__default.createElement(GuildSperator, null), React__default.createElement(CircleButton, {
    name: "Explore Public Servers",
    icon: LightningBoltIcon,
    color: success
  }));
}

export { ServersList };
//# sourceMappingURL=index.modern.js.map
