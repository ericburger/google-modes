(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z][A-Z0-9_]+(?![a-zA-Z¡-￿_0-9]))/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)(?:[Ll]+|[Uu][lL]*|F|f)?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^(?:final|explicit)(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr|mutable|thread_local)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^new(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\-\>|(?!\.\.)\.)/, [1, "\n", "\t", " "], /^[a-zA-Z0-9¡-￿_\.]+/, /^\@[a-zA-Z0-9¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z0-9¡-￿_])/, /^[^]/], /^(?:\.\.\.)?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?:\(\)|\[\])/, /^(?:\[\])?/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&|\.\.\.)/];
  var nodes = [
    [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
     0, 2],
    [/^[^]/, 0],
    [1, 9, 3],
    [2, 12, 4, {"name":"Statement"}],
    [0, 2,
     0, 1],
    [3, "keyword", e[27], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[42], -1,
     3, "keyword", e[5], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[55], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "type", e[32], -1,
     3, "type", e[33], -1,
     3, "keyword", e[31], -1,
     3, "atom", e[54], -1,
     3, "meta", e[16], -1,
     1, 107, -1,
     3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     3, "operator", e[43], -1,
     3, "operator", e[35], -1,
     2, 120, -1, {"name":"comment","token":"comment"},
     3, "keyword", e[1], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[52], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[39], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[40], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[25], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[50], -1,
     3, "keyword", e[51], -1,
     3, "keyword", e[34], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[19], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[53], -1,
     3, "keyword", e[41], -1,
     3, "keyword", e[23], -1,
     /^[^]/, -1],
    ["#", 7],
    [2, 120, 7, {"name":"comment","token":"comment"},
     "\\", 8,
     /^./, 7,
     0, -1],
    [/^[^]/, 7],
    [/^[ \t]/, 9,
     "\n", 10,
     2, 120, 9, {"name":"comment","token":"comment"},
     0, -1],
    [/^[ \t]*/, 11],
    [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
     0, 9],
    [1, 125, -1,
     1, 142, -1,
     3, "keyword", e[0], 13,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 25,
     3, "keyword", e[3], 29,
     3, "keyword", e[4], 33,
     1, 157, -1,
     2, 170, -1, {"name":"Template"},
     [7, "constructorAhead"], 39,
     1, 179, -1,
     3, "keyword", e[5], 42,
     3, "keyword", e[6], 43,
     3, "keyword", e[7], 44,
     3, "keyword", e[8], 68,
     3, "keyword", e[9], 73,
     2, 188, -1, {"name":"Block"},
     3, "keyword", e[10], 77,
     3, "keyword", e[11], 79,
     3, "keyword", e[12], 83,
     3, "keyword", e[13], 87,
     3, "keyword", e[14], 93,
     3, "keyword", e[15], 94,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 192]], 93,
     3, "meta", e[16], 97,
     2, 193, 103, {"name":"DeclType"},
     ";", -1,
     1, 210, 105],
    [1, 9, 14],
    [2, 215, 15, {"name":"ArgList"}],
    [1, 9, 16],
    [";", -1],
    [1, 9, 18],
    [1, 220, 19,
     0, 19],
    [1, 9, 20],
    [3, "operator", "=", 21,
     2, 225, -1, {"name":"NamespaceBlock"}],
    [1, 9, 22],
    [1, 107, 23],
    [1, 9, 24],
    [";", -1],
    [1, 9, 26],
    [1, 210, 27],
    [1, 9, 28],
    [";", -1],
    [1, 9, 30],
    [2, 188, 31, {"name":"Block"}],
    [1, 9, 32],
    [2, 229, -1, {"name":"Catch"}],
    [1, 9, 34],
    ["{", 35],
    [1, 9, 36],
    [2, 114, 37, {"name":"string","token":"string"}],
    [1, 9, 38],
    ["}", -1],
    [1, 220, 40],
    [1, 9, 41],
    [2, 241, -1, {"name":"FunctionDef"}],
    [1, 9, 45],
    [1, 9, 46],
    [1, 9, 47],
    ["(", 48],
    [2, 274, 49, {"name":"CondExpr"}],
    [2, 12, 50, {"name":"Statement"}],
    [1, 9, 51],
    [1, 9, 52],
    [1, 9, 53],
    [2, 12, 54, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[6], 55],
    [1, 9, 56],
    [1, 9, 57],
    [1, 210, 58,
     0, 58],
    [2, 274, 59, {"name":"CondExpr"}],
    [1, 9, 60],
    [1, 9, 61],
    [";", 62],
    [";", -1],
    [1, 9, 63],
    [1, 210, 64,
     0, 64],
    [1, 9, 65],
    [")", 66],
    [1, 9, 67],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 69],
    [2, 274, 70, {"name":"CondExpr"}],
    [1, 9, 71],
    [2, 12, 72, {"name":"Statement"}],
    [2, 282, -1, {"name":"Alternative"}],
    [1, 9, 74],
    [2, 274, 75, {"name":"CondExpr"}],
    [1, 9, 76],
    [2, 188, -1, {"name":"Block"}],
    [1, 9, 78],
    [";", -1],
    [1, 9, 80],
    [e[22], 81],
    [1, 9, 82],
    [";", -1],
    [1, 9, 84],
    [1, 210, 85,
     0, 85],
    [1, 9, 86],
    [";", -1],
    [1, 9, 88],
    [1, 220, 89,
     0, 89],
    [1, 9, 90],
    [2, 286, 91, {"name":"BlockOf"},
     0, 91],
    [1, 9, 92],
    [";", -1],
    [1, 9, 95],
    [1, 9, 96],
    [":", -1],
    [1, 210, 93],
    [1, 9, 98],
    [2, 296, 99, {"name":"ParenTokens"},
     0, 99],
    [1, 9, 100],
    [2, 188, -1, {"name":"Block"},
     0, 101],
    [1, 300, 102,
     0, -1],
    [1, 9, 101],
    [1, 9, 104],
    [1, 323, -1],
    [1, 9, 106],
    [";", -1],
    [0, 108,
     3, "type", e[17], -1,
     2, 338, 113, {"name":"unqualifiedVariableName","token":"variable"}],
    [1, 339, 109],
    [0, 108,
     3, "type qualified", e[17], 110,
     2, 346, 110, {"name":"qualifiedVariableName","token":"qualified"}],
    [2, 347, 111, {"name":"TemplateArgs"},
     0, -1],
    [/^(?=\:\:)/, 112,
     0, -1],
    [1, 107, -1],
    [2, 347, -1, {"name":"TemplateArgs"},
     0, -1],
    [/^R\"(?:(?!\().)*\(/, 115,
     /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 116],
    [[0, [7, "rawStringContinues"], /^[^]/], 115,
     "\"", -1],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 117],
    ["\\", 118,
     [0, /^(?!\")/, /^[^]/], 117,
     "\"", -1],
    [/^[^]/, 117],
    [3, "keyword", e[18], -1,
     /^(?:\+\+?|\-\-?|\!|\~|\&|\*)/, -1],
    [/^\/\*\*(?!\/)/, 121,
     "/*", 124,
     /^\/\/.*/, -1],
    [e[48], 122,
     0, 123],
    [0, 121,
     0, 121],
    [2, 352, 123, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 124,
     "*/", -1],
    [3, "keyword", e[19], 127,
     [0, [5, 363], "["], 128],
    [0, 125,
     0, -1],
    [1, 9, 129],
    [1, 9, 130],
    ["(", 131],
    ["[", 132],
    [1, 9, 133],
    [1, 9, 134],
    [3, "number", e[20], 135],
    [1, 367, 136],
    [1, 9, 137],
    [1, 9, 138],
    [")", 139],
    ["]", 140],
    [1, 9, 126],
    [1, 9, 141],
    ["]", 139],
    [3, "keyword", e[21], 143,
     3, "keyword", e[13], 143],
    [1, 9, 144],
    [1, 125, 145,
     0, 145],
    [1, 9, 146],
    [0, 147,
     3, "type def", e[22], 150],
    [1, 389, 148],
    [1, 9, 149],
    [0, 147,
     3, "type qualified", e[22], 150],
    [1, 9, 151],
    [3, "keyword", e[23], 152,
     ":", 153,
     0, 155],
    [1, 9, 151],
    [1, 9, 154],
    [1, 396, 155],
    [1, 9, 156],
    [";", -1,
     2, 410, -1, {"name":"ClassBody"}],
    [3, "keyword", e[24], 158],
    [1, 9, 159],
    [3, "keyword", e[18], 160,
     3, "keyword", e[1], 161,
     0, 161],
    [1, 9, 162],
    [1, 9, 163],
    [1, 414, 164],
    [1, 107, 164],
    [1, 9, 165],
    [3, "operator", "=", 166,
     0, 168],
    [1, 9, 167],
    [1, 414, 168],
    [1, 9, 169],
    [";", -1],
    [3, "keyword", e[25], 171,
     0, 171],
    [1, 9, 172],
    [3, "keyword", e[26], 173],
    [1, 9, 174],
    [2, 427, 175, {"name":"TemplateParams"},
     0, 175],
    [1, 9, 176],
    [1, 9, 177],
    [1, 9, 178],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[27], 180],
    [1, 9, 181],
    [3, "keyword", e[21], 182,
     3, "keyword", /^struct(?![a-zA-Z¡-￿_0-9])/, 182,
     0, 182],
    [1, 9, 183],
    [1, 125, 184,
     0, 184],
    [1, 9, 185],
    [3, "type def", e[22], 186,
     0, 186],
    [1, 9, 187],
    [2, 432, -1, {"name":"BlockOf"},
     0, -1],
    ["{", 189],
    [1, 9, 190],
    [2, 12, 191, {"name":"Statement"},
     "}", -1],
    [1, 9, 190],
    [e[45], 192,
     /^\:(?!\:)/, -1],
    [0, 194,
     0, 195,
     3, "keyword", e[28], 206,
     [5, 450], 207],
    [3, "keyword", e[29], 196,
     3, "keyword", e[30], 196,
     3, "keyword", e[31], 196],
    [3, "type", e[32], 197],
    [1, 9, 198],
    [1, 9, 199],
    [0, 194,
     3, "keyword", e[28], 200,
     0, 201,
     1, 455, 200],
    [0, 195,
     3, "type", e[33], 200,
     0, 200],
    [1, 9, 202],
    [3, "type", e[32], 203],
    [1, 460, 204,
     0, -1],
    [0, 201,
     1, 9, 205,
     0, 200],
    [1, 9, 202],
    [3, "type", e[33], 200],
    [1, 9, 208],
    [1, 455, 206],
    [1, 460, 209,
     0, -1],
    [1, 9, 208],
    [1, 467, 211,
     1, 484, 212],
    [1, 9, 210],
    [1, 9, 213],
    [1, 300, 214,
     0, -1],
    [1, 9, 213],
    ["(", 216],
    [1, 9, 217],
    [1, 512, 218],
    [1, 9, 219],
    [")", -1],
    [3, "keyword", e[34], 221,
     0, 223,
     3, "def", e[38], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     e[57], -1,
     3, "keyword", e[36], 222,
     3, "keyword", e[37], 222],
    [e[58], -1],
    [1, 522, 224],
    [0, 223,
     3, "qualified def", e[38], -1],
    ["{", 226],
    [1, 9, 227],
    [2, 12, 228, {"name":"Statement"},
     "}", -1],
    [1, 9, 227],
    [3, "keyword", e[39], 230,
     0, -1],
    [1, 9, 231],
    ["(", 232],
    [1, 9, 233],
    [1, 414, 234],
    [1, 9, 235],
    [1, 529, 236,
     0, 236],
    [1, 9, 237],
    [")", 238],
    [1, 9, 239],
    [2, 188, 240, {"name":"Block"}],
    [1, 9, 229],
    [2, 541, 242, {"name":"ParamList"}],
    [1, 9, 243],
    [3, "keyword", e[31], 244,
     /^(?:\&\&|\&)?/, 245],
    [1, 9, 243],
    [1, 9, 246],
    [3, "keyword", e[40], 247,
     3, "keyword", e[2], 248,
     0, 259],
    [1, 9, 249],
    [1, 9, 250],
    ["(", 251,
     0, 259],
    ["(", 252],
    [1, 9, 253],
    [1, 9, 254],
    [1, 210, 255],
    [1, 546, 256],
    [1, 9, 257],
    [1, 9, 258],
    [")", 259],
    [")", 259],
    [1, 9, 260],
    [1, 125, 261,
     0, 261],
    [1, 9, 262],
    ["->", 263,
     0, 265],
    [1, 9, 264],
    [1, 414, 265],
    [1, 9, 266],
    [3, "keyword", e[41], 267,
     2, 552, 268, {"name":"InitializerList"},
     0, 268],
    [1, 9, 266],
    [1, 9, 269],
    [";", -1,
     2, 188, -1, {"name":"Block"},
     3, "operator", "=", 270],
    [1, 9, 271],
    [3, "keyword", e[14], 272,
     3, "keyword", e[37], 272],
    [1, 9, 273],
    [";", -1],
    ["(", 275],
    [1, 9, 276],
    [[6, 555], 277,
     1, 210, 280,
     0, 280],
    [2, 193, 278, {"name":"DeclType"}],
    [1, 9, 279],
    [1, 323, 280],
    [1, 9, 281],
    [")", -1],
    [1, 9, 283],
    [3, "keyword", e[42], 284,
     0, -1],
    [1, 9, 285],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 287],
    [1, 9, 288],
    [1, 558, 289,
     0, 294],
    [1, 9, 290],
    [";", 291,
     0, 294],
    [1, 9, 292],
    [1, 558, 293,
     0, 293],
    [1, 9, 290],
    [1, 9, 295],
    ["}", -1],
    ["(", 297],
    [1, 9, 298],
    [1, 569, 299,
     ")", -1],
    [1, 9, 298],
    [2, 574, -1, {"name":"BlockOf"},
     2, 215, 301, {"name":"ArgList"},
     e[44], 303,
     2, 215, -1, {"name":"ArgList"},
     "[", 309,
     3, "operator", e[43], -1,
     e[44], 313,
     3, "operator", e[35], 315,
     "?", 317],
    [1, 9, 302],
    [2, 188, -1, {"name":"Block"},
     0, -1],
    [1, 9, 304],
    [/^\*?/, 305],
    [1, 9, 306],
    [2, 584, 307, {"name":"fieldName","token":"property"}],
    [1, 9, 308],
    [2, 347, -1, {"name":"TemplateArgs"},
     0, -1],
    [1, 9, 310],
    [1, 210, 311],
    [1, 9, 312],
    ["]", -1],
    [1, 9, 314],
    [2, 584, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 316],
    [1, 210, -1,
     0, -1],
    [1, 9, 318],
    [1, 210, 319],
    [1, 9, 320],
    [":", 321],
    [1, 9, 322],
    [1, 210, -1],
    [1, 529, 324],
    [1, 9, 325],
    [3, "meta", e[16], 326,
     [5, 585], 327,
     1, 589, 328,
     0, 328],
    [1, 9, 329],
    [2, 241, -1, {"name":"FunctionDef"}],
    [1, 9, 330],
    [2, 296, 331, {"name":"ParenTokens"},
     0, 331],
    [",", 332,
     ";", -1],
    [1, 9, 333],
    [1, 9, 334],
    [/^\;?/, -1],
    [1, 220, 335],
    [1, 9, 336],
    [1, 589, 337,
     0, 337],
    [1, 9, 330],
    [3, "callee", e[56], -1,
     e[22], -1],
    ["::", 344,
     [5, 592], 340],
    [3, "variable qualifier", e[22], 341],
    [2, 347, 342, {"name":"TemplateArgs"},
     0, 342],
    [1, 9, 343],
    ["::", 344],
    [1, 9, 345],
    [/^\*?/, -1],
    [2, 338, -1, {"name":"unqualifiedVariableName","token":"variable"}],
    ["<", 348],
    [1, 9, 349],
    [1, 596, 350],
    [1, 9, 351],
    [">", -1],
    [3, "tag", /^\@param(?![a-zA-Z0-9¡-￿_])/, 353,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z0-9¡-￿_])/, 354,
     3, "tag", e[47], 361,
     "{", 355],
    [e[45], 353,
     3, "def", e[46], 361,
     "<", 356,
     0, 361],
    [e[45], 354,
     3, "type", e[46], 361,
     0, 361],
    [3, "tag", e[47], 357],
    [3, "type def", /^[a-zA-Z0-9¡-￿_]+/, 358],
    [/^[\t ]*/, 359],
    [">", 361],
    [1, 628, 360],
    ["}", 361],
    [e[48], 362,
     0, -1],
    [0, 361,
     0, 361],
    ["[", 364],
    [1, 9, 365],
    [" ", 366,
     "[", -1],
    [1, 9, 365],
    [1, 632, 368,
     3, "meta", e[22], 369,
     0, -1],
    [1, 9, 367],
    [1, 9, 370],
    ["(", 371,
     0, 372],
    [1, 9, 373],
    [1, 9, 374],
    [1, 639, 375,
     ")", 372],
    [e[49], 376],
    [1, 9, 373],
    [1, 9, 377],
    [",", 378,
     0, -1],
    [1, 9, 379],
    [1, 632, 380,
     3, "meta", e[22], 381],
    [1, 9, 379],
    [1, 9, 382],
    ["(", 383,
     0, 384],
    [1, 9, 385],
    [1, 9, 386],
    [1, 639, 387,
     ")", 384],
    [e[49], 388],
    [1, 9, 385],
    [1, 9, 377],
    ["::", 394,
     [5, 649], 390],
    [3, "type qualifier", e[22], 391],
    [2, 347, 392, {"name":"TemplateArgs"},
     0, 392],
    [1, 9, 393],
    ["::", 394],
    [1, 9, 395],
    [/^\*?/, -1],
    [3, "keyword", e[50], 397,
     0, 397,
     0, -1],
    [1, 9, 398],
    [3, "keyword", e[51], 399,
     0, 399],
    [1, 9, 400],
    [1, 414, 401],
    [1, 9, 402],
    [",", 403,
     0, -1],
    [1, 9, 404],
    [3, "keyword", e[50], 405,
     0, 405],
    [1, 9, 406],
    [3, "keyword", e[51], 407,
     0, 407],
    [1, 9, 408],
    [1, 414, 409],
    [1, 9, 402],
    ["{", 411],
    [1, 9, 412],
    [2, 653, 413, {"name":"ClassItem"},
     "}", -1],
    [1, 9, 412],
    [3, "keyword", e[18], 415,
     0, 417],
    [1, 9, 416],
    [1, 414, -1],
    [3, "keyword", e[29], 418,
     3, "keyword", e[30], 418,
     3, "keyword", e[31], 418,
     3, "keyword", e[13], 419,
     0, 419],
    [1, 9, 417],
    [1, 9, 420],
    [3, "keyword", e[28], 421,
     0, 422,
     1, 455, 421],
    [1, 9, 423],
    [3, "type", e[32], 424],
    [1, 460, 425,
     0, -1],
    [0, 422,
     1, 9, 426,
     0, 421],
    [1, 9, 423],
    [3, "type", e[33], 421],
    ["<", 428],
    [1, 9, 429],
    [1, 670, 430],
    [1, 9, 431],
    [">", -1],
    ["{", 433],
    [1, 9, 434],
    [1, 696, 435,
     0, 448],
    [1, 9, 436],
    [3, "operator", "=", 437,
     0, 438],
    [1, 9, 439],
    [1, 9, 440],
    [1, 210, 438],
    [",", 441,
     0, 448],
    [1, 9, 442],
    [1, 696, 443,
     0, 444],
    [1, 9, 445],
    [1, 9, 440],
    [3, "operator", "=", 446,
     0, 444],
    [1, 9, 447],
    [1, 210, 444],
    [1, 9, 449],
    ["}", -1],
    [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 451],
    [1, 455, 452],
    [1, 9, 453],
    [1, 460, 454,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 453],
    [3, "keyword", e[18], 456,
     0, 457],
    [1, 9, 457],
    [0, 458,
     3, "type", e[22], -1],
    [1, 389, 459],
    [0, 458,
     3, "type qualified", e[22], -1],
    [2, 347, -1, {"name":"TemplateArgs"},
     "::", 461,
     1, 125, -1,
     "[", 463,
     /^[\*\&]/, -1,
     3, "keyword", e[31], -1],
    [1, 9, 462],
    [3, "type qualified", e[22], -1],
    [1, 9, 464],
    [1, 210, 465,
     0, 465],
    [1, 9, 466],
    ["]", -1],
    [3, "keyword", e[37], 468,
     3, "keyword", e[36], 472,
     2, 119, -1, {"name":"prefixOp","token":"operator"}],
    [1, 9, 469],
    ["[", 470,
     0, -1],
    [1, 9, 471],
    ["]", -1],
    [1, 9, 473],
    ["[", 474,
     0, 475],
    [1, 9, 476],
    [1, 9, 477],
    ["]", 475],
    ["(", 478,
     0, 479],
    [1, 9, 480],
    [1, 9, 481],
    [1, 210, 482],
    [1, 125, -1,
     0, -1],
    [1, 9, 483],
    [")", 479],
    [3, "keyword", e[52], -1,
     2, 699, -1, {"name":"Lambda"},
     3, "keyword", e[53], 485,
     2, 707, 497, {"name":"ParenExpr"},
     3, "atom", e[54], -1,
     3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     2, 574, -1, {"name":"BlockOf"},
     3, "keyword", e[55], 500,
     1, 107, -1],
    [1, 9, 486],
    ["<", 487],
    [1, 9, 488],
    [1, 414, 489],
    [1, 9, 490],
    [">", 491],
    [1, 9, 492],
    ["(", 493],
    [1, 9, 494],
    [1, 210, 495],
    [1, 9, 496],
    [")", -1],
    [1, 9, 498],
    [/^(?![\[\(\-\+])/, 499,
     0, -1],
    [1, 210, -1],
    [1, 9, 501],
    ["(", 502,
     e[49], 503],
    [1, 9, 504],
    [1, 9, 505],
    [1, 414, 506],
    [1, 210, 507],
    [1, 9, 508],
    [1, 9, 509],
    [")", 507],
    [3, "meta", e[16], 510],
    [1, 9, 511],
    [2, 296, -1, {"name":"ParenTokens"},
     0, -1],
    [1, 210, 513,
     0, -1],
    [1, 9, 514],
    [e[49], 515],
    [1, 9, 516],
    [",", 517,
     0, -1],
    [1, 9, 518],
    [1, 210, 519],
    [1, 9, 520],
    [e[49], 521],
    [1, 9, 516],
    ["::", 527,
     [5, 712], 523],
    [3, "qualifier def", e[22], 524],
    [2, 347, 525, {"name":"TemplateArgs"},
     0, 525],
    [1, 9, 526],
    ["::", 527],
    [1, 9, 528],
    [/^\*?/, -1],
    [0, 530,
     "(", 537],
    [e[61], 531,
     1, 220, 532],
    [1, 9, 530],
    [1, 9, 533],
    ["[", 534,
     0, -1],
    [1, 9, 535],
    ["]", 536],
    [1, 9, 533],
    [1, 9, 538],
    [1, 529, 539],
    [1, 9, 540],
    [")", -1],
    ["(", 542],
    [1, 9, 543],
    [1, 716, 544],
    [1, 9, 545],
    [")", -1],
    [1, 414, 547,
     0, -1],
    [1, 9, 548],
    [",", 549,
     0, -1],
    [1, 9, 550],
    [1, 414, 551],
    [1, 9, 548],
    [":", 553],
    [1, 9, 554],
    [1, 738, -1],
    [e[22], 556],
    [1, 9, 557],
    ["&&", -1],
    [1, 414, 559],
    [1, 9, 560],
    [2, 584, 561, {"name":"fieldName","token":"property"},
     0, 561],
    [1, 9, 562],
    [":", 563,
     "[", 564,
     0, -1],
    [1, 9, 565],
    [1, 9, 566],
    [3, "number", e[20], -1],
    [1, 210, 567,
     0, 567],
    [1, 9, 568],
    ["]", -1],
    [2, 296, -1, {"name":"ParenTokens"},
     2, 744, -1, {"name":"BracketTokens"},
     2, 748, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "keyword", /^(?:alignas|asm|bool|catch|class|compl|concept|constexpr|const_cast|decltype|delete|dynamic_cast|explicit|export|friend|import|module|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|reinterpret_cast|requires|static_assert|static_cast|synchronized|template|this|throw|try|typedef|typeid|using|virtual|wchar_t)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[54], -1,
     3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     3, "operator", e[35], -1,
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     0, 570,
     2, 338, -1, {"name":"unqualifiedVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["::", 571,
     /^(?=[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*\:\:)/, 572],
    [0, 570,
     2, 346, -1, {"name":"qualifiedVariableName","token":"qualified"}],
    [3, "variable qualifier", e[22], 573],
    ["::", 571],
    ["{", 575],
    [1, 9, 576],
    [1, 210, 577,
     0, 582],
    [1, 9, 578],
    [",", 579,
     0, 582],
    [1, 9, 580],
    [1, 210, 581,
     0, 581],
    [1, 9, 578],
    [1, 9, 583],
    ["}", -1],
    [3, "callee", e[56], -1,
     e[22], -1],
    ["(", 586],
    [1, 9, 587],
    [")", -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "type", e[32], -1,
     3, "keyword", e[28], -1,
     [5, 450], 588],
    [1, 455, -1],
    [3, "operator", "=", 590,
     2, 574, -1, {"name":"BlockOf"},
     2, 215, -1, {"name":"ArgList"}],
    [1, 9, 591],
    [1, 210, -1],
    [3, "variable qualifier", e[22], 593],
    [1, 752, 594,
     0, 594],
    [1, 9, 595],
    ["::", -1],
    [3, "keyword", e[26], 597,
     0, 598,
     0, 599,
     0, -1],
    [1, 9, 600],
    [1, 9, 601],
    [3, "keyword", e[29], 602,
     3, "keyword", e[30], 602,
     [5, 757], 603,
     1, 760, 604],
    [2, 347, 598, {"name":"TemplateArgs"}],
    [3, "keyword", e[21], 605,
     3, "keyword", e[18], 605],
    [1, 9, 599],
    [1, 414, 606],
    [1, 9, 607],
    [1, 9, 608],
    [1, 9, 609],
    [e[49], 610],
    [1, 414, 610],
    [2, 541, 604, {"name":"ParamList"},
     1, 589, 604,
     0, 604],
    [1, 9, 611],
    [",", 612,
     0, -1],
    [1, 9, 613],
    [3, "keyword", e[26], 614,
     0, 615,
     0, 616],
    [1, 9, 617],
    [1, 9, 618],
    [3, "keyword", e[29], 619,
     3, "keyword", e[30], 619,
     [5, 766], 620,
     1, 760, 621],
    [2, 347, 615, {"name":"TemplateArgs"}],
    [3, "keyword", e[21], 622,
     3, "keyword", e[18], 622],
    [1, 9, 616],
    [1, 414, 623],
    [1, 9, 624],
    [1, 9, 625],
    [1, 9, 626],
    [e[49], 627],
    [1, 414, 627],
    [2, 541, 621, {"name":"ParamList"},
     1, 589, 621,
     0, 621],
    [1, 9, 611],
    [3, "attribute", "{", 629,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 628,
     "\n", 630,
     0, -1],
    [1, 628, 631],
    [/^[\t ]*(?:\*(?!\/)[\t ]*)?/, 628],
    [/^(?=\*\/)/, 628,
     3, "attribute", "}", 628],
    ["::", 637,
     [5, 769], 633],
    [3, "meta", e[22], 634],
    [2, 347, 635, {"name":"TemplateArgs"},
     0, 635],
    [1, 9, 636],
    ["::", 637],
    [1, 9, 638],
    [/^\*?/, -1],
    [3, "number", e[20], -1,
     2, 114, -1, {"name":"string","token":"string"},
     e[22], -1,
     3, "operator", e[35], -1,
     ",", -1,
     "(", 640,
     "[", 643,
     "{", 646],
    [1, 9, 641],
    [1, 639, 642,
     ")", -1],
    [1, 9, 641],
    [1, 9, 644],
    [1, 639, 645,
     "]", -1],
    [1, 9, 644],
    [1, 9, 647],
    [1, 639, 648,
     "}", -1],
    [1, 9, 647],
    [3, "type qualifier", e[22], 650],
    [1, 752, 651,
     0, 651],
    [1, 9, 652],
    ["::", -1],
    [3, "keyword", e[51], 654,
     2, 170, -1, {"name":"Template"},
     1, 157, -1,
     3, "keyword", e[0], 656,
     3, "meta", e[16], 660,
     0, 664],
    [1, 9, 655],
    [":", -1],
    [1, 9, 657],
    [2, 215, 658, {"name":"ArgList"}],
    [1, 9, 659],
    [";", -1],
    [1, 9, 661],
    [2, 296, 662, {"name":"ParenTokens"},
     0, 662],
    [1, 9, 663],
    [/^\;?/, -1],
    [3, "keyword", e[29], 665,
     3, "keyword", e[30], 665,
     1, 179, 666,
     1, 142, 667,
     2, 773, -1, {"name":"ObjectMember"}],
    [1, 9, 664],
    [1, 9, 668],
    [1, 9, 669],
    [/^\;?/, -1],
    [/^\;?/, -1],
    [1, 796, 671,
     1, 414, 672,
     0, -1],
    [1, 9, 673],
    [1, 9, 674],
    [",", 675,
     0, -1],
    ["...", 676,
     1, 529, 677],
    [1, 9, 678],
    [1, 9, 674],
    [1, 9, 679],
    [1, 796, 680,
     1, 414, 681],
    [2, 541, 682, {"name":"ParamList"},
     0, 682],
    [1, 9, 673],
    [1, 9, 683],
    [1, 9, 684],
    ["...", 685,
     1, 529, 686],
    [3, "keyword", e[29], 687,
     3, "keyword", e[30], 687,
     3, "keyword", e[31], 687,
     3, "operator", "=", 688,
     0, 671],
    [1, 9, 683],
    [1, 9, 689],
    [1, 9, 684],
    [1, 9, 690],
    [2, 541, 691, {"name":"ParamList"},
     0, 691],
    [1, 760, 671],
    [1, 9, 692],
    [3, "keyword", e[29], 693,
     3, "keyword", e[30], 693,
     3, "keyword", e[31], 693,
     3, "operator", "=", 694,
     0, 680],
    [1, 9, 692],
    [1, 9, 695],
    [1, 760, 680],
    [3, "keyword", e[34], 697,
     3, "def property", e[22], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[35], -1,
     2, 119, -1, {"name":"prefixOp","token":"operator"},
     e[57], -1,
     3, "keyword", e[36], 698,
     3, "keyword", e[37], 698],
    [e[58], -1],
    ["[", 700],
    [1, 9, 701],
    [/^(?!\[)/, 702],
    [1, 807, 703],
    [1, 9, 704],
    ["]", 705],
    [1, 9, 706],
    [2, 241, -1, {"name":"FunctionDef"},
     2, 188, -1, {"name":"Block"}],
    ["(", 708],
    [1, 9, 709],
    [1, 210, 710,
     0, 710],
    [1, 9, 711],
    [")", -1],
    [3, "qualifier def", e[22], 713],
    [1, 752, 714,
     0, 714],
    [1, 9, 715],
    ["::", -1],
    [1, 414, 717,
     0, -1],
    [1, 9, 718],
    [1, 529, 719,
     0, 720],
    [1, 9, 721],
    [1, 9, 722],
    [2, 541, 723, {"name":"ParamList"},
     0, 723],
    [",", 724,
     0, -1],
    [1, 9, 725],
    [1, 9, 726],
    [3, "operator", "=", 727,
     0, 720],
    [1, 414, 728],
    [1, 9, 729],
    [1, 9, 730],
    [1, 210, 720],
    [1, 529, 731,
     0, 732],
    [1, 9, 733],
    [1, 9, 722],
    [2, 541, 734, {"name":"ParamList"},
     0, 734],
    [1, 9, 735],
    [3, "operator", "=", 736,
     0, 732],
    [1, 9, 737],
    [1, 210, 732],
    [1, 817, 739,
     0, -1],
    [1, 9, 740],
    [",", 741,
     0, -1],
    [1, 9, 742],
    [1, 817, 743],
    [1, 9, 740],
    ["[", 745],
    [1, 9, 746],
    [1, 569, 747,
     "]", -1],
    [1, 9, 746],
    ["{", 749],
    [1, 9, 750],
    [1, 569, 751,
     "}", -1],
    [1, 9, 750],
    ["<", 753],
    [1, 9, 754],
    [e[59], 755,
     ">", -1],
    [1, 752, 756,
     2, 114, 756, {"name":"string","token":"string"},
     /^[^]/, 756],
    [1, 9, 754],
    [1, 414, 758],
    [1, 9, 759],
    [e[60], -1],
    [1, 467, 761,
     1, 484, 762],
    [1, 9, 760],
    [1, 9, 763],
    [e[59], 764,
     0, -1],
    [1, 300, 765],
    [1, 9, 763],
    [1, 414, 767],
    [1, 9, 768],
    [e[60], -1],
    [3, "meta", e[22], 770],
    [1, 752, 771,
     0, 771],
    [1, 9, 772],
    ["::", -1],
    [3, "keyword", e[29], 774,
     3, "keyword", e[30], 774,
     3, "keyword", e[31], 774,
     3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 782,
     1, 414, 775],
    [1, 9, 773],
    [1, 9, 776],
    [1, 831, 777],
    [1, 9, 778],
    [",", 779,
     0, 782],
    [1, 9, 780],
    [1, 831, 781],
    [1, 9, 778],
    [1, 9, 783],
    [2, 241, -1, {"name":"FunctionDef"},
     1, 589, 784,
     ":", 785,
     "[", 786,
     0, 784,
     3, "meta", e[16], 787],
    [1, 9, 788],
    [1, 9, 789],
    [1, 9, 790],
    [1, 9, 791],
    [";", -1],
    [3, "number", e[20], 784],
    [1, 210, 792,
     0, 792],
    [2, 296, 793, {"name":"ParenTokens"},
     0, 793],
    [1, 9, 794],
    [1, 9, 795],
    ["]", 784],
    [/^\;?/, -1],
    [3, "keyword", e[26], 797,
     0, 799],
    [1, 9, 798],
    [2, 347, 799, {"name":"TemplateArgs"}],
    [1, 9, 800],
    [3, "keyword", e[21], 801,
     3, "keyword", e[18], 801],
    [1, 9, 802],
    [3, "type def", e[22], 803],
    [1, 9, 804],
    [3, "operator", "=", 805,
     0, -1],
    [1, 9, 806],
    [1, 107, -1,
     3, "number", e[20], -1],
    [/^\&?/, 808,
     "=", 809,
     3, "keyword", e[52], 809,
     0, -1],
    [1, 9, 810],
    [1, 9, 811],
    [1, 107, 809,
     0, 809],
    [",", 812,
     0, -1],
    [1, 9, 813],
    [/^\&?/, 814,
     "=", 815,
     3, "keyword", e[52], 815],
    [1, 9, 816],
    [1, 9, 811],
    [1, 107, 815,
     0, 815],
    [1, 339, 818,
     2, 584, 819, {"name":"fieldName","token":"property"}],
    [1, 9, 817],
    [1, 9, 820],
    [2, 347, 821, {"name":"TemplateArgs"},
     0, 821],
    [1, 9, 822],
    ["(", 823,
     "{", 824],
    [1, 9, 825],
    [1, 9, 826],
    [1, 843, 827],
    [1, 843, 828],
    [1, 9, 829],
    [1, 9, 830],
    [")", -1],
    ["}", -1],
    [0, 832,
     "(", 839],
    [e[61], 833,
     1, 696, 834],
    [1, 9, 832],
    [1, 9, 835],
    ["[", 836,
     0, -1],
    [1, 9, 837],
    ["]", 838],
    [1, 9, 835],
    [1, 9, 840],
    [1, 831, 841],
    [1, 9, 842],
    [")", -1],
    [1, 210, 844,
     0, -1],
    [1, 9, 845],
    [",", 846,
     0, -1],
    [1, 9, 847],
    [1, 210, 848],
    [1, 9, 845]
  ];
  var start = 0;
  var token = 5;

  var cpp = /*#__PURE__*/Object.freeze({
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
  function isLocalType(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
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

  var typeRE = /(^|\s)type($|\s)/;

  function markTypeLocals(type, scopes, stream, state) {
    if (type == "type def") {
      var scope = getScope(state.context, scopes);
      if (scope) {
        if (!scope.localTypes) { scope.localTypes = []; }
        scope.localTypes.push(stream.current());
      }
    } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
               isLocalType(state.context, stream.current())) {
      type += " local";
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while|try)\b/.exec(context.startLine.slice(context.startPos));
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
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", ObjectPattern: "}", EnumBody: "}",
    ObjType: "}", ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) }
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
          parent.parent.name == "Statement" && hasSubStatement(parent.parent) && !hasSubStatement(parent))
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
    } else if (cx.name == "Alternative" || cx.name == "CatchFinally") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^(else\b|\/[\/\*])/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "NewExpression" && cx.startLine.length > cx.startPos + 5) {
      return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + 2 * config.indentUnit
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
      if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
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

  function constructorAhead(line, pos) {
    var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
    return match && match[1] == match[2]
  }

  function localConstructorAhead(line, pos, cx) {
    var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
    if (!ahead) { return false }
    while (cx.name != "Statement") { cx = cx.parent; }
    var className = /\b(?:class|struct)\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
    return className ? className[1] == ahead[1] : false
  }

  var rawStringOpen = /R"(.*?)\(/g;

  function rawStringContinues(line, pos, cx) {
    rawStringOpen.lastIndex = cx.startPos;
    var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
    return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
  }

  var scopes = ["Block", "FunctionDef"], typeScopes = ["Template"];

  var CppMode = (function (superclass) {
    function CppMode(conf) {
      superclass.call(this, cpp, {
        predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
      });
      this.conf = conf;
    }

    if ( superclass ) CppMode.__proto__ = superclass;
    CppMode.prototype = Object.create( superclass && superclass.prototype );
    CppMode.prototype.constructor = CppMode;

    CppMode.prototype.token = function token$$1 (stream, state) {
      return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
    };

    CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (textAfter.charAt(0) == "#") { return 0 }
      return indent(state, textAfter, line, this.conf)
    };

    return CppMode;
  }(CodeMirror.GrammarMode));

  CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/;
  CppMode.prototype.blockCommentStart = "/*";
  CppMode.prototype.blockCommentEnd = "*/";
  CppMode.prototype.blockCommentContinue = " * ";
  CppMode.prototype.lineComment = "//";
  CppMode.prototype.fold = "brace";

  CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
