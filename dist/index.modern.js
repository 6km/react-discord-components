import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

var primary = "#36393f";
var tertiary = "#202225";
var floating = "#18191c";

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
}
`), primary);
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
  return React.createElement(AvatarContainer, {
    onMouseEnter: mouseMoveCallback,
    onMouseLeave: mouseMoveCallback
  }, React.createElement(AvatarShape, null, data.icon ? React.createElement("img", {
    src: data.icon,
    width: "100%",
    height: "100%"
  }) : React.createElement("p", null, getShortName(data.name))), isHovering && React.createElement(NamePopup, null, data.name));
}

let _$1 = t => t,
    _t$1;
var Wrapper = styled.div(_t$1 || (_t$1 = _$1`
width: 72px;
background: ${0};
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 16px;
gap: 8px;
`), tertiary);
function ServersList({
  servers
}) {
  return React.createElement(Wrapper, null, servers.map(server => {
    return React.createElement(Avatar, Object.assign({}, server));
  }));
}

export { ServersList };
//# sourceMappingURL=index.modern.js.map
