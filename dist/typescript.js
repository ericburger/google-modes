(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^(?:var|let|const)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:while|with)(?![a-zA-Z¡-￿_0-9_\$])/, /^debugger(?![a-zA-Z¡-￿_0-9_\$])/, /^if(?![a-zA-Z¡-￿_0-9_\$])/, /^function(?![a-zA-Z¡-￿_0-9_\$])/, /^for(?![a-zA-Z¡-￿_0-9_\$])/, /^default(?![a-zA-Z¡-￿_0-9_\$])/, /^case(?![a-zA-Z¡-￿_0-9_\$])/, /^return(?![a-zA-Z¡-￿_0-9_\$])/, /^throw(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9_\$])/, /^switch(?![a-zA-Z¡-￿_0-9_\$])/, /^try(?![a-zA-Z¡-￿_0-9_\$])/, /^class(?![a-zA-Z¡-￿_0-9_\$])/, /^export(?![a-zA-Z¡-￿_0-9_\$])/, /^import(?![a-zA-Z¡-￿_0-9_\$])/, [0, "async", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 145]], /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*/, /^extends(?![a-zA-Z¡-￿_0-9_\$])/, /^enum(?![a-zA-Z¡-￿_0-9_\$])/, [1, ";", /^(?=\})/, [7, "canInsertSemi"]], /^catch(?![a-zA-Z¡-￿_0-9_\$])/, /^finally(?![a-zA-Z¡-￿_0-9_\$])/, /^from(?![a-zA-Z¡-￿_0-9_\$])/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿__\$]/, /^const(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:true|false|null|undefined|NaN|Infinity)(?![a-zA-Z¡-￿_0-9_\$])/, /^new(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:0x[0-9a-fA-F]+|0o[0-7]+|0b[01]+|(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?)/, /^else(?![a-zA-Z¡-￿_0-9_\$])/, /^as(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^(?!\*\/|\@[a-zA-Z¡-￿_]|\{)/, /^[^]/], /^(?:super|this)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:delete|typeof|yield|await)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:\.\.\.|\!|\+\+?|\-\-?)/, /^\/(?![\/\*])(?:\\.|\[(?:(?!\]).)*\]|(?!\/).)+\/[gimyus]*/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 491]], /^(?:\+\+|\-\-)/, /^(?:\+|\-|\%|\*|\/(?![\/\*])|\>\>?\>?|\<\<?|\=\=?|\&\&?|\|\|?|\^|\!\=)\=?/, /^(?:in|instanceof)(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:public|private|protected|readonly|abstract|static)(?![a-zA-Z¡-￿_0-9_\$])/, [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 516]], /^(?:\.\.\.)?/, /^is(?![a-zA-Z¡-￿_0-9_\$])/, /^(?:get|set|async)(?![a-zA-Z¡-￿_0-9_\$])(?! *[\,\}\:\(\<])/];
  var nodes = [
    [1, 6, 2],
    [/^[^]/, 0],
    [1, 6, 3],
    [2, 7, 4, {"name":"Statement"},
     0, 1],
    [1, 6, 3],
    [3, "keyword", e[0], -1,
     3, "keyword", e[1], -1,
     3, "keyword", e[30], -1,
     3, "keyword", /^do(?![a-zA-Z¡-￿_0-9_\$])/, -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[40], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[33], -1,
     3, "atom", e[27], -1,
     3, "variable", e[17], -1,
     3, "operator", e[35], -1,
     3, "operator", e[39], -1,
     3, "operator", e[38], -1,
     2, 147, -1, {"name":"string","token":"string"},
     3, "number", e[29], -1,
     2, 152, -1, {"name":"comment","token":"comment"},
     3, "string-2", e[36], -1,
     1, 158, -1,
     /^[^]/, -1],
    [e[24], 6,
     2, 152, 6, {"name":"comment","token":"comment"},
     0, -1],
    [3, "keyword", [0, "type", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 162]], 8,
     3, "keyword", [0, "namespace", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 163]], 18,
     3, "keyword", [0, "interface", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 164]], 26,
     [5, 165], 36,
     3, "keyword", e[19], 37,
     3, "keyword", [0, "declare", /^(?![a-zA-Z¡-￿_0-9_\$])/, [5, 168]], 43,
     3, "keyword", /^abstract(?![a-zA-Z¡-￿_0-9_\$])/, 43,
     3, "keyword", e[0], 45,
     3, "keyword", e[1], 52,
     2, 169, -1, {"name":"Block"},
     ";", -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[3], 56,
     3, "keyword", e[4], 61,
     3, "keyword", e[5], 67,
     3, "keyword", e[6], 69,
     /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= *\:)/, 69,
     3, "keyword", e[7], 70,
     3, "keyword", e[8], 73,
     3, "keyword", e[9], 77,
     3, "keyword", e[10], 81,
     3, "keyword", e[11], 85,
     3, "keyword", e[12], 89,
     3, "keyword", e[13], 105,
     3, "keyword", e[14], 109,
     3, "keyword", e[15], 121,
     3, "keyword", e[16], 137,
     "@", 139,
     1, 173, 143],
    [1, 6, 9],
    [3, "def type", e[17], 10],
    [1, 6, 11],
    [2, 179, 12, {"name":"TypeParams"},
     0, 12],
    [1, 6, 13],
    [3, "operator", "=", 14],
    [1, 6, 15],
    [1, 184, 16],
    [1, 6, 17],
    [e[20], -1],
    [1, 6, 19],
    [[5, 217], 20,
     3, "def", e[17], 21],
    [3, "variable", e[17], 22],
    [1, 6, 23],
    [1, 6, 24],
    [2, 169, -1, {"name":"Block"}],
    [".", 25],
    [1, 6, 19],
    [1, 6, 27],
    [3, "def type", e[17], 28],
    [1, 6, 29],
    [2, 179, 30, {"name":"TypeParams"},
     0, 30],
    [1, 6, 31],
    [3, "keyword", e[18], 32,
     0, 33],
    [1, 6, 34],
    [1, 6, 35],
    [1, 220, 33],
    [2, 226, -1, {"name":"ObjType"}],
    [3, "keyword", e[26], 38],
    [1, 6, 39],
    [1, 6, 40],
    [3, "def type", e[17], 41],
    [3, "keyword", e[19], 37],
    [1, 6, 42],
    [2, 234, -1, {"name":"EnumBody"}],
    [1, 6, 44],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 46],
    [1, 239, 47],
    [1, 6, 48],
    [",", 49,
     e[20], -1],
    [1, 6, 50],
    [1, 239, 51],
    [1, 6, 48],
    [1, 6, 53],
    [2, 248, 54, {"name":"CondExpr"}],
    [1, 6, 55],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 57],
    [2, 248, 58, {"name":"CondExpr"}],
    [1, 6, 59],
    [2, 7, 60, {"name":"Statement"}],
    [2, 253, -1, {"name":"Alternative"}],
    [1, 6, 62],
    [3, "keyword", "*", 63,
     0, 63],
    [1, 6, 64],
    [3, "def", e[17], 65],
    [1, 6, 66],
    [2, 257, -1, {"name":"FunctionDef"}],
    [1, 6, 68],
    [2, 264, -1, {"name":"ForStatement"}],
    [1, 6, 71],
    [1, 6, 72],
    [":", -1],
    [1, 173, 69],
    [1, 6, 74],
    [e[20], -1,
     1, 173, 75],
    [1, 6, 76],
    [e[20], -1],
    [1, 6, 78],
    [1, 173, 79],
    [1, 6, 80],
    [e[20], -1],
    [1, 6, 82],
    [/^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*)?/, 83],
    [1, 6, 84],
    [e[20], -1],
    [1, 6, 86],
    [2, 248, 87, {"name":"CondExpr"}],
    [1, 6, 88],
    [2, 169, -1, {"name":"Block"}],
    [1, 6, 90],
    [2, 169, 91, {"name":"Block"}],
    [1, 6, 92],
    [3, "keyword", e[21], 93,
     0, 94],
    [1, 6, 95],
    [1, 6, 96],
    ["(", 97],
    [3, "keyword", e[22], 98,
     0, -1],
    [1, 6, 99],
    [1, 6, 100],
    [3, "def", e[17], 101],
    [2, 169, -1, {"name":"Block"}],
    [1, 6, 102],
    [")", 103],
    [1, 6, 104],
    [2, 169, 94, {"name":"Block"}],
    [1, 6, 106],
    [3, "def type", e[17], 107],
    [1, 6, 108],
    [1, 267, -1],
    [1, 6, 110],
    ["*", 111,
     3, "keyword", e[6], 111,
     "{", 112,
     2, 7, -1, {"name":"Statement"}],
    [1, 6, 113],
    [1, 6, 114],
    [3, "keyword", e[23], 115,
     0, 116],
    [1, 278, 117],
    [1, 6, 118],
    [1, 6, 119],
    [1, 6, 120],
    [2, 147, 116, {"name":"string","token":"string"}],
    [e[20], -1],
    ["}", 111],
    [1, 6, 122],
    [2, 147, 123, {"name":"string","token":"string"},
     3, "keyword", "*", 124,
     1, 284, 125,
     "{", 126],
    [1, 6, 127],
    [1, 6, 128],
    [1, 6, 129],
    [1, 6, 130],
    [e[20], -1],
    [3, "keyword", e[31], 131,
     0, 125],
    [3, "keyword", e[23], 132,
     0, 123],
    [1, 278, 133],
    [1, 6, 134],
    [1, 6, 135],
    [1, 6, 136],
    [3, "def", e[17], 125],
    [2, 147, 123, {"name":"string","token":"string"}],
    ["}", 125],
    [1, 6, 138],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 140],
    [1, 173, 141],
    [1, 6, 142],
    [2, 7, -1, {"name":"Statement"}],
    [1, 6, 144],
    [e[20], -1],
    [1, 6, 146],
    [3, "keyword", e[4], -1,
     /^(?:[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*|\()/, -1],
    ["'", 148,
     "\"", 150],
    ["\\", 149,
     /^(?!\')./, 148,
     "'", -1],
    [/^[^]/, 148],
    ["\\", 151,
     /^(?!\")./, 150,
     "\"", -1],
    [/^[^]/, 150],
    [/^\/\*\*(?!\/)/, 153,
     "/*", 157,
     /^\/\/.*/, -1],
    [0, 154,
     2, 289, 153, {"name":"doccomment.braced"},
     0, 155],
    [e[32], 156],
    [2, 293, 155, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [0, 154,
     0, 153],
    [[0, /^(?!\*\/)/, /^[^]/], 157,
     "*/", -1],
    [3, "string-2", "`", 159],
    [3, "string-2", "${", 160,
     2, 297, 159, {"name":"str2","token":"string-2"},
     3, "string-2", /^(?:(?!\`|\$\{|\\).)+/, 159,
     3, "string-2", "`", -1],
    [1, 173, 161],
    [3, "string-2", "}", 159],
    [e[24], 162,
     e[25], -1],
    [e[24], 163,
     e[25], -1],
    [e[24], 164,
     e[25], -1],
    [3, "keyword", e[26], 166],
    [1, 6, 167],
    [3, "keyword", e[19], -1],
    [e[24], 168,
     e[25], -1],
    ["{", 170],
    [1, 6, 171],
    [2, 7, 172, {"name":"Statement"},
     "}", -1],
    [1, 6, 171],
    [1, 299, 174],
    [1, 6, 175],
    [",", 176,
     1, 321, 177,
     0, -1],
    [1, 6, 178],
    [1, 6, 175],
    [1, 173, 177],
    ["<", 180],
    [1, 6, 181],
    [1, 340, 182],
    [1, 6, 183],
    [">", -1],
    [3, "keyword", /^this(?![a-zA-Z¡-￿_0-9_\$])/, 208,
     3, "atom", e[27], 208,
     3, "keyword", /^typeof(?![a-zA-Z¡-￿_0-9_\$])/, 185,
     3, "keyword", /^keyof(?![a-zA-Z¡-￿_0-9_\$])/, 186,
     [0, [5, 354], "("], 187,
     3, "keyword", e[28], 188,
     0, 188,
     0, 189,
     2, 357, 208, {"name":"TupleType"},
     2, 226, 208, {"name":"ObjType"},
     2, 147, 208, {"name":"string","token":"string"},
     3, "number", e[29], 208],
    [1, 6, 190],
    [1, 6, 191],
    [1, 6, 192],
    [1, 6, 193],
    [[5, 362], 194,
     3, "type", e[17], 195],
    [1, 365, 208],
    [1, 184, 208],
    [1, 184, 196],
    [2, 179, 197, {"name":"TypeParams"},
     0, 197],
    [3, "variable", e[17], 198],
    [1, 6, 199],
    [1, 6, 200],
    [1, 6, 201],
    [1, 6, 202],
    [2, 369, 208, {"name":"TypeArgs"},
     0, 208],
    [")", 208],
    [2, 374, 203, {"name":"ParamListSpec"}],
    [".", 204],
    [1, 6, 205],
    [1, 6, 189],
    [3, "operator", "=>", 206],
    [1, 6, 207],
    [1, 184, 208],
    [1, 6, 209],
    [3, "operator", "&", 210,
     3, "operator", "|", 210,
     "[", 211,
     0, -1],
    [1, 6, 212],
    [1, 6, 213],
    [1, 184, 214],
    [1, 184, 215,
     0, 215],
    [1, 6, 209],
    [1, 6, 216],
    ["]", 214],
    [e[17], 218],
    [1, 6, 219],
    [".", -1],
    [1, 184, 221,
     0, -1],
    [1, 6, 222],
    [",", 223,
     0, -1],
    [1, 6, 224],
    [1, 184, 225,
     0, 225],
    [1, 6, 222],
    ["{", 227],
    [1, 6, 228],
    [1, 375, 229,
     0, 229],
    [1, 6, 230],
    [/^[\,\;]/, 231,
     "}", -1],
    [1, 6, 232],
    [1, 375, 233,
     0, 233],
    [1, 6, 230],
    ["{", 235],
    [1, 6, 236],
    [1, 404, 237],
    [1, 6, 238],
    ["}", -1],
    [1, 418, 240],
    [1, 6, 241],
    [":", 242,
     0, 244],
    [1, 6, 243],
    [1, 184, 244],
    [1, 6, 245],
    [3, "operator", "=", 246,
     0, -1],
    [1, 6, 247],
    [1, 365, -1],
    ["(", 249],
    [1, 6, 250],
    [1, 173, 251],
    [1, 6, 252],
    [")", -1],
    [1, 6, 254],
    [3, "keyword", e[30], 255,
     0, -1],
    [1, 6, 256],
    [2, 7, -1, {"name":"Statement"}],
    [2, 179, 258, {"name":"TypeParams"},
     0, 258],
    [1, 6, 259],
    [2, 421, 260, {"name":"ParamList"}],
    [1, 6, 261],
    [1, 426, 262,
     0, 262],
    [1, 6, 263],
    [2, 169, -1, {"name":"Block"},
     e[20], -1],
    [2, 434, 265, {"name":"ForSpec"}],
    [1, 6, 266],
    [2, 7, -1, {"name":"Statement"}],
    [2, 179, 268, {"name":"TypeParams"},
     0, 268],
    [1, 6, 269],
    [3, "keyword", e[18], 270,
     0, 272],
    [1, 6, 271],
    [1, 184, 272],
    [1, 6, 273],
    [3, "keyword", /^implements(?![a-zA-Z¡-￿_0-9_\$])/, 274,
     0, 276],
    [1, 6, 275],
    [1, 220, 276],
    [1, 6, 277],
    [2, 447, -1, {"name":"ClassBody"}],
    [1, 284, 279,
     0, -1],
    [1, 6, 280],
    [",", 281,
     0, -1],
    [1, 6, 282],
    [1, 284, 283,
     0, 283],
    [1, 6, 280],
    [3, "variable", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?= +as)/, 285,
     3, "def", e[17], -1],
    [1, 6, 286],
    [3, "keyword", e[31], 287],
    [1, 6, 288],
    [3, "def", e[17], -1],
    ["{", 290],
    [1, 475, 291,
     2, 481, 292, {"name":"doccomment.type"}],
    [[0, /^(?!\}|\*\/)/, /^[^]/], 291,
     0, 292],
    ["}", -1],
    [1, 475, 294],
    [0, 295,
     2, 289, 294, {"name":"doccomment.braced"},
     0, -1],
    [e[32], 296],
    [0, 295,
     0, 294],
    ["\\", 298,
     "\n", -1],
    [/^[^]/, -1],
    [3, "atom", e[27], -1,
     3, "keyword", e[33], -1,
     3, "keyword", e[34], 300,
     3, "operator", e[35], 300,
     3, "keyword", e[16], 300,
     3, "keyword", e[28], 302,
     3, "keyword", e[4], 308,
     3, "keyword", e[13], 314,
     2, 485, -1, {"name":"ArrowFunc"},
     3, "variable callee", e[37], 319,
     3, "variable", e[17], -1,
     3, "number", e[29], -1,
     2, 147, -1, {"name":"string","token":"string"},
     3, "string-2", e[36], -1,
     1, 158, -1,
     2, 495, -1, {"name":"ArrayLiteral"},
     2, 500, -1, {"name":"ObjectLiteral"},
     2, 505, -1, {"name":"ParenExpr"}],
    [1, 6, 301],
    [1, 299, -1],
    [1, 6, 303],
    [".", 304,
     3, "variable callee", e[37], 305,
     1, 299, -1],
    [1, 6, 306],
    [1, 6, 307],
    [3, "keyword", /^target(?![a-zA-Z¡-￿_0-9_\$])/, -1],
    [2, 369, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 309],
    [3, "keyword", "*", 310,
     0, 310],
    [1, 6, 311],
    [3, "def", e[17], 312,
     0, 312],
    [1, 6, 313],
    [2, 257, -1, {"name":"FunctionDef"}],
    [1, 6, 315],
    [[6, 510], 316,
     0, 317],
    [3, "def type", e[17], 317],
    [1, 6, 318],
    [1, 267, -1],
    [1, 6, 320],
    [2, 369, -1, {"name":"TypeArgs"},
     0, -1],
    [3, "keyword", e[31], 322,
     3, "operator", "!", -1,
     3, "operator", e[38], -1,
     3, "operator", e[39], 324,
     3, "keyword", e[40], 324,
     2, 511, -1, {"name":"ArgList"},
     1, 158, -1,
     ".", 326,
     "[", 330,
     3, "operator", "?", 334],
    [1, 6, 323],
    [1, 184, -1],
    [1, 6, 325],
    [1, 173, -1],
    [1, 6, 327],
    [3, "property callee", e[42], 328,
     3, "property", e[17], -1],
    [1, 6, 329],
    [2, 369, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 331],
    [1, 173, 332],
    [1, 6, 333],
    ["]", -1],
    [1, 6, 335],
    [1, 173, 336],
    [1, 6, 337],
    [3, "operator", ":", 338],
    [1, 6, 339],
    [1, 173, -1],
    [3, "def type", e[17], 341,
     0, -1],
    [1, 6, 342],
    [3, "keyword", e[18], 343,
     0, 344],
    [1, 6, 345],
    [1, 6, 346],
    [1, 184, 344],
    [",", 347,
     0, -1],
    [1, 6, 348],
    [3, "def type", e[17], 349,
     0, 350],
    [1, 6, 351],
    [1, 6, 346],
    [3, "keyword", e[18], 352,
     0, 350],
    [1, 6, 353],
    [1, 184, 350],
    ["(", 355],
    [1, 6, 356],
    [[6, 520], -1],
    ["[", 358],
    [1, 6, 359],
    [1, 220, 360],
    [1, 6, 361],
    ["]", -1],
    [e[17], 363],
    [1, 6, 364],
    [".", -1],
    [1, 299, 366],
    [1, 6, 367],
    [1, 523, 368,
     0, -1],
    [1, 6, 367],
    ["<", 370],
    [1, 6, 371],
    [1, 220, 372],
    [1, 6, 373],
    [">", -1],
    [2, 421, -1, {"name":"ParamList"}],
    [3, "keyword", e[28], 376,
     0, 376,
     0, 382],
    [1, 6, 377],
    [2, 179, 378, {"name":"TypeParams"},
     0, 378],
    [1, 6, 379],
    [2, 421, 380, {"name":"ParamList"}],
    [1, 6, 381],
    [1, 426, -1,
     0, -1],
    [3, "keyword", e[41], 383,
     "[", 384,
     3, "def property", e[17], 385,
     2, 147, 385, {"name":"string","token":"string"},
     3, "number", e[29], 385],
    [1, 6, 382],
    [1, 6, 386],
    [1, 6, 387],
    [e[17], 388],
    [/^\??/, 389],
    [1, 6, 390],
    [1, 6, 391],
    [":", 392],
    [2, 179, 393, {"name":"TypeParams"},
     0, 393,
     0, 394],
    [1, 6, 395],
    [1, 6, 396],
    [1, 6, 397],
    [1, 184, 398],
    [2, 421, 394, {"name":"ParamList"}],
    [1, 426, -1,
     0, -1],
    [1, 6, 399],
    ["]", 400],
    [1, 6, 401],
    [":", 402],
    [1, 6, 403],
    [1, 184, -1],
    [3, "def property", e[17], 405,
     0, -1],
    [1, 6, 406],
    [3, "operator", "=", 407,
     0, 408],
    [1, 6, 409],
    [1, 6, 410],
    [1, 365, 408],
    [",", 411,
     0, -1],
    [1, 6, 412],
    [3, "def property", e[17], 413,
     0, 414],
    [1, 6, 415],
    [1, 6, 410],
    [3, "operator", "=", 416,
     0, 414],
    [1, 6, 417],
    [1, 365, 414],
    [3, "operator", "...", 419,
     0, 419],
    [1, 6, 420],
    [3, "def", e[17], -1,
     2, 542, -1, {"name":"ArrayPattern"},
     2, 547, -1, {"name":"ObjectPattern"}],
    ["(", 422],
    [1, 6, 423],
    [1, 552, 424],
    [1, 6, 425],
    [")", -1],
    [":", 427],
    [1, 6, 428],
    [[5, 584], 429,
     0, 432],
    [3, "variable", e[17], 430],
    [1, 6, 431],
    [3, "keyword", e[44], 432],
    [1, 6, 433],
    [1, 184, -1],
    ["(", 435],
    [1, 6, 436],
    [2, 7, 437, {"name":"Statement"}],
    [1, 6, 438],
    [3, "keyword", /^of(?![a-zA-Z¡-￿_0-9_\$])/, 439,
     1, 173, 440,
     0, 440,
     0, 445],
    [1, 6, 441],
    [1, 6, 442],
    [1, 173, 445],
    [";", 443],
    [1, 6, 444],
    [1, 173, 445,
     0, 445],
    [1, 6, 446],
    [")", -1],
    ["{", 448],
    [1, 6, 449],
    [0, 450,
     "@", 451,
     "}", -1],
    [3, "keyword", e[41], 452,
     3, "keyword", e[45], 453,
     0, 453],
    [1, 6, 454],
    [1, 6, 450],
    [1, 6, 455],
    [1, 173, 456],
    [3, "def property", e[17], 457,
     "[", 458,
     3, "number", e[29], 457,
     2, 147, 457, {"name":"string","token":"string"}],
    [1, 6, 449],
    [1, 6, 459],
    [1, 6, 460],
    [3, "keyword", "*", 461,
     0, 461,
     /^\??/, 462],
    [1, 173, 463],
    [1, 6, 464],
    [1, 6, 465],
    [1, 6, 466],
    [2, 257, 456, {"name":"FunctionDef"}],
    [":", 467,
     0, 468],
    ["]", 457],
    [1, 6, 469],
    [1, 6, 470],
    [1, 184, 468],
    [3, "operator", "=", 471,
     0, 472],
    [1, 6, 473],
    [1, 6, 474],
    [1, 173, 472],
    [e[20], 456],
    [3, "tag", /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z¡-￿_])/, 476,
     3, "tag", /^\@[a-zA-Z¡-￿_]+/, -1],
    [e[24], 476,
     "{", 477,
     0, 478,
     0, -1],
    [2, 481, 479, {"name":"doccomment.type"}],
    [3, "def", /^[a-zA-Z¡-￿_]+/, -1,
     0, -1],
    ["}", 480],
    [[1, "\n", "\t", " ", "*"], 480,
     0, 478],
    [3, "type", "{", 482,
     3, "type", /^(?:(?!\{|\}|\*\/).)+/, 481,
     "\n", 483,
     0, -1],
    [2, 481, 484, {"name":"doccomment.type"}],
    [/^[\t ]*(?:\*[\t ]*)?/, 481],
    [/^(?=\*\/)/, 481,
     3, "type", "}", 481],
    [3, "def", [0, /^[a-zA-Z¡-￿__\$]/, /^[a-zA-Z¡-￿_0-9_\$]*/, [5, 587]], 489,
     [5, 593], 486],
    [2, 421, 487, {"name":"ParamList"}],
    [1, 6, 488],
    [1, 426, 489,
     0, 489],
    [1, 6, 490],
    [2, 598, -1, {"name":"ArrowRest"}],
    [/^ */, 492],
    [1, 601, 493,
     0, 494],
    [/^ */, 494],
    ["(", -1],
    ["[", 496],
    [1, 6, 497],
    [1, 603, 498],
    [1, 6, 499],
    ["]", -1],
    ["{", 501],
    [1, 6, 502],
    [1, 609, 503],
    [1, 6, 504],
    ["}", -1],
    ["(", 506],
    [1, 6, 507],
    [1, 173, 508],
    [1, 6, 509],
    [")", -1],
    [3, "keyword", e[18], -1],
    ["(", 512],
    [1, 6, 513],
    [1, 603, 514],
    [1, 6, 515],
    [")", -1],
    [/^ */, 517],
    [1, 601, 518,
     0, 519],
    [/^ */, 519],
    ["(", -1],
    [/^(?:\)|\.\.\.)/, -1,
     e[17], 521],
    [1, 6, 522],
    [/^[\?\:]/, -1],
    [3, "keyword", e[31], 524,
     3, "operator", "!", -1,
     3, "operator", e[38], -1,
     3, "operator", e[39], 526,
     3, "keyword", e[40], 526,
     2, 511, -1, {"name":"ArgList"},
     1, 158, -1,
     ".", 528,
     "[", 532,
     3, "operator", "?", 536],
    [1, 6, 525],
    [1, 184, -1],
    [1, 6, 527],
    [1, 365, -1],
    [1, 6, 529],
    [3, "property callee", e[42], 530,
     3, "property", e[17], -1],
    [1, 6, 531],
    [2, 369, -1, {"name":"TypeArgs"},
     0, -1],
    [1, 6, 533],
    [1, 173, 534],
    [1, 6, 535],
    ["]", -1],
    [1, 6, 537],
    [1, 173, 538],
    [1, 6, 539],
    [3, "operator", ":", 540],
    [1, 6, 541],
    [1, 365, -1],
    ["[", 543],
    [1, 6, 544],
    [1, 615, 545],
    [1, 6, 546],
    ["]", -1],
    ["{", 548],
    [1, 6, 549],
    [1, 621, 550],
    [1, 6, 551],
    ["}", -1],
    [3, "keyword", e[41], 553,
     e[43], 554,
     0, -1],
    [1, 6, 552],
    [1, 6, 555],
    [1, 418, 556],
    [1, 6, 557],
    [/^\??/, 558],
    [1, 6, 559],
    [":", 560,
     0, 561],
    [1, 6, 562],
    [1, 6, 563],
    [1, 184, 561],
    [3, "operator", "=", 564,
     0, 565],
    [1, 6, 566],
    [1, 6, 567],
    [1, 365, 565],
    [",", 568,
     0, -1],
    [1, 6, 569],
    [3, "keyword", e[41], 570,
     e[43], 571,
     0, 572],
    [1, 6, 569],
    [1, 6, 573],
    [1, 6, 567],
    [1, 418, 574],
    [1, 6, 575],
    [/^\??/, 576],
    [1, 6, 577],
    [":", 578,
     0, 579],
    [1, 6, 580],
    [1, 6, 581],
    [1, 184, 579],
    [3, "operator", "=", 582,
     0, 572],
    [1, 6, 583],
    [1, 365, 572],
    [e[17], 585],
    [1, 6, 586],
    [3, "keyword", e[44], -1],
    [1, 6, 588],
    [":", 589,
     0, 592],
    [1, 6, 590],
    [1, 184, 591],
    [1, 6, 592],
    ["=>", -1],
    [2, 421, 594, {"name":"ParamList"}],
    [1, 6, 595],
    [1, 426, 596,
     0, 596],
    [1, 6, 597],
    ["=>", -1],
    [3, "operator", "=>", 599],
    [1, 6, 600],
    [2, 169, -1, {"name":"Block"},
     1, 365, -1],
    ["<", 602],
    [1, 601, 602,
     [1, "=>", [0, /^(?!\>)/, /^[^]/]], 602,
     ">", -1],
    [1, 365, 604,
     0, -1],
    [1, 6, 605],
    [",", 606,
     0, -1],
    [1, 6, 607],
    [1, 365, 608,
     0, 608],
    [1, 6, 605],
    [2, 627, 610, {"name":"ObjectMember"},
     0, -1],
    [1, 6, 611],
    [",", 612,
     0, -1],
    [1, 6, 613],
    [2, 627, 614, {"name":"ObjectMember"},
     0, 614],
    [1, 6, 611],
    [1, 642, 616,
     0, -1],
    [1, 6, 617],
    [",", 618,
     0, -1],
    [1, 6, 619],
    [1, 642, 620,
     0, 620],
    [1, 6, 617],
    [1, 647, 622,
     0, -1],
    [1, 6, 623],
    [",", 624,
     0, -1],
    [1, 6, 625],
    [1, 647, 626,
     0, 626],
    [1, 6, 623],
    [3, "keyword", e[45], 628,
     0, 628],
    [1, 6, 629],
    [3, "def property", e[17], 630,
     "[", 631,
     3, "number", e[29], 630,
     2, 147, 630, {"name":"string","token":"string"},
     3, "operator", "...", 632],
    [1, 6, 633],
    [1, 6, 634],
    [1, 6, 635],
    [3, "keyword", "*", 636,
     0, 636,
     ":", 637,
     0, -1],
    [1, 173, 638],
    [1, 365, -1],
    [1, 6, 639],
    [1, 6, 640],
    [1, 6, 641],
    [2, 257, -1, {"name":"FunctionDef"}],
    [1, 365, -1],
    ["]", 630],
    [1, 418, 643],
    [1, 6, 644],
    [3, "operator", "=", 645,
     0, -1],
    [1, 6, 646],
    [1, 365, -1],
    [3, "def", /^[a-zA-Z¡-￿__\$][a-zA-Z¡-￿_0-9_\$]*(?![a-z]|[A-Z]|[¡-￿]|_|[0-9]|_|\$| *\:)/, 648,
     3, "property", e[17], 652,
     3, "operator", "...", 656],
    [1, 6, 649],
    [3, "operator", "=", 650,
     0, -1],
    [1, 6, 651],
    [1, 365, -1],
    [1, 6, 653],
    [":", 654],
    [1, 6, 655],
    [1, 642, -1],
    [1, 6, 657],
    [1, 642, -1]
  ];
  var start = 0;
  var token = 5;

  var grammar = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}", ObjType: "}",
    ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr" ||
          cx.name == "EnumConstant" || cx.name == "Template" || cx.name == "AnnotationTypeItem" ||
          cx.parent && bracketed[cx.parent.name])
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  function canInsertSemi(string, pos) {
    for (var i = pos - 1; i >= 0; i--) {
      var ch = string.charCodeAt(i);
      if (ch === 10) { break }
      if (ch !== 32 && ch !== 9) { return false }
    }
    return true
  }

  var scopes = ["Block", "FunctionDef", "ArrowFunc", "ForStatement", "ParamListSpec"];

  var TSMode = (function (superclass) {
    function TSMode(conf, modeConf) {
      superclass.call(this, grammar, {
        predicates: {canInsertSemi: modeConf.requireSemicolons === false ? canInsertSemi : function () { return false; }}
      });
      this.conf = conf;
    }

    if ( superclass ) TSMode.__proto__ = superclass;
    TSMode.prototype = Object.create( superclass && superclass.prototype );
    TSMode.prototype.constructor = TSMode;

    TSMode.prototype.token = function token$$1 (stream, state) {
      return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
    };

    TSMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (!textAfter) { textAfter = line = "x"; } // Force getContextAt to terminate the statement, if needed
      return indent(state, textAfter, line, this.conf)
    };

    return TSMode;
  }(CodeMirror.GrammarMode));

  var meta = {
    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``"
  };
  for (var prop in meta) { TSMode.prototype[prop] = meta[prop]; }

  CodeMirror.registerHelper("wordChars", "google-typescript", /[\w$]/);

  CodeMirror.defineMode("google-typescript", function (conf, modeConf) { return new TSMode(conf, modeConf); });

})));
