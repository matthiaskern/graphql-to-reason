// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE

import * as Js_mapperRt from "bs-platform/lib/es6/js_mapperRt.js";

function MakeSchema() {
  var jsMapperConstantArray = /* array */[
    /* tuple */[
      165290236,
      "NEWHOPE"
    ],
    /* tuple */[
      563301972,
      "EMPIRE"
    ],
    /* tuple */[
      824074496,
      "JEDI"
    ]
  ];
  var episodeToJs = function (param) {
    return Js_mapperRt.binarySearch(3, param, jsMapperConstantArray);
  };
  var episodeFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(3, jsMapperConstantArray, param);
  };
  var jsMapperConstantArray$1 = /* array */[
    /* tuple */[
      62283113,
      "METER"
    ],
    /* tuple */[
      780215982,
      "FOOT"
    ]
  ];
  var lengthUnitToJs = function (param) {
    return Js_mapperRt.binarySearch(2, param, jsMapperConstantArray$1);
  };
  var lengthUnitFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(2, jsMapperConstantArray$1, param);
  };
  var Queries = /* module */[];
  var Mutations = /* module */[];
  var Subscriptions = /* module */[];
  var Directives = /* module */[];
  return /* module */[
          /* episodeToJs */episodeToJs,
          /* episodeFromJs */episodeFromJs,
          /* lengthUnitToJs */lengthUnitToJs,
          /* lengthUnitFromJs */lengthUnitFromJs,
          /* Queries */Queries,
          /* Mutations */Mutations,
          /* Subscriptions */Subscriptions,
          /* Directives */Directives
        ];
}

export {
  MakeSchema ,
  
}
/* No side effect */