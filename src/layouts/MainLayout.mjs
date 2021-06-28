// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function MainLayout$Navigation(Props) {
  return React.createElement("nav", {
              className: "p-2 h-12 flex border-b border-gray-200 justify-between items-center text-sm"
            });
}

var Navigation = {
  make: MainLayout$Navigation
};

function MainLayout(Props) {
  var children = Props.children;
  return React.createElement("div", {
              className: "flex lg:justify-center min-w-[20rem]"
            }, React.createElement("div", {
                  className: "max-w-5xl w-full lg:w-3/4 text-gray-900 font-base"
                }, React.createElement(MainLayout$Navigation, {}), React.createElement("main", {
                      className: "mt-4 mx-4"
                    }, children)));
}

var make = MainLayout;

export {
  Navigation ,
  make ,
  
}
/* react Not a pure module */