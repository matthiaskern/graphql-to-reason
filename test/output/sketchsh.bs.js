// Generated by BUCKLESCRIPT VERSION 4.0.6, PLEASE EDIT WITH CARE

import * as Js_mapperRt from "bs-platform/lib/es6/js_mapperRt.js";

function MakeSchema() {
  var jsMapperConstantArray = /* array */[
    /* tuple */[
      117802505,
      "update"
    ],
    /* tuple */[
      315144466,
      "ignore"
    ]
  ];
  var conflict_actionToJs = function (param) {
    return Js_mapperRt.binarySearch(2, param, jsMapperConstantArray);
  };
  var conflict_actionFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(2, jsMapperConstantArray, param);
  };
  var jsMapperConstantArray$1 = /* array */[
    /* tuple */[
      -961133365,
      "avatar_asc"
    ],
    /* tuple */[
      -959280622,
      "email_desc_nulls_first"
    ],
    /* tuple */[
      -828364403,
      "id_asc"
    ],
    /* tuple */[
      -827148685,
      "id_desc_nulls_first"
    ],
    /* tuple */[
      -792512515,
      "name_asc"
    ],
    /* tuple */[
      -604055547,
      "name_desc"
    ],
    /* tuple */[
      -501358647,
      "avatar_asc_nulls_first"
    ],
    /* tuple */[
      -432233703,
      "updated_at_desc"
    ],
    /* tuple */[
      -391611545,
      "updated_at_asc_nulls_first"
    ],
    /* tuple */[
      -291378059,
      "avatar_desc_nulls_first"
    ],
    /* tuple */[
      -282271861,
      "id_asc_nulls_first"
    ],
    /* tuple */[
      -204313751,
      "updated_at_asc"
    ],
    /* tuple */[
      -9091979,
      "id_desc"
    ],
    /* tuple */[
      18494276,
      "created_at_desc_nulls_first"
    ],
    /* tuple */[
      79523782,
      "username_asc_nulls_first"
    ],
    /* tuple */[
      211314068,
      "email_desc"
    ],
    /* tuple */[
      235703624,
      "username_asc"
    ],
    /* tuple */[
      283309916,
      "created_at_asc"
    ],
    /* tuple */[
      395618266,
      "created_at_asc_nulls_first"
    ],
    /* tuple */[
      396384728,
      "username_desc_nulls_first"
    ],
    /* tuple */[
      420700675,
      "name_desc_nulls_first"
    ],
    /* tuple */[
      448200567,
      "avatar_desc"
    ],
    /* tuple */[
      559905559,
      "updated_at_desc_nulls_first"
    ],
    /* tuple */[
      574203084,
      "email_asc_nulls_first"
    ],
    /* tuple */[
      618911227,
      "name_asc_nulls_first"
    ],
    /* tuple */[
      933661638,
      "created_at_desc"
    ],
    /* tuple */[
      1054876762,
      "username_desc"
    ],
    /* tuple */[
      1060098382,
      "email_asc"
    ]
  ];
  var user_order_byToJs = function (param) {
    return Js_mapperRt.binarySearch(28, param, jsMapperConstantArray$1);
  };
  var user_order_byFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(28, jsMapperConstantArray$1, param);
  };
  var jsMapperConstantArray$2 = /* array */[
    /* tuple */[
      -366261512,
      "note_id_asc_nulls_first"
    ],
    /* tuple */[
      -229488026,
      "note_id_desc_nulls_first"
    ],
    /* tuple */[
      -198466744,
      "title_asc_nulls_first"
    ],
    /* tuple */[
      -198238824,
      "title_desc"
    ],
    /* tuple */[
      -135854646,
      "title_asc"
    ],
    /* tuple */[
      18494276,
      "created_at_desc_nulls_first"
    ],
    /* tuple */[
      36516676,
      "data_desc_nulls_first"
    ],
    /* tuple */[
      283309916,
      "created_at_asc"
    ],
    /* tuple */[
      330299228,
      "data_asc"
    ],
    /* tuple */[
      395618266,
      "created_at_asc_nulls_first"
    ],
    /* tuple */[
      434218970,
      "data_asc_nulls_first"
    ],
    /* tuple */[
      591259002,
      "note_id_asc"
    ],
    /* tuple */[
      674859974,
      "data_desc"
    ],
    /* tuple */[
      681523222,
      "title_desc_nulls_first"
    ],
    /* tuple */[
      886831080,
      "note_id_desc"
    ],
    /* tuple */[
      933661638,
      "created_at_desc"
    ]
  ];
  var note_revision_order_byToJs = function (param) {
    return Js_mapperRt.binarySearch(16, param, jsMapperConstantArray$2);
  };
  var note_revision_order_byFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(16, jsMapperConstantArray$2, param);
  };
  var jsMapperConstantArray$3 = /* array */[/* tuple */[
      -344697636,
      "user_identity_pkey"
    ]];
  var user_identity_constraintToJs = function (param) {
    return Js_mapperRt.binarySearch(1, param, jsMapperConstantArray$3);
  };
  var user_identity_constraintFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(1, jsMapperConstantArray$3, param);
  };
  var jsMapperConstantArray$4 = /* array */[/* tuple */[
      336578787,
      "user_pkey"
    ]];
  var user_constraintToJs = function (param) {
    return Js_mapperRt.binarySearch(1, param, jsMapperConstantArray$4);
  };
  var user_constraintFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(1, jsMapperConstantArray$4, param);
  };
  var jsMapperConstantArray$5 = /* array */[
    /* tuple */[
      -899730409,
      "user_identity_type_asc_nulls_first"
    ],
    /* tuple */[
      -699737063,
      "user_identity_type_asc"
    ],
    /* tuple */[
      757517417,
      "user_identity_type_desc"
    ],
    /* tuple */[
      1066032231,
      "user_identity_type_desc_nulls_first"
    ]
  ];
  var user_identity_type_order_byToJs = function (param) {
    return Js_mapperRt.binarySearch(4, param, jsMapperConstantArray$5);
  };
  var user_identity_type_order_byFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(4, jsMapperConstantArray$5, param);
  };
  var jsMapperConstantArray$6 = /* array */[/* tuple */[
      667575772,
      "note_pkey"
    ]];
  var note_constraintToJs = function (param) {
    return Js_mapperRt.binarySearch(1, param, jsMapperConstantArray$6);
  };
  var note_constraintFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(1, jsMapperConstantArray$6, param);
  };
  var jsMapperConstantArray$7 = /* array */[/* tuple */[
      -201343738,
      "note_revision_pkey"
    ]];
  var note_revision_constraintToJs = function (param) {
    return Js_mapperRt.binarySearch(1, param, jsMapperConstantArray$7);
  };
  var note_revision_constraintFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(1, jsMapperConstantArray$7, param);
  };
  var jsMapperConstantArray$8 = /* array */[
    /* tuple */[
      -958837697,
      "user_id_asc_nulls_first"
    ],
    /* tuple */[
      -713400395,
      "identity_type_desc"
    ],
    /* tuple */[
      -711741005,
      "identity_type_desc_nulls_first"
    ],
    /* tuple */[
      -706333107,
      "identity_type_asc"
    ],
    /* tuple */[
      -604562132,
      "identity_id_asc_nulls_first"
    ],
    /* tuple */[
      -517910220,
      "identity_id_desc"
    ],
    /* tuple */[
      -159976639,
      "user_id_desc"
    ],
    /* tuple */[
      36516676,
      "data_desc_nulls_first"
    ],
    /* tuple */[
      180500910,
      "identity_id_asc"
    ],
    /* tuple */[
      316564914,
      "identity_id_desc_nulls_first"
    ],
    /* tuple */[
      330299228,
      "data_asc"
    ],
    /* tuple */[
      434218970,
      "data_asc_nulls_first"
    ],
    /* tuple */[
      498273355,
      "identity_type_asc_nulls_first"
    ],
    /* tuple */[
      674859974,
      "data_desc"
    ],
    /* tuple */[
      770008895,
      "user_id_desc_nulls_first"
    ],
    /* tuple */[
      904353857,
      "user_id_asc"
    ]
  ];
  var user_identity_order_byToJs = function (param) {
    return Js_mapperRt.binarySearch(16, param, jsMapperConstantArray$8);
  };
  var user_identity_order_byFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(16, jsMapperConstantArray$8, param);
  };
  var jsMapperConstantArray$9 = /* array */[
    /* tuple */[
      -958837697,
      "user_id_asc_nulls_first"
    ],
    /* tuple */[
      -828364403,
      "id_asc"
    ],
    /* tuple */[
      -827148685,
      "id_desc_nulls_first"
    ],
    /* tuple */[
      -432233703,
      "updated_at_desc"
    ],
    /* tuple */[
      -391611545,
      "updated_at_asc_nulls_first"
    ],
    /* tuple */[
      -282271861,
      "id_asc_nulls_first"
    ],
    /* tuple */[
      -204313751,
      "updated_at_asc"
    ],
    /* tuple */[
      -198466744,
      "title_asc_nulls_first"
    ],
    /* tuple */[
      -198238824,
      "title_desc"
    ],
    /* tuple */[
      -159976639,
      "user_id_desc"
    ],
    /* tuple */[
      -135854646,
      "title_asc"
    ],
    /* tuple */[
      -9091979,
      "id_desc"
    ],
    /* tuple */[
      18494276,
      "created_at_desc_nulls_first"
    ],
    /* tuple */[
      36516676,
      "data_desc_nulls_first"
    ],
    /* tuple */[
      283309916,
      "created_at_asc"
    ],
    /* tuple */[
      330299228,
      "data_asc"
    ],
    /* tuple */[
      395618266,
      "created_at_asc_nulls_first"
    ],
    /* tuple */[
      434218970,
      "data_asc_nulls_first"
    ],
    /* tuple */[
      559905559,
      "updated_at_desc_nulls_first"
    ],
    /* tuple */[
      674859974,
      "data_desc"
    ],
    /* tuple */[
      681523222,
      "title_desc_nulls_first"
    ],
    /* tuple */[
      770008895,
      "user_id_desc_nulls_first"
    ],
    /* tuple */[
      904353857,
      "user_id_asc"
    ],
    /* tuple */[
      933661638,
      "created_at_desc"
    ]
  ];
  var note_order_byToJs = function (param) {
    return Js_mapperRt.binarySearch(24, param, jsMapperConstantArray$9);
  };
  var note_order_byFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(24, jsMapperConstantArray$9, param);
  };
  var jsMapperConstantArray$10 = /* array */[/* tuple */[
      890887495,
      "user_identity_type_pkey"
    ]];
  var user_identity_type_constraintToJs = function (param) {
    return Js_mapperRt.binarySearch(1, param, jsMapperConstantArray$10);
  };
  var user_identity_type_constraintFromJs = function (param) {
    return Js_mapperRt.revSearchAssert(1, jsMapperConstantArray$10, param);
  };
  var Queries = /* module */[];
  var Mutations = /* module */[];
  var Subscriptions = /* module */[];
  var Directives = /* module */[];
  return /* module */[
          /* conflict_actionToJs */conflict_actionToJs,
          /* conflict_actionFromJs */conflict_actionFromJs,
          /* user_order_byToJs */user_order_byToJs,
          /* user_order_byFromJs */user_order_byFromJs,
          /* note_revision_order_byToJs */note_revision_order_byToJs,
          /* note_revision_order_byFromJs */note_revision_order_byFromJs,
          /* user_identity_constraintToJs */user_identity_constraintToJs,
          /* user_identity_constraintFromJs */user_identity_constraintFromJs,
          /* user_constraintToJs */user_constraintToJs,
          /* user_constraintFromJs */user_constraintFromJs,
          /* user_identity_type_order_byToJs */user_identity_type_order_byToJs,
          /* user_identity_type_order_byFromJs */user_identity_type_order_byFromJs,
          /* note_constraintToJs */note_constraintToJs,
          /* note_constraintFromJs */note_constraintFromJs,
          /* note_revision_constraintToJs */note_revision_constraintToJs,
          /* note_revision_constraintFromJs */note_revision_constraintFromJs,
          /* user_identity_order_byToJs */user_identity_order_byToJs,
          /* user_identity_order_byFromJs */user_identity_order_byFromJs,
          /* note_order_byToJs */note_order_byToJs,
          /* note_order_byFromJs */note_order_byFromJs,
          /* user_identity_type_constraintToJs */user_identity_type_constraintToJs,
          /* user_identity_type_constraintFromJs */user_identity_type_constraintFromJs,
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
