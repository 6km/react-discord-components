import React from 'react';
import styled from 'styled-components';

let _ = t => t,
    _t;
var AvatarContainer = styled.div(_t || (_t = _`
border-radius: 10px;
background-color: red;
width: 45px;
height: 45px;
color: white;
`));
function Avatar(data) {
  var getShortName = name => {
    return name.toUpperCase().split(" ").map(l => l.charAt(0));
  };

  return React.createElement(AvatarContainer, null, data.icon ? React.createElement("img", {
    src: data.icon,
    width: "100%",
    height: "100%"
  }) : React.createElement("p", null, getShortName(data.name)));
}

let _$1 = t => t,
    _t$1;
var Wrapper = styled.div(_t$1 || (_t$1 = _$1`
width: 72px;
`));
function ServersList({
  servers
}) {
  return React.createElement(Wrapper, null, servers.map(server => {
    return React.createElement(Avatar, Object.assign({}, server));
  }));
}

export { ServersList };
//# sourceMappingURL=index.modern.js.map
