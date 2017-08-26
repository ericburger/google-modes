(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^const(?![a-zA-Z\¡-\￿_0-9_])/, /^var(?![a-zA-Z\¡-\￿_0-9_])/, /^type(?![a-zA-Z\¡-\￿_0-9_])/, /^import(?![a-zA-Z\¡-\￿_0-9_])/, /^package(?![a-zA-Z\¡-\￿_0-9_])/, /^go(?![a-zA-Z\¡-\￿_0-9_])/, /^defer(?![a-zA-Z\¡-\￿_0-9_])/, /^return(?![a-zA-Z\¡-\￿_0-9_])/, /^break(?![a-zA-Z\¡-\￿_0-9_])/, /^continue(?![a-zA-Z\¡-\￿_0-9_])/, /^default(?![a-zA-Z\¡-\￿_0-9_])/, /^case(?![a-zA-Z\¡-\￿_0-9_])/, /^select(?![a-zA-Z\¡-\￿_0-9_])/, /^goto(?![a-zA-Z\¡-\￿_0-9_])/, /^fallthrough(?![a-zA-Z\¡-\￿_0-9_])/, /^[a-zA-Z\¡-\￿__][a-zA-Z\¡-\￿_0-9_]*/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z\¡-\￿_])/, /^\@[a-zA-Z\¡-\￿_]+/, /^[a-zA-Z\¡-\￿_]+/, [0, /^(?!\*\/|\@[a-zA-Z\¡-\￿_]|\{)/, /^[^]/], /^if(?![a-zA-Z\¡-\￿_0-9_])/, /^else(?![a-zA-Z\¡-\￿_0-9_])/, /^switch(?![a-zA-Z\¡-\￿_0-9_])/, /^for(?![a-zA-Z\¡-\￿_0-9_])/, /^(?:\!|\+|\-|\*|\^|\&|\<\-)/, /^range(?![a-zA-Z\¡-\￿_0-9_])/, /^struct(?![a-zA-Z\¡-\￿_0-9_])/, /^interface(?![a-zA-Z\¡-\￿_0-9_])/, /^func(?![a-zA-Z\¡-\￿_0-9_])/, /^map(?![a-zA-Z\¡-\￿_0-9_])/, /^chan(?![a-zA-Z\¡-\￿_0-9_])/, /^(?=\{)/, /^(?:(?:0o|0O)[0-7]+|(?:0x|OX)[0-9a-fA-F]+|(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)(?:[eE][\+\-]?[0-9]+)?i?)/, /^(?:true|false|nil)(?![a-zA-Z\¡-\￿_0-9_])/, /^(?:\+\+|\-\-)/, /^(?:(?:\+|\&\^?|\-|\||\*|\^|\/|\<\<?|\>\>?|\%|\=)\=?|\<\-|\=|\:\=|\!\=)/, /^[a-zA-Z\¡-\￿__][a-zA-Z\¡-\￿_0-9_]*(?=\()/, [1, ";", "\n"], /^[a-zA-Z\¡-\￿__][a-zA-Z\¡-\￿_0-9_]*(?= \:)/, /^(?:\.\.\.)?/];
var nodes = [
  [1, 4, 2],
  [/^[^]/, 0],
  [1, 6, 1],
  [3, "keyword", e[8], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[28], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[30], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[31], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[23], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[26], -1,
   3, "keyword", e[2], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[7], -1,
   3, "keyword", e[1], -1,
   3, "atom", e[34], -1,
   3, "operator", e[36], -1,
   3, "operator", e[25], -1,
   3, "operator", e[35], -1,
   3, "number", e[33], -1,
   2, 9, -1, {"name":"string","token":"string"},
   3, "variable", e[15], -1,
   2, 11, -1, {"name":"comment","token":"comment"},
   /^[^]/, -1],
  [/^[ \t]/, 4,
   2, 11, 4, {"name":"comment","token":"comment"},
   [0, /^(?=\n)/, [7, "skippableNewline"]], 5,
   0, -1],
  ["\n", 4],
  [/^[ \t]/, 6,
   2, 11, 6, {"name":"comment","token":"comment"},
   "\n", 6,
   0, 7],
  [2, 17, 8, {"name":"Statement"},
   0, -1],
  [/^[ \t]/, 8,
   2, 11, 8, {"name":"comment","token":"comment"},
   e[38], 8,
   0, 7],
  [/^(?:\'(?:\\.(?:(?!\').)*|.)\'|\"(?:\\.|(?!\").)*\")/, -1,
   "`", 10],
  [[0, /^(?!\`)/, /^[^]/], 10,
   "`", -1],
  [/^\/\*\*(?!\/)/, 12,
   "/*", 16,
   /^\/\/.*/, -1],
  [0, 13,
   2, 53, 12, {"name":"doccomment.braced"},
   0, 14],
  [e[20], 15],
  [2, 61, 14, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 13,
   0, 12],
  [[0, /^(?!\*\/)/, /^[^]/], 16,
   "*/", -1],
  [3, "keyword", e[0], 18,
   3, "keyword", e[1], 18,
   3, "keyword", e[2], 20,
   3, "keyword", e[3], 24,
   3, "keyword", e[4], 28,
   2, 69, -1, {"name":"IfStatement"},
   2, 91, -1, {"name":"SwitchStatement"},
   2, 100, -1, {"name":"ForStatement"},
   3, "keyword", e[5], 30,
   3, "keyword", e[6], 30,
   3, "keyword", e[7], 32,
   3, "keyword", e[8], 34,
   3, "keyword", e[9], 34,
   3, "keyword", e[10], 36,
   3, "keyword", e[11], 37,
   /^[a-zA-Z\¡-\￿__][a-zA-Z\¡-\￿_0-9_]*(?= *\:(?!\=))/, 36,
   2, 110, -1, {"name":"Block"},
   3, "keyword", e[12], 40,
   3, "keyword", e[13], 42,
   3, "keyword", e[14], -1,
   3, "keyword", e[11], 44,
   1, 115, 48],
  [1, 4, 19],
  [1, 129, -1],
  [1, 4, 21],
  [2, 139, -1, {"name":"Set"},
   3, "def", e[15], 22],
  [1, 4, 23],
  [1, 144, -1],
  [1, 4, 25],
  [2, 182, -1, {"name":"Set"},
   ".", 26,
   3, "def", e[15], 26,
   0, 26],
  [1, 4, 27],
  [2, 9, -1, {"name":"string","token":"string"}],
  [1, 4, 29],
  [3, "variable", e[15], -1],
  [1, 4, 31],
  [1, 115, -1],
  [1, 4, 33],
  [1, 187, -1],
  [1, 4, 35],
  [/^(?:[a-zA-Z\¡-\￿__][a-zA-Z\¡-\￿_0-9_]*)?/, -1],
  [1, 4, 38],
  [1, 4, 39],
  [":", -1],
  [1, 187, 36],
  [1, 4, 41],
  [2, 110, -1, {"name":"Block"}],
  [1, 4, 43],
  [e[15], -1],
  [1, 4, 45],
  [2, 17, 46, {"name":"Statement"}],
  [1, 4, 47],
  [":", -1],
  [1, 4, 49],
  [",", 50,
   0, -1],
  [1, 4, 51],
  [1, 115, 52],
  [1, 4, 49],
  ["{", 54],
  [3, "tag", e[17], 55,
   3, "tag", e[18], 56,
   2, 193, 60, {"name":"doccomment.type","token":"type"}],
  [e[16], 55,
   "{", 57,
   0, 56],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 56,
   0, 60],
  [2, 193, 58, {"name":"doccomment.type","token":"type"}],
  ["}", 59],
  [e[16], 59,
   3, "def", e[19], 56,
   0, 56],
  ["}", -1],
  [3, "tag", e[17], 62,
   3, "tag", e[18], 66],
  [e[16], 62,
   "{", 63,
   0, 66],
  [2, 193, 64, {"name":"doccomment.type","token":"type"}],
  ["}", 65],
  [e[16], 65,
   3, "def", e[19], 66,
   0, 66],
  [0, 67,
   2, 53, 66, {"name":"doccomment.braced"},
   0, -1],
  [e[20], 68],
  [0, 67,
   0, 66],
  [3, "keyword", e[21], 70],
  [1, 4, 71],
  [1, 194, 72],
  [1, 4, 73],
  [";", 74,
   0, 76],
  [1, 4, 75],
  [1, 194, 76],
  [1, 4, 77],
  [2, 110, 78, {"name":"Block"}],
  [1, 4, 79],
  [3, "keyword", e[22], 80,
   0, -1],
  [1, 4, 81],
  [3, "keyword", e[21], 82,
   0, 83],
  [1, 4, 84],
  [1, 4, 85],
  [1, 194, 86],
  [2, 110, 87, {"name":"Block"}],
  [1, 4, 88],
  [1, 4, 79],
  [";", 89,
   0, 83],
  [1, 4, 90],
  [1, 194, 83],
  [3, "keyword", e[23], 92],
  [1, 4, 93],
  [1, 194, 94,
   0, 98],
  [1, 4, 95],
  [";", 96,
   0, 98],
  [1, 4, 97],
  [1, 194, 98,
   0, 98],
  [1, 4, 99],
  [2, 110, -1, {"name":"Block"}],
  [3, "keyword", e[24], 101],
  [1, 4, 102],
  [1, 202, 103,
   1, 194, 105],
  [1, 4, 104],
  [1, 194, 105],
  [1, 4, 106],
  [";", 107,
   2, 110, -1, {"name":"Block"}],
  [1, 4, 108],
  [1, 194, 109,
   0, 109],
  [1, 4, 106],
  ["{", 111],
  [1, 4, 112],
  [1, 6, 113],
  [1, 4, 114],
  ["}", -1],
  [1, 202, 116,
   0, 118],
  [1, 4, 117],
  [1, 115, -1],
  [3, "operator", e[25], 119,
   3, "keyword", e[26], 119,
   [5, 209], 120,
   1, 215, 121],
  [1, 4, 118],
  [3, "type", e[15], 122],
  [1, 4, 123],
  [1, 4, 124],
  [1, 224, 125,
   2, 233, 125, {"name":"LiteralBody"},
   0, -1],
  [".", 126,
   e[32], 121],
  [1, 4, 123],
  [1, 4, 127],
  [3, "property", e[15], 128],
  [1, 4, 124],
  [2, 238, -1, {"name":"Set"},
   3, "def", e[15], 130],
  [1, 4, 131],
  [",", 132,
   1, 144, 133,
   0, 133],
  [1, 4, 134],
  [1, 4, 135],
  [3, "def", e[15], 136],
  [3, "operator", "=", 137,
   0, -1],
  [1, 4, 131],
  [1, 4, 138],
  [1, 187, -1],
  ["(", 140],
  [1, 4, 141],
  [1, 243, 142],
  [1, 4, 143],
  [")", -1],
  ["[", 145,
   3, "keyword", e[27], 151,
   3, "keyword", e[28], 153,
   "*", 155,
   3, "keyword", e[29], 157,
   3, "keyword", e[30], 161,
   3, "operator", "<-", 169,
   3, "keyword", e[31], 170,
   "(", 173,
   3, "type", e[15], 177],
  [1, 4, 146],
  [1, 115, 147,
   0, 147],
  [1, 4, 148],
  ["]", 149],
  [1, 4, 150],
  [1, 144, -1],
  [1, 4, 152],
  [2, 248, -1, {"name":"StructBody"}],
  [1, 4, 154],
  [2, 253, -1, {"name":"InterfaceBody"}],
  [1, 4, 156],
  [1, 144, -1],
  [1, 4, 158],
  [2, 258, 159, {"name":"ParamList"}],
  [1, 4, 160],
  [2, 258, -1, {"name":"ParamList"},
   1, 144, -1,
   0, -1],
  [1, 4, 162],
  ["[", 163],
  [1, 4, 164],
  [1, 144, 165],
  [1, 4, 166],
  ["]", 167],
  [1, 4, 168],
  [1, 144, -1],
  [1, 4, 171],
  [1, 4, 172],
  [1, 144, -1],
  [3, "operator", "<-", 169,
   0, 169],
  [1, 4, 174],
  [1, 144, 175],
  [1, 4, 176],
  [")", -1],
  [1, 4, 178],
  [".", 179,
   0, -1],
  [1, 4, 180],
  [3, "property", e[15], 181],
  [1, 4, 178],
  ["(", 183],
  [1, 4, 184],
  [1, 263, 185],
  [1, 4, 186],
  [")", -1],
  [1, 115, 188,
   0, -1],
  [1, 4, 189],
  [",", 190,
   0, -1],
  [1, 4, 191],
  [1, 115, 192,
   0, 192],
  [1, 4, 189],
  [1, 268, -1],
  [1, 202, 195,
   0, 197],
  [1, 4, 196],
  [1, 115, -1],
  [3, "operator", e[25], 198,
   3, "keyword", e[26], 198,
   1, 215, 199],
  [1, 4, 197],
  [1, 4, 200],
  [1, 272, 201,
   0, -1],
  [1, 4, 200],
  [[5, 281], 203],
  [3, "def", e[15], 204],
  [1, 4, 205],
  [",", 206,
   3, "operator", ":=", -1],
  [1, 4, 207],
  [3, "def", e[15], 208],
  [1, 4, 205],
  [3, "type", e[15], 210],
  [1, 4, 211],
  [".", 212,
   e[32], -1],
  [1, 4, 213],
  [3, "property", e[15], 214],
  [1, 4, 211],
  [3, "number", e[33], -1,
   2, 9, -1, {"name":"string","token":"string"},
   3, "atom", e[34], -1,
   3, "keyword", e[29], 216,
   3, "variable callee", e[37], -1,
   3, "variable", e[15], -1,
   2, 287, 220, {"name":"Bracketed"},
   "*", 222,
   2, 295, -1, {"name":"ParenExpr"}],
  [1, 4, 217],
  [3, "def", e[15], 218,
   0, 218],
  [1, 4, 219],
  [2, 300, -1, {"name":"FunctionDef"}],
  [1, 4, 221],
  [1, 144, -1,
   0, -1],
  [1, 4, 223],
  [1, 144, -1],
  [".(", 225,
   ".", 229,
   3, "operator", e[35], -1,
   3, "operator", e[36], 231,
   2, 305, -1, {"name":"ArgList"},
   2, 287, -1, {"name":"Bracketed"}],
  [1, 4, 226],
  [1, 144, 227],
  [1, 4, 228],
  [")", -1],
  [1, 4, 230],
  [3, "property callee", e[37], -1,
   3, "property", e[15], -1],
  [1, 4, 232],
  [1, 115, -1],
  ["{", 234],
  [1, 4, 235],
  [1, 312, 236],
  [1, 4, 237],
  ["}", -1],
  ["(", 239],
  [1, 4, 240],
  [1, 326, 241],
  [1, 4, 242],
  [")", -1],
  [/^[ \t]/, 243,
   2, 11, 243, {"name":"comment","token":"comment"},
   "\n", 243,
   0, 244],
  [3, "def", e[15], 245,
   0, -1],
  [1, 4, 246],
  [1, 144, 247],
  [/^[ \t]/, 247,
   2, 11, 247, {"name":"comment","token":"comment"},
   e[38], 247,
   0, 244],
  ["{", 249],
  [1, 4, 250],
  [1, 338, 251],
  [1, 4, 252],
  ["}", -1],
  ["{", 254],
  [1, 4, 255],
  [1, 350, 256],
  [1, 4, 257],
  ["}", -1],
  ["(", 259],
  [1, 4, 260],
  [1, 355, 261],
  [1, 4, 262],
  [")", -1],
  [/^[ \t]/, 263,
   2, 11, 263, {"name":"comment","token":"comment"},
   "\n", 263,
   0, 264],
  [".", 265,
   3, "def", e[15], 265,
   0, 265,
   0, -1],
  [1, 4, 266],
  [2, 9, 267, {"name":"string","token":"string"}],
  [/^[ \t]/, 267,
   2, 11, 267, {"name":"comment","token":"comment"},
   e[38], 267,
   0, 264],
  [/^(?!\}|\*\/)/, 269,
   0, -1],
  ["{", 270,
   /^[^]/, 268],
  [1, 268, 271],
  [/^\}?/, 268],
  [".(", 273,
   ".", 277,
   3, "operator", e[35], -1,
   3, "operator", e[36], 279,
   2, 305, -1, {"name":"ArgList"},
   2, 287, -1, {"name":"Bracketed"}],
  [1, 4, 274],
  [1, 144, 275],
  [1, 4, 276],
  [")", -1],
  [1, 4, 278],
  [3, "property callee", e[37], -1,
   3, "property", e[15], -1],
  [1, 4, 280],
  [1, 194, -1],
  [e[15], 282],
  [1, 4, 283],
  [",", 284,
   ":=", -1],
  [1, 4, 285],
  [e[15], 286],
  [1, 4, 283],
  ["[", 288],
  [1, 4, 289],
  [1, 187, 290],
  [1, 4, 291],
  [":", 292,
   "]", -1],
  [1, 4, 293],
  [1, 115, 294,
   0, 294],
  [1, 4, 291],
  ["(", 296],
  [1, 4, 297],
  [1, 187, 298],
  [1, 4, 299],
  [")", -1],
  [2, 258, 301, {"name":"ParamList"}],
  [1, 4, 302],
  [2, 258, 303, {"name":"ParamList"},
   1, 144, 303,
   0, 303],
  [1, 4, 304],
  [2, 110, -1, {"name":"Block"},
   0, -1],
  ["(", 306],
  [1, 4, 307],
  [1, 187, 308],
  [1, 4, 309],
  [e[40], 310],
  [1, 4, 311],
  [")", -1],
  [3, "property", e[39], 313,
   1, 115, 313,
   0, -1],
  [1, 4, 314],
  [":", 315,
   0, 316],
  [1, 4, 317],
  [1, 4, 318],
  [1, 115, 316],
  [",", 319,
   0, -1],
  [1, 4, 320],
  [3, "property", e[39], 321,
   1, 115, 321,
   0, 322],
  [1, 4, 323],
  [1, 4, 318],
  [":", 324,
   0, 322],
  [1, 4, 325],
  [1, 115, 322],
  [/^[ \t]/, 326,
   2, 11, 326, {"name":"comment","token":"comment"},
   "\n", 326,
   0, 327],
  [3, "def", e[15], 328,
   0, -1],
  [1, 4, 329],
  [",", 330,
   1, 144, 331,
   0, 331],
  [1, 4, 332],
  [1, 4, 333],
  [3, "def", e[15], 334],
  [3, "operator", "=", 335,
   0, 336],
  [1, 4, 329],
  [1, 4, 337],
  [/^[ \t]/, 336,
   2, 11, 336, {"name":"comment","token":"comment"},
   e[38], 336,
   0, 327],
  [1, 187, 336],
  [/^[ \t]/, 338,
   2, 11, 338, {"name":"comment","token":"comment"},
   "\n", 338,
   0, 339],
  [3, "property", e[15], 340,
   "*", 341,
   0, -1],
  [1, 4, 342],
  [1, 4, 343],
  [",", 344,
   0, 341],
  [1, 144, 345],
  [1, 4, 346],
  [1, 4, 347],
  [3, "property", e[15], 348],
  [2, 9, 349, {"name":"string","token":"string"},
   0, 349],
  [1, 4, 342],
  [/^[ \t]/, 349,
   2, 11, 349, {"name":"comment","token":"comment"},
   e[38], 349,
   0, 339],
  [/^[ \t]/, 350,
   2, 11, 350, {"name":"comment","token":"comment"},
   "\n", 350,
   0, 351],
  [3, "property", /^[a-zA-Z\¡-\￿__][a-zA-Z\¡-\￿_0-9_]*(?= \()/, 352,
   1, 144, 353,
   0, -1],
  [1, 4, 354],
  [/^[ \t]/, 353,
   2, 11, 353, {"name":"comment","token":"comment"},
   e[38], 353,
   0, 351],
  [2, 258, 353, {"name":"ParamList"}],
  [3, "def", e[15], 356,
   0, 357,
   0, -1],
  [1, 4, 358],
  [1, 4, 359],
  [",", 360,
   0, 357],
  [e[40], 361],
  [1, 4, 362],
  [1, 4, 363],
  [3, "def", e[15], 364],
  [1, 144, 365,
   0, 365],
  [1, 4, 358],
  [1, 4, 366],
  [",", 367,
   0, -1],
  [1, 4, 368],
  [3, "def", e[15], 369,
   0, 370,
   0, 371],
  [1, 4, 372],
  [1, 4, 373],
  [1, 4, 366],
  [",", 374,
   0, 370],
  [e[40], 375],
  [1, 4, 376],
  [1, 4, 377],
  [3, "def", e[15], 378],
  [1, 144, 371,
   0, 371],
  [1, 4, 372]
];
var start = 0;
var token = 3;


var grammar = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function storeLocal(context, name, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1)
      { return (cx.locals || (cx.locals = [])).push(name) } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}

var varRE = /(^|\s)variable($|\s)/;

function markLocals(type, scopes, stream, state) {
  if (type == "def")
    { storeLocal(state.context, stream.current(), scopes); }
  else if (varRE.test(type) && !/qualified/.test(type) &&
           isLocal(state.context, stream.current()))
    { type = type.replace(varRE, "$1variable-2$2"); }
  return type
}

var scopes = ["Block", "FunctionDef", "IfStatement", "ForStatement", "SwitchStatement"];
var allowNewline = ["LiteralBody", "Bracketed", "ArgList", "ParamList", "ParenExpr"];

function skippableNewline(line, pos, cx) {
  if (cx && allowNewline.indexOf(cx.name) > -1) { return true }
  var match = /(?:(\w+)|[\d"'\)\]\}:]|\+\+|--)\s*(?:\/\/.*)?$/.exec(line.slice(0, pos));
  return !match ||
    (match[1] ? /^(?:func|interface|select|case|defer|go|map|struct|chan|else|goto|package|switch|const|if|range|type|for|import|var)$/.test(match[1]) : false)
}

var bracketed = {
  Block: "}", LiteralBody: "}", StructBody: "}", InterfaceBody: "}",
  Bracketed: "]",
  Set: ")", ParamList: ")", ArgList: ")", ParenExpr: ")"
};

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    var flat = closed || curLine == cx.startLine;
    if (cx.name == "Block") {
      curLine = cx.parent.startLine;
      if (/^(case|default)\b/.test(textAfter)) { flat = true; }
    } else {
      curLine = cx.startLine;
    }
    return findIndent(cx.parent, closed ? null : textAfter, curLine, config) + (flat ? 0 : config.tabSize)
  } else if (cx.name == "Statement") {
    return CodeMirror.countColumn(cx.startLine, null, config.tabSize) +
      (curLine == cx.startLine ? 0 : config.tabSize)
  } else {
    return findIndent(cx.parent, textAfter, curLine, config)
  }
}

var GoMode = (function (superclass) {
  function GoMode(conf) {
    superclass.call(this, grammar, {
      predicates: {skippableNewline: skippableNewline}
    });
    this.conf = conf;
  }

  if ( superclass ) GoMode.__proto__ = superclass;
  GoMode.prototype = Object.create( superclass && superclass.prototype );
  GoMode.prototype.constructor = GoMode;

  GoMode.prototype.token = function token$$1 (stream, state) {
    return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
  };

  GoMode.prototype.indent = function indent (state, textAfter, line) {
    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, this.conf)
  };

  return GoMode;
}(CodeMirror.GrammarMode));

GoMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
GoMode.prototype.closeBrackets = "()[]{}''\"\"``";
GoMode.prototype.blockCommentStart = "/*";
GoMode.prototype.blockCommentEnd = "*/";
GoMode.prototype.blockCommentContinue = " * ";
GoMode.prototype.lineComment = "//";
GoMode.prototype.fold = "brace";

CodeMirror.defineMode("google-go", function (conf) { return new GoMode(conf); });

})));
