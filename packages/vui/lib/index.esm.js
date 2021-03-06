import { Vue, Component, Prop, Emit, Watch, Inject, Provide } from 'vue-property-decorator';
import uid from 'nanoid';
import PopperJS from 'popper.js';
import { debounce } from 'throttle-debounce';

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\nhtml {\n  --m-color-red-50: #ffebee;\n  --m-color-red-100: #ffcdd2;\n  --m-color-red-200: #ef9a9a;\n  --m-color-red-300: #e57373;\n  --m-color-red-400: #ef5350;\n  --m-color-red-500: #f44336;\n  --m-color-red-600: #e53935;\n  --m-color-red-700: #d32f2f;\n  --m-color-red-800: #c62828;\n  --m-color-red-900: #b71c1c;\n  --m-color-red-A100: #ff8a80;\n  --m-color-red-A200: #ff5252;\n  --m-color-red-A400: #ff1744;\n  --m-color-red-A700: #d50000;\n  --m-color-pink-50: #fce4ec;\n  --m-color-pink-100: #f8bbd0;\n  --m-color-pink-200: #f48fb1;\n  --m-color-pink-300: #f06292;\n  --m-color-pink-400: #ec407a;\n  --m-color-pink-500: #e91e63;\n  --m-color-pink-600: #d81b60;\n  --m-color-pink-700: #c2185b;\n  --m-color-pink-800: #ad1457;\n  --m-color-pink-900: #880e4f;\n  --m-color-pink-A100: #ff80ab;\n  --m-color-pink-A200: #ff4081;\n  --m-color-pink-A400: #f50057;\n  --m-color-pink-A700: #c51162;\n  --m-color-purple-50: #f3e5f5;\n  --m-color-purple-100: #e1bee7;\n  --m-color-purple-200: #ce93d8;\n  --m-color-purple-300: #ba68c8;\n  --m-color-purple-400: #ab47bc;\n  --m-color-purple-500: #9c27b0;\n  --m-color-purple-600: #8e24aa;\n  --m-color-purple-700: #7b1fa2;\n  --m-color-purple-800: #6a1b9a;\n  --m-color-purple-900: #4a148c;\n  --m-color-purple-A100: #ea80fc;\n  --m-color-purple-A200: #e040fb;\n  --m-color-purple-A400: #d500f9;\n  --m-color-purple-A700: #aa00ff;\n  --m-color-deeppurple-50: #ede7f6;\n  --m-color-deeppurple-100: #d1c4e9;\n  --m-color-deeppurple-200: #b39ddb;\n  --m-color-deeppurple-300: #9575cd;\n  --m-color-deeppurple-400: #7e57c2;\n  --m-color-deeppurple-500: #673ab7;\n  --m-color-deeppurple-600: #5e35b1;\n  --m-color-deeppurple-700: #512da8;\n  --m-color-deeppurple-800: #4527a0;\n  --m-color-deeppurple-900: #311b92;\n  --m-color-deeppurple-A100: #b388ff;\n  --m-color-deeppurple-A200: #7c4dff;\n  --m-color-deeppurple-A400: #651fff;\n  --m-color-deeppurple-A700: #6200ea;\n  --m-color-indigo-50: #e8eaf6;\n  --m-color-indigo-100: #c5cae9;\n  --m-color-indigo-200: #9fa8da;\n  --m-color-indigo-300: #7986cb;\n  --m-color-indigo-400: #5c6bc0;\n  --m-color-indigo-500: #3f51b5;\n  --m-color-indigo-600: #3949ab;\n  --m-color-indigo-700: #303f9f;\n  --m-color-indigo-800: #283593;\n  --m-color-indigo-900: #1a237e;\n  --m-color-indigo-A100: #8c9eff;\n  --m-color-indigo-A200: #536dfe;\n  --m-color-indigo-A400: #3d5afe;\n  --m-color-indigo-A700: #304ffe;\n  --m-color-blue-50: #e3f2fd;\n  --m-color-blue-100: #bbdefb;\n  --m-color-blue-200: #90caf9;\n  --m-color-blue-300: #64b5f6;\n  --m-color-blue-400: #42a5f5;\n  --m-color-blue-500: #2196f3;\n  --m-color-blue-600: #1e88e5;\n  --m-color-blue-700: #1976d2;\n  --m-color-blue-800: #1565c0;\n  --m-color-blue-900: #0d47a1;\n  --m-color-blue-A100: #82b1ff;\n  --m-color-blue-A200: #448aff;\n  --m-color-blue-A400: #2979ff;\n  --m-color-blue-A700: #2962ff;\n  --m-color-lightblue-50: #e1f5fe;\n  --m-color-lightblue-100: #b3e5fc;\n  --m-color-lightblue-200: #81d4fa;\n  --m-color-lightblue-300: #4fc3f7;\n  --m-color-lightblue-400: #29b6f6;\n  --m-color-lightblue-500: #03a9f4;\n  --m-color-lightblue-600: #039be5;\n  --m-color-lightblue-700: #0288d1;\n  --m-color-lightblue-800: #0277bd;\n  --m-color-lightblue-900: #01579b;\n  --m-color-lightblue-A100: #80d8ff;\n  --m-color-lightblue-A200: #40c4ff;\n  --m-color-lightblue-A400: #00b0ff;\n  --m-color-lightblue-A700: #0091ea;\n  --m-color-cyan-50: #e0f7fa;\n  --m-color-cyan-100: #b2ebf2;\n  --m-color-cyan-200: #80deea;\n  --m-color-cyan-300: #4dd0e1;\n  --m-color-cyan-400: #26c6da;\n  --m-color-cyan-500: #00bcd4;\n  --m-color-cyan-600: #00acc1;\n  --m-color-cyan-700: #0097a7;\n  --m-color-cyan-800: #00838f;\n  --m-color-cyan-900: #006064;\n  --m-color-cyan-A100: #84ffff;\n  --m-color-cyan-A200: #18ffff;\n  --m-color-cyan-A400: #00e5ff;\n  --m-color-cyan-A700: #00b8d4;\n  --m-color-teal-50: #e0f2f1;\n  --m-color-teal-100: #b2dfdb;\n  --m-color-teal-200: #80cbc4;\n  --m-color-teal-300: #4db6ac;\n  --m-color-teal-400: #26a69a;\n  --m-color-teal-500: #009688;\n  --m-color-teal-600: #00897b;\n  --m-color-teal-700: #00796b;\n  --m-color-teal-800: #00695c;\n  --m-color-teal-900: #004d40;\n  --m-color-teal-A100: #a7ffeb;\n  --m-color-teal-A200: #64ffda;\n  --m-color-teal-A400: #1de9b6;\n  --m-color-teal-A700: #00bfa5;\n  --m-color-green-50: #e8f5e9;\n  --m-color-green-100: #c8e6c9;\n  --m-color-green-200: #a5d6a7;\n  --m-color-green-300: #81c784;\n  --m-color-green-400: #66bb6a;\n  --m-color-green-500: #4caf50;\n  --m-color-green-600: #43a047;\n  --m-color-green-700: #388e3c;\n  --m-color-green-800: #2e7d32;\n  --m-color-green-900: #1b5e20;\n  --m-color-green-A100: #b9f6ca;\n  --m-color-green-A200: #69f0ae;\n  --m-color-green-A400: #00e676;\n  --m-color-green-A700: #00c853;\n  --m-color-lightgreen-50: #f1f8e9;\n  --m-color-lightgreen-100: #dcedc8;\n  --m-color-lightgreen-200: #c5e1a5;\n  --m-color-lightgreen-300: #aed581;\n  --m-color-lightgreen-400: #9ccc65;\n  --m-color-lightgreen-500: #8bc34a;\n  --m-color-lightgreen-600: #7cb342;\n  --m-color-lightgreen-700: #689f38;\n  --m-color-lightgreen-800: #558b2f;\n  --m-color-lightgreen-900: #33691e;\n  --m-color-lightgreen-A100: #ccff90;\n  --m-color-lightgreen-A200: #b2ff59;\n  --m-color-lightgreen-A400: #76ff03;\n  --m-color-lightgreen-A700: #64dd17;\n  --m-color-lime-50: #f9fbe7;\n  --m-color-lime-100: #f0f4c3;\n  --m-color-lime-200: #e6ee9c;\n  --m-color-lime-300: #dce775;\n  --m-color-lime-400: #d4e157;\n  --m-color-lime-500: #cddc39;\n  --m-color-lime-600: #c0ca33;\n  --m-color-lime-700: #afb42b;\n  --m-color-lime-800: #9e9d24;\n  --m-color-lime-900: #827717;\n  --m-color-lime-A100: #f4ff81;\n  --m-color-lime-A200: #eeff41;\n  --m-color-lime-A400: #c6ff00;\n  --m-color-lime-A700: #aeea00;\n  --m-color-yellow-50: #fffde7;\n  --m-color-yellow-100: #fff9c4;\n  --m-color-yellow-200: #fff59d;\n  --m-color-yellow-300: #fff176;\n  --m-color-yellow-400: #ffee58;\n  --m-color-yellow-500: #ffeb3b;\n  --m-color-yellow-600: #fdd835;\n  --m-color-yellow-700: #fbc02d;\n  --m-color-yellow-800: #f9a825;\n  --m-color-yellow-900: #f57f17;\n  --m-color-yellow-A100: #ffff8d;\n  --m-color-yellow-A200: #ffff00;\n  --m-color-yellow-A400: #ffea00;\n  --m-color-yellow-A700: #ffd600;\n  --m-color-amber-50: #fff8e1;\n  --m-color-amber-100: #ffecb3;\n  --m-color-amber-200: #ffe082;\n  --m-color-amber-300: #ffd54f;\n  --m-color-amber-400: #ffca28;\n  --m-color-amber-500: #ffc107;\n  --m-color-amber-600: #ffb300;\n  --m-color-amber-700: #ffa000;\n  --m-color-amber-800: #ff8f00;\n  --m-color-amber-900: #ff6f00;\n  --m-color-amber-A100: #ffe57f;\n  --m-color-amber-A200: #ffd740;\n  --m-color-amber-A400: #ffc400;\n  --m-color-amber-A700: #ffab00;\n  --m-color-orange-50: #fff3e0;\n  --m-color-orange-100: #ffe0b2;\n  --m-color-orange-200: #ffcc80;\n  --m-color-orange-300: #ffb74d;\n  --m-color-orange-400: #ffa726;\n  --m-color-orange-500: #ff9800;\n  --m-color-orange-600: #f57c00;\n  --m-color-orange-700: #f57c00;\n  --m-color-orange-800: #ef6c00;\n  --m-color-orange-900: #e65100;\n  --m-color-orange-A100: #ffd180;\n  --m-color-orange-A200: #ffab40;\n  --m-color-orange-A400: #ff9100;\n  --m-color-orange-A700: #ff6d00;\n  --m-color-deeporange-50: #fbe9e7;\n  --m-color-deeporange-100: #ffccbc;\n  --m-color-deeporange-200: #ffab91;\n  --m-color-deeporange-300: #ff8a65;\n  --m-color-deeporange-400: #ff7043;\n  --m-color-deeporange-500: #ff5722;\n  --m-color-deeporange-600: #f4511e;\n  --m-color-deeporange-700: #e64a19;\n  --m-color-deeporange-800: #d84315;\n  --m-color-deeporange-900: #bf360c;\n  --m-color-deeporange-A100: #ff9e80;\n  --m-color-deeporange-A200: #ff6e40;\n  --m-color-deeporange-A400: #ff3d00;\n  --m-color-deeporange-A700: #dd2c00;\n  --m-color-brown-50: #efebe9;\n  --m-color-brown-100: #d7ccc8;\n  --m-color-brown-200: #bcaaa4;\n  --m-color-brown-300: #a1887f;\n  --m-color-brown-400: #8d6e63;\n  --m-color-brown-500: #795548;\n  --m-color-brown-600: #6d4c41;\n  --m-color-brown-700: #5d4037;\n  --m-color-brown-800: #4e342e;\n  --m-color-brown-900: #3e2723;\n  --m-color-brown-A100: #d7ccc8;\n  --m-color-brown-A200: #bcaaa4;\n  --m-color-brown-A400: #8d6e63;\n  --m-color-brown-A700: #5d4037;\n  --m-color-grey-50: #fafafa;\n  --m-color-grey-100: #f5f5f5;\n  --m-color-grey-200: #eeeeee;\n  --m-color-grey-300: #e0e0e0;\n  --m-color-grey-400: #bdbdbd;\n  --m-color-grey-500: #9e9e9e;\n  --m-color-grey-600: #757575;\n  --m-color-grey-700: #616161;\n  --m-color-grey-800: #424242;\n  --m-color-grey-900: #212121;\n  --m-color-grey-A100: #fff;\n  --m-color-grey-A200: #000000;\n  --m-color-grey-A400: #303030;\n  --m-color-grey-A700: #616161;\n  --m-color-bluegrey-50: #eceff1;\n  --m-color-bluegrey-100: #cfd8dc;\n  --m-color-bluegrey-200: #b0bec5;\n  --m-color-bluegrey-300: #90a4ae;\n  --m-color-bluegrey-400: #78909c;\n  --m-color-bluegrey-500: #607d8b;\n  --m-color-bluegrey-600: #546e7a;\n  --m-color-bluegrey-700: #455a64;\n  --m-color-bluegrey-800: #37474f;\n  --m-color-bluegrey-900: #263238;\n  --m-color-bluegrey-A100: #cfd8dc;\n  --m-color-bluegrey-A200: #b0bec5;\n  --m-color-bluegrey-A400: #78909c;\n  --m-color-bluegrey-A700: #455a64; }\n";
styleInject(css);

var css$1 = "/**\r\n * variables register.\r\n */\n:root {\n  --m-elevation-0: none;\n  --m-elevation-1: 0 0 2px 1px rgba(0, 0, 0, 0.1);\n  --m-elevation-2: 0 2px 10px 1px rgba(0, 0, 0, 0.12);\n  --m-elevation-3: 0 2px 12px 2px rgba(0, 0, 0, 0.13);\n  --m-elevation-4: 0 2px 14px 3px rgba(0, 0, 0, 0.14);\n  --m-elevation-5: 0 2px 16px 4px rgba(0, 0, 0, 0.15); }\n\n/**\r\n * common modifier class output.\r\n */\n.m-elevation-0 {\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.m-elevation-1 {\n  -webkit-box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);\n          box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1); }\n\n.m-elevation-2 {\n  -webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.12); }\n\n.m-elevation-3 {\n  -webkit-box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.13);\n          box-shadow: 0 2px 12px 2px rgba(0, 0, 0, 0.13); }\n\n.m-elevation-4 {\n  -webkit-box-shadow: 0 2px 14px 3px rgba(0, 0, 0, 0.14);\n          box-shadow: 0 2px 14px 3px rgba(0, 0, 0, 0.14); }\n\n.m-elevation-5 {\n  -webkit-box-shadow: 0 2px 16px 4px rgba(0, 0, 0, 0.15);\n          box-shadow: 0 2px 16px 4px rgba(0, 0, 0, 0.15); }\n";
styleInject(css$1);

var css$2 = "@charset \"UTF-8\";\n/**\r\n * variables register.\r\n */\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n:root {\n  --m-space-xs: 5px;\n  --m-space-sm: 10px;\n  --m-space-md: 15px;\n  --m-space-lg: 20px;\n  --m-space-xl: 25px; }\n\n.m-mt-xs {\n  margin-top: var(--m-space-xs); }\n\n.m-mb-xs {\n  margin-bottom: var(--m-space-xs); }\n\n.m-ml-xs {\n  margin-left: var(--m-space-xs); }\n\n.m-mr-xs {\n  margin-right: var(--m-space-xs); }\n\n.m-mx-xs {\n  margin-left: var(--m-space-xs);\n  margin-right: var(--m-space-xs); }\n\n.m-my-xs {\n  margin-top: var(--m-space-xs);\n  margin-bottom: var(--m-space-xs); }\n\n.m-m-xs {\n  margin: var(--m-space-xs); }\n\n.m-pt-xs {\n  padding-top: var(--m-space-xs); }\n\n.m-pb-xs {\n  padding-bottom: var(--m-space-xs); }\n\n.m-pl-xs {\n  padding-left: var(--m-space-xs); }\n\n.m-pr-xs {\n  padding-right: var(--m-space-xs); }\n\n.m-px-xs {\n  padding-left: var(--m-space-xs);\n  padding-right: var(--m-space-xs); }\n\n.m-py-xs {\n  padding-top: var(--m-space-xs);\n  padding-bottom: var(--m-space-xs); }\n\n.m-p-xs {\n  padding: var(--m-space-xs); }\n\n.m-mt-sm {\n  margin-top: var(--m-space-sm); }\n\n.m-mb-sm {\n  margin-bottom: var(--m-space-sm); }\n\n.m-ml-sm {\n  margin-left: var(--m-space-sm); }\n\n.m-mr-sm {\n  margin-right: var(--m-space-sm); }\n\n.m-mx-sm {\n  margin-left: var(--m-space-sm);\n  margin-right: var(--m-space-sm); }\n\n.m-my-sm {\n  margin-top: var(--m-space-sm);\n  margin-bottom: var(--m-space-sm); }\n\n.m-m-sm {\n  margin: var(--m-space-sm); }\n\n.m-pt-sm {\n  padding-top: var(--m-space-sm); }\n\n.m-pb-sm {\n  padding-bottom: var(--m-space-sm); }\n\n.m-pl-sm {\n  padding-left: var(--m-space-sm); }\n\n.m-pr-sm {\n  padding-right: var(--m-space-sm); }\n\n.m-px-sm {\n  padding-left: var(--m-space-sm);\n  padding-right: var(--m-space-sm); }\n\n.m-py-sm {\n  padding-top: var(--m-space-sm);\n  padding-bottom: var(--m-space-sm); }\n\n.m-p-sm {\n  padding: var(--m-space-sm); }\n\n.m-mt-md {\n  margin-top: var(--m-space-md); }\n\n.m-mb-md {\n  margin-bottom: var(--m-space-md); }\n\n.m-ml-md {\n  margin-left: var(--m-space-md); }\n\n.m-mr-md {\n  margin-right: var(--m-space-md); }\n\n.m-mx-md {\n  margin-left: var(--m-space-md);\n  margin-right: var(--m-space-md); }\n\n.m-my-md {\n  margin-top: var(--m-space-md);\n  margin-bottom: var(--m-space-md); }\n\n.m-m-md {\n  margin: var(--m-space-md); }\n\n.m-pt-md {\n  padding-top: var(--m-space-md); }\n\n.m-pb-md {\n  padding-bottom: var(--m-space-md); }\n\n.m-pl-md {\n  padding-left: var(--m-space-md); }\n\n.m-pr-md {\n  padding-right: var(--m-space-md); }\n\n.m-px-md {\n  padding-left: var(--m-space-md);\n  padding-right: var(--m-space-md); }\n\n.m-py-md {\n  padding-top: var(--m-space-md);\n  padding-bottom: var(--m-space-md); }\n\n.m-p-md {\n  padding: var(--m-space-md); }\n\n.m-mt-lg {\n  margin-top: var(--m-space-lg); }\n\n.m-mb-lg {\n  margin-bottom: var(--m-space-lg); }\n\n.m-ml-lg {\n  margin-left: var(--m-space-lg); }\n\n.m-mr-lg {\n  margin-right: var(--m-space-lg); }\n\n.m-mx-lg {\n  margin-left: var(--m-space-lg);\n  margin-right: var(--m-space-lg); }\n\n.m-my-lg {\n  margin-top: var(--m-space-lg);\n  margin-bottom: var(--m-space-lg); }\n\n.m-m-lg {\n  margin: var(--m-space-lg); }\n\n.m-pt-lg {\n  padding-top: var(--m-space-lg); }\n\n.m-pb-lg {\n  padding-bottom: var(--m-space-lg); }\n\n.m-pl-lg {\n  padding-left: var(--m-space-lg); }\n\n.m-pr-lg {\n  padding-right: var(--m-space-lg); }\n\n.m-px-lg {\n  padding-left: var(--m-space-lg);\n  padding-right: var(--m-space-lg); }\n\n.m-py-lg {\n  padding-top: var(--m-space-lg);\n  padding-bottom: var(--m-space-lg); }\n\n.m-p-lg {\n  padding: var(--m-space-lg); }\n\n.m-mt-xl {\n  margin-top: var(--m-space-xl); }\n\n.m-mb-xl {\n  margin-bottom: var(--m-space-xl); }\n\n.m-ml-xl {\n  margin-left: var(--m-space-xl); }\n\n.m-mr-xl {\n  margin-right: var(--m-space-xl); }\n\n.m-mx-xl {\n  margin-left: var(--m-space-xl);\n  margin-right: var(--m-space-xl); }\n\n.m-my-xl {\n  margin-top: var(--m-space-xl);\n  margin-bottom: var(--m-space-xl); }\n\n.m-m-xl {\n  margin: var(--m-space-xl); }\n\n.m-pt-xl {\n  padding-top: var(--m-space-xl); }\n\n.m-pb-xl {\n  padding-bottom: var(--m-space-xl); }\n\n.m-pl-xl {\n  padding-left: var(--m-space-xl); }\n\n.m-pr-xl {\n  padding-right: var(--m-space-xl); }\n\n.m-px-xl {\n  padding-left: var(--m-space-xl);\n  padding-right: var(--m-space-xl); }\n\n.m-py-xl {\n  padding-top: var(--m-space-xl);\n  padding-bottom: var(--m-space-xl); }\n\n.m-p-xl {\n  padding: var(--m-space-xl); }\n\n.m-mt-0 {\n  margin-top: 0 !important; }\n\n.m-mb-0 {\n  margin-bottom: 0 !important; }\n\n.m-ml-0 {\n  margin-left: 0 !important; }\n\n.m-mr-0 {\n  margin-right: 0 !important; }\n\n.m-mx-0 {\n  margin-left: 0 !important;\n  margin-right: 0 !important; }\n\n.m-my-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important; }\n\n.m-m-0 {\n  margin: 0 !important; }\n\n.m-pt-0 {\n  padding-top: 0 !important; }\n\n.m-pb-0 {\n  padding-bottom: 0 !important; }\n\n.m-pl-0 {\n  padding-left: 0 !important; }\n\n.m-pr-0 {\n  padding-right: 0 !important; }\n\n.m-px-0 {\n  padding-left: 0 !important;\n  padding-right: 0 !important; }\n\n.m-py-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important; }\n\n.m-p-0 {\n  padding: 0 !important; }\n";
styleInject(css$2);

var css$3 = "/**\r\n * variables register.\r\n */\n:root {\n  --m-shape-circle: 50%;\n  --m-shape-round: 1rem;\n  --m-shape-corner: .2rem;\n  --m-shape-square: 0; }\n\n/**\r\n * common modifier class output.\r\n */\n.m-shape-circle {\n  border-radius: var(--m-shape-circle); }\n\n.m-shape-round {\n  border-radius: var(--m-shape-round); }\n\n.m-shape-corner {\n  border-radius: var(--m-shape-corner); }\n\n.m-shape-square {\n  border-radius: var(--m-shape-square); }\n";
styleInject(css$3);

var css$4 = "/**\r\n * theme\r\n */\n:root {\n  --m-font-base: 14px;\n  --m-color-primary: var(--m-color-deeppurple-700);\n  --m-color-error: var(--m-color-red-A400);\n  --m-color-success: var(--m-color-green-500);\n  --m-color-warning: var(--m-color-orange-A700);\n  --m-color-default: var(--m-font-color); }\n";
styleInject(css$4);

var css$5 = "/**\r\n * day and night mode\r\n */\n:root {\n  --m-day-font-color: var(--m-color-grey-A700);\n  --m-day-bg-color: var(--m-color-grey-A100);\n  --m-day-hover-bg-color: var(--m-color-grey-100);\n  --m-day-border-color: var(--m-color-grey-200);\n  --m-day-bg-second-color: var(--m-color-grey-100); }\n\n:root {\n  --m-font-color: var(--m-day-font-color);\n  --m-bg-color: var(--m-day-bg-color);\n  --m-hover-bg-color: var(--m-day-hover-bg-color);\n  --m-border-color: var(--m-day-border-color); }\n";
styleInject(css$5);

var css$6 = ":root {\n  --m-border-base: 1px solid var(--m-border-color); }\n\n.m-hr-b {\n  border-bottom: var(--m-border-base); }\n\n.m-hr-t {\n  border-top: var(--m-border-base); }\n\n.m-hr-l {\n  border-left: var(--m-border-base); }\n\n.m-hr-r {\n  border-right: var(--m-border-base); }\n";
styleInject(css$6);

var css$7 = ".m-hr-b {\n  border-bottom: 1px solid var(--m-border-color); }\n\n.m-hr-t {\n  border-top: 1px solid var(--m-border-color); }\n\n.m-hr-l {\n  border-left: 1px solid var(--m-border-color); }\n\n.m-hr-r {\n  border-right: 1px solid var(--m-border-color); }\n";
styleInject(css$7);

var css$8 = "/**\r\n * components styles.\r\n */\nhtml,\nbody,\n#app,\n.m-app {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  font-size: var(--m-font-base);\n  color: var(--m-font-color);\n  background-color: var(--m-bg-color);\n  position: relative; }\n\n* {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n";
styleInject(css$8);

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

var MApp =
/*#__PURE__*/
function (_Vue) {
  _inherits(MApp, _Vue);

  function MApp() {
    var _this;

    _classCallCheck(this, MApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MApp).apply(this, arguments));
    _this.name = 'm-app';
    return _this;
  }

  _createClass(MApp, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var $slots = this.$slots;
      return h("div", {
        "staticClass": this.name
      }, [$slots.default]);
    }
  }]);

  return MApp;
}(Vue);

MApp = __decorate([Component], MApp);
var MApp$1 = MApp;

/* istanbul ignore next */

MApp$1.install = function (Vue) {
  Vue.component('MApp', MApp$1);
};

var css$9 = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-frame {\n  --m-frame-header-size: 0;\n  --m-frame-footer-size: 0;\n  --m-frame-left-size: 0;\n  --m-frame-right-size: 0;\n  --m-frame-header-z-index: 1;\n  --m-frame-footer-z-index: 1;\n  --m-frame-left-z-index: 1;\n  --m-frame-right-z-index: 1;\n  --m-frame-header-grow: 100%;\n  --m-frame-footer-grow: 100%;\n  --m-frame-left-grow: 100%;\n  --m-frame-right-grow: 100%;\n  --m-frame-header-shrink: 0;\n  --m-frame-footer-shrink: 0;\n  --m-frame-left-shrink: 0;\n  --m-frame-right-shrink: 0; }\n\n/**\r\n * components styles.\r\n */\n.m-frame {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  font-size: var(--m-font-base);\n  color: var(--m-font-color);\n  position: relative; }\n  .m-frame.m--transition {\n    -webkit-transition: padding-left 0.25s ease, padding-right 0.25s ease, padding-top 0.25s ease, padding-bottom 0.25s ease;\n    transition: padding-left 0.25s ease, padding-right 0.25s ease, padding-top 0.25s ease, padding-bottom 0.25s ease; }\n    .m-frame.m--transition > .m-frame-header,\n    .m-frame.m--transition > .m-frame-footer,\n    .m-frame.m--transition > .m-frame-left,\n    .m-frame.m--transition > .m-frame-right {\n      -webkit-transition: all 0.25s ease;\n      transition: all 0.25s ease; }\n\n.m-frame.m--with-header {\n  padding-top: var(--m-frame-header-size); }\n\n.m-frame.m--with-footer {\n  padding-bottom: var(--m-frame-footer-size); }\n\n.m-frame.m--with-left {\n  padding-left: var(--m-frame-left-size); }\n\n.m-frame.m--with-right {\n  padding-right: var(--m-frame-right-size); }\n\n.m-frame.m--with-header.m--fill-header-left {\n  --m-frame-left-shrink: var(--m-frame-header-size);\n  --m-frame-left-grow: calc(100% - var(--m-frame-header-size)); }\n\n.m-frame.m--with-header.m--fill-header-both {\n  --m-frame-left-shrink: var(--m-frame-header-size);\n  --m-frame-right-shrink: var(--m-frame-header-size);\n  --m-frame-left-grow: calc(100% - var(--m-frame-header-size));\n  --m-frame-right-grow: calc(100% - var(--m-frame-header-size)); }\n\n.m-frame.m--with-header.m--fill-header-right {\n  --m-frame-right-shrink: var(--m-frame-header-size);\n  --m-frame-right-grow: calc(100% - var(--m-frame-header-size)); }\n\n.m-frame.m--with-footer.m--fill-footer-left {\n  --m-frame-left-grow: calc(100% - var(--m-frame-footer-size)); }\n\n.m-frame.m--with-footer.m--fill-footer-both {\n  --m-frame-left-grow: calc(100% - var(--m-frame-footer-size));\n  --m-frame-right-grow: calc(100% - var(--m-frame-footer-size)); }\n\n.m-frame.m--with-footer.m--fill-footer-right {\n  --m-frame-right-grow: calc(100% - var(--m-frame-footer-size)); }\n\n.m-frame.m--with-left.m--fill-header-none, .m-frame.m--with-left.m--fill-header-right {\n  --m-frame-header-shrink: var(--m-frame-left-size);\n  --m-frame-header-grow: calc(100% - var(--m-frame-left-size)); }\n\n.m-frame.m--with-left.m--fill-footer-right, .m-frame.m--with-left.m--fill-footer-none {\n  --m-frame-footer-shrink: var(--m-frame-left-size);\n  --m-frame-footer-grow: calc(100% - var(--m-frame-left-size)); }\n\n.m-frame.m--with-right.m--fill-header-none, .m-frame.m--with-right.m--fill-header-left {\n  --m-frame-header-grow: calc(100% - var(--m-frame-right-size)); }\n\n.m-frame.m--with-right.m--fill-footer-left, .m-frame.m--with-right.m--fill-footer-none {\n  --m-frame-footer-grow: calc(100% - var(--m-frame-right-size)); }\n\n.m-frame.m--with-header.m--with-footer.m--fill-header-left.m--fill-footer-left, .m-frame.m--with-header.m--with-footer.m--fill-header-left.m--fill-footer-both, .m-frame.m--with-header.m--with-footer.m--fill-header-both.m--fill-footer-left, .m-frame.m--with-header.m--with-footer.m--fill-header-both.m--fill-footer-both {\n  --m-frame-left-grow: calc(100% - var(--m-frame-header-size) - var(--m-frame-footer-size)); }\n\n.m-frame.m--with-header.m--with-footer.m--fill-header-right.m--fill-footer-right, .m-frame.m--with-header.m--with-footer.m--fill-header-right.m--fill-footer-both, .m-frame.m--with-header.m--with-footer.m--fill-header-both.m--fill-footer-right, .m-frame.m--with-header.m--with-footer.m--fill-header-both.m--fill-footer-both {\n  --m-frame-right-grow: calc(100% - var(--m-frame-header-size) - var(--m-frame-footer-size)); }\n\n.m-frame.m--with-left.m--with-right.m--fill-header-none {\n  --m-frame-header-grow: calc(100% - var(--m-frame-left-size) - var(--m-frame-right-size)); }\n\n.m-frame.m--with-left.m--with-right.m--fill-footer-none {\n  --m-frame-footer-grow: calc(100% - var(--m-frame-left-size) - var(--m-frame-right-size)); }\n\n.m-frame-main {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n  .m-frame-main::-webkit-scrollbar-thumb {\n    background-color: #a6a6a6; }\n  .m-frame-main::-webkit-scrollbar-track {\n    background-color: #e5e5e5; }\n  .m-frame-main::-webkit-scrollbar {\n    width: 7px; }\n  .m-frame-main::-webkit-scrollbar-thumb {\n    border-left: 2px solid transparent; }\n  .m-frame-mainl::-webkit-scrollbar-track {\n    border-left: 2px solid transparent; }\n\n.m-frame-header, .m-frame-footer, .m-frame-left, .m-frame-right {\n  position: absolute; }\n\n.m-frame-header {\n  top: 0;\n  left: var(--m-frame-header-shrink);\n  width: var(--m-frame-header-grow);\n  height: var(--m-frame-header-size);\n  z-index: var(--m-frame-header-z-index); }\n\n.m-frame-footer {\n  bottom: 0;\n  width: var(--m-frame-footer-grow);\n  left: var(--m-frame-footer-shrink);\n  height: var(--m-frame-footer-size);\n  z-index: var(--m-frame-footer-z-index); }\n\n.m-frame-left {\n  left: 0;\n  top: var(--m-frame-left-shrink);\n  height: var(--m-frame-left-grow);\n  width: var(--m-frame-left-size);\n  z-index: var(--m-frame-left-z-index); }\n\n.m-frame-right {\n  right: 0;\n  top: var(--m-frame-right-shrink);\n  height: var(--m-frame-right-grow);\n  width: var(--m-frame-right-size);\n  z-index: var(--m-frame-right-z-index); }\n\n.m-frame-transition-header-enter,\n.m-frame-transition-header-leave-to {\n  -webkit-transform: translateY(-100%);\n          transform: translateY(-100%); }\n\n.m-frame-transition-footer-enter,\n.m-frame-transition-footer-leave-to {\n  -webkit-transform: translateY(100%);\n          transform: translateY(100%); }\n\n.m-frame-transition-left-enter,\n.m-frame-transition-left-leave-to {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\n.m-frame-transition-right-enter,\n.m-frame-transition-right-leave-to {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n.m-frame-transition-header-enter-active,\n.m-frame-transition-header-leave-active {\n  will-change: transform;\n  -webkit-transition: -webkit-transform 0.25s ease;\n  transition: -webkit-transform 0.25s ease;\n  transition: transform 0.25s ease;\n  transition: transform 0.25s ease, -webkit-transform 0.25s ease; }\n";
styleInject(css$9);

/* eslint-disable */
var Buffer =
/*#__PURE__*/
function () {
  function Buffer() {
    _classCallCheck(this, Buffer);

    this.docStylesVal = false;
  }
  /**
   * 根文档样式表
   * @return {{}}
   */


  _createClass(Buffer, [{
    key: "docStyles",
    get: function get() {
      if (!this.docStylesVal) {
        var $dom = document.documentElement;
        this.docStylesVal = getComputedStyle($dom);
      }

      return this.docStylesVal;
    }
  }]);

  return Buffer;
}();

new Buffer();

var Elevation = ['none', '0 0 2px 1px rgba(0,0,0,.1)', '0 2px 10px 1px rgba(0,0,0,.12)', '0 2px 12px 2px rgba(0,0,0,.13)', '0 2px 14px 3px rgba(0,0,0,.14)', '0 2px 16px 4px rgba(0,0,0,.15)'];

var Palette = {
  red_50: '#ffebee',
  red_100: '#ffcdd2',
  red_200: '#ef9a9a',
  red_300: '#e57373',
  red_400: '#ef5350',
  red_500: '#f44336',
  red_600: '#e53935',
  red_700: '#d32f2f',
  red_800: '#c62828',
  red_900: '#b71c1c',
  pink_50: '#fce4ec',
  pink_100: '#f8bbd0',
  pink_200: '#f48fb1',
  pink_300: '#f06292',
  pink_400: '#ec407a',
  pink_500: '#e91e63',
  pink_600: '#d81b60',
  pink_700: '#c2185b',
  pink_800: '#ad1457',
  pink_900: '#880e4f',
  pink_A100: '#ff80ab',
  pink_A200: '#ff4081',
  pink_A400: '#f50057',
  pink_A700: '#c51162',
  purple_50: '#f3e5f5',
  purple_100: '#e1bee7',
  purple_200: '#ce93d8',
  purple_300: '#ba68c8',
  purple_400: '#ab47bc',
  purple_500: '#9c27b0',
  purple_600: '#8e24aa',
  purple_700: '#7b1fa2',
  purple_800: '#6a1b9a',
  purple_900: '#4a148c',
  purple_A100: '#ea80fc',
  purple_A200: '#e040fb',
  purple_A400: '#d500f9',
  purple_A700: '#aa00ff',
  deeppurple_50: '#ede7f6',
  deeppurple_100: '#d1c4e9',
  deeppurple_200: '#b39ddb',
  deeppurple_300: '#9575cd',
  deeppurple_400: '#7e57c2',
  deeppurple_500: '#673ab7',
  deeppurple_600: '#5e35b1',
  deeppurple_700: '#512da8',
  deeppurple_800: '#4527a0',
  deeppurple_900: '#311b92',
  deeppurple_A100: '#b388ff',
  deeppurple_A200: '#7c4dff',
  deeppurple_A400: '#651fff',
  deeppurple_A700: '#6200ea',
  blue_50: '#e3f2fd',
  blue_100: '#bbdefb',
  blue_200: '#90caf9',
  blue_300: '#64b5f6',
  blue_400: '#42a5f5',
  blue_500: '#2196f3',
  blue_600: '#1e88e5',
  blue_700: '#1976d2',
  blue_800: '#1565c0',
  blue_900: '#0d47a1',
  blue_A100: '#82b1ff',
  blue_A200: '#448aff',
  blue_A400: '#2979ff',
  blue_A700: '#2962ff',
  lightblue_50: '#e1f5fe',
  lightblue_100: '#b3e5fc',
  lightblue_200: '#81d4fa',
  lightblue_300: '#4fc3f7',
  lightblue_400: '#29b6f6',
  lightblue_500: '#03a9f4',
  lightblue_600: '#039be5',
  lightblue_700: '#0288d1',
  lightblue_800: '#0277bd',
  lightblue_900: '#01579b',
  lightblue_A100: '#80d8ff',
  lightblue_A200: '#40c4ff',
  lightblue_A400: '#00b0ff',
  lightblue_A700: '#0091ea',
  cyan_50: '#e0f7fa',
  cyan_100: '#b2ebf2',
  cyan_200: '#80deea',
  cyan_300: '#4dd0e1',
  cyan_400: '#26c6da',
  cyan_500: '#00bcd4',
  cyan_600: '#00acc1',
  cyan_700: '#0097a7',
  cyan_800: '#00838f',
  cyan_900: '#006064',
  cyan_A100: '#84ffff',
  cyan_A200: '#18ffff',
  cyan_A400: '#00e5ff',
  cyan_A700: '#00b8d4',
  teal_50: '#e0f2f1',
  teal_100: '#b2dfdb',
  teal_200: '#80cbc4',
  teal_300: '#4db6ac',
  teal_400: '#26a69a',
  teal_500: '#009688',
  teal_600: '#00897b',
  teal_700: '#00796b',
  teal_800: '#00695c',
  teal_900: '#004d40',
  teal_A100: '#a7ffeb',
  teal_A200: '#64ffda',
  teal_A400: '#1de9b6',
  teal_A700: '#00bfa5',
  green_50: '#e8f5e9',
  green_100: '#c8e6c9',
  green_200: '#a5d6a7',
  green_300: '#81c784',
  green_400: '#66bb6a',
  green_500: '#4caf50',
  green_600: '#43a047',
  green_700: '#388e3c',
  green_800: '#2e7d32',
  green_900: '#1b5e20',
  green_A100: '#b9f6ca',
  green_A200: '#69f0ae',
  green_A400: '#00e676',
  green_A700: '#00c853',
  lightgreen_50: '#f1f8e9',
  lightgreen_100: '#dcedc8',
  lightgreen_200: '#c5e1a5',
  lightgreen_300: '#aed581',
  lightgreen_400: '#9ccc65',
  lightgreen_500: '#8bc34a',
  lightgreen_600: '#7cb342',
  lightgreen_700: '#689f38',
  lightgreen_800: '#558b2f',
  lightgreen_900: '#33691e',
  lightgreen_A100: '#ccff90',
  lightgreen_A200: '#b2ff59',
  lightgreen_A400: '#76ff03',
  lightgreen_A700: '#64dd17',
  lime_50: '#f9fbe7',
  lime_100: '#f0f4c3',
  lime_200: '#e6ee9c',
  lime_300: '#dce775',
  lime_400: '#d4e157',
  lime_500: '#cddc39',
  lime_600: '#c0ca33',
  lime_700: '#afb42b',
  lime_800: '#9e9d24',
  lime_900: '#827717',
  lime_A100: '#f4ff81',
  lime_A200: '#eeff41',
  lime_A400: '#c6ff00',
  lime_A700: '#aeea00',
  yellow_50: '#fffde7',
  yellow_100: '#fff9c4',
  yellow_200: '#fff59d',
  yellow_300: '#fff176',
  yellow_400: '#ffee58',
  yellow_500: '#ffeb3b',
  yellow_600: '#fdd835',
  yellow_700: '#fbc02d',
  yellow_800: '#f9a825',
  yellow_900: '#f57f17',
  yellow_A100: '#ffff8d',
  yellow_A200: '#ffff00',
  yellow_A400: '#ffea00',
  yellow_A700: '#ffd600',
  amber_50: '#fff8e1',
  amber_100: '#ffecb3',
  amber_200: '#ffe082',
  amber_300: '#ffd54f',
  amber_400: '#ffca28',
  amber_500: '#ffc107',
  amber_600: '#ffb300',
  amber_700: '#ffa000',
  amber_800: '#ff8f00',
  amber_900: '#ff6f00',
  amber_A100: '#ffe57f',
  amber_A200: '#ffd740',
  amber_A400: '#ffc400',
  amber_A700: '#ffab00',
  orange_50: '#fff3e0',
  orange_100: '#ffe0b2',
  orange_200: '#ffcc80',
  orange_300: '#ffb74d',
  orange_400: '#ffa726',
  orange_500: '#ff9800',
  orange_600: '#f57c00',
  orange_700: '#f57c00',
  orange_800: '#ef6c00',
  orange_900: '#e65100',
  orange_A100: '#ffd180',
  orange_A200: '#ffab40',
  orange_A400: '#ff9100',
  orange_A700: '#ff6d00',
  deeporange_50: '#fbe9e7',
  deeporange_100: '#ffccbc',
  deeporange_200: '#ffab91',
  deeporange_300: '#ff8a65',
  deeporange_400: '#ff7043',
  deeporange_500: '#ff5722',
  deeporange_600: '#f4511e',
  deeporange_700: '#e64a19',
  deeporange_800: '#d84315',
  deeporange_900: '#bf360c',
  deeporange_A100: '#ff9e80',
  deeporange_A200: '#ff6e40',
  deeporange_A400: '#ff3d00',
  deeporange_A700: '#dd2c00',
  brown_50: '#efebe9',
  brown_100: '#d7ccc8',
  brown_200: '#bcaaa4',
  brown_300: '#a1887f',
  brown_400: '#8d6e63',
  brown_500: '#795548',
  brown_600: '#6d4c41',
  brown_700: '#5d4037',
  brown_800: '#4e342e',
  brown_900: '#3e2723',
  brown_A100: '#d7ccc8',
  brown_A200: '#bcaaa4',
  brown_A400: '#8d6e63',
  brown_A700: '#5d4037',
  grey_50: '#fafafa',
  grey_100: '#f5f5f5',
  grey_200: '#eeeeee',
  grey_300: '#e0e0e0',
  grey_400: '#bdbdbd',
  grey_500: '#9e9e9e',
  grey_600: '#757575',
  grey_700: '#616161',
  grey_800: '#424242',
  grey_900: '#212121',
  grey_A100: '#ffffff',
  grey_A200: '#000000',
  grey_A400: '#303030',
  grey_A700: '#616161',
  bluegrey_50: '#eceff1',
  bluegrey_100: '#cfd8dc',
  bluegrey_200: '#b0bec5',
  bluegrey_300: '#90a4ae',
  bluegrey_400: '#78909c',
  bluegrey_500: '#607d8b',
  bluegrey_600: '#546e7a',
  bluegrey_700: '#455a64',
  bluegrey_800: '#37474f',
  bluegrey_900: '#263238',
  bluegrey_A100: '#cfd8dc',
  bluegrey_A200: '#b0bec5',
  bluegrey_A400: '#78909c',
  bluegrey_A700: '#455a64'
};

var ELEVATION = Elevation.map(function (item, index) {
  return index;
});
var Status;

(function (Status) {
  Status[Status["success"] = 0] = "success";
  Status[Status["pending"] = 1] = "pending";
  Status[Status["failure"] = 2] = "failure";
})(Status || (Status = {}));

var Breakpoint;

(function (Breakpoint) {
  Breakpoint[Breakpoint["xs"] = 0] = "xs";
  Breakpoint[Breakpoint["sm"] = 576] = "sm";
  Breakpoint[Breakpoint["md"] = 768] = "md";
  Breakpoint[Breakpoint["lg"] = 992] = "lg";
  Breakpoint[Breakpoint["xl"] = 1200] = "xl";
})(Breakpoint || (Breakpoint = {}));

var BREAKPOINT = ['xs', 'sm', 'md', 'lg', 'xl'];
var Space;

(function (Space) {
  Space["xs"] = "xs";
  Space["sm"] = "sm";
  Space["md"] = "md";
  Space["lg"] = "lg";
  Space["xl"] = "xl";
})(Space || (Space = {}));

var Size;

(function (Size) {
  Size["xs"] = "xs";
  Size["sm"] = "sm";
  Size["md"] = "md";
  Size["lg"] = "lg";
  Size["xl"] = "xl";
})(Size || (Size = {}));

var SIZE = Object.keys(Size);
var Variety;

(function (Variety) {
  Variety["default"] = "default";
  Variety["flat"] = "flat";
  Variety["outline"] = "outline";
})(Variety || (Variety = {}));

var VARIETY = Object.keys(Variety);
var Shape;

(function (Shape) {
  Shape["circle"] = "circle";
  Shape["round"] = "round";
  Shape["corner"] = "corner";
  Shape["square"] = "square";
})(Shape || (Shape = {}));

var SHAPE = Object.keys(Shape);
var Color;

(function (Color) {
  Color["primary"] = "primary";
  Color["error"] = "error";
  Color["success"] = "success";
  Color["warning"] = "warning";
  Color["default"] = "default";
})(Color || (Color = {}));

var COLOR = Object.keys(Color);
var Mode;

(function (Mode) {
  Mode["day"] = "day";
  Mode["night"] = "night";
})(Mode || (Mode = {}));

var Fill;

(function (Fill) {
  Fill["left"] = "left";
  Fill["both"] = "both";
  Fill["right"] = "right";
  Fill["none"] = "none";
})(Fill || (Fill = {}));

var FILL = Object.keys(Fill);
var Placement;

(function (Placement) {
  Placement["top"] = "top";
  Placement["topStart"] = "top-start";
  Placement["topEnd"] = "top-end";
  Placement["bottom"] = "bottom";
  Placement["bottomStart"] = "bottom-start";
  Placement["bottomEnd"] = "bottom-end";
  Placement["left"] = "left";
  Placement["leftStart"] = "left-start";
  Placement["leftEnd"] = "left-end";
  Placement["right"] = "left";
  Placement["rightStart"] = "left-start";
  Placement["rightEnd"] = "left-end";
})(Placement || (Placement = {}));

var PLACEMENT = ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end', 'right', 'right-start', 'right-end'];
var FlexDirection;

(function (FlexDirection) {
  FlexDirection["row"] = "row";
  FlexDirection["row-reverse"] = "row-reverse";
  FlexDirection["column"] = "column";
  FlexDirection["column-reverse"] = "column-reverse";
})(FlexDirection || (FlexDirection = {}));

var FlexJustify;

(function (FlexJustify) {
  FlexJustify["start"] = "start";
  FlexJustify["center"] = "center";
  FlexJustify["end"] = "end";
  FlexJustify["between"] = "between";
  FlexJustify["around"] = "around";
  FlexJustify["evenly"] = "evenly";
  FlexJustify["none"] = "none";
})(FlexJustify || (FlexJustify = {}));

var FLEX_JUSTIFY = Object.keys(FlexJustify);
var FlexWrap;

(function (FlexWrap) {
  FlexWrap["normal"] = "normal";
  FlexWrap["reverse"] = "reverse";
  FlexWrap["none"] = "none";
})(FlexWrap || (FlexWrap = {}));

var FLEX_WRAP = Object.keys(FlexWrap);
var FlexAlign;

(function (FlexAlign) {
  FlexAlign["start"] = "start";
  FlexAlign["center"] = "center";
  FlexAlign["end"] = "end";
  FlexAlign["stretch"] = "stretch";
})(FlexAlign || (FlexAlign = {}));

var FLEX_ALIGN = Object.keys(FlexAlign);
var Align;

(function (Align) {
  Align["left"] = "left";
  Align["center"] = "center";
  Align["right"] = "right";
})(Align || (Align = {}));

var ALIGN = Object.keys(Align);
var DateValueFormat;

(function (DateValueFormat) {
  DateValueFormat["timestamp"] = "timestamp";
  DateValueFormat["Date"] = "Date";
})(DateValueFormat || (DateValueFormat = {}));

var DatePickerType;

(function (DatePickerType) {
  DatePickerType["datetime"] = "datetime";
  DatePickerType["date"] = "date";
  DatePickerType["year"] = "year";
  DatePickerType["month"] = "month";
  DatePickerType["time"] = "time";
})(DatePickerType || (DatePickerType = {}));

var DateValueType;

(function (DateValueType) {
  DateValueType["year"] = "year";
  DateValueType["month"] = "month";
  DateValueType["week"] = "week";
  DateValueType["date"] = "date";
  DateValueType["time"] = "time";
  DateValueType["hours"] = "hours";
  DateValueType["minutes"] = "minutes";
})(DateValueType || (DateValueType = {}));

var DateTimeValueType;

(function (DateTimeValueType) {
  DateTimeValueType["time"] = "time";
  DateTimeValueType["hours"] = "hours";
  DateTimeValueType["minutes"] = "minutes";
})(DateTimeValueType || (DateTimeValueType = {}));

var TransitionName;

(function (TransitionName) {
  TransitionName["none"] = "none";
  TransitionName["slideLeft"] = "slide-left";
  TransitionName["slideRight"] = "slide-right";
  TransitionName["slideUp"] = "slide-up";
  TransitionName["slideDown"] = "slide-down";
  TransitionName["expansion"] = "expansion";
  TransitionName["scale"] = "scale";
  TransitionName["fade"] = "fade";
})(TransitionName || (TransitionName = {}));

var constant = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Elevation: Elevation,
  Palette: Palette,
  ELEVATION: ELEVATION,
  get Status () { return Status; },
  get Breakpoint () { return Breakpoint; },
  BREAKPOINT: BREAKPOINT,
  get Space () { return Space; },
  get Size () { return Size; },
  SIZE: SIZE,
  get Variety () { return Variety; },
  VARIETY: VARIETY,
  get Shape () { return Shape; },
  SHAPE: SHAPE,
  get Color () { return Color; },
  COLOR: COLOR,
  get Mode () { return Mode; },
  get Fill () { return Fill; },
  FILL: FILL,
  get Placement () { return Placement; },
  PLACEMENT: PLACEMENT,
  get FlexDirection () { return FlexDirection; },
  get FlexJustify () { return FlexJustify; },
  FLEX_JUSTIFY: FLEX_JUSTIFY,
  get FlexWrap () { return FlexWrap; },
  FLEX_WRAP: FLEX_WRAP,
  get FlexAlign () { return FlexAlign; },
  FLEX_ALIGN: FLEX_ALIGN,
  get Align () { return Align; },
  ALIGN: ALIGN,
  get DateValueFormat () { return DateValueFormat; },
  get DatePickerType () { return DatePickerType; },
  get DateValueType () { return DateValueType; },
  get DateTimeValueType () { return DateTimeValueType; },
  get TransitionName () { return TransitionName; }
});

var REGEX_STYLE_UNIT = /px|vw|rem|em|%|auto|unset$/i;

var isStyleUnit = function isStyleUnit(val) {
  if (typeof val !== 'string') {
    return false;
  }

  REGEX_STYLE_UNIT.lastIndex = 0;
  return REGEX_STYLE_UNIT.test(val);
};

function isSize(value) {
  return typeof value === 'number' || isStyleUnit(value);
}
/**
 * 验证是否是有效css属性值
 * validate css variable
 * @param {string | number} val
 * @return {boolean}
 */

function isCSSVar(val) {
  return typeof val === 'number' ? false : val.indexOf('--') === 0;
}
/**
 * 获取真实渲染样式尺寸
 * @param val
 * @return {string}
 */

function getStyleSize(val) {
  return typeof val === 'number' ? "".concat(val, "px") : val;
}
/**
 * 获取真实渲染space尺寸
 * @param val
 */

function getStyleSpace(val) {
  if (val !== undefined) {
    if (typeof val === 'number') {
      return "".concat(val, "px");
    } else if (BREAKPOINT.includes(val)) {
      return "var(--m-space-".concat(val, ")");
    } else {
      return "".concat(val);
    }
  } else {
    return '';
  }
}
/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */


function genColor() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (COLOR.includes(val)) {
      styles["--".concat(compName, "-color")] = "var(--m-color-".concat(val, ")");
    } else {
      styles["--".concat(compName, "-color")] = "".concat(val);
    }
  }
}
/**
 * 获取计算颜色样式值
 * @param styles
 * @param compName
 * @param val
 */

function genFontColor() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (COLOR.includes(val)) {
      styles["--".concat(compName, "-font-color")] = "var(--m-color-".concat(val, ")");
    } else {
      styles["--".concat(compName, "-font-color")] = "".concat(val);
    }
  }
}
/**
 * 计算尺寸样式值
 * @param styles
 * @param compName
 * @param val
 */

function genSize() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var compName = arguments.length > 1 ? arguments[1] : undefined;
  var val = arguments.length > 2 ? arguments[2] : undefined;

  if (val !== undefined) {
    if (typeof val === 'number') {
      styles["--".concat(compName, "-size")] = "".concat(val, "px");
    } else if (isCSSVar(val)) {
      styles["--".concat(compName, "-size")] = "var(".concat(val, ")");
    } else if (isSize(val)) {
      styles["--".concat(compName, "-size")] = "".concat(val);
    }
  }
}
/**
 * 计算阴影
 * @param classes
 * @param val
 */

function genElevation() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var val = arguments.length > 1 ? arguments[1] : undefined;

  if (val !== undefined) {
    if (ELEVATION.includes(val)) {
      classes["m-elevation-".concat(val)] = true;
    }
  }
}
/**
 * 计算形状
 * @param classes
 * @param val
 */

function genShape() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var val = arguments.length > 1 ? arguments[1] : undefined;

  if (val !== undefined) {
    if (SHAPE.includes(val)) {
      classes["m-shape-".concat(val)] = true;
    }
  }
}
/**
 * 计算形态
 * @param classes
 * @param val
 */

function genVariety() {
  var classes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var val = arguments.length > 1 ? arguments[1] : undefined;

  if (val !== undefined) {
    if (VARIETY.includes(val)) {
      classes["m-variety-".concat(val)] = true;
    }
  }
}
//   return ''
// } else {
//   let result = val
//
//   if (HoverColor.exist(val)) {
//     result = HoverColor.getItem(val)
//   } else {
//     const realVal = getCSSVal(val)
//     const colorObj = Color(realVal)
//
//     result = colorObj.isDark()
//       ? colorObj.lighten(0.3)
//       : colorObj.darken(0.1)
//     HoverColor.setItem(val, result)
//   }
//   return `--${compName}-hover-color: ${val})`
// }

/***
 * 通用样式
 * @param styles
 * @param {string} compName
 * @param {string} property
 * @param {number | string} val
 */

function genStaticStyles(styles, compName, property, val) {
  if (val !== undefined) {
    styles["--".concat(compName, "-").concat(property)] = val;
  }
}

var css$a = "/**\r\n  expansion\r\n */\n.m-transition-expansion-enter-active,\n.m-transition-expansion-leave-active {\n  -webkit-transition: all 0.35s 0.1s cubic-bezier(0.23, 1, 0.32, 1);\n  transition: all 0.35s 0.1s cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  will-change: height;\n  overflow: hidden; }\n\n/**\r\n  fade\r\n */\n.m-transition-fade-enter-active,\n.m-transition-fade-leave-active {\n  -webkit-transition: opacity .2s ease;\n  transition: opacity .2s ease; }\n\n.m-transition-fade-enter,\n.m-transition-fade-leave-active {\n  opacity: 0; }\n\n/**\r\n  scale\r\n */\n.m-transition-scale-enter-active,\n.m-transition-scale-leave-active {\n  -webkit-transition: all .2s ease;\n  transition: all .2s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden; }\n\n.m-transition-scale-enter,\n.m-transition-scale-leave-active {\n  -webkit-transform: scale(0);\n          transform: scale(0);\n  opacity: 0; }\n\n/**\r\n  slide\r\n */\n.m-transition-slide-left-enter,\n.m-transition-slide-left-leave-to {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\n.m-transition-slide-left-enter-active,\n.m-transition-slide-left-leave-active {\n  -webkit-transition: -webkit-transform 3s linear;\n  transition: -webkit-transform 3s linear;\n  transition: transform 3s linear;\n  transition: transform 3s linear, -webkit-transform 3s linear; }\n\n.m-transition-slide-right-enter,\n.m-transition-slide-right-leave-to {\n  -webkit-transform: translate3D(100%, 0, 0);\n          transform: translate3D(100%, 0, 0); }\n\n.m-transition-slide-right-leave,\n.m-transition-slide-right-enter-to {\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0); }\n\n.m-transition-slide-right-leave-active,\n.m-transition-slide-right-enter-active {\n  -webkit-transition: -webkit-transform 3s linear;\n  transition: -webkit-transform 3s linear;\n  transition: transform 3s linear;\n  transition: transform 3s linear, -webkit-transform 3s linear;\n  will-change: transform; }\n\n.m-transition-slide-down-enter,\n.m-transition-slide-down-leave-to {\n  -webkit-transform: translate3D(0, -100%, 0);\n          transform: translate3D(0, -100%, 0); }\n\n.m-transition-slide-down-leave,\n.m-transition-slide-down-enter-to {\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0); }\n\n.m-transition-slide-down-leave-active,\n.m-transition-slide-down-enter-active {\n  -webkit-transition: -webkit-transform 3s linear;\n  transition: -webkit-transform 3s linear;\n  transition: transform 3s linear;\n  transition: transform 3s linear, -webkit-transform 3s linear;\n  will-change: transform; }\n\n.m-transition-slide-up-enter,\n.m-transition-slide-up-leave-to {\n  -webkit-transform: translate3D(0, 100%, 0);\n          transform: translate3D(0, 100%, 0); }\n\n.m-transition-slide-up-leave,\n.m-transition-slide-up-enter-to {\n  -webkit-transform: translate3D(0, 0, 0);\n          transform: translate3D(0, 0, 0); }\n\n.m-slide-up-leave-active,\n.m-slide-up-enter-active {\n  -webkit-transition: -webkit-transform 3s linear;\n  transition: -webkit-transform 3s linear;\n  transition: transform 3s linear;\n  transition: transform 3s linear, -webkit-transform 3s linear;\n  will-change: transform; }\n";
styleInject(css$a);

var compName = 'm-transition';

function getSize(size) {
  if (!size) {
    return 0;
  }

  var index = size.indexOf('px');

  if (index === -1) {
    return 0;
  }

  return Number(size.substring(0, index));
}

var Expansion = {
  beforeEnter: function beforeEnter(el) {
    // @ts-ignore
    el.dataset.originPaddingTop = el.style.paddingTop; // @ts-ignore

    el.dataset.originPaddingBottom = el.style.paddingBottom; // @ts-ignore

    el.dataset.originOverflow = el.style.overflow;
    el.style.paddingTop = '0';
    el.style.paddingBottom = '0';
    el.style.height = '0';
  },
  enter: function enter(el) {
    el.style.display = 'block';
    el.style.overflow = 'hidden'; // @ts-ignore

    el.style.height = el.scrollHeight + getSize(el.dataset.originPaddingTop) + getSize(el.dataset.originPaddingBottom) + 'px'; // @ts-ignore

    el.style.paddingTop = el.dataset.originPaddingTop; // @ts-ignore

    el.style.paddingBottom = el.dataset.originPaddingBottom;
  },
  afterEnter: function afterEnter(el) {
    // el.style.display = '';
    // el.style.height = '';
    // @ts-ignore
    el.style.overflow = el.dataset.originOverflow; // @ts-ignore

    el.style.paddingTop = el.dataset.originPaddingTop; // @ts-ignore

    el.style.paddingBottom = el.dataset.originPaddingBottom;
  },
  beforeLeave: function beforeLeave(el) {
    // @ts-ignore
    el.dataset.originPaddingTop = el.style.paddingTop; // @ts-ignore

    el.dataset.originPaddingBottom = el.style.paddingBottom; // @ts-ignore

    el.dataset.originOverflow = el.style.overflow;
    el.style.display = 'block';

    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px';
    }

    el.style.overflow = 'hidden';
  },
  leave: function leave(el) {
    if (el.scrollHeight !== 0) {
      setTimeout(function () {
        // @ts-ignore
        el.style.height = 0; // @ts-ignore

        el.style.paddingTop = 0; // @ts-ignore

        el.style.paddingBottom = 0;
      });
    }
  },
  afterLeave: function afterLeave(el) {
    el.style.display = 'none';
    el.style.height = ''; // @ts-ignore

    el.style.overflow = el.dataset.originOverflow; // @ts-ignore

    el.style.paddingTop = el.dataset.originPaddingTop; // @ts-ignore

    el.style.paddingBottom = el.dataset.originPaddingBottom;
  }
}; //

var MTransition =
/*#__PURE__*/
// @Component
function (_Vue) {
  _inherits(MTransition, _Vue);

  function MTransition() {
    _classCallCheck(this, MTransition);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTransition).apply(this, arguments));
  }

  _createClass(MTransition, [{
    key: "render",
    value: function render(h, _ref) {
      var props = _ref.props,
          data = _ref.data,
          children = _ref.children,
          listeners = _ref.listeners;
      var name = props.name;

      var _beforeEnter = function beforeEnter(el) {};

      var enter = function enter(el) {};

      var _afterEnter = function afterEnter(el) {};

      var _beforeLeave = function beforeLeave(el) {};

      var leave = function leave(el) {};

      var _afterLeave = function afterLeave(el) {};

      if (name === TransitionName.expansion) {
        _beforeEnter = Expansion.beforeEnter;
        enter = Expansion.enter;
        _afterEnter = Expansion.afterEnter;
        _beforeLeave = Expansion.beforeLeave;
        leave = Expansion.leave;
        _afterLeave = Expansion.afterLeave;
      }

      console.log("".concat(compName, "-").concat(name));
      return h("transition", {
        "attrs": {
          "name": "".concat(compName, "-").concat(name)
        },
        "on": {
          "beforeEnter": function beforeEnter(el) {
            if (listeners.onBeforeEnter && listeners.onBeforeEnter instanceof Function) {
              listeners.onBeforeEnter();
            }

            _beforeEnter(el);
          },
          "enter": enter,
          "afterEnter": function afterEnter(el) {
            if (listeners.onAfterEnter && listeners.onAfterEnter instanceof Function) {
              listeners.onAfterEnter(el);
            }

            _afterEnter(el);
          },
          "beforeLeave": function beforeLeave(el) {
            if (listeners.onBeforeLeave && listeners.onBeforeLeave instanceof Function) {
              listeners.onBeforeLeave(el);
            }

            _beforeLeave(el);
          },
          "leave": leave,
          "afterLeave": function afterLeave(el) {
            if (listeners.onAfterLeave && listeners.onAfterLeave instanceof Function) {
              listeners.onAfterLeave(el);
            }

            _afterLeave(el);
          }
        }
      }, [children]);
    }
  }]);

  return MTransition;
}(Vue);

__decorate([Prop({
  type: String,
  default: TransitionName.none
}), __metadata("design:type", String)], MTransition.prototype, "name", void 0);

MTransition = __decorate([Component({
  functional: true
}) // @Component
], MTransition);
var MTransition$1 = MTransition;

/* istanbul ignore next */

MTransition$1.install = function (Vue) {
  Vue.component('MTransition', MTransition$1);
};

var SizeMixin =
/*#__PURE__*/
function (_Vue) {
  _inherits(SizeMixin, _Vue);

  function SizeMixin() {
    _classCallCheck(this, SizeMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(SizeMixin).apply(this, arguments));
  }

  _createClass(SizeMixin, [{
    key: "sizeStyle",
    get: function get() {
      var height = this.height,
          width = this.width,
          minWidth = this.minWidth,
          minHeight = this.minHeight,
          maxHeight = this.maxHeight,
          maxWidth = this.maxWidth,
          size = this.size,
          fontSize = this.fontSize;
      var styles = {};
      genSize(styles, this.name, size);

      if (height !== undefined) {
        styles.height = getStyleSize(height);
      }

      if (width !== undefined) {
        styles.width = getStyleSize(width);
      }

      if (minHeight !== undefined) {
        styles.minHeight = getStyleSize(minHeight);
      }

      if (minWidth !== undefined) {
        styles.minWidth = getStyleSize(minWidth);
      }

      if (maxHeight !== undefined) {
        styles.maxHeight = getStyleSize(maxHeight);
      }

      if (maxWidth !== undefined) {
        styles.maxWidth = getStyleSize(maxWidth);
      }

      if (fontSize !== undefined) {
        styles.fontSize = getStyleSize(fontSize);
      }

      return styles;
    }
  }]);

  return SizeMixin;
}(Vue);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "size", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "height", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "width", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "minHeight", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "minWidth", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "maxHeight", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "maxWidth", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SizeMixin.prototype, "fontSize", void 0);

SizeMixin = __decorate([Component], SizeMixin);
var mixSize = SizeMixin;

var SpaceMixin =
/*#__PURE__*/
function (_Vue) {
  _inherits(SpaceMixin, _Vue);

  function SpaceMixin() {
    _classCallCheck(this, SpaceMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(SpaceMixin).apply(this, arguments));
  }

  _createClass(SpaceMixin, [{
    key: "spaceStyle",
    get: function get() {
      return Object.assign(Object.assign({}, this.spaceMarginStyle), this.spacePaddingStyle);
    }
  }, {
    key: "spaceMarginStyle",
    get: function get() {
      var margin = this.margin,
          marginX = this.marginX,
          marginY = this.marginY,
          marginTop = this.marginTop,
          marginBottom = this.marginBottom,
          marginLeft = this.marginLeft,
          marginRight = this.marginRight;
      var styles = {};

      if (margin !== undefined) {
        styles.margin = getStyleSpace(margin);
      }

      if (marginX !== undefined) {
        styles.marginLeft = getStyleSpace(marginX);
        styles.marginRight = getStyleSpace(marginX);
      }

      if (marginY !== undefined) {
        styles.marginTop = getStyleSpace(marginY);
        styles.marginBottom = getStyleSpace(marginY);
      }

      if (marginTop !== undefined) {
        styles.marginTop = getStyleSpace(marginTop);
      }

      if (marginBottom !== undefined) {
        styles.marginBottom = getStyleSpace(marginBottom);
      }

      if (marginLeft !== undefined) {
        styles.marginLeft = getStyleSpace(marginLeft);
      }

      if (marginRight !== undefined) {
        styles.marginRight = getStyleSpace(marginRight);
      }

      return styles;
    }
  }, {
    key: "spacePaddingStyle",
    get: function get() {
      var padding = this.padding,
          paddingX = this.paddingX,
          paddingY = this.paddingY,
          paddingTop = this.paddingTop,
          paddingBottom = this.paddingBottom,
          paddingLeft = this.paddingLeft,
          paddingRight = this.paddingRight;
      var styles = {};

      if (padding !== undefined) {
        styles.padding = getStyleSpace(padding);
      }

      if (paddingX !== undefined) {
        styles.paddingLeft = getStyleSpace(paddingX);
        styles.paddingRight = getStyleSpace(paddingX);
      }

      if (paddingY !== undefined) {
        styles.paddingTop = getStyleSpace(paddingY);
        styles.paddingBottom = getStyleSpace(paddingY);
      }

      if (paddingTop !== undefined) {
        styles.paddingTop = getStyleSpace(paddingTop);
      }

      if (paddingBottom !== undefined) {
        styles.paddingBottom = getStyleSpace(paddingBottom);
      }

      if (paddingLeft !== undefined) {
        styles.paddingLeft = getStyleSpace(paddingLeft);
      }

      if (paddingRight !== undefined) {
        styles.paddingRight = getStyleSpace(paddingRight);
      }

      return styles;
    }
  }]);

  return SpaceMixin;
}(Vue);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "marginLeft", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "marginRight", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "marginTop", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "marginBottom", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "marginX", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "marginY", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "margin", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "paddingLeft", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "paddingRight", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "paddingTop", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "paddingBottom", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "paddingX", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "paddingY", void 0);

__decorate([Prop({
  type: [String, Number]
}), __metadata("design:type", Object)], SpaceMixin.prototype, "padding", void 0);

SpaceMixin = __decorate([Component], SpaceMixin);
var mixSpace = SpaceMixin;

var ElevationMixin =
/*#__PURE__*/
function (_Vue) {
  _inherits(ElevationMixin, _Vue);

  function ElevationMixin() {
    _classCallCheck(this, ElevationMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(ElevationMixin).apply(this, arguments));
  }

  _createClass(ElevationMixin, [{
    key: "elevationClass",
    get: function get() {
      var classes = {};
      genElevation(classes, this.elevation);
      return classes;
    }
  }]);

  return ElevationMixin;
}(Vue);

__decorate([Prop({
  type: Number,
  validator: function validator(value) {
    return ELEVATION.includes(value);
  }
}), __metadata("design:type", Number)], ElevationMixin.prototype, "elevation", void 0);

ElevationMixin = __decorate([Component], ElevationMixin);
var mixElevation = ElevationMixin;

var MFrame =
/*#__PURE__*/
function (_Vue) {
  _inherits(MFrame, _Vue);

  function MFrame() {
    var _this;

    _classCallCheck(this, MFrame);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MFrame).apply(this, arguments));
    _this.name = 'm-frame';
    _this.isHeader = false;
    _this.isFooter = false;
    _this.isLeft = false;
    _this.isRight = false;
    return _this;
  }

  _createClass(MFrame, [{
    key: "RHeader",
    value: function RHeader() {
      var h = this.$createElement;
      var result = this.isHeader ? h("div", {
        "staticClass": "".concat(this.name, "-header")
      }, [this.$slots.header]) : undefined;
      return this.transition ? h("transition", {
        "attrs": {
          "name": "m-frame-transition-header"
        }
      }, [result]) : result;
    }
  }, {
    key: "RFooter",
    value: function RFooter() {
      var h = this.$createElement;
      var result = this.isFooter ? h("div", {
        "staticClass": "".concat(this.name, "-footer")
      }, [this.$slots.footer]) : undefined;
      return this.transition ? h("transition", {
        "attrs": {
          "name": "m-frame-transition-footer"
        }
      }, [result]) : result;
    }
  }, {
    key: "RLeft",
    value: function RLeft() {
      var h = this.$createElement;
      var result = this.isLeft ? h("div", {
        "staticClass": "".concat(this.name, "-left")
      }, [this.$slots.left]) : undefined;
      return this.transition ? h("transition", {
        "attrs": {
          "name": "m-frame-transition-left"
        }
      }, [result]) : result;
    }
  }, {
    key: "RRight",
    value: function RRight() {
      var h = this.$createElement;
      var result = this.isRight ? h("div", {
        "staticClass": "".concat(this.name, "-right")
      }, [this.$slots.right]) : undefined;
      return this.transition ? h("transition", {
        "attrs": {
          "name": "m-frame-transition-right"
        }
      }, [result]) : result;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          $slots = this.$slots,
          styles = this.styles,
          classes = this.classes,
          RHeader = this.RHeader,
          RFooter = this.RFooter,
          RLeft = this.RLeft,
          RRight = this.RRight;
      this.isHeader = $slots.header !== undefined;
      this.isFooter = $slots.footer !== undefined;
      this.isLeft = $slots.left !== undefined;
      this.isRight = $slots.right !== undefined;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [RHeader(), RLeft(), RRight(), RFooter(), h("section", {
        "staticClass": "".concat(name, "-main")
      }, [$slots.default])]);
    }
  }, {
    key: "classes",
    get: function get() {
      var _Object$assign;

      var fillHeader = this.fillHeader,
          fillFooter = this.fillFooter,
          isHeader = this.isHeader,
          isFooter = this.isFooter,
          isLeft = this.isLeft,
          isRight = this.isRight,
          headerFloat = this.headerFloat,
          footerFloat = this.footerFloat,
          leftFloat = this.leftFloat,
          rightFloat = this.rightFloat,
          transition = this.transition;
      return Object.assign(Object.assign({}, this.elevationClass), (_Object$assign = {
        'm--with-header': isHeader,
        'm--with-footer': isFooter,
        'm--with-left': isLeft,
        'm--with-right': isRight,
        'm--float-header': headerFloat,
        'm--float-footer': footerFloat,
        'm--float-left': leftFloat,
        'm--float-right': rightFloat,
        'm--transition': transition
      }, _defineProperty(_Object$assign, "m--fill-header-".concat(fillHeader), true), _defineProperty(_Object$assign, "m--fill-footer-".concat(fillFooter), true), _Object$assign));
    }
  }, {
    key: "styles",
    get: function get() {
      var isHeader = this.isHeader,
          isFooter = this.isFooter,
          isLeft = this.isLeft,
          isRight = this.isRight,
          headerSize = this.headerSize,
          footerSize = this.footerSize,
          leftSize = this.leftSize,
          rightSize = this.rightSize,
          headerIndex = this.headerIndex,
          footerIndex = this.footerIndex,
          leftIndex = this.leftIndex,
          rightIndex = this.rightIndex;
      var styles = Object.assign(Object.assign({}, this.sizeStyle), this.spaceMarginStyle); // if (isHeader) {
      //   genSize(styles, `${compName}-header`, headerSize)
      // }
      // if (isFooter) {
      //   genSize(styles, `${compName}-footer`, footerSize)
      // }
      // if (isLeft) {
      //   genSize(styles, `${compName}-left`, leftSize)
      // }
      // if (isRight) {
      //   genSize(styles, `${compName}-right`, rightSize)
      // }

      genSize(styles, "".concat(this.name, "-header"), headerSize);
      genSize(styles, "".concat(this.name, "-footer"), footerSize);
      genSize(styles, "".concat(this.name, "-left"), leftSize);
      genSize(styles, "".concat(this.name, "-right"), rightSize);
      genStaticStyles(styles, this.name, 'header-z-index', headerIndex);
      genStaticStyles(styles, this.name, 'footer-z-index', footerIndex);
      genStaticStyles(styles, this.name, 'left-z-index', leftIndex);
      genStaticStyles(styles, this.name, 'right-z-index', rightIndex);
      return styles;
    }
  }]);

  return MFrame;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MFrame.prototype, "transition", void 0);

__decorate([Prop({
  type: String,
  default: Fill.both
}), __metadata("design:type", String)], MFrame.prototype, "fillHeader", void 0);

__decorate([Prop({
  type: String,
  default: Fill.both
}), __metadata("design:type", String)], MFrame.prototype, "fillFooter", void 0);

__decorate([Prop({
  type: [String, Number],
  default: 0
}), __metadata("design:type", String)], MFrame.prototype, "headerSize", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MFrame.prototype, "headerIndex", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MFrame.prototype, "headerFloat", void 0);

__decorate([Prop({
  type: [String, Number],
  default: 0
}), __metadata("design:type", String)], MFrame.prototype, "footerSize", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MFrame.prototype, "footerIndex", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MFrame.prototype, "footerFloat", void 0);

__decorate([Prop({
  type: [String, Number],
  default: 0
}), __metadata("design:type", String)], MFrame.prototype, "leftSize", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MFrame.prototype, "leftIndex", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MFrame.prototype, "leftFloat", void 0);

__decorate([Prop({
  type: [String, Number],
  default: 0
}), __metadata("design:type", String)], MFrame.prototype, "rightSize", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MFrame.prototype, "rightIndex", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MFrame.prototype, "rightFloat", void 0);

MFrame = __decorate([Component({
  components: {
    MTransition: MTransition$1
  },
  mixins: [mixSize, mixSpace, mixElevation]
})], MFrame);
var MFrame$1 = MFrame;

/* istanbul ignore next */

MFrame$1.install = function (Vue) {
  Vue.component('MFrame', MFrame$1);
};

var css$b = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-view {\n  --m-view-color: var(--m-color-primary);\n  --m-view-font-color: var(--m-font-color);\n  --m-view-bg-color: var(--m-bg-color); }\n\n/**\r\n * components styles.\r\n */\n.m-view {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  color: var(--m-font-color);\n  background-color: var(--m-view-bg-color);\n  font-size: var(--m-font-base);\n  position: relative; }\n\n.m-view-scroller {\n  height: 100%;\n  width: 100%;\n  overflow: auto; }\n  .m-view-scroller::-webkit-scrollbar-thumb {\n    background-color: #a6a6a6; }\n  .m-view-scroller::-webkit-scrollbar-track {\n    background-color: #e5e5e5; }\n  .m-view-scroller::-webkit-scrollbar {\n    width: 7px; }\n  .m-view-scroller::-webkit-scrollbar-thumb {\n    border-left: 2px solid transparent; }\n  .m-view-scrollerl::-webkit-scrollbar-track {\n    border-left: 2px solid transparent; }\n";
styleInject(css$b);

/**
 * Created by nocoolyoyo on 2018/7/17.
 */
function easeIn(t, b, c, d) {
  return c * (t /= d) * t + b;
}
function strongEaseIn(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
}
function strongEaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}
function sineaseIn(t, b, c, d) {
  return c * (t /= d) * t * t + b;
}
function sineaseOut(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}

var TRANS_FUNCS = ['linear', 'easeIn', 'strongEaseIn', 'strongEaseOut', 'sineaseIn', 'sineaseOut'];
var META_CODE = {
  x: {
    start: 'left',
    size: 'width',
    clientSize: 'clientWidth',
    scrollStart: 'scrollLeft',
    scrollSize: 'scrollWidth'
  },
  y: {
    start: 'top',
    size: 'height',
    clientSize: 'clientHeight',
    scrollStart: 'scrollTop',
    scrollSize: 'scrollHeight'
  }
};
/**
 * 滚动基础方法
 * @param axis 滚动轴线
 * @param $scroller
 * @param justify 滚动偏差值： number, 复数向下滚动， 正数向上滚动
 * @param target 滚动目标, HTMLElement或者string, start:表示滚动到头部， end表示底部,
 * @param duration,
 * @param transition
 * @param onFinish
 */

function scrollTo (axis, $scroller, _a) {
  if (axis === void 0) {
    axis = 'x';
  }

  var _b = _a === void 0 ? {} : _a,
      _c = _b.justify,
      justify = _c === void 0 ? 0 : _c,
      _d = _b.target,
      target = _d === void 0 ? 0 : _d,
      _e = _b.duration,
      duration = _e === void 0 ? 500 : _e,
      _f = _b.transition,
      transition = _f === void 0 ? 'sineaseOut' : _f,
      _g = _b.position,
      position = _g === void 0 ? 'center' : _g;

  return new Promise(function (resolve) {
    if (!$scroller || !TRANS_FUNCS.includes(transition)) {
      resolve();
    }

    var META = META_CODE[axis];
    var isDomTarget = typeof target !== 'number' && target !== 'start' && target !== 'end';
    var scroll = 0; // 滚动值计算

    if (isDomTarget) {
      var rect = target.getBoundingClientRect();
      var posScroll = position === 'start' ? 0 : position === 'end' // @ts-ignore
      ? $scroller[META.clientSize] - rect[META.size] : // @ts-ignore
      ($scroller[META.clientSize] - rect[META.size]) / 2; // @ts-ignore

      scroll = rect[META.start] - posScroll + justify;
    } else {
      // @ts-ignore
      scroll = (target === 'start' // @ts-ignore
      ? -$scroller[META.scrollStart] : target === 'end' // @ts-ignore
      ? $scroller[META.scrollSize] - $scroller[META.scrollStart] - $scroller[META.clientSize] : target) + justify;
    }

    if (scroll === 0) {
      resolve();
    } // @ts-ignore


    var scrollValue = $scroller[META.scrollSize] - $scroller[META.clientSize]; // @ts-ignore

    var scrollStart = $scroller[META.scrollStart];
    var start;

    var _step2; //eval(transition): number


    var transFunc = function () {
      if (transition === 'linear') {
        return sineaseIn;
      } else if (transition === 'easeIn') {
        return easeIn;
      } else if (transition === 'strongEaseIn') {
        return strongEaseIn;
      } else if (transition === 'strongEaseOut') {
        return strongEaseOut;
      } else if (transition === 'sineaseIn') {
        return sineaseIn;
      } else if (transition === 'sineaseOut') {
        return sineaseOut;
      }
    }(); // 滚动值矫正


    if (scroll > 0) {
      var maxScroll = scrollValue - scrollStart;
      scroll = scroll > maxScroll ? maxScroll : scroll; // @ts-ignore

      _step2 = function step(timestamp) {
        if (!start) {
          start = timestamp;
        } // @ts-ignore


        var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
        stepScroll = stepScroll > scroll ? scroll : stepScroll; // @ts-ignore

        $scroller[META.scrollStart] = scrollStart + stepScroll;

        if (scroll > stepScroll) {
          // @ts-ignore
          requestAnimationFrame(_step2);
        } else {
          resolve();
        }
      };
    } else {
      // @ts-ignore
      var maxScroll = -$scroller[META.scrollStart];
      scroll = scroll < maxScroll ? maxScroll : scroll; // @ts-ignore

      _step2 = function _step(timestamp) {
        if (!start) {
          start = timestamp;
        } // @ts-ignore


        var stepScroll = transFunc(timestamp - start, 0, scroll, duration);
        stepScroll = stepScroll < scroll ? scroll : stepScroll; // @ts-ignore

        $scroller[META.scrollStart] = scrollStart + stepScroll;

        if (scroll < stepScroll) {
          // @ts-ignore
          requestAnimationFrame(_step2);
        } else {
          resolve();
        }
      };
    } // @ts-ignore


    requestAnimationFrame(_step2);
  });
}

var scrollToY = function scrollToY($scroller, scrollOpts) {
  return scrollTo('y', $scroller, scrollOpts);
};

var MView =
/*#__PURE__*/
function (_Vue) {
  _inherits(MView, _Vue);

  function MView() {
    var _this;

    _classCallCheck(this, MView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MView).apply(this, arguments));
    _this.name = 'm-view';
    _this.enableWatchScroll = false;
    _this.enableLoadMore = false;
    _this.enableRefresh = false;
    _this.pending = false;
    _this.isStart = true;
    _this.isEnd = false;
    _this.lastScrollVal = 0;
    _this.scrollKeepVal = 0;
    return _this;
  }

  _createClass(MView, [{
    key: "onScroll",
    value: function onScroll(params) {}
  }, {
    key: "handleScroll",
    value: function handleScroll(e) {
      var $scroller = this.$refs.scroller;

      if (this.enableWatchScroll) {
        var direction = $scroller.scrollTop === this.lastScrollVal ? '↕' : $scroller.scrollTop > this.lastScrollVal ? '↓' : '↑';
        this.isStart = $scroller.scrollTop === 0;
        this.isEnd = $scroller.scrollTop + $scroller.offsetHeight + 5 > $scroller.scrollHeight; // 加1的浮点计算误差

        this.onScroll([e, $scroller.scrollTop, this.isStart, this.isEnd, direction]);
        this.lastScrollVal = $scroller.scrollTop;
      } // 滚动加载

    }
  }, {
    key: "refresh",
    value: function refresh() {}
  }, {
    key: "loadMore",
    value: function loadMore() {}
  }, {
    key: "scrollTo",
    value: function scrollTo(target) {
      scrollToY(this.$refs.scroller, {
        target: target
      });
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.$listeners.loadMore || this.$listeners.scroll) {
        this.enableWatchScroll = true;
      }

      if (this.$listeners.loadMore) {
        this.enableLoadMore = true;
      } // 添加scroll绑定


      if (this.enableWatchScroll) {
        // @ts-ignore
        this.$refs.scroller.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "activated",
    value: function activated() {
      // 恢复滚动位置
      if (this.scrollKeep && this.scrollKeepVal !== this.$refs.scroller.scrollTop) {
        // @ts-ignore
        this.$refs.scroller.scrollTop = this.scrollKeepVal;
      }
    }
  }, {
    key: "deactivated",
    value: function deactivated() {
      // 记录滚动位置
      if (this.scrollKeep && this.scrollKeepVal !== this.$refs.scroller.scrollTop) {
        this.scrollKeepVal = this.$refs.scroller.scrollTop;
      }
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      // 移除scroll绑定
      if (this.enableWatchScroll) {
        // @ts-ignore
        this.$refs.scroller.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          $slots = this.$slots,
          styles = this.styles,
          classes = this.classes,
          scrollerStyles = this.scrollerStyles;
      return h("section", {
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [h("section", {
        "staticClass": "".concat(name, "-scroller"),
        "ref": "scroller",
        "class": classes,
        "style": scrollerStyles
      }, [$slots.default])]);
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign({}, this.elevationClass);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign({}, this.sizeStyle), this.spaceMarginStyle);
    }
  }, {
    key: "scrollerStyles",
    get: function get() {
      return Object.assign({}, this.spacePaddingStyle);
    }
  }]);

  return MView;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MView.prototype, "scrollKeep", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], MView.prototype, "onRefresh", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], MView.prototype, "onLoadMore", void 0);

__decorate([Emit('scroll'), __metadata("design:type", Function), __metadata("design:paramtypes", [Array]), __metadata("design:returntype", void 0)], MView.prototype, "onScroll", null);

MView = __decorate([Component({
  mixins: [mixSize, mixSpace, mixElevation]
})], MView);
var MView$1 = MView;

/* istanbul ignore next */

MView$1.install = function (Vue) {
  Vue.component('MView', MView$1);
};

var css$c = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n/**\r\n * components styles.\r\n */\n.m-icon {\n  fill: currentColor; }\n";
styleInject(css$c);

var SIZE$1 = {
  xs: 12,
  sm: 24,
  md: 32,
  lg: 40,
  xl: 50
};
var Icons = {};

var MIcon =
/*#__PURE__*/
function (_Vue) {
  _inherits(MIcon, _Vue);

  function MIcon() {
    var _this;

    _classCallCheck(this, MIcon);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MIcon).apply(this, arguments));
    _this.name = 'm-icon';
    return _this;
  }

  _createClass(MIcon, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          value = this.value,
          $slots = this.$slots,
          size = this.size;
      var icon = Icons[value];

      if (!icon) {
        console.error("\u5B58\u5728\u672A\u6CE8\u518C\u7684\u56FE\u6807".concat(value));
        return h("span");
      }

      var height = SIZE$1[size] ? SIZE$1[size] : size;
      var width = height * (icon.height / icon.width);
      return h("svg", {
        "attrs": {
          "xmlns": 'http://www.w3.org/2000/svg',
          "version": '1.1',
          "height": height,
          "width": width,
          "viewBox": icon.viewBox
        },
        "staticClass": "".concat(name, " ").concat(name, "__").concat(value)
      }, [icon.paths ? icon.paths.map(function (path) {
        return h("path", {
          "attrs": {
            "d": path
          }
        });
      }) : h("span"), icon.polygons ? icon.polygons.map(function (path) {
        return h("polygon", {
          "attrs": {
            "points": path
          }
        });
      }) : h("span")]);
    }
  }], [{
    key: "register",
    value: function register() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      for (var item in data) {
        if (data.hasOwnProperty(item)) {
          var icon = data[item];

          if (icon.d) {
            if (!icon.paths) {
              icon.paths = [];
            }

            icon.paths.push({
              d: icon.d
            });
          }

          if (icon.points) {
            if (!icon.polygons) {
              icon.polygons = [];
            }

            icon.polygons.push({
              points: icon.points
            });
          }

          Icons[item] = icon;
        }
      }
    }
  }]);

  return MIcon;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MIcon.prototype, "value", void 0);

__decorate([Prop({
  type: [String, Number],
  default: Size.sm
}), __metadata("design:type", Object)], MIcon.prototype, "size", void 0);

MIcon = __decorate([Component], MIcon);
var MIcon$1 = MIcon;

/* eslint-disable */
var menu = {
  "menu": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M3 6h18v2.016h-18v-2.016zM3 12.984v-1.969h18v1.969h-18zM3 18v-2.016h18v2.016h-18z"]
  }
};

/* eslint-disable */
var close = {
  "close": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"]
  }
};

/* eslint-disable */
var search = {
  "search": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9.516 14.016q1.875 0 3.188-1.313t1.313-3.188-1.313-3.188-3.188-1.313-3.188 1.313-1.313 3.188 1.313 3.188 3.188 1.313zM15.516 14.016l4.969 4.969-1.5 1.5-4.969-4.969v-0.797l-0.281-0.281q-1.781 1.547-4.219 1.547-2.719 0-4.617-1.875t-1.898-4.594 1.898-4.617 4.617-1.898 4.594 1.898 1.875 4.617q0 0.984-0.469 2.227t-1.078 1.992l0.281 0.281h0.797z"]
  }
};

/* eslint-disable */
var navigate_before = {
  "navigate_before": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M15.422 7.406l-4.594 4.594 4.594 4.594-1.406 1.406-6-6 6-6z"]
  }
};

/* eslint-disable */
var navigate_next = {
  "navigate_next": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"]
  }
};

/* eslint-disable */
var arrow_drop_down = {
  "arrow_drop_down": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M6.984 9.984h10.031l-5.016 5.016z"]
  }
};

/* eslint-disable */
var cancel = {
  "cancel": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M17.016 15.609l-3.609-3.609 3.609-3.609-1.406-1.406-3.609 3.609-3.609-3.609-1.406 1.406 3.609 3.609-3.609 3.609 1.406 1.406 3.609-3.609 3.609 3.609zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"]
  }
};

/* eslint-disable */
var check_box = {
  "check_box": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563-1.406 1.406zM18.984 3q0.844 0 1.43 0.586t0.586 1.43v13.969q0 0.844-0.586 1.43t-1.43 0.586h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-13.969q0-0.844 0.586-1.43t1.43-0.586h13.969z"]
  }
};

/* eslint-disable */
var check_box_outline_blank = {
  "check_box_outline_blank": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 3q0.797 0 1.406 0.609t0.609 1.406v13.969q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-13.969q0-0.797 0.609-1.406t1.406-0.609h13.969zM18.984 5.016h-13.969v13.969h13.969v-13.969z"]
  }
};

/* eslint-disable */
var indeterminate_check_box = {
  "indeterminate_check_box": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M17.016 12.984v-1.969h-10.031v1.969h10.031zM18.984 3q0.797 0 1.406 0.609t0.609 1.406v13.969q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-13.969q0-0.797 0.609-1.406t1.406-0.609h13.969z"]
  }
};

/* eslint-disable */
var radio_button_checked = {
  "radio_button_checked": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM12 6.984q2.063 0 3.539 1.477t1.477 3.539-1.477 3.539-3.539 1.477-3.539-1.477-1.477-3.539 1.477-3.539 3.539-1.477z"]
  }
};

/* eslint-disable */
var radio_button_unchecked = {
  "radio_button_unchecked": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12 20.016c4.406 0 8.016-3.609 8.016-8.016s-3.609-8.016-8.016-8.016-8.016 3.609-8.016 8.016 3.609 8.016 8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"]
  }
};

/* eslint-disable */
var check = {
  "check": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M9 16.172l10.594-10.594 1.406 1.406-12 12-5.578-5.578 1.406-1.406z"]
  }
};

/* eslint-disable */
var info_outline = {
  "info_outline": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M11.016 9v-2.016h1.969v2.016h-1.969zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM11.016 17.016v-6h1.969v6h-1.969z"]
  }
};

/* eslint-disable */
var warning = {
  "warning": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12.984 14.016v-4.031h-1.969v4.031h1.969zM12.984 18v-2.016h-1.969v2.016h1.969zM0.984 21l11.016-18.984 11.016 18.984h-22.031z"]
  }
};

/* eslint-disable */
var error = {
  "error": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M12.984 12.984v-6h-1.969v6h1.969zM12.984 17.016v-2.016h-1.969v2.016h1.969zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"]
  }
};

/* eslint-disable */
var keyboard_arrow_down = {
  "keyboard_arrow_down": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M7.406 8.578l4.594 4.594 4.594-4.594 1.406 1.406-6 6-6-6z"]
  }
};

/* eslint-disable */
var keyboard_arrow_up = {
  "keyboard_arrow_up": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z"]
  }
};

/* eslint-disable */
var keyboard_arrow_right = {
  "keyboard_arrow_right": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M8.578 16.594l4.594-4.594-4.594-4.594 1.406-1.406 6 6-6 6z"]
  }
};

/* eslint-disable */
var add = {
  "add": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 12.984h-6v6h-1.969v-6h-6v-1.969h6v-6h1.969v6h6v1.969z"]
  }
};

/* eslint-disable */
var remove = {
  "remove": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M18.984 12.984h-13.969v-1.969h13.969v1.969z"]
  }
};

/* eslint-disable */
var arrow_upward = {
  "arrow_upward": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M3.984 12l8.016-8.016 8.016 8.016-1.453 1.406-5.578-5.578v12.188h-1.969v-12.188l-5.625 5.578z"]
  }
};

/* eslint-disable */
var arrow_downward = {
  "arrow_downward": {
    "height": "24",
    "width": "24",
    "viewBox": "0 0 24 24",
    "paths": ["M20.016 12l-8.016 8.016-8.016-8.016 1.453-1.406 5.578 5.578v-12.188h1.969v12.188l5.625-5.578z"]
  }
};

MIcon$1.install = function (Vue) {
  Vue.component('MIcon', MIcon$1);
  MIcon$1.register(menu);
  MIcon$1.register(close);
  MIcon$1.register(search);
  MIcon$1.register(menu);
  MIcon$1.register(navigate_before);
  MIcon$1.register(navigate_next);
  MIcon$1.register(arrow_drop_down);
  MIcon$1.register(cancel);
  MIcon$1.register(check_box);
  MIcon$1.register(check_box_outline_blank);
  MIcon$1.register(indeterminate_check_box);
  MIcon$1.register(radio_button_checked);
  MIcon$1.register(radio_button_unchecked);
  MIcon$1.register(check);
  MIcon$1.register(info_outline);
  MIcon$1.register(warning);
  MIcon$1.register(error);
  MIcon$1.register(keyboard_arrow_down);
  MIcon$1.register(keyboard_arrow_up);
  MIcon$1.register(keyboard_arrow_right);
  MIcon$1.register(add);
  MIcon$1.register(remove);
  MIcon$1.register(arrow_upward);
  MIcon$1.register(arrow_downward);
};

var css$d = "@charset \"UTF-8\";\n:root {\n  --m-breakpoint-xs: 0;\n  --m-breakpoint-sm: 576px;\n  --m-breakpoint-md: 768px;\n  --m-breakpoint-lg: 992px;\n  --m-breakpoint-xl: 1200px; }\n\n/*\r\n * 断点\r\n */\n/*\r\n * 栅格响应断点\r\n */\n/*\r\n * 栅格容器尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-row {\n  --m-row-cols: 24;\n  --m-row-gutter: 0; }\n\n.m-col {\n  --m-col-span-xs: var(--m-row-cols);\n  --m-col-span-sm: var(--m-col-span-xs);\n  --m-col-span-md: var(--m-col-span-sm);\n  --m-col-span-lg: var(--m-col-span-md);\n  --m-col-span-xl: var(--m-col-span-lg); }\n\n.m-container {\n  --m-container-xs: 0;\n  --m-container-sm: var(--m-col-span-xs);\n  --m-container-md: var(--m-col-span-sm);\n  --m-container-lg: var(--m-col-span-md);\n  --m-container-xl: var(--m-col-span-lg); }\n\n/**\r\n * components styles.\r\n */\n.m-row,\n.m-col {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n.m-row {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  width: 100%; }\n\n.m-col {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: calc((var(--m-col-span-xs) / var(--m-row-cols)) * 100%);\n  padding: var(--m-row-gutter);\n  width: calc((var(--m-col-span-xs) / var(--m-row-cols)) * 100%); }\n  @media (min-width: 576px) {\n    .m-col {\n      width: calc((var(--m-col-span-sm) / var(--m-row-cols)) * 100%); } }\n  @media (min-width: 768px) {\n    .m-col {\n      width: calc((var(--m-col-span-md) / var(--m-row-cols)) * 100%); } }\n  @media (min-width: 992px) {\n    .m-col {\n      width: calc((var(--m-col-span-lg) / var(--m-row-cols)) * 100%); } }\n  @media (min-width: 1200px) {\n    .m-col {\n      width: calc((var(--m-col-span-xl) / var(--m-row-cols)) * 100%); } }\n\n.m-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  margin: auto; }\n  @media (min-width: 540px) {\n    .m-container {\n      max-width: 540px; } }\n  @media (min-width: 720px) {\n    .m-container {\n      max-width: 720px; } }\n  @media (min-width: 960px) {\n    .m-container {\n      max-width: 960px; } }\n  @media (min-width: 1140px) {\n    .m-container {\n      max-width: 1140px; } }\n\n.m-flex {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n  .m-flex.m--block {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%; }\n  .m-flex.m--direction-row {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row; }\n  .m-flex.m--direction-row-reverse {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n  .m-flex.m--direction-column {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .m-flex.m--direction-column-reverse {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: column-reverse;\n            flex-direction: column-reverse; }\n  .m-flex.m--wrap-normal {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .m-flex.m--wrap-reverse {\n    -ms-flex-wrap: wrap-reverse;\n        flex-wrap: wrap-reverse; }\n  .m-flex.m--wrap-none {\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap; }\n  .m-flex.m--justify-start {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start; }\n  .m-flex.m--justify-center {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n  .m-flex.m--justify-end {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n  .m-flex.m--justify-between {\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .m-flex.m--justify-around {\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n  .m-flex.m--justify-evenly {\n    -webkit-box-pack: space-evenly;\n        -ms-flex-pack: space-evenly;\n            justify-content: space-evenly; }\n  .m-flex.m--align-start {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start; }\n  .m-flex.m--align-center {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .m-flex.m--align-stretch {\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch; }\n  .m-flex.m--align-end {\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end; }\n\n.m-flex-filler {\n  -webkit-box-flex: 1 !important;\n      -ms-flex-positive: 1 !important;\n          flex-grow: 1 !important;\n  background-color: transparent; }\n";
styleInject(css$d);

var ColorMixin =
/*#__PURE__*/
function (_Vue) {
  _inherits(ColorMixin, _Vue);

  function ColorMixin() {
    _classCallCheck(this, ColorMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(ColorMixin).apply(this, arguments));
  }

  _createClass(ColorMixin, [{
    key: "colorStyle",
    get: function get() {
      var styles = {};
      genFontColor(styles, this.name, this.fontColor);
      genColor(styles, this.name, this.color);
      return styles;
    }
  }]);

  return ColorMixin;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], ColorMixin.prototype, "fontColor", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], ColorMixin.prototype, "color", void 0);

ColorMixin = __decorate([Component], ColorMixin);
var mixColor = ColorMixin;

var MContainer =
/*#__PURE__*/
function (_Vue) {
  _inherits(MContainer, _Vue);

  function MContainer() {
    var _this;

    _classCallCheck(this, MContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MContainer).apply(this, arguments));
    _this.name = 'm-container';
    return _this;
  }

  _createClass(MContainer, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          $slots = this.$slots,
          styles = this.styles,
          classes = this.classes;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [$slots.default]);
    }
  }, {
    key: "styles",
    get: function get() {
      var _this2 = this;

      var styles = Object.assign(Object.assign(Object.assign({}, this.spaceStyle), this.colorStyle), this.sizeStyle);
      BREAKPOINT.forEach(function (breakpoint) {
        if (_this2[breakpoint]) {
          genStaticStyles(styles, _this2.name, breakpoint, _this2[breakpoint]);
        }
      });
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign({}, this.elevationClass);
    }
  }]);

  return MContainer;
}(Vue);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MContainer.prototype, "xs", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MContainer.prototype, "sm", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MContainer.prototype, "md", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MContainer.prototype, "lg", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MContainer.prototype, "xl", void 0);

MContainer = __decorate([Component({
  mixins: [mixSpace, mixSize, mixColor]
})], MContainer);
var MContainer$1 = MContainer;

var MRow =
/*#__PURE__*/
function (_Vue) {
  _inherits(MRow, _Vue);

  function MRow() {
    var _this;

    _classCallCheck(this, MRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MRow).apply(this, arguments));
    _this.name = 'm-row';
    return _this;
  }

  _createClass(MRow, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          $slots = this.$slots,
          styles = this.styles,
          classes = this.classes;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [$slots.default]);
    }
  }, {
    key: "styles",
    get: function get() {
      var styles = Object.assign(Object.assign(Object.assign(Object.assign({}, this.spaceStyle), this.colorStyle), this.sizeStyle), {
        '--m-row-gutter': getStyleSize(this.gutter)
      });
      genStaticStyles(styles, this.name, 'cols', this.cols);
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign({}, this.elevationClass);
    }
  }]);

  return MRow;
}(Vue);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MRow.prototype, "cols", void 0);

__decorate([Prop({
  type: [Number, String]
}), __metadata("design:type", Object)], MRow.prototype, "gutter", void 0);

MRow = __decorate([Component({
  mixins: [mixColor, mixSize, mixSpace, mixElevation]
})], MRow);
var MRow$1 = MRow;

var MCol =
/*#__PURE__*/
function (_Vue) {
  _inherits(MCol, _Vue);

  function MCol() {
    var _this;

    _classCallCheck(this, MCol);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MCol).apply(this, arguments));
    _this.name = 'm-col';
    return _this;
  }

  _createClass(MCol, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          $slots = this.$slots,
          styles = this.styles,
          classes = this.classes;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [$slots.default]);
    }
  }, {
    key: "styles",
    get: function get() {
      var _this2 = this;

      var styles = {};
      BREAKPOINT.forEach(function (breakpoint) {
        if (_this2[breakpoint]) {
          genStaticStyles(styles, _this2.name, "span-".concat(breakpoint), _this2[breakpoint]);
        }
      });
      return styles;
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign({}, this.elevationClass);
    }
  }]);

  return MCol;
}(Vue);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "xs", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "sm", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "md", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "lg", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MCol.prototype, "xl", void 0);

MCol = __decorate([Component], MCol);
var MCol$1 = MCol;

var ShapeMixin =
/*#__PURE__*/
function (_Vue) {
  _inherits(ShapeMixin, _Vue);

  function ShapeMixin() {
    _classCallCheck(this, ShapeMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShapeMixin).apply(this, arguments));
  }

  _createClass(ShapeMixin, [{
    key: "shapeClass",
    get: function get() {
      var classes = {};
      genShape(classes, this.shape);
      return classes;
    }
  }]);

  return ShapeMixin;
}(Vue);

__decorate([Prop({
  type: String,
  validator: function validator(value) {
    return SHAPE.includes(value);
  }
}), __metadata("design:type", String)], ShapeMixin.prototype, "shape", void 0);

ShapeMixin = __decorate([Component], ShapeMixin);
var mixShape = ShapeMixin;

var MFlex =
/*#__PURE__*/
function (_Vue) {
  _inherits(MFlex, _Vue);

  function MFlex() {
    var _this;

    _classCallCheck(this, MFlex);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MFlex).apply(this, arguments));
    _this.name = 'm-flex';
    return _this;
  }

  _createClass(MFlex, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          $slots = this.$slots,
          classes = this.classes,
          styles = this.styles;
      return h("div", {
        "staticClass": name,
        "style": styles,
        "class": classes
      }, [$slots.default]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.spaceStyle), this.sizeStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var _Object$assign;

      var wrap = this.wrap,
          justify = this.justify,
          align = this.align,
          block = this.block,
          direction = this.direction;
      return Object.assign(Object.assign(Object.assign({}, this.shapeClass), this.elevationClass), (_Object$assign = {}, _defineProperty(_Object$assign, "m--wrap-".concat(wrap), true), _defineProperty(_Object$assign, "m--justify-".concat(justify), true), _defineProperty(_Object$assign, "m--align-".concat(align), true), _defineProperty(_Object$assign, "m--direction-".concat(direction), true), _defineProperty(_Object$assign, "m--block", block), _Object$assign));
    }
  }]);

  return MFlex;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MFlex.prototype, "block", void 0);

__decorate([Prop({
  type: String,
  default: FlexWrap.normal
}), __metadata("design:type", String)], MFlex.prototype, "wrap", void 0);

__decorate([Prop({
  type: String,
  default: FlexJustify.start
}), __metadata("design:type", String)], MFlex.prototype, "justify", void 0);

__decorate([Prop({
  type: String,
  default: FlexAlign.center
}), __metadata("design:type", String)], MFlex.prototype, "align", void 0);

__decorate([Prop({
  type: String,
  default: FlexDirection.row
}), __metadata("design:type", String)], MFlex.prototype, "direction", void 0);

MFlex = __decorate([Component({
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixElevation]
})], MFlex);
var MFlex$1 = MFlex;

var compName$1 = 'm-flex-filler';

var MFlexFiller =
/*#__PURE__*/
function (_Vue) {
  _inherits(MFlexFiller, _Vue);

  function MFlexFiller() {
    _classCallCheck(this, MFlexFiller);

    return _possibleConstructorReturn(this, _getPrototypeOf(MFlexFiller).apply(this, arguments));
  }

  _createClass(MFlexFiller, [{
    key: "render",
    value: function render() {
      var h = arguments[0];
      return h("div", {
        "class": compName$1
      });
    }
  }]);

  return MFlexFiller;
}(Vue);

MFlexFiller = __decorate([Component({
  functional: true
})], MFlexFiller);
var MFlexFiller$1 = MFlexFiller;

MContainer$1.install = function (Vue) {
  Vue.component('MContainer', MContainer$1);
};

MRow$1.install = function (Vue) {
  Vue.component('MRow', MRow$1);
};

MCol$1.install = function (Vue) {
  Vue.component('MCol', MCol$1);
};

MFlex$1.install = function (Vue) {
  Vue.component('MFlex', MFlex$1);
};

MFlexFiller$1.install = function (Vue) {
  Vue.component('MFlexFiller', MFlexFiller$1);
};

var css$e = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-app-bar {\n  --m-app-bar-color: var(--m-color-primary);\n  --m-app-bar-font-color: var(--m-bg-color);\n  --m-app-bar-size: 50px; }\n\n/**\r\n * components styles.\r\n */\n.m-app-bar {\n  height: var(--m-app-bar-size);\n  color: var(--m-app-bar-font-color);\n  background-color: var(--m-app-bar-color);\n  width: 100%;\n  max-width: 100vw;\n  max-height: 100vh;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  padding: 0 var(--m-space-sm);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-transition: all ease .2s;\n  transition: all ease .2s;\n  border: 0 solid transparent; }\n  .m-app-bar.m-variety-default {\n    color: var(--m-app-bar-font-color);\n    background-color: var(--m-app-bar-color); }\n  .m-app-bar.m-variety-flat {\n    color: var(--m-app-bar-color);\n    background-color: var(--m-bg-color); }\n  .m-app-bar.m-variety-outline {\n    color: var(--m-app-bar-color);\n    background-color: var(--m-bg-color);\n    border: 2px solid var(--m-app-bar-color); }\n  .m-app-bar.m--horizontal {\n    width: var(--m-app-bar-size);\n    height: 100%; }\n  .m-app-bar-main {\n    min-height: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: nowrap;\n        flex-wrap: nowrap;\n    white-space: nowrap;\n    word-break: keep-all;\n    overflow-x: auto;\n    overflow-y: hidden;\n    -webkit-overflow-scrolling: touch;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0); }\n    .m-app-bar-main::-webkit-scrollbar {\n      width: 0;\n      height: 0; }\n";
styleInject(css$e);

var scrollToX = function scrollToX($scroller, scrollOpts) {
  return scrollTo('x', $scroller, scrollOpts);
};

var VarietyMixin =
/*#__PURE__*/
function (_Vue) {
  _inherits(VarietyMixin, _Vue);

  function VarietyMixin() {
    _classCallCheck(this, VarietyMixin);

    return _possibleConstructorReturn(this, _getPrototypeOf(VarietyMixin).apply(this, arguments));
  }

  _createClass(VarietyMixin, [{
    key: "varietyClass",
    get: function get() {
      var classes = {};
      genVariety(classes, this.variety);
      return classes;
    }
  }]);

  return VarietyMixin;
}(Vue);

__decorate([Prop({
  type: String,
  validator: function validator(value) {
    return VARIETY.includes(value);
  }
}), __metadata("design:type", String)], VarietyMixin.prototype, "variety", void 0);

VarietyMixin = __decorate([Component], VarietyMixin);
var mixVariety = VarietyMixin;

var MAppBar =
/*#__PURE__*/
function (_Vue) {
  _inherits(MAppBar, _Vue);

  function MAppBar() {
    var _this;

    _classCallCheck(this, MAppBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MAppBar).apply(this, arguments));
    _this.name = 'm-app-bar';
    _this.lastScrollVal = 0;
    return _this;
  }

  _createClass(MAppBar, [{
    key: "scrollTo",
    value: function scrollTo() {} // 滚轮映射

  }, {
    key: "handleWheel",
    value: function handleWheel(e) {
      if (!e.shiftKey) {
        e.preventDefault();
        scrollToX(this.$refs.scroller, {
          target: e.deltaY * 2,
          duration: 200
        });
      }
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      var $scroller = this.$refs.scroller;
      this.lastScrollVal = $scroller.scrollTop;
    }
  }, {
    key: "activated",
    value: function activated() {
      // 恢复滚动位置
      if (this.scrollKeep && this.lastScrollVal !== this.$refs.scroller.scrollLeft) {
        this.$refs.scroller.scrollLeft = this.lastScrollVal;
      }
    }
  }, {
    key: "deactivated",
    value: function deactivated() {
      // 记录滚动位置
      if (this.scrollKeep && this.lastScrollVal !== this.$refs.scroller.scrollLeft) {
        this.lastScrollVal = this.$refs.scroller.scrollLeft;
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      if (this.enableMouseScroll) {
        this.$refs.scroller.addEventListener('mousewheel', this.handleWheel);
      }
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      // 移除scroll绑定
      if (this.enableMouseScroll) {
        this.$refs.scroller.removeEventListener('mousewheel', this.handleWheel);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          $slots = this.$slots,
          classes = this.classes,
          styles = this.styles,
          handleScroll = this.handleScroll;
      return h("div", {
        "staticClass": name,
        "style": styles,
        "class": classes
      }, [$slots.left, h("section", {
        "ref": "scroller",
        "staticClass": "".concat(name, "-main"),
        "on": {
          "scroll": handleScroll
        }
      }, [$slots.default]), $slots.right]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign(Object.assign({}, this.elevationClass), this.varietyClass);
    }
  }]);

  return MAppBar;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MAppBar.prototype, "enableMouseScroll", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
}), __metadata("design:type", Boolean)], MAppBar.prototype, "scrollKeep", void 0);

MAppBar = __decorate([Component({
  mixins: [mixColor, mixSize, mixSpace, mixElevation, mixVariety]
})], MAppBar);
var MAppBar$1 = MAppBar;

MAppBar$1.install = function (Vue) {
  Vue.component('MAppBar', MAppBar$1);
};

var css$f = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-button {\n  --m-button-color: var(--m-color-primary);\n  --m-button-hover-color: var(--m-color-primary);\n  --m-button-font-color: var(--m-bg-color);\n  --m-button-size: 36px;\n  --m-button-border-size: 2px; }\n\n/**\r\n * components styles.\r\n */\n.m-button {\n  outline: none;\n  background-color: var(--m-button-color);\n  color: var(--m-button-font-color);\n  min-height: var(--m-button-size);\n  height: var(--m-button-size);\n  min-width: var(--m-button-size);\n  border-radius: var(--m-shape-corner);\n  border: var(--m-button-border-size) solid transparent;\n  padding: 0 10px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  border-width: 0;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  -webkit-transition: all ease .2s;\n  transition: all ease .2s; }\n  .m-button:hover {\n    opacity: .8; }\n  .m-button.m-variety-outline {\n    background-color: var(--m-bg-color-main);\n    color: var(--m-button-color);\n    border: var(--m-button-border-size) solid var(--m-button-color);\n    padding: 0; }\n    .m-button.m-variety-outline:hover {\n      color: var(--m-button-color); }\n  .m-button.m-variety-flat {\n    background-color: transparent;\n    color: var(--m-button-color); }\n  .m-button.m-shape-circle {\n    border-radius: var(--m-button-size); }\n  .m-button.m-shape-round {\n    border-radius: var(--m-shape-round); }\n  .m-button.m-shape-square {\n    border-radius: var(--m-shape-square); }\n  .m-button.m--block {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .m-button.m--disabled {\n    opacity: .6; }\n";
styleInject(css$f);

var MButton =
/*#__PURE__*/
function (_Vue) {
  _inherits(MButton, _Vue);

  function MButton() {
    var _this;

    _classCallCheck(this, MButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MButton).apply(this, arguments));
    _this.name = 'm-button';
    return _this;
  }

  _createClass(MButton, [{
    key: "onClick",
    value: function onClick(e) {}
  }, {
    key: "handleClick",
    value: function handleClick(e) {
      if (!this.disabled) {
        this.onClick(e);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          classes = this.classes,
          styles = this.styles,
          handleClick = this.handleClick,
          disabled = this.disabled; // {!icon ? undefined
      //   : <MIcon value={icon} />}
      // {!this.$slots.default ? undefined
      //   : <div class={`${name}__main`}>{this.$slots.default}</div>}
      // {!icon ? undefined
      //   : <MIcon value={icon} />}

      return h("div", {
        "directives": [{
          name: "m-ripple",
          value: !disabled
        }],
        "staticClass": name,
        "class": classes,
        "style": styles,
        "on": {
          "click": handleClick
        }
      }, [this.$slots.default]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var block = this.block,
          disabled = this.disabled;
      return Object.assign(Object.assign(Object.assign(Object.assign({}, this.elevationClass), this.shapeClass), this.varietyClass), {
        'm--block': block,
        'm--disabled': disabled
      });
    }
  }]);

  return MButton;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MButton.prototype, "block", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MButton.prototype, "loading", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MButton.prototype, "disabled", void 0);

__decorate([Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MButton.prototype, "onClick", null);

MButton = __decorate([Component({
  mixins: [mixColor, mixSize, mixSpace, mixElevation, mixVariety, mixShape]
})], MButton);
var MButton$1 = MButton;

MButton$1.install = function (Vue) {
  Vue.component('MButton', MButton$1);
};

var css$g = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-avatar {\n  --m-avatar-color: var(--m-color-primary);\n  --m-avatar-font-color: var(--m-bg-color);\n  --m-avatar-size: 40px;\n  --m-avatar-border-size: 2px; }\n\n/**\r\n * components styles.\r\n */\n.m-avatar {\n  background-color: var(--m-avatar-color);\n  color: var(--m-avatar-font-color);\n  width: var(--m-avatar-size);\n  height: var(--m-avatar-size);\n  min-width: var(--m-avatar-size);\n  min-height: var(--m-avatar-size);\n  max-width: var(--m-avatar-size);\n  max-height: var(--m-avatar-size);\n  font-size: var(--m-avatar-font-size);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  cursor: pointer;\n  position: relative;\n  overflow: hidden;\n  border-width: 0;\n  -webkit-transition: all ease .2s;\n  transition: all ease .2s; }\n  .m-avatar.m-variety-outline {\n    background-color: var(--m-bg-color);\n    border-color: var(--m-avatar-color);\n    color: var(--m-avatar-color);\n    border-width: var(--m-avatar-border-size);\n    border-style: solid; }\n  .m-avatar.m--status-pending .m-avatar-image, .m-avatar.m--status-success .m-avatar-image {\n    opacity: 1; }\n  .m-avatar.m--status-failure .m-avatar-image {\n    opacity: 0; }\n  .m-avatar.m--transition .m-avatar-image {\n    -webkit-transition: opacity ease .2s;\n    transition: opacity ease .2s; }\n\n.m-avatar-image {\n  -webkit-transition: none;\n  transition: none;\n  height: 100%;\n  min-height: 100%;\n  max-height: 100%;\n  width: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0; }\n";
styleInject(css$g);

var MAvatar =
/*#__PURE__*/
function (_Vue) {
  _inherits(MAvatar, _Vue);

  function MAvatar() {
    var _this;

    _classCallCheck(this, MAvatar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MAvatar).apply(this, arguments));
    _this.name = 'm-avatar';
    _this.status = Status.pending;
    return _this;
  }

  _createClass(MAvatar, [{
    key: "updateSrc",
    value: function updateSrc(val) {
      if (val !== undefined) {
        this.status = Status.pending;
        this.curSrc = val;
      }
    }
  }, {
    key: "loadSuccess",
    value: function loadSuccess() {
      this.status = Status.success;
    }
  }, {
    key: "loadFailure",
    value: function loadFailure() {
      this.status = Status.failure;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          styles = this.styles,
          classes = this.classes,
          curSrc = this.curSrc,
          loadSuccess = this.loadSuccess,
          loadFailure = this.loadFailure;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [this.$slots.default, h("img", {
        "staticClass": "".concat(name, "-image"),
        "attrs": {
          "alt": '',
          "src": curSrc
        },
        "on": {
          "load": loadSuccess,
          "error": loadFailure
        }
      })]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var status = this.status,
          transition = this.transition;
      return Object.assign(Object.assign(Object.assign(Object.assign({}, this.elevationClass), this.shapeClass), this.varietyClass), _defineProperty({
        'm--transition': transition
      }, "m--status-".concat(Status[status]), true));
    }
  }]);

  return MAvatar;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MAvatar.prototype, "transition", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MAvatar.prototype, "placeholder", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MAvatar.prototype, "src", void 0);

__decorate([Watch('src', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], MAvatar.prototype, "updateSrc", null);

MAvatar = __decorate([Component({
  mixins: [mixColor, mixSize, mixSpace, mixElevation, mixVariety, mixShape]
})], MAvatar);
var MAvatar$1 = MAvatar;

MAvatar$1.install = function (Vue) {
  Vue.component('MAvatar', MAvatar$1);
};

var css$h = "/**\r\n * variables register.\r\n */\n.m-radio {\n  --m-radio-color: var(--m-color-primary);\n  --m-radio-font-color: var(--m-font-color);\n  --m-radio-size: 24px;\n  --m-radio-wrapper-size: calc(var(--m-radio-size) * 2);\n  --m-radio-font-size: calc(var(--m-radio-size) / 1.6); }\n\n/**\r\n * components styles.\r\n */\n.m-radio {\n  color: var(--m-radio-font-color);\n  height: var(--m-radio-color);\n  font-size: var(--m-radio-font-size);\n  margin-right: var(--m-space-sm);\n  cursor: pointer;\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .m-radio.m--disabled {\n    opacity: .5; }\n  .m-radio.m--checked {\n    color: var(--m-radio-color); }\n  .m-radio__checked-icon, .m-radio__uncheck-icon, .m-radio__radio {\n    height: var(--m-radio-size);\n    width: var(--m-radio-size); }\n  .m-radio__radio {\n    position: relative; }\n  .m-radio__checked-icon {\n    position: absolute;\n    left: 0;\n    top: 0; }\n  .m-radio__radio-wrapper {\n    position: absolute;\n    left: calc(var(--m-radio-size) / 2 - var(--m-radio-wrapper-size) / 2);\n    top: calc(var(--m-radio-size) / 2 - var(--m-radio-wrapper-size) / 2);\n    height: var(--m-radio-wrapper-size);\n    width: var(--m-radio-wrapper-size);\n    border-radius: 50%; }\n  .m-radio__label {\n    text-indent: .4em; }\n";
styleInject(css$h);

var MRadio =
/*#__PURE__*/
function (_Vue) {
  _inherits(MRadio, _Vue);

  function MRadio() {
    var _this;

    _classCallCheck(this, MRadio);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MRadio).apply(this, arguments));
    _this.name = 'm-radio';
    return _this;
  }

  _createClass(MRadio, [{
    key: "onInput",
    value: function onInput(val) {}
  }, {
    key: "handleClick",
    value: function handleClick(val) {
      if (this.disabled) {
        return;
      }

      if (this.checked) {
        return;
      }

      this.onInput(val);
    }
  }, {
    key: "RRadio",
    value: function RRadio() {
      var h = this.$createElement;
      var size = this.size,
          checkedIcon = this.checkedIcon,
          uncheckIcon = this.uncheckIcon,
          checked = this.checked;
      return h("a", {
        "staticClass": "".concat(this.name, "__radio")
      }, [h(MTransition$1, {
        "attrs": {
          "name": 'scale'
        }
      }, [!checked ? undefined : h(MIcon$1, {
        "staticClass": "".concat(this.name, "__checked-icon"),
        "attrs": {
          "value": checkedIcon,
          "size": size
        }
      })]), h(MIcon$1, {
        "staticClass": "".concat(this.name, "__uncheck-icon"),
        "attrs": {
          "size": size,
          "value": uncheckIcon
        }
      }), h("div", {
        "directives": [{
          name: "m-ripple",
          value: true
        }],
        "staticClass": "".concat(this.name, "__radio-wrapper")
      })]);
    }
  }, {
    key: "RDefault",
    value: function RDefault() {
      var h = this.$createElement;
      var $slots = this.$slots;
      return $slots.default === undefined ? undefined : h("span", {
        "staticClass": "".concat(this.name, "__label")
      }, [$slots.default]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var styles = this.styles,
          classes = this.classes,
          label = this.label,
          handleClick = this.handleClick,
          RRadio = this.RRadio,
          RDefault = this.RDefault;
      return h("div", {
        "staticClass": this.name,
        "class": classes,
        "style": styles,
        "on": {
          "click": function click() {
            return handleClick(label);
          }
        }
      }, [RRadio(), RDefault()]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var checked = this.checked,
          disabled = this.disabled;
      return {
        'm--checked': checked,
        'm--disabled': disabled
      };
    }
  }, {
    key: "checked",
    get: function get() {
      return this.label === this.value;
    }
  }]);

  return MRadio;
}(Vue);

__decorate([Prop({
  type: [Boolean, Number, String],
  default: false
}), __metadata("design:type", Object)], MRadio.prototype, "value", void 0);

__decorate([Prop({
  type: [Boolean, Number, String],
  default: true
}), __metadata("design:type", Object)], MRadio.prototype, "label", void 0);

__decorate([Prop({
  type: String,
  default: 'radio_button_checked'
}), __metadata("design:type", String)], MRadio.prototype, "checkedIcon", void 0);

__decorate([Prop({
  type: String,
  default: 'radio_button_unchecked'
}), __metadata("design:type", String)], MRadio.prototype, "uncheckIcon", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MRadio.prototype, "disabled", void 0);

__decorate([Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MRadio.prototype, "onInput", null);

MRadio = __decorate([Component({
  components: {
    MIcon: MIcon$1,
    MTransition: MTransition$1
  },
  mixins: [mixColor, mixSize, mixSpace]
})], MRadio);
var MRadio$1 = MRadio;

/* istanbul ignore next */

MRadio$1.install = function (Vue) {
  Vue.component('MRadio', MRadio$1);
};

var css$i = "/**\r\n * variables register.\r\n */\n.m-checkbox {\n  --m-checkbox-color: var(--m-color-primary);\n  --m-checkbox-font-color: var(--m-font-color);\n  --m-checkbox-size: 24px;\n  --m-checkbox-wrapper-size: calc(var(--m-checkbox-size) * 2);\n  --m-checkbox-font-size: calc(var(--m-checkbox-size) / 1.6); }\n\n/**\r\n * components styles.\r\n */\n.m-checkbox {\n  color: var(--m-checkbox-font-color);\n  font-size: var(--m-checkbox-font-size);\n  height: var(--m-checkbox-color);\n  margin-right: var(--m-space-sm);\n  cursor: pointer;\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-font-smoothing: antialiased;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .m-checkbox__checked-icon, .m-checkbox__uncheck-icon, .m-checkbox__checkbox {\n    height: var(--m-checkbox-size);\n    width: var(--m-checkbox-size); }\n  .m-checkbox__checked-icon {\n    position: absolute;\n    left: 0;\n    top: 0; }\n  .m-checkbox__checkbox {\n    position: relative; }\n  .m-checkbox__checkbox-wrapper {\n    position: absolute;\n    left: calc(var(--m-checkbox-size) / 2 - var(--m-checkbox-wrapper-size) / 2);\n    top: calc(var(--m-checkbox-size) / 2 - var(--m-checkbox-wrapper-size) / 2);\n    height: var(--m-checkbox-wrapper-size);\n    width: var(--m-checkbox-wrapper-size);\n    border-radius: 50%; }\n  .m-checkbox__label {\n    text-indent: .4em; }\n  .m-checkbox.m--disabled {\n    opacity: .5; }\n  .m-checkbox.m--checked {\n    color: var(--m-checkbox-color); }\n";
styleInject(css$i);

var MCheckbox =
/*#__PURE__*/
function (_Vue) {
  _inherits(MCheckbox, _Vue);

  function MCheckbox() {
    var _this;

    _classCallCheck(this, MCheckbox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MCheckbox).apply(this, arguments));
    _this.name = 'm-checkbox';
    _this.isArrayValue = false;
    _this.isArrayLabel = false;
    _this.isBooleanValue = false;
    return _this;
  }

  _createClass(MCheckbox, [{
    key: "onInput",
    value: function onInput(val) {}
  }, {
    key: "handleClick",
    value: function handleClick() {
      var disabled = this.disabled,
          isBooleanValue = this.isBooleanValue,
          isArrayValue = this.isArrayValue,
          isArrayLabel = this.isArrayLabel,
          label = this.label,
          value = this.value,
          onInput = this.onInput,
          checked = this.checked;

      if (disabled) {
        return;
      }

      if (isArrayValue && isArrayLabel) {
        if (checked) {
          onInput([]);
        } else {
          onInput(label);
        }
      } else if (isArrayValue) {
        var result = [].concat(value);

        if (checked) {
          var index = result.findIndex(function (item) {
            return item === label;
          });
          result.splice(index, 1);
          onInput(result);
        } else {
          result.push(label);
          onInput(result);
        }
      } else if (isBooleanValue) {
        onInput(!value);
      } else {
        if (checked) {
          onInput(null);
        } else {
          onInput(label);
        }
      }
    }
  }, {
    key: "RCheckbox",
    value: function RCheckbox() {
      var h = this.$createElement;
      var size = this.size,
          checkedIcon = this.checkedIcon,
          uncheckIcon = this.uncheckIcon,
          incheckIcon = this.incheckIcon,
          value = this.value,
          label = this.label,
          checked = this.checked,
          isArrayValue = this.isArrayValue,
          isArrayLabel = this.isArrayLabel;
      var checkIcon = checkedIcon;

      if (isArrayValue && isArrayLabel && checked && label.length > value.length) {
        // Allcheck下value是数组, label也是数组
        checkIcon = incheckIcon;
      }

      return h("a", {
        "staticClass": "".concat(this.name, "__checkbox")
      }, [h(MTransition$1, {
        "attrs": {
          "name": 'scale'
        }
      }, [!checked ? undefined : h(MIcon$1, {
        "staticClass": "".concat(this.name, "__checked-icon"),
        "attrs": {
          "value": checkIcon,
          "size": size
        }
      })]), h(MIcon$1, {
        "staticClass": "".concat(this.name, "__uncheck-icon"),
        "attrs": {
          "size": size,
          "value": uncheckIcon
        }
      }), h("div", {
        "directives": [{
          name: "m-ripple",
          value: true
        }],
        "staticClass": "".concat(this.name, "__checkbox-wrapper")
      })]);
    }
  }, {
    key: "RDefault",
    value: function RDefault() {
      var h = this.$createElement;
      var $slots = this.$slots;
      return $slots.default === undefined ? undefined : h("span", {
        "staticClass": "".concat(this.name, "__label")
      }, [$slots.default]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          classes = this.classes,
          styles = this.styles,
          RCheckbox = this.RCheckbox,
          RDefault = this.RDefault,
          handleClick = this.handleClick,
          value = this.value,
          label = this.label;
      this.isArrayValue = value instanceof Array;
      this.isArrayLabel = label instanceof Array; // boolean模式下等价于switch

      this.isBooleanValue = typeof value === 'boolean';
      return h("div", {
        "staticClass": name,
        "class": classes,
        "style": styles,
        "on": {
          "click": function click() {
            return handleClick();
          }
        }
      }, [RCheckbox(), RDefault()]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var checked = this.checked,
          disabled = this.disabled;
      return {
        'm--checked': checked,
        'm--disabled': disabled
      };
    }
  }, {
    key: "checked",
    get: function get() {
      var value = this.value,
          label = this.label,
          isArrayValue = this.isArrayValue,
          isArrayLabel = this.isArrayLabel;
      var isCheck = false;

      if (isArrayValue && isArrayLabel) {
        // Allcheck下value是数组, label也是数组
        if (value.length > 0) {
          isCheck = true;
        }
      } else if (isArrayValue) {
        // value是数组, label单值
        if (value.includes(label)) {
          isCheck = true;
        }
      } else {
        if (value === label) {
          isCheck = true;
        }
      }

      return isCheck;
    }
  }]);

  return MCheckbox;
}(Vue);

__decorate([Prop({
  type: [Array, Number, String, Boolean],
  default: false
}), __metadata("design:type", Object)], MCheckbox.prototype, "value", void 0);

__decorate([Prop({
  type: [Array, Number, String, Boolean],
  default: true
}), __metadata("design:type", Object)], MCheckbox.prototype, "label", void 0);

__decorate([Prop({
  type: String,
  default: 'check_box'
}), __metadata("design:type", String)], MCheckbox.prototype, "checkedIcon", void 0);

__decorate([Prop({
  type: String,
  default: 'check_box_outline_blank'
}), __metadata("design:type", String)], MCheckbox.prototype, "uncheckIcon", void 0);

__decorate([Prop({
  type: String,
  default: 'indeterminate_check_box'
}), __metadata("design:type", String)], MCheckbox.prototype, "incheckIcon", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], MCheckbox.prototype, "disabled", void 0);

__decorate([Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MCheckbox.prototype, "onInput", null);

MCheckbox = __decorate([Component({
  components: {
    MIcon: MIcon$1,
    MTransition: MTransition$1
  },
  mixins: [mixColor, mixSize, mixSpace]
})], MCheckbox);
var MCheckbox$1 = MCheckbox;

MCheckbox$1.install = function (Vue) {
  Vue.component('MCheckbox', MCheckbox$1);
};

var css$j = "/**\r\n * variables register.\r\n */\n.m-chip {\n  --m-chip-color: var(--m-color-primary);\n  --m-chip-font-color: var(--m-bg-color);\n  --m-chip-size: 32px;\n  --m-chip-border-size: 1px;\n  --m-chip__close-size: calc(var(--m-chip-size) / 1.3); }\n\n.m-chip {\n  height: var(--m-chip-size);\n  min-height: var(--m-chip-size);\n  max-height: var(--m-chip-size);\n  color: var(--m-chip-font-color);\n  background-color: var(--m-chip-color);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  cursor: pointer;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  word-break: keep-all;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  line-height: 1; }\n  .m-chip.m--closeable {\n    padding-right: calc(var(--m-chip__close-size) / 1.5); }\n  .m-chip.m--closeover {\n    padding-right: 0;\n    -webkit-transition: padding-right ease .2s;\n    transition: padding-right ease .2s; }\n    .m-chip.m--closeover .m-chip__close {\n      opacity: 0;\n      pointer-events: none; }\n    .m-chip.m--closeover:hover {\n      padding-right: calc(var(--m-chip__close-size) / 1.5); }\n      .m-chip.m--closeover:hover .m-chip__close {\n        opacity: 1;\n        pointer-events: auto; }\n  .m-chip.m-variety-outline {\n    border-style: solid;\n    border-width: var(--m-chip-border-size);\n    border-color: var(--m-chip-color);\n    background-color: var(--m-bg-color);\n    color: var(--m-chip-color); }\n  .m-chip.m-variety-flat {\n    background-color: var(--m-bg-color);\n    color: var(--m-chip-color); }\n  .m-chip.m-shape-circle {\n    border-radius: var(--m-chip-size); }\n    .m-chip.m-shape-circle .m-chip__media {\n      border-radius: 50%; }\n  .m-chip.m-shape-round {\n    border-radius: var(--m-shape-round); }\n  .m-chip.m-shape-square {\n    border-radius: var(--m-shape-square); }\n\n.m-chip__media {\n  height: var(--m-chip-size);\n  width: var(--m-chip-size);\n  margin-right: calc(var(--m-chip-size) / -4); }\n\n.m-chip__main {\n  padding-left: calc(var(--m-chip-size) / 1.5);\n  padding-right: calc(var(--m-chip-size) / 1.5);\n  font-size: calc(var(--m-chip-size) / 2); }\n\n.m-chip__close {\n  position: absolute;\n  z-index: 1;\n  right: calc(var(--m-chip-size) / 10);\n  height: var(--m-chip__close-size);\n  width: var(--m-chip__close-size);\n  -webkit-transition: opacity ease .2s;\n  transition: opacity ease .2s; }\n  .m-chip__close > * {\n    height: inherit;\n    width: inherit; }\n  .m-chip__close:hover {\n    opacity: .8 !important; }\n";
styleInject(css$j);

var MChip =
/*#__PURE__*/
function (_Vue) {
  _inherits(MChip, _Vue);

  function MChip() {
    var _this;

    _classCallCheck(this, MChip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MChip).apply(this, arguments));
    _this.name = 'm-chip';
    return _this;
  }

  _createClass(MChip, [{
    key: "onClose",
    value: function onClose(e) {
      e.stopPropagation();
    }
  }, {
    key: "onClick",
    value: function onClick(e) {}
  }, {
    key: "RMedia",
    value: function RMedia() {
      var name = this.name,
          $slots = this.$slots;

      if ($slots.media) {
        if (!$slots.media[0].data.staticClass) {
          $slots.media[0].data.staticClass = '';
        }

        $slots.media[0].data.staticClass += " ".concat(name, "__media");
        return $slots.media;
      }

      return undefined;
    }
  }, {
    key: "RClose",
    value: function RClose() {
      var h = this.$createElement;
      var name = this.name,
          closeable = this.closeable,
          closeover = this.closeover,
          onClose = this.onClose;
      return closeable || closeover ? h("div", {
        "staticClass": "".concat(name, "__close"),
        "on": {
          "click": onClose
        }
      }, [h(MIcon$1, {
        "attrs": {
          "value": 'cancel'
        }
      })]) : undefined;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          classes = this.classes,
          styles = this.styles,
          $slots = this.$slots,
          RMedia = this.RMedia,
          RClose = this.RClose,
          onClick = this.onClick;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "style": styles,
        "on": {
          "click": onClick
        }
      }, [RMedia(), h("div", {
        "staticClass": "".concat(name, "__main")
      }, [$slots.default]), RClose()]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var closeable = this.closeable,
          closeover = this.closeover;
      return Object.assign(Object.assign(Object.assign(Object.assign({}, this.elevationClass), this.shapeClass), this.varietyClass), {
        'm--closeable': closeable,
        'm--closeover': closeover
      });
    }
  }]);

  return MChip;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MChip.prototype, "closeable", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MChip.prototype, "closeover", void 0);

__decorate([Emit('close'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MChip.prototype, "onClose", null);

__decorate([Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MChip.prototype, "onClick", null);

MChip = __decorate([Component({
  components: {
    MAvatar: MAvatar$1,
    MIcon: MIcon$1
  },
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixVariety, mixElevation]
})], MChip);
var MChip$1 = MChip;

/* istanbul ignore next */

MChip$1.install = function (Vue) {
  Vue.component('MChip', MChip$1);
};

var css$k = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-time-picker {\n  --m-time-picker-color: var(--m-color-primary);\n  --m-time-picker-header-font-color: var(--m-bg-color);\n  --m-time-picker-width: 290px;\n  --m-time-picker-header-height: 90px;\n  --m-time-picker-panel-height: 285px;\n  --m-time-picker-landscope-width: 400px;\n  --m-time-picker-landscope-header-width: 110px;\n  --m-time-picker-cell-size: 30px; }\n\n/**\r\n * components styles.\r\n */\n.m-time-picker {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  line-height: 1;\n  width: var(--m-time-picker-width); }\n  .m-time-picker.m--landscope {\n    width: var(--m-time-picker-landscope-width); }\n    .m-time-picker.m--landscope .m-time-picker-header {\n      width: var(--m-time-picker-landscope-header-width);\n      height: 100%;\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column; }\n    .m-time-picker.m--landscope .m-time-picker-header__date-year {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start; }\n    .m-time-picker.m--landscope .m-time-picker-header__date-weekDay {\n      margin-left: 0; }\n    .m-time-picker.m--landscope .m-time-picker-header__date {\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start; }\n      .m-time-picker.m--landscope .m-time-picker-header__date > * {\n        margin-bottom: var(--m-space-md); }\n    .m-time-picker.m--landscope .m-time-picker-header__time-hours {\n      text-align: left;\n      margin-bottom: var(--m-space-sm); }\n    .m-time-picker.m--landscope .m-time-picker__main {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: stretch;\n          -ms-flex-pack: stretch;\n              justify-content: stretch;\n      -webkit-box-align: stretch;\n          -ms-flex-align: stretch;\n              align-items: stretch;\n      height: var(--m-time-picker-panel-height); }\n    .m-time-picker.m--landscope .m-time-picker-panel {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1; }\n  .m-time-picker .m-time-picker-panel {\n    height: var(--m-time-picker-panel-height); }\n\n.m-time-picker-header {\n  padding: var(--m-space-sm);\n  height: var(--m-time-picker-header-height);\n  background-color: var(--m-time-picker-color);\n  color: var(--m-time-picker-header-font-color);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -webkit-transition: color .2s ease;\n  transition: color .2s ease; }\n  .m-time-picker-header .m--active {\n    opacity: .6; }\n  .m-time-picker-header__date {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .m-time-picker-header__date-year {\n      cursor: pointer;\n      font-size: 24px;\n      margin-bottom: var(--m-space-sm); }\n    .m-time-picker-header__date-date {\n      cursor: pointer;\n      font-size: 24px; }\n    .m-time-picker-header__date-weekDay {\n      font-size: 24px;\n      margin-left: 10px; }\n  .m-time-picker-header__year, .m-time-picker-header__month {\n    color: white;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    font-size: 32px; }\n  .m-time-picker-header__time {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    text-align: right; }\n    .m-time-picker-header__time-hours {\n      cursor: pointer;\n      font-size: 36px; }\n    .m-time-picker-header__time-ampm {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end;\n      cursor: pointer;\n      font-size: 16px; }\n      .m-time-picker-header__time-ampm > * {\n        margin-left: 10px; }\n  .m-time-picker-header .m--active {\n    color: white; }\n\n.m-time-picker-panel-date {\n  padding: var(--m-space-sm); }\n  .m-time-picker-panel-date__header {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    font-size: 16px; }\n    .m-time-picker-panel-date__header-year {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: start;\n          -ms-flex-pack: start;\n              justify-content: flex-start;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      font-size: 16px;\n      margin-left: 10px;\n      cursor: pointer; }\n    .m-time-picker-panel-date__header-handler {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between; }\n  .m-time-picker-panel-date__table {\n    line-height: 1.5;\n    border: none;\n    border-spacing: 0;\n    text-align: center;\n    width: 100%; }\n    .m-time-picker-panel-date__table thead {\n      font-weight: 600; }\n      .m-time-picker-panel-date__table thead td {\n        padding: 8px 0; }\n    .m-time-picker-panel-date__table td > * {\n      margin: 0 auto; }\n  .m-time-picker-panel-date .m-button__main {\n    margin-left: 0;\n    margin-right: 0; }\n\n.m-time-picker-panel-year {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: var(--m-space-sm);\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: 100%;\n  overflow: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0); }\n  .m-time-picker-panel-year > * {\n    width: 33.333333%; }\n  .m-time-picker-panel-year::-webkit-scrollbar-thumb {\n    background-color: #a6a6a6; }\n  .m-time-picker-panel-year::-webkit-scrollbar-track {\n    background-color: #e5e5e5; }\n  .m-time-picker-panel-year::-webkit-scrollbar {\n    width: 4px; }\n  .m-time-picker-panel-year::-webkit-scrollbar-thumb {\n    border-left: 2px solid transparent; }\n  .m-time-picker-panel-yearl::-webkit-scrollbar-track {\n    border-left: 2px solid transparent; }\n\n.m-time-picker-panel-month {\n  height: 100%;\n  padding: var(--m-space-sm);\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap; }\n  .m-time-picker-panel-month > * {\n    width: 33%; }\n\n.m-time-picker-panel-time {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 100%; }\n  .m-time-picker-panel-time__list {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    height: 100%;\n    padding: var(--m-space-sm);\n    overflow: auto;\n    overflow-x: hidden;\n    -webkit-overflow-scrolling: touch;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0); }\n    .m-time-picker-panel-time__list::-webkit-scrollbar-thumb {\n      background-color: #a6a6a6; }\n    .m-time-picker-panel-time__list::-webkit-scrollbar-track {\n      background-color: #e5e5e5; }\n    .m-time-picker-panel-time__list::-webkit-scrollbar {\n      width: 4px; }\n    .m-time-picker-panel-time__list::-webkit-scrollbar-thumb {\n      border-left: 2px solid transparent; }\n    .m-time-picker-panel-time__listl::-webkit-scrollbar-track {\n      border-left: 2px solid transparent; }\n\n.m-time-picker-handler {\n  border-top: 1px solid var(--m-border-color);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .m-time-picker-handler > * {\n    margin-left: var(--m-space-sm); }\n    .m-time-picker-handler > *:first-child {\n      margin-left: 0; }\n\n.m-time-picker-cell {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  line-height: 1;\n  height: var(--m-time-picker-cell-size);\n  min-width: var(--m-time-picker-cell-size);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-radius: var(--m-time-picker-cell-size);\n  cursor: pointer;\n  color: var(--m-font-color); }\n  .m-time-picker-cell.m--current {\n    border: 2px solid var(--m-time-picker-color); }\n  .m-time-picker-cell.m--checked {\n    color: var(--m-bg-color);\n    background-color: var(--m-time-picker-color); }\n\n.m-time-picker-panel-time .m-time-picker-cell {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n";
styleInject(css$k);

/**
 * 判断闰年
 * @return {boolean}
 */
Date.prototype.isLeapYear = function () {
  return this.getFullYear() % 4 === 0 && (this.getFullYear() % 100 !== 0 || this.getFullYear() % 400 === 0);
};
/**
 * 当月最大天数
 * @return {number}
 */


Date.prototype.maxDayOfMonth = function () {
  return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};
/**
 * 当月第一天所在星期
 * @return {number}
 */


Date.prototype.firstWeekDay = function () {
  var temp = new Date(this);
  temp.setDate(1);
  return temp.getDay();
};
/**
 * 补零
 * @return {string}
 */


Number.prototype.dateZeroize = function () {
  var value = this.toString();
  return value.length > 1 ? value : "0".concat(value);
}; // Date.prototype.getZeroize = function(type){
//     let value = ''
//     switch (type){
//         case 'month': value = this.getMonth().toString(); break;
//         case 'date': value = this.getDate().toString(); break;
//         case 'hours': value = this.getHours().toString(); break;
//         case 'minutes': value = this.getMinutes().toString(); break;
//         case 'seconds': value = this.getSeconds().toString(); break;
//     }
//     return value.length === 2 ? value : `0${value}`
// }

var WeekMap = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var MonthMap = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
var compName$2 = 'm-time-picker-header';

var MTimePickerHeader =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerHeader, _Vue);

  function MTimePickerHeader() {
    _classCallCheck(this, MTimePickerHeader);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerHeader).apply(this, arguments));
  }

  _createClass(MTimePickerHeader, [{
    key: "handleAMToggle",
    value: function handleAMToggle(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      this.DateStore.SET_AM(val);
    }
  }, {
    key: "RDate",
    value: function RDate() {
      var _this = this;

      var h = this.$createElement;
      var _this$DateStore = this.DateStore,
          year = _this$DateStore.year,
          month = _this$DateStore.month,
          weekDay = _this$DateStore.weekDay,
          date = _this$DateStore.date,
          pickerType = _this$DateStore.pickerType,
          activeType = _this$DateStore.activeType;
      return !['datetime', 'date'].includes(pickerType) ? undefined : h("div", {
        "staticClass": "".concat(compName$2, "__date")
      }, [h("div", [h("a", {
        "staticClass": "".concat(compName$2, "__date-year"),
        "class": {
          'm--active': activeType === DatePickerType.year
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(DatePickerType.year);
          }
        }
      }, [year]), h("span", {
        "staticClass": "".concat(compName$2, "__date-weekDay")
      }, [WeekMap[weekDay]])]), h("div", {
        "staticClass": "".concat(compName$2, "__date-date")
      }, [h("a", {
        "class": {
          'm--active': activeType === DatePickerType.month
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(DatePickerType.month);
          }
        }
      }, [(month + 1).dateZeroize()]), "-", h("a", {
        "class": {
          'm--active': activeType === DatePickerType.date
        },
        "on": {
          "click": function click() {
            _this.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
          }
        }
      }, [date.dateZeroize()])])]);
    }
  }, {
    key: "RTime",
    value: function RTime() {
      var _this2 = this;

      var h = this.$createElement;
      var handleAMToggle = this.handleAMToggle;
      var _this$DateStore2 = this.DateStore,
          hours = _this$DateStore2.hours,
          minutes = _this$DateStore2.minutes,
          pickerType = _this$DateStore2.pickerType,
          activeType = _this$DateStore2.activeType,
          ampm = _this$DateStore2.ampm,
          am = _this$DateStore2.am;
      return !['datetime', 'time'].includes(pickerType) ? undefined : h("div", {
        "class": "".concat(compName$2, "__time")
      }, [!ampm ? undefined : h("div", {
        "staticClass": "".concat(compName$2, "__time-ampm")
      }, [h("a", {
        "class": {
          'm--active': am
        },
        "on": {
          "click": function click() {
            handleAMToggle(true, am);
          }
        }
      }, ["AM"]), h("a", {
        "class": {
          'm--active': !am
        },
        "on": {
          "click": function click() {
            handleAMToggle(false, am);
          }
        }
      }, ["PM"])]), h("div", {
        "staticClass": "".concat(compName$2, "__time-hours")
      }, [h("a", {
        "class": {
          'm--active': activeType === DateTimeValueType.hours
        },
        "on": {
          "click": function click() {
            _this2.DateStore.SET_ACTIVE_TYPE(DateTimeValueType.hours);
          }
        }
      }, [hours.dateZeroize()]), ":", h("a", {
        "class": {
          'm--active': activeType === DateTimeValueType.minutes
        },
        "on": {
          "click": function click() {
            _this2.DateStore.SET_ACTIVE_TYPE(DateTimeValueType.minutes);
          }
        }
      }, [minutes.dateZeroize()])])]);
    }
  }, {
    key: "RYear",
    value: function RYear() {
      var h = this.$createElement;
      var _this$DateStore3 = this.DateStore,
          year = _this$DateStore3.year,
          pickerType = _this$DateStore3.pickerType;
      return pickerType !== 'year' ? undefined : h("div", {
        "staticClass": "".concat(compName$2, "__year")
      }, [year]);
    }
  }, {
    key: "RMonth",
    value: function RMonth() {
      var h = this.$createElement;
      var _this$DateStore4 = this.DateStore,
          month = _this$DateStore4.month,
          pickerType = _this$DateStore4.pickerType;
      return pickerType !== DatePickerType.month ? undefined : h("div", {
        "staticClass": "".concat(compName$2, "__month")
      }, [MonthMap[month]]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var classes = this.classes,
          RDate = this.RDate,
          RTime = this.RTime,
          RYear = this.RYear,
          RMonth = this.RMonth;
      return h("div", {
        "staticClass": "".concat(compName$2),
        "class": classes
      }, [RYear(), RMonth(), RDate(), h("div", {
        "style": "flex-grow:1"
      }), RTime()]);
    }
  }, {
    key: "classes",
    get: function get() {
      return _defineProperty({}, "m--".concat(this.DateStore.pickerType), true);
    }
  }]);

  return MTimePickerHeader;
}(Vue);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerHeader.prototype, "DateStore", void 0);

MTimePickerHeader = __decorate([Component], MTimePickerHeader);
var MTimePickerHeader$1 = MTimePickerHeader;

var compName$3 = 'm-time-picker-panel-date';
var WeekMap$1 = ['日', '一', '二', '三', '四', '五', '六'];

var MTimePickerPanelDate =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelDate, _Vue);

  function MTimePickerPanelDate() {
    var _this;

    _classCallCheck(this, MTimePickerPanelDate);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelDate).apply(this, arguments));
    _this.viewValue = _this.DateStore.value;
    return _this;
  }

  _createClass(MTimePickerPanelDate, [{
    key: "handleMonthToggle",
    value: function handleMonthToggle(action) {
      var date = new Date(this.viewValue);
      var month = date.getMonth();
      date.setMonth(action === "prev"
      /* prev */
      ? month - 1 : month + 1);
      this.viewValue = date.getTime();
    }
  }, {
    key: "handleDateClick",
    value: function handleDateClick(yearVal, monthVal, dateVal) {
      var _this$DateStore = this.DateStore,
          year = _this$DateStore.year,
          month = _this$DateStore.month,
          date = _this$DateStore.date;

      if (yearVal === year && monthVal === month && dateVal === date) {
        return;
      }

      var temp = new Date(this.viewValue);

      if (yearVal !== year) {
        temp.setFullYear(yearVal);
      }

      if (monthVal !== month) {
        temp.setMonth(monthVal);
      }

      if (dateVal !== date) {
        temp.setDate(dateVal);
      }

      this.DateStore.UPDATE(temp.getTime());
    }
  }, {
    key: "RTableHead",
    value: function RTableHead() {
      var h = this.$createElement;
      var Tds = [];
      WeekMap$1.forEach(function (week) {
        return Tds.push(h("td", [week]));
      });
      return h("thead", [h("tr", [Tds])]);
    }
  }, {
    key: "RTableBody",
    value: function RTableBody() {
      var h = this.$createElement;
      var viewDateValue = this.viewDateValue,
          viewYear = this.viewYear,
          viewMonth = this.viewMonth,
          handleDateClick = this.handleDateClick;
      var _this$DateStore2 = this.DateStore,
          year = _this$DateStore2.year,
          month = _this$DateStore2.month,
          date = _this$DateStore2.date;
      var nowValue = new Date();
      var isNowDate = nowValue.getFullYear() === viewYear && nowValue.getMonth() === viewMonth;
      var nowDate = nowValue.getDate();
      var viewMonthDays = viewDateValue.maxDayOfMonth();
      var viewFirstWeekDay = viewDateValue.firstWeekDay();
      var isCurMonth = viewYear === year && viewMonth === month;
      var Trs = [];
      var Tds = [];

      for (var pre = 0; pre < viewFirstWeekDay; pre++) {
        Tds.push(h("td", [" "]));
      }

      var _loop = function _loop(tempDate) {
        var isCurDate = isCurMonth && tempDate === date;
        var isToday = isNowDate && tempDate === nowDate;
        Tds.push(h("td", [h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurDate,
            'm--current': isToday
          },
          "on": {
            "click": function click() {
              return handleDateClick(viewYear, viewMonth, tempDate);
            }
          }
        }, [tempDate])]));

        if ((tempDate + viewFirstWeekDay) % 7 === 0 || tempDate === viewMonthDays) {
          Trs.push(h("tr", [Tds]));
          Tds = [];
        }
      };

      for (var tempDate = 1; tempDate <= viewMonthDays; tempDate++) {
        _loop(tempDate);
      }

      return h("tbody", [Trs]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var h = arguments[0];
      var viewYear = this.viewYear,
          viewMonth = this.viewMonth,
          handleMonthToggle = this.handleMonthToggle,
          RTableHead = this.RTableHead,
          RTableBody = this.RTableBody;
      return h("div", {
        "staticClass": compName$3
      }, [h("div", {
        "class": "".concat(compName$3, "__header")
      }, [h("div", {
        "staticClass": "".concat(compName$3, "__header-year")
      }, [h("span", {
        "on": {
          "click": function click() {
            return _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.year);
          }
        }
      }, [viewYear]), "-", h("span", {
        "on": {
          "click": function click() {
            return _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.month);
          }
        }
      }, [(viewMonth + 1).dateZeroize()])]), h("div", {
        "staticClass": "".concat(compName$3, "__header-handler")
      }, [h(MButton$1, {
        "attrs": {
          "variety": Variety.flat,
          "elevation": 0,
          "shape": Shape.circle,
          "color": Color.default,
          "paddingX": 0
        },
        "on": {
          "click": function click() {
            return handleMonthToggle("prev"
            /* prev */
            );
          }
        }
      }, [h(MIcon$1, {
        "attrs": {
          "size": 20,
          "value": 'navigate_before'
        }
      })]), h(MButton$1, {
        "attrs": {
          "variety": Variety.flat,
          "paddingX": 0,
          "elevation": 0,
          "shape": Shape.circle,
          "color": Color.default
        },
        "on": {
          "click": function click() {
            return handleMonthToggle("next"
            /* next */
            );
          }
        }
      }, [h(MIcon$1, {
        "attrs": {
          "size": 20,
          "value": 'navigate_next'
        }
      })])])]), h("table", {
        "class": "".concat(compName$3, "__table")
      }, [RTableHead(), RTableBody()])]);
    }
  }, {
    key: "viewDateValue",
    get: function get() {
      return new Date(this.viewValue);
    },
    set: function set(val) {
      this.viewValue = val;
    }
  }, {
    key: "viewYear",
    get: function get() {
      return this.viewDateValue.getFullYear();
    }
  }, {
    key: "viewMonth",
    get: function get() {
      return this.viewDateValue.getMonth();
    }
  }, {
    key: "viewDate",
    get: function get() {
      return this.viewDateValue.getDate();
    }
  }]);

  return MTimePickerPanelDate;
}(Vue);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "min", void 0);

__decorate([Prop({
  type: Number
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "max", void 0);

__decorate([Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], MTimePickerPanelDate.prototype, "firstDayOfWeek", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelDate.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number, Number, Number]), __metadata("design:returntype", void 0)], MTimePickerPanelDate.prototype, "handleDateClick", null);

MTimePickerPanelDate = __decorate([Component({
  components: {
    MButton: MButton$1,
    MIcon: MIcon$1
  }
})], MTimePickerPanelDate);
var MTimePickerPanelDate$1 = MTimePickerPanelDate;

var compName$4 = 'm-time-picker-panel-year';

var MTimePickerPanelYear =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelYear, _Vue);

  function MTimePickerPanelYear() {
    _classCallCheck(this, MTimePickerPanelYear);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelYear).apply(this, arguments));
  }

  _createClass(MTimePickerPanelYear, [{
    key: "onClick",
    value: function onClick(year) {
      this.DateStore.UPDATE(year, DateValueType.year);
    }
  }, {
    key: "RCols",
    value: function RCols() {
      var h = this.$createElement;
      var min = this.min,
          max = this.max,
          onClick = this.onClick;
      var year = this.DateStore.year;
      var Cols = [];

      var _loop = function _loop(tempYear) {
        var isCurrent = tempYear === year;
        Cols.push(h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurrent
          },
          "on": {
            "click": function click() {
              return onClick(tempYear);
            }
          }
        }, [tempYear]));
      };

      for (var tempYear = min; tempYear <= max; tempYear++) {
        _loop(tempYear);
      }

      return Cols;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RCols = this.RCols;
      return h("div", {
        "staticClass": compName$4
      }, [RCols()]);
    }
  }]);

  return MTimePickerPanelYear;
}(Vue);

__decorate([Prop({
  type: Number,
  default: 2100
}), __metadata("design:type", Number)], MTimePickerPanelYear.prototype, "max", void 0);

__decorate([Prop({
  type: Number,
  default: 1900
}), __metadata("design:type", Number)], MTimePickerPanelYear.prototype, "min", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelYear.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", void 0)], MTimePickerPanelYear.prototype, "onClick", null);

MTimePickerPanelYear = __decorate([Component], MTimePickerPanelYear);
var MTimePickerPanelYear$1 = MTimePickerPanelYear;

var compName$5 = 'm-time-picker-panel-month';
var MonthMap$1 = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];

var MTimePickerPanelMonth =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelMonth, _Vue);

  function MTimePickerPanelMonth() {
    _classCallCheck(this, MTimePickerPanelMonth);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelMonth).apply(this, arguments));
  }

  _createClass(MTimePickerPanelMonth, [{
    key: "handleClick",
    value: function handleClick(month) {
      this.DateStore.UPDATE(month, DateValueType.month);
    }
  }, {
    key: "RCols",
    value: function RCols() {
      var h = this.$createElement;
      var handleClick = this.handleClick;
      var month = this.DateStore.month;
      var Cols = [];

      var _loop = function _loop(tempValue) {
        var isCurrent = tempValue === month;
        Cols.push(h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurrent
          },
          "on": {
            "click": function click() {
              return handleClick(tempValue);
            }
          }
        }, [MonthMap$1[tempValue]]));
      };

      for (var tempValue = 0; tempValue <= 11; tempValue++) {
        _loop(tempValue);
      }

      return Cols;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RCols = this.RCols;
      return h("div", {
        "staticClass": compName$5
      }, [RCols()]);
    }
  }]);

  return MTimePickerPanelMonth;
}(Vue);

__decorate([Prop({
  type: Array
}), __metadata("design:type", Number)], MTimePickerPanelMonth.prototype, "disabledValue", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelMonth.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number]), __metadata("design:returntype", void 0)], MTimePickerPanelMonth.prototype, "handleClick", null);

MTimePickerPanelMonth = __decorate([Component({
  components: {
    MButton: MButton$1
  }
})], MTimePickerPanelMonth);
var MTimePickerPanelMonth$1 = MTimePickerPanelMonth;

var compName$6 = 'm-time-picker-panel-time'; // const baseFont: any = getStyle(document.documentElement, 'font-size')
// const clockSize = 12 * Number(baseFont.substring(0, baseFont.length - 2))
// const clockStyle = {
//     height: `${clockSize}px`,
//     width:  `${clockSize}px`,
// }

var MTimePickerPanelTime =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerPanelTime, _Vue);

  function MTimePickerPanelTime() {
    _classCallCheck(this, MTimePickerPanelTime);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerPanelTime).apply(this, arguments));
  }

  _createClass(MTimePickerPanelTime, [{
    key: "onClick",
    value: function onClick(val, type) {
      this.DateStore.SET_ACTIVE_TYPE(type);
      this.DateStore.UPDATE(type === DateTimeValueType.hours && this.DateStore.ampm && !this.DateStore.am ? val + 12 : val, type);
    }
  }, {
    key: "RList",
    value: function RList(type) {
      var h = this.$createElement;
      var color = this.color,
          onClick = this.onClick,
          hourStep = this.hourStep,
          minuteStep = this.minuteStep;
      var ampm = this.DateStore.ampm;
      var min = 0;
      var max = type === DateTimeValueType.hours ? ampm ? 11 : 23 : 59;
      var step = type === DateTimeValueType.hours ? hourStep : minuteStep;
      var time = this.DateStore[type];
      var Temps = [];

      var _loop = function _loop(tempTime) {
        var isCurrent = tempTime === time;
        Temps.push(h("div", {
          "directives": [{
            name: "m-ripple",
            value: true
          }],
          "staticClass": 'm-time-picker-cell',
          "class": {
            'm--checked': isCurrent
          },
          "on": {
            "click": function click() {
              return onClick(tempTime, type);
            }
          }
        }, [tempTime]));
      };

      for (var tempTime = min; tempTime <= max; tempTime += step) {
        _loop(tempTime);
      }

      return h("div", {
        "staticClass": "".concat(compName$6, "__list ").concat(compName$6, "__list-").concat(type)
      }, [Temps]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RList = this.RList;
      var Result = [];
      Result.push(RList(DateTimeValueType.hours));
      Result.push(RList(DateTimeValueType.minutes));
      return h("div", {
        "staticClass": compName$6
      }, [Result]);
    }
  }]);

  return MTimePickerPanelTime;
}(Vue);

__decorate([Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerPanelTime.prototype, "color", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePickerPanelTime.prototype, "hourStep", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePickerPanelTime.prototype, "minuteStep", void 0);

__decorate([Inject(), __metadata("design:type", Object)], MTimePickerPanelTime.prototype, "DateStore", void 0);

__decorate([Emit('pick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Number, String]), __metadata("design:returntype", void 0)], MTimePickerPanelTime.prototype, "onClick", null);

MTimePickerPanelTime = __decorate([Component({
  components: {
    MButton: MButton$1,
    MIcon: MIcon$1
  }
})], MTimePickerPanelTime);
var MTimePickerPanelTime$1 = MTimePickerPanelTime;

var compName$7 = 'm-time-picker-handler';

var MTimePickerHandler =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePickerHandler, _Vue);

  function MTimePickerHandler() {
    _classCallCheck(this, MTimePickerHandler);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTimePickerHandler).apply(this, arguments));
  }

  _createClass(MTimePickerHandler, [{
    key: "onConfirm",
    value: function onConfirm() {}
  }, {
    key: "onCancel",
    value: function onCancel() {}
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var onConfirm = this.onConfirm,
          onCancel = this.onCancel,
          color = this.color;
      return h("div", {
        "staticClass": "".concat(compName$7, " m-p-sm")
      }, [h(MButton$1, {
        "attrs": {
          "size": "32px",
          "minWidth": "75px",
          "variety": Variety.flat,
          "color": Color.default
        },
        "on": {
          "click": onCancel
        }
      }, ["cancel"]), h(MButton$1, {
        "attrs": {
          "size": "32px",
          "minWidth": "75px",
          "color": color
        },
        "on": {
          "click": onConfirm
        }
      }, ["ok"])]);
    }
  }]);

  return MTimePickerHandler;
}(Vue);

__decorate([Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTimePickerHandler.prototype, "color", void 0);

__decorate([Emit('confirm'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePickerHandler.prototype, "onConfirm", null);

__decorate([Emit('cancel'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePickerHandler.prototype, "onCancel", null);

MTimePickerHandler = __decorate([Component({
  components: {
    MButton: MButton$1
  }
})], MTimePickerHandler);
var MTimePickerHandler$1 = MTimePickerHandler;

var MTimePicker =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTimePicker, _Vue);

  function MTimePicker() {
    var _this;

    _classCallCheck(this, MTimePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MTimePicker).apply(this, arguments));
    _this.name = 'm-time-picker';
    _this.DateStore = {
      value: _this.valueAdaptI(_this.value),
      pickerType: _this.pickerType,
      activeType: DatePickerType.date,
      ampm: false,

      get dateValue() {
        return new Date(this.value);
      },

      get year() {
        return this.dateValue.getFullYear();
      },

      get month() {
        return this.dateValue.getMonth();
      },

      get weekDay() {
        return this.dateValue.getDay();
      },

      get date() {
        return this.dateValue.getDate();
      },

      get hours() {
        var result = this.dateValue.getHours();

        if (this.ampm && result >= 12) {
          result = result - 12;
        }

        return result;
      },

      get minutes() {
        return this.dateValue.getMinutes();
      },

      get am() {
        return this.dateValue.getHours() < 12;
      },

      SET_ACTIVE_TYPE: function SET_ACTIVE_TYPE(type) {
        if (type === this.activeType) {
          return;
        }

        this.activeType = type;
      },
      SET_PICKER_TYPE: function SET_PICKER_TYPE(type) {
        if (type === this.pickerType) {
          return;
        }

        this.pickerType = type;
      },
      SET_AM: function SET_AM(val) {
        if (val === this.am) {
          return;
        }

        var temp = new Date(this.value);
        temp.setHours(val ? this.hours : this.hours + 12);
        this.value = temp.getTime();
      },
      SET_AMPM: function SET_AMPM(val) {
        if (val === this.ampm) {
          return;
        }

        this.ampm = val;
      },
      UPDATE: function UPDATE(val) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DateValueType.date;
        var self = _this.DateStore;
        var result = new Date(self.value);

        if (type === DateValueType.year) {
          result.setFullYear(val);
          self.value = result.getTime();
        } else if (type === DateValueType.month) {
          result.setMonth(val);
          self.value = result.getTime();
        } else if (type === DateValueType.hours) {
          result.setHours(val);
          self.value = result.getTime();
        } else if (type === DateValueType.minutes) {
          result.setMinutes(val);
          self.value = result.getTime();
        } else {
          self.value = val;
        }

        if (_this.desync) {
          return;
        }

        if (_this.confirmation) {
          return;
        }

        if (_this.valueAdaptI(_this.value) === self.value) {
          return;
        }

        self.emitInput();
      },
      emitInput: function emitInput() {
        var self = _this.DateStore;

        var outValue = _this.valueAdaptO(self.value);

        _this.onInput(outValue);
      }
    };
    return _this;
  }

  _createClass(MTimePicker, [{
    key: "onConfirm",
    value: function onConfirm() {
      this.DateStore.emitInput();
    }
  }, {
    key: "onCancel",
    value: function onCancel() {}
  }, {
    key: "onInput",
    value: function onInput(val) {}
  }, {
    key: "valueAdaptI",
    // 输入适配
    value: function valueAdaptI(val) {
      var result = 0;

      if (this.valueFormat === DateValueFormat.timestamp) {
        result = typeof val === 'string' ? Number(val) : val;
      } else if (this.valueFormat === DateValueFormat.Date) {
        result = val.getTime();
      }

      return result;
    } // 输出适配

  }, {
    key: "valueAdaptO",
    value: function valueAdaptO(val) {
      var result = null;

      if (this.valueFormat === DateValueFormat.timestamp) {
        result = val;
      } else if (this.valueFormat === DateValueFormat.Date) {
        result = new Date(val);
      }

      return result;
    }
  }, {
    key: "onValueUpdate",
    value: function onValueUpdate(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      this.DateStore.UPDATE(this.valueAdaptI(val));
    }
  }, {
    key: "onAMPMUpdate",
    value: function onAMPMUpdate(val, oldVal) {
      if (val === oldVal) {
        return;
      }

      this.DateStore.SET_AMPM(val);
    }
  }, {
    key: "onPickerTypeChange",
    value: function onPickerTypeChange(val) {
      this.DateStore.SET_PICKER_TYPE(val);

      switch (val) {
        case DatePickerType.datetime:
          this.DateStore.SET_ACTIVE_TYPE(DateValueType.date);
          break;

        default:
          this.DateStore.SET_ACTIVE_TYPE(val);
      }
    }
  }, {
    key: "RPanel",
    value: function RPanel() {
      var _this2 = this;

      var h = this.$createElement;
      var firstDayOfWeek = this.firstDayOfWeek,
          max = this.max,
          min = this.min;
      var activeType = this.DateStore.activeType;

      switch (activeType) {
        case DatePickerType.date:
          return h(MTimePickerPanelDate$1, {
            "attrs": {
              "max": max,
              "min": min,
              "firstDayOfWeek": firstDayOfWeek
            }
          });

        case DatePickerType.year:
          return h(MTimePickerPanelYear$1, {
            "attrs": {
              "max": max,
              "min": min
            },
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
              }
            }
          });

        case DatePickerType.month:
          return h(MTimePickerPanelMonth$1, {
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
              }
            }
          });

        default:
          return h(MTimePickerPanelTime$1, {
            "on": {
              "pick": function pick() {
                _this2.DateStore.SET_ACTIVE_TYPE(DatePickerType.date);
              }
            }
          });
      }
    }
  }, {
    key: "RHandler",
    value: function RHandler() {
      var h = this.$createElement;
      var confirmation = this.confirmation,
          onConfirm = this.onConfirm,
          onCancel = this.onCancel,
          color = this.color;
      return !confirmation ? undefined : h(MTimePickerHandler$1, {
        "on": {
          "confirm": onConfirm,
          "cancel": onCancel
        },
        "attrs": {
          "color": color
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          styles = this.styles,
          classes = this.classes,
          color = this.color,
          RPanel = this.RPanel,
          RHandler = this.RHandler;
      var pickerType = this.DateStore.pickerType;
      return h("div", {
        "staticClass": "".concat(name, " m--").concat(pickerType),
        "style": styles,
        "class": classes
      }, [h("div", {
        "staticClass": "".concat(name, "__main")
      }, [h(MTimePickerHeader$1), h("div", {
        "staticClass": "".concat(name, "-panel")
      }, [RPanel()])]), RHandler()]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign({}, this.colorStyle), this.spaceMarginStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign(Object.assign({}, this.elevationClass), {
        'm--landscope': this.landscope
      });
    }
  }]);

  return MTimePicker;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "landscope", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "desync", void 0);

__decorate([Prop({
  type: [Date, Number, String],
  default: new Date().getTime()
}), __metadata("design:type", Object)], MTimePicker.prototype, "value", void 0);

__decorate([Prop({
  type: String,
  default: DateValueFormat.timestamp
}), __metadata("design:type", String)], MTimePicker.prototype, "valueFormat", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "ampm", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePicker.prototype, "hourStep", void 0);

__decorate([Prop({
  type: Number,
  default: 1
}), __metadata("design:type", Number)], MTimePicker.prototype, "minuteStep", void 0);

__decorate([Prop({
  type: [Date, Number, String],
  default: 2100
}), __metadata("design:type", Object)], MTimePicker.prototype, "max", void 0);

__decorate([Prop({
  type: [Date, Number, String],
  default: 1900
}), __metadata("design:type", Object)], MTimePicker.prototype, "min", void 0);

__decorate([Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], MTimePicker.prototype, "firstDayOfWeek", void 0);

__decorate([Prop({
  type: String,
  default: DatePickerType.date
}), __metadata("design:type", String)], MTimePicker.prototype, "pickerType", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTimePicker.prototype, "confirmation", void 0);

__decorate([Emit('confirm'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onConfirm", null);

__decorate([Emit('cancel'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onCancel", null);

__decorate([Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onInput", null);

__decorate([Watch('value', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onValueUpdate", null);

__decorate([Watch('ampm', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onAMPMUpdate", null);

__decorate([Watch('pickerType', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTimePicker.prototype, "onPickerTypeChange", null);

__decorate([Provide(), __metadata("design:type", Object)], MTimePicker.prototype, "DateStore", void 0);

MTimePicker = __decorate([Component({
  components: {
    MTimePickerHeader: MTimePickerHeader$1,
    MTimePickerPanelDate: MTimePickerPanelDate$1,
    MTimePickerPanelYear: MTimePickerPanelYear$1,
    MTimePickerPanelMonth: MTimePickerPanelMonth$1,
    MTimePickerPanelTime: MTimePickerPanelTime$1,
    MTimePickerHandler: MTimePickerHandler$1
  },
  mixins: [mixColor, mixSpace, mixElevation]
})], MTimePicker);
var MTimePicker$1 = MTimePicker;

MTimePicker$1.install = function (Vue) {
  Vue.component('MTimePicker', MTimePicker$1);
};

var css$l = "/**\r\n * variables register.\r\n */\n.m-list {\n  --m-list-color: var(--m-bg-color-main);\n  --m-list-font-color: var(--m-font-color-main);\n  --m-list-active-color: var(--m-color-main);\n  --m-list-size: 16px; }\n\n.m-list-item {\n  --m-list-item-space: var(--m-bg-color-main);\n  --m-list-item-color: var(--m-bg-color-main);\n  --m-list-item-font-color: var(--m-font-color-main);\n  --m-list-item-active-color: var(--m-color-main);\n  --m-list-item-size: 50px;\n  --m-list-item-font-size: 14px; }\n\n/**\r\n * components styles.\r\n */\n.m-list {\n  background-color: var(--m-list-color);\n  color: var(--m-list-font-color);\n  cursor: pointer;\n  position: relative; }\n  .m-list__title {\n    padding: var(--m-space-sm);\n    font-size: var(--m-list-size); }\n  .m-list.--with-title-divider .m-list__title {\n    border-bottom: var(--m-border-base); }\n\n.m-list-item {\n  background-color: var(--m-list-item-color);\n  color: var(--m-list-item-font-color);\n  min-height: var(--m-list-item-size);\n  cursor: pointer;\n  position: relative;\n  font-size: var(--m-list-item-font-size); }\n  .m-list-item.--with-divider {\n    border-bottom: var(--m-border-base); }\n  .m-list-item__main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n  .m-list-item__media {\n    margin-right: var(--m-space-sm); }\n  .m-list-item__content {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1; }\n  .m-list-item.--active {\n    background-color: var(--m-hover-bg-color); }\n  .m-list-item.--with-hover:hover {\n    background-color: var(--m-hover-bg-color); }\n";
styleInject(css$l);

var MList =
/*#__PURE__*/
function (_Vue) {
  _inherits(MList, _Vue);

  function MList() {
    var _this;

    _classCallCheck(this, MList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MList).apply(this, arguments));
    _this.name = 'm-list';
    return _this;
  }

  _createClass(MList, [{
    key: "onClick",
    value: function onClick(e) {}
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          classes = this.classes,
          styles = this.styles,
          $slots = this.$slots,
          title = this.title,
          onClick = this.onClick;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "on": {
          "click": onClick
        },
        "style": styles
      }, [h("div", {
        "staticClass": "".concat(name, "__title")
      }, [$slots.title ? $slots.title : title]), h("div", {
        "staticClass": "".concat(name, "__main")
      }, [$slots.default]), $slots.extra ? h("div", {
        "staticClass": "".concat(name, "__extra")
      }, [$slots.extra]) : undefined]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var titleDivider = this.titleDivider;
      return Object.assign(Object.assign({
        '--with-title-divider': titleDivider
      }, this.elevationClass), this.shapeClass);
    }
  }]);

  return MList;
}(Vue);

__decorate([Prop({
  type: String,
  default: ''
}), __metadata("design:type", String)], MList.prototype, "title", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MList.prototype, "titleDivider", void 0);

__decorate([Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MList.prototype, "onClick", null);

MList = __decorate([Component({
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixElevation]
})], MList);
var MList$1 = MList;

var MListItem =
/*#__PURE__*/
function (_Vue) {
  _inherits(MListItem, _Vue);

  function MListItem() {
    var _this;

    _classCallCheck(this, MListItem);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MListItem).apply(this, arguments));
    _this.name = 'm-list-item';
    return _this;
  }

  _createClass(MListItem, [{
    key: "onClick",
    value: function onClick(e) {}
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          classes = this.classes,
          styles = this.styles,
          $slots = this.$slots,
          onClick = this.onClick;
      return h("div", {
        "staticClass": name,
        "class": classes,
        "on": {
          "click": onClick
        },
        "style": styles
      }, [h("div", {
        "staticClass": "".concat(name, "__main")
      }, [$slots.media ? h("div", {
        "staticClass": "".concat(name, "__media")
      }, [$slots.media]) : undefined, h("div", {
        "staticClass": "".concat(name, "__content")
      }, [$slots.default]), $slots.action ? h("div", {
        "staticClass": "".concat(name, "__action")
      }, [$slots.action]) : undefined]), $slots.extra ? h("div", {
        "staticClass": "".concat(name, "__extra")
      }, [$slots.extra]) : undefined]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.spaceStyle), this.colorStyle), this.sizeStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var divider = this.divider,
          hover = this.hover,
          active = this.active;
      return Object.assign(Object.assign({
        '--with-divider': divider,
        '--with-hover': hover,
        '--active': active
      }, this.elevationClass), this.shapeClass);
    }
  }]);

  return MListItem;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MListItem.prototype, "divider", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MListItem.prototype, "hover", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MListItem.prototype, "active", void 0);

__decorate([Prop({
  type: String,
  default: Size.md
}), __metadata("design:type", Object)], MListItem.prototype, "padding", void 0);

__decorate([Emit('click'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MListItem.prototype, "onClick", null);

MListItem = __decorate([Component({
  mixins: [mixColor, mixSize, mixSpace, mixShape, mixElevation]
})], MListItem);
var MListItem$1 = MListItem;

/* istanbul ignore next */

MList$1.install = function (Vue) {
  Vue.component('MList', MList$1);
};
/* istanbul ignore next */


MListItem$1.install = function (Vue) {
  Vue.component('MListItem', MListItem$1);
};

var css$m = "@charset \"UTF-8\";\n/**\r\n * material shadow 阴影值\r\n */\n/**\r\n * material color 色彩板\r\n */\n/**\r\n * 尺寸断点\r\n */\n/**\r\n * 重置input样式\r\n */\n/**\r\n * 重置ul样式\r\n */\n/**\r\n * 重置button样式\r\n */\n/**\r\n * 设备模式，结合es-helper device使用\r\n */\n/*---段落截取(仅适用于webkit浏览器)---*/\n/**\r\n * 段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * flex容器中的段落截取\r\n * @param $line: 截取的行数\r\n */\n/**\r\n * ltl方向断点\r\n */\n/**\r\n * rtl方向断点\r\n */\n/**\r\n * 滚动容器\r\n */\n/**\r\n * 隐藏滚动条\r\n */\n/**\r\n * slim bar样式滚动条\r\n */\n/**\r\n * 绝对尺寸\r\n */\n/**\r\n * variables register.\r\n */\n.m-table {\n  --m-table-color: var(--m-bg-color);\n  --m-table-bg-color: var(--m-bg-color);\n  --m-table-font-color: var(--m-font-color);\n  --m-table-row-size: 48px; }\n\n/**\r\n * relative component custom.\r\n */\n.m-table .m-checkbox {\n  --m-checkbox-size: calc(var(--m-table-row-size) / 2); }\n\n.m-table .m-radio {\n  --m-radio-size: calc(var(--m-table-row-size) / 2); }\n\n/**\r\n * components styles.\r\n */\n.m-table {\n  position: relative;\n  background-color: var(--m-table-bg-color); }\n  .m-table table {\n    min-width: 100%;\n    border-collapse: collapse;\n    position: relative;\n    border-spacing: 0;\n    background-color: inherit; }\n    .m-table table > thead {\n      background-color: inherit;\n      width: inherit; }\n    .m-table table > tbody {\n      background-color: inherit;\n      width: inherit; }\n    .m-table table tr {\n      background-color: white;\n      border: none; }\n    .m-table table td {\n      border: none;\n      background-color: inherit;\n      position: relative; }\n      .m-table table td:last-child:before {\n        width: 0; }\n      .m-table table td:after {\n        content: ' ';\n        position: absolute;\n        height: 1px;\n        width: 100%;\n        background-color: var(--m-border-color);\n        right: 0;\n        bottom: 0; }\n  .m-table.m--border table td:before {\n    content: ' ';\n    position: absolute;\n    height: 100%;\n    width: 1px;\n    background-color: var(--m-border-color);\n    top: 0;\n    right: 0; }\n  .m-table.m--header-sticky > .m-table__wrapper > .m-table-head {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    left: 0;\n    z-index: 1; }\n  .m-table.m--row-hover .m-table-body__row:hover {\n    background-color: var(--m-hover-bg-color); }\n  .m-table.m--cell-hover .m-table-body__cell:hover {\n    background-color: var(--m-hover-bg-color); }\n  .m-table .m--center {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center; }\n\n.m-table__wrapper {\n  overflow: auto;\n  background-color: inherit;\n  width: 100%;\n  height: 100%; }\n  .m-table__wrapper::-webkit-scrollbar-thumb {\n    background-color: #a6a6a6; }\n  .m-table__wrapper::-webkit-scrollbar-track {\n    background-color: #e5e5e5; }\n  .m-table__wrapper::-webkit-scrollbar {\n    width: 7px;\n    height: 7px; }\n  .m-table__wrapper::-webkit-scrollbar-thumb {\n    border-left: 2px solid transparent;\n    border-top: 2px solid transparent; }\n  .m-table__wrapperl::-webkit-scrollbar-track {\n    border-left: 2px solid transparent;\n    border-top: 2px solid transparent; }\n\n.m-table-head {\n  min-width: 100%;\n  background-color: inherit; }\n\n.m-table-body {\n  width: 100%;\n  background-color: inherit; }\n  .m-table-body tr {\n    cursor: pointer; }\n\n.m-table-head__row,\n.m-table-body__row {\n  min-height: var(--m-table-row-size);\n  height: var(--m-table-row-size); }\n\n.m-table-body__row {\n  -webkit-transition: background-color ease 0.2s;\n  transition: background-color ease 0.2s; }\n  .m-table-body__row.m--selected {\n    background-color: var(--m-hover-bg-color); }\n  .m-table-body__row.m--disabled {\n    background-color: var(--m-hover-bg-color); }\n\n.m-table-body__cell {\n  -webkit-transition: background-color ease 0.2s;\n  transition: background-color ease 0.2s; }\n\n.m-table-body__expand {\n  width: 100%;\n  height: 0 !important;\n  max-width: 100%; }\n  .m-table-body__expand > td {\n    padding: 0; }\n";
styleInject(css$m);

var deepCopy = function deepCopy(source) {
  var target;

  if (source instanceof Array) {
    target = [];
    source.forEach(function (item) {
      if (_typeof(item) === 'object') {
        target.push(deepCopy(item));
      } else {
        target.push(item);
      }
    });
  } else if (source instanceof Object) {
    target = {};

    for (var prop in source) {
      if (_typeof(source[prop]) === 'object') {
        target[prop] = deepCopy(source[prop]);
      } else {
        target[prop] = source[prop];
      }
    }
  } else {
    return source;
  }

  return target;
};

var typeHeader;

(function (typeHeader) {
  typeHeader["normal"] = "normal";
  typeHeader["sticky"] = "sticky";
  typeHeader["none"] = "none";
})(typeHeader || (typeHeader = {}));

var typeHover;

(function (typeHover) {
  typeHover["none"] = "none";
  typeHover["row"] = "row";
  typeHover["cell"] = "cell";
})(typeHover || (typeHover = {}));

var typeSelect;

(function (typeSelect) {
  typeSelect["none"] = "none";
  typeSelect["single"] = "single";
  typeSelect["multi"] = "multi";
})(typeSelect || (typeSelect = {}));

var compName$8 = 'm-table-head';

var TableHead =
/*#__PURE__*/
function (_Vue) {
  _inherits(TableHead, _Vue);

  function TableHead() {
    var _this;

    _classCallCheck(this, TableHead);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableHead).apply(this, arguments));
    _this.widthMap = [];
    return _this;
  }

  _createClass(TableHead, [{
    key: "updateSize",
    value: function updateSize(widthMap) {
      this.widthMap = widthMap;
    }
  }, {
    key: "handleSelectAll",
    value: function handleSelectAll() {
      this.TableStore.SET_SELECTED_ALL();
    }
  }, {
    key: "RCell",
    value: function RCell(item, index) {
      var h = this.$createElement;
      var TableStore = this.TableStore,
          select = this.select,
          handleSelectAll = this.handleSelectAll,
          size = this.size;
      var Data = TableStore.Data,
          Selected = TableStore.Selected;
      var children = item.componentOptions.children;
      var propsData = item.componentOptions.propsData;
      var propsDefault = item.componentOptions.Ctor.options.props;

      function RContent() {
        var content = null;
        var type = item.componentOptions.propsData.type;

        if (type === 'select' && select === 'multi') {
          var selectedLength = Selected.length;
          var dataLength = Data.length;
          var checkAll = [0, 1];
          var checkVal = selectedLength === 0 ? [] : dataLength === selectedLength ? [0, 1] : [0];
          content = h("div", {
            "staticClass": "m--center"
          }, [h(MCheckbox$1, {
            "on": {
              "input": function input() {
                handleSelectAll();
              }
            },
            "attrs": {
              "marginRight": 0,
              "size": size,
              "value": checkVal,
              "label": checkAll
            }
          })]);
        } else {
          // todo:错误处理
          content = [propsData.title || children];

          if (propsData.sortable !== undefined) {
            content.push(h(MIcon$1, {
              "attrs": {
                "size": 14,
                "value": 'arrow_upward'
              }
            }));
          }
        }

        return content;
      }

      var width = getStyleSize(this.widthMap[index] || propsData.width || propsDefault.width.default);
      var align = item.componentOptions.align || propsDefault.align.default;
      var styles = {
        width: width,
        minWidth: width,
        maxWidth: width
      };
      return h("td", {
        "staticClass": "".concat(compName$8, "__cell"),
        "style": styles,
        "attrs": {
          "align": align
        }
      }, [RContent()]);
    }
  }, {
    key: "RHead",
    value: function RHead() {
      var h = this.$createElement;
      var TableCols = this.TableCols,
          RCell = this.RCell;
      var result = [];
      TableCols.forEach(function (item, index) {
        result.push(RCell(item, index));
      });
      return h("tr", {
        "staticClass": "".concat(compName$8, "__row")
      }, [result]);
    }
  }, {
    key: "RSlotHeadPrepend",
    value: function RSlotHeadPrepend() {
      var h = this.$createElement;
      var TableCols = this.TableCols;
      var $slotHeadPrepend = this.$parent.$slots['head-prepend'];
      return !$slotHeadPrepend ? undefined : h("tr", {
        "staticClass": "".concat(compName$8, "__row")
      }, [h("td", {
        "attrs": {
          "colSpan": TableCols.length
        }
      }, [$slotHeadPrepend])]);
    }
  }, {
    key: "RSlotHeadAppend",
    value: function RSlotHeadAppend() {
      var h = this.$createElement;
      var TableCols = this.TableCols;
      var $slotHeadAppend = this.$parent.$slots['head-append'];
      return !$slotHeadAppend ? undefined : h("tr", {
        "staticClass": "".concat(compName$8, "__row")
      }, [h("td", {
        "attrs": {
          "colSpan": TableCols.length
        }
      }, [$slotHeadAppend])]);
    }
  }, {
    key: "RSlotHeadExtra",
    value: function RSlotHeadExtra() {
      var $slotHeadExtra = this.$parent.$slots['head-extra'];
      return !$slotHeadExtra ? undefined : $slotHeadExtra;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RHead = this.RHead,
          RSlotHeadPrepend = this.RSlotHeadPrepend,
          RSlotHeadAppend = this.RSlotHeadAppend,
          RSlotHeadExtra = this.RSlotHeadExtra;
      return h("table", {
        "staticClass": compName$8
      }, [h("thead", [RSlotHeadPrepend(), RSlotHeadExtra(), RHead(), RSlotHeadAppend()])]);
    }
  }]);

  return TableHead;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableHead.prototype, "size", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableHead.prototype, "select", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], TableHead.prototype, "sortable", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], TableHead.prototype, "sort", void 0);

__decorate([Inject(), __metadata("design:type", Object)], TableHead.prototype, "TableCols", void 0);

__decorate([Inject(), __metadata("design:type", Object)], TableHead.prototype, "TableStore", void 0);

TableHead = __decorate([Component({
  components: {
    MCheckbox: MCheckbox$1,
    MIcon: MIcon$1
  }
})], TableHead);
var TableHead$1 = TableHead;

/**
 * 事件绑定
 * @param element
 * @param event
 * @param handler
 * @param propgation
 */
var on = function () {
  if (document.addEventListener) {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };
      var propagation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (element && event && handler) {
        element.addEventListener(event, handler, propagation);
      }
    };
  } else {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };

      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();
var off = function () {
  if (document.addEventListener) {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };
      var propagation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (element && event) {
        element.removeEventListener(event, handler, propagation);
      }
    };
  } else {
    return function (element, event) {
      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
        return void 0;
      };

      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

var compName$9 = 'm-table-body';

var TableBody =
/*#__PURE__*/
function (_Vue) {
  _inherits(TableBody, _Vue);

  function TableBody() {
    _classCallCheck(this, TableBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableBody).apply(this, arguments));
  }

  _createClass(TableBody, [{
    key: "noHeaderToggle",
    value: function noHeaderToggle(val) {
      if (!val) {
        this.updateDom();
      }
    }
  }, {
    key: "handleRowClick",
    // get styles () {
    //   const { height } = this
    //
    //   return {
    //     height: height !== 'auto' ? height : false
    //   }
    // }
    value: function handleRowClick(row, index) {
      var selectable = this.selectable,
          rowSelect = this.rowSelect,
          expandable = this.expandable,
          rowExpand = this.rowExpand;

      if (selectable && rowSelect) {
        this.handleRowSelect(row, index);
      }

      if (expandable && rowExpand) {
        this.handleRowExpand(row, index);
      }
    }
  }, {
    key: "handleRowSelect",
    value: function handleRowSelect(row, index) {
      this.TableStore.SET_SELECTED(index);
    }
  }, {
    key: "handleRowExpand",
    value: function handleRowExpand(row, index) {
      this.TableStore.SET_EXPANDED(index);
    }
  }, {
    key: "RCols",
    value: function RCols(row, index) {
      var h = this.$createElement;
      var TableCols = this.TableCols,
          selectable = this.selectable,
          select = this.select,
          size = this.size,
          expandable = this.expandable,
          handleRowSelect = this.handleRowSelect,
          handleRowExpand = this.handleRowExpand;
      var _this$TableStore = this.TableStore,
          Selected = _this$TableStore.Selected,
          keyField = _this$TableStore.keyField,
          NoSelect = _this$TableStore.NoSelect,
          Expanded = _this$TableStore.Expanded;
      var result = [];

      function RContent(item) {
        var isSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isExpand = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var content = [];
        var scopedSlots = item.data.scopedSlots;
        var field = item.componentOptions.propsData.field;

        if (isSelect) {
          var isSelected = Selected.includes(row[keyField]);

          if (select === typeSelect.multi) {
            content = h("div", {
              "staticClass": "m--center"
            }, [h(MCheckbox$1, {
              "attrs": {
                "value": isSelected,
                "marginRight": 0
              },
              "nativeOn": {
                "click": function click(event) {
                  event.stopPropagation();
                }
              },
              "on": {
                "input": function input() {
                  return handleRowSelect(row, index);
                }
              }
            })]);
          } else {
            content = h("div", {
              "staticClass": "m--center"
            }, [h(MRadio$1, {
              "attrs": {
                "value": isSelected,
                "marginRight": 0
              },
              "nativeOn": {
                "click": function click(event) {
                  event.stopPropagation();
                }
              },
              "on": {
                "input": function input() {
                  return handleRowSelect(row, index);
                }
              }
            })]);
          }
        } else if (isExpand) {
          var isExpanded = Expanded.includes(row[keyField]);
          content = h("div", {
            "staticClass": "m--center",
            "on": {
              "click": function click(event) {
                event.stopPropagation();
                handleRowExpand(row, index);
              }
            }
          }, [h("transition", {
            "attrs": {
              "name": "m-transition-scale"
            }
          }, [isExpanded ? h(MIcon$1, {
            "attrs": {
              "value": 'remove',
              "size": size
            }
          }) : h(MIcon$1, {
            "attrs": {
              "value": 'add',
              "size": size
            }
          })])]);
        } else if (scopedSlots) {
          // 自定模板
          content = scopedSlots.default(row);
        } else {
          content = row[field];
        }

        return content;
      }

      function RCell(item) {
        var width = getStyleSize(item.componentOptions.propsData.width);
        var styles = {
          width: width,
          minWidth: width,
          maxWidth: width
        };
        var align = item.componentOptions.align || item.componentOptions.Ctor.options.props.align.default;
        var type = item.componentOptions.propsData.type;
        var isSelect = type === 'select' && selectable;
        var isExpand = type === 'expand' && expandable;
        return h("td", {
          "staticClass": "".concat(compName$9, "__cell"),
          "style": styles,
          "attrs": {
            "align": align
          }
        }, [RContent(item, isSelect, isExpand)]);
      }

      TableCols.forEach(function (item) {
        result.push(RCell(item));
      });
      return result;
    }
  }, {
    key: "RRow",
    value: function RRow(row, index) {
      var h = this.$createElement;
      var TableStore = this.TableStore,
          RCols = this.RCols,
          handleRowClick = this.handleRowClick,
          selectable = this.selectable;
      var Selected = TableStore.Selected,
          keyField = TableStore.keyField,
          NoSelect = TableStore.NoSelect;
      var classes = !selectable ? {} : {
        'm--selected': Selected.includes(row[keyField]),
        'm--disabled': NoSelect.includes(row[keyField])
      };
      return h("tr", {
        "staticClass": "".concat(compName$9, "__row"),
        "class": classes,
        "on": {
          "click": function click() {
            return handleRowClick(row, index);
          }
        }
      }, [RCols(row, index)]);
    }
  }, {
    key: "RExpand",
    value: function RExpand(row, index) {
      var h = this.$createElement;

      if (!this.$parent.$scopedSlots.expand) {
        return undefined;
      }

      var TableStore = this.TableStore,
          TableCols = this.TableCols,
          expandable = this.expandable;
      var Expanded = TableStore.Expanded,
          keyField = TableStore.keyField;

      if (!expandable) {
        return undefined;
      }

      var isExpanded = Expanded.includes(row[keyField]);
      return h("tr", {
        "staticClass": "".concat(compName$9, "__expand")
      }, [h("td", {
        "attrs": {
          "colSpan": TableCols.length
        }
      }, [h(MTransition$1, {
        "attrs": {
          "name": 'expansion'
        }
      }, [!isExpanded ? undefined : h("div", {
        "staticClass": "".concat(compName$9, "__expand-content")
      }, [this.$parent.$scopedSlots.expand(row)])])])]);
    }
  }, {
    key: "RTBody",
    value: function RTBody() {
      var h = this.$createElement;
      var TableStore = this.TableStore,
          RRow = this.RRow,
          RExpand = this.RExpand,
          expandable = this.expandable;
      var result = [];
      TableStore.Data.forEach(function (row, index) {
        result.push(RRow(row, index));

        if (expandable) {
          result.push(RExpand(row, index));
        }
      });
      return h("tbody", [result]);
    }
  }, {
    key: "updateDom",
    value: function updateDom() {
      var noHeader = this.noHeader;
      var $tableBody = this.$el.querySelector('tbody');

      if (!!$tableBody.children.length && !noHeader) {
        var widthMap = [];
        var $headCells = $tableBody.children[0].children;
        var vmTableHead = this.$parent.$refs.head;
        var cellCount = $headCells.length;

        while (cellCount--) {
          // widthMap.unshift($headCells[cellCount].clientWidth + (border ? 0 : 0)) // +1px消去边框对宽度影响
          widthMap.unshift($headCells[cellCount].clientWidth);
        }

        vmTableHead.updateSize(widthMap);
      }
    }
  }, {
    key: "mounted",
    value: function mounted() {
      this.updateDom();
      on(window, 'resize', this.updateDom);
    }
  }, {
    key: "updated",
    value: function updated() {
      this.updateDom();
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      off(window, 'resize', this.updateDom);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var RTBody = this.RTBody;
      return h("div", {
        "staticClass": compName$9
      }, [h("table", [RTBody()])]);
    }
  }, {
    key: "selectable",
    get: function get() {
      return this.select !== typeSelect.none;
    }
  }, {
    key: "expandable",
    get: function get() {
      return this.expand !== typeSelect.none;
    }
  }]);

  return TableBody;
}(Vue);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "height", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "border", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "noHeader", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "size", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "rowSelect", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], TableBody.prototype, "rowExpand", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "select", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], TableBody.prototype, "expand", void 0);

__decorate([Inject(), __metadata("design:type", Array)], TableBody.prototype, "TableCols", void 0);

__decorate([Inject(), __metadata("design:type", Object)], TableBody.prototype, "TableStore", void 0);

__decorate([Watch('noHeader'), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], TableBody.prototype, "noHeaderToggle", null);

TableBody = __decorate([Component({
  components: {
    MCheckbox: MCheckbox$1,
    MRadio: MRadio$1,
    MIcon: MIcon$1,
    MTransition: MTransition$1
  }
})], TableBody);
var TableBody$1 = TableBody;

var SELF_KEY = '_table-key';

var MTable =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTable, _Vue);

  function MTable() {
    var _this;

    _classCallCheck(this, MTable);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MTable).apply(this, arguments));
    _this.name = 'm-table';
    _this.TableStore = {
      Data: [],
      keyField: _this.keyField,
      Selected: [],
      NoSelect: _this.noSelect,
      Expanded: [],
      SET_DATA: function SET_DATA(field, value) {
        var _this2 = this;

        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        var Data = this.Data;

        if (index === -1) {
          Data.forEach(function (row) {
            if (row[field] !== undefined) {
              row[field] = value;
            } else {
              _this2.$set(row, field, value);
            }
          });
        } else {
          if (Data[index][field] !== undefined) {
            Data[index][field] = value;
          } else {
            console.log(field, value, index); // this.$set(Data[index], field, value)
          }
        }
      },
      SET_SELECTED: function SET_SELECTED(index) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            select = _assertThisInitialize.select;

        var _this$TableStore = _this.TableStore,
            Data = _this$TableStore.Data,
            Selected = _this$TableStore.Selected,
            keyField = _this$TableStore.keyField;
        var keyValue = Data[index][keyField];
        var targetIndex = Selected.indexOf(keyValue);

        if (targetIndex === -1) {
          if (select === typeSelect.multi) {
            // multi
            _this.TableStore.Selected.push(keyValue);
          } else {
            // single
            _this.TableStore.Selected = [keyValue];
          }
        } else {
          _this.TableStore.Selected.splice(targetIndex, 1);
        }

        _this.syncSelected(_this.TableStore.Selected);
      },
      SET_SELECTED_ALL: function SET_SELECTED_ALL() {
        var _this$TableStore2 = _this.TableStore,
            Data = _this$TableStore2.Data,
            Selected = _this$TableStore2.Selected,
            keyField = _this$TableStore2.keyField;

        if (Selected.length === 0) {
          _this.TableStore.Selected = Data.map(function (row) {
            return row[keyField];
          });
        } else {
          _this.TableStore.Selected = [];
        }

        _this.syncSelected(_this.TableStore.Selected);
      },
      SET_EXPANDED: function SET_EXPANDED(index) {
        var _assertThisInitialize2 = _assertThisInitialized(_this),
            expand = _assertThisInitialize2.expand;

        var _this$TableStore3 = _this.TableStore,
            Data = _this$TableStore3.Data,
            keyField = _this$TableStore3.keyField;
        var keyValue = Data[index][keyField];

        var targetIndex = _this.TableStore.Expanded.indexOf(keyValue);

        if (targetIndex === -1) {
          if (expand === typeSelect.multi) {
            // multi
            _this.TableStore.Expanded.push(keyValue);
          } else {
            // single
            _this.TableStore.Expanded = [keyValue];
          }
        } else {
          _this.TableStore.Expanded.splice(targetIndex, 1);
        }

        _this.syncExpanded(_this.TableStore.Expanded);
      }
    };
    return _this;
  }

  _createClass(MTable, [{
    key: "onExpand",
    value: function onExpand(row, index) {}
  }, {
    key: "onExpandAll",
    value: function onExpandAll(row, index) {}
  }, {
    key: "onSelect",
    value: function onSelect(row, index) {}
  }, {
    key: "onSelectAll",
    value: function onSelectAll(row, index) {}
  }, {
    key: "onRowClick",
    value: function onRowClick(row, index) {}
  }, {
    key: "onRowDblclick",
    value: function onRowDblclick(row, index) {}
  }, {
    key: "handleDataUpdate",
    value: function handleDataUpdate(val) {
      this.TableStore.Data = this.dataAdaptI(val);
    }
  }, {
    key: "handleSelectedUpdate",
    value: function handleSelectedUpdate(val) {
      this.TableStore.Selected = deepCopy(val);
    }
  }, {
    key: "handleExpandedUpdate",
    value: function handleExpandedUpdate(val) {
      this.TableStore.Expanded = deepCopy(val);
    }
  }, {
    key: "syncSelected",
    value: function syncSelected(data) {}
  }, {
    key: "syncExpanded",
    value: function syncExpanded(data) {}
  }, {
    key: "dataAdaptI",
    // 数据输入适配
    value: function dataAdaptI() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var keyField = this.keyField;
      var temp = deepCopy(val);

      if (keyField === SELF_KEY) {
        temp.forEach(function (item, index) {
          item[keyField] = index;
        });
      }

      return temp;
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          height = this.height,
          classes = this.classes,
          styles = this.styles,
          border = this.border,
          header = this.header,
          size = this.size,
          select = this.select,
          expand = this.expand,
          rowSelect = this.rowSelect,
          rowExpand = this.rowExpand;
      var noHeader = header === typeHeader.none;
      return h("div", {
        "staticClass": name,
        "style": styles,
        "class": classes
      }, [h("section", {
        "staticClass": "".concat(name, "__wrapper")
      }, [noHeader ? undefined : h(TableHead$1, {
        "ref": 'head',
        "attrs": {
          "size": size,
          "select": select
        }
      }), h(TableBody$1, {
        "ref": 'body',
        "attrs": {
          "size": size,
          "height": height,
          "border": border,
          "select": select,
          "expand": expand,
          "rowSelect": rowSelect,
          "rowExpand": rowExpand,
          "noHeader": noHeader
        }
      })])]);
    }
  }, {
    key: "TableCols",
    get: function get() {
      var $slots = this.$slots;
      var result = [];

      if ($slots.default) {
        // 声明渲染
        $slots.default.forEach(function (item) {
          // 多级表头处理
          // const $children = item.componentOptions.children
          // if (
          //     $children
          //     && $children.length > 1
          //     && $children[0].componentOptions.tag === tableColTagName
          // ) {
          //     console.log(item.componentOptions.children[0].componentOptions.tag)
          //     console.log(tableColTagName)
          // }
          result.push(item);
        });
      }

      return result;
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceMarginStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var border = this.border,
          header = this.header,
          hover = this.hover;
      return Object.assign(Object.assign({}, this.elevationClass), _defineProperty({
        'm--border': border,
        'm--header-sticky': header === 'sticky'
      }, "m--".concat(hover, "-hover"), hover !== 'none'));
    }
  }]);

  return MTable;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "border", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Array)], MTable.prototype, "data", void 0);

__decorate([Prop({
  type: String,
  default: SELF_KEY
}), __metadata("design:type", String)], MTable.prototype, "keyField", void 0);

__decorate([Prop({
  type: String,
  default: typeHeader.normal,
  validator: function validator(value) {
    return typeHeader.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "header", void 0);

__decorate([Prop({
  type: String,
  default: typeHover.none,
  validator: function validator(value) {
    return typeHover.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "hover", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "rowSelect", void 0);

__decorate([Prop({
  type: String,
  default: typeSelect.none,
  validator: function validator(value) {
    return typeSelect.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "select", void 0);

__decorate([Prop({
  type: [Array, String, Number],
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "selected", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "noSelect", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTable.prototype, "rowExpand", void 0);

__decorate([Prop({
  type: String,
  default: typeSelect.none,
  validator: function validator(value) {
    return typeSelect.hasOwnProperty(value);
  }
}), __metadata("design:type", String)], MTable.prototype, "expand", void 0);

__decorate([Prop({
  type: [Array, String, Number],
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "expanded", void 0);

__decorate([Prop({
  type: Array,
  default: function _default() {
    return [];
  }
}), __metadata("design:type", Object)], MTable.prototype, "noExpand", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], MTable.prototype, "filter", void 0);

__decorate([Emit('expand'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onExpand", null);

__decorate([Emit('expandAll'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onExpandAll", null);

__decorate([Emit('select'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onSelect", null);

__decorate([Emit('selectAll'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onSelectAll", null);

__decorate([Emit('rowClick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onRowClick", null);

__decorate([Emit('rowDblclick'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object, Number]), __metadata("design:returntype", void 0)], MTable.prototype, "onRowDblclick", null);

__decorate([Watch('data', {
  immediate: true,
  deep: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Array]), __metadata("design:returntype", void 0)], MTable.prototype, "handleDataUpdate", null);

__decorate([Watch('selected', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "handleSelectedUpdate", null);

__decorate([Watch('expanded', {
  immediate: true
}), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "handleExpandedUpdate", null);

__decorate([Emit('update:selected'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "syncSelected", null);

__decorate([Emit('update:expanded'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MTable.prototype, "syncExpanded", null);

__decorate([Provide(), __metadata("design:type", Object)], MTable.prototype, "TableStore", void 0);

__decorate([Provide(), __metadata("design:type", Array), __metadata("design:paramtypes", [])], MTable.prototype, "TableCols", null);

MTable = __decorate([Component({
  components: {
    TableHead: TableHead$1,
    TableBody: TableBody$1
  },
  mixins: [mixColor, mixSize, mixSpace, mixElevation]
})], MTable);
var MTable$1 = MTable;

var MTableCol =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTableCol, _Vue);

  function MTableCol() {
    _classCallCheck(this, MTableCol);

    return _possibleConstructorReturn(this, _getPrototypeOf(MTableCol).apply(this, arguments));
  }

  return MTableCol;
}(Vue);

__decorate([Prop({
  type: String,
  default: 'normal'
}), __metadata("design:type", String)], MTableCol.prototype, "type", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MTableCol.prototype, "title", void 0);

__decorate([Prop({
  type: [String, Number],
  default: 'auto'
}), __metadata("design:type", String)], MTableCol.prototype, "width", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MTableCol.prototype, "field", void 0);

__decorate([Prop({
  type: String,
  default: Align.center
}), __metadata("design:type", String)], MTableCol.prototype, "align", void 0);

__decorate([Prop({
  type: String,
  default: Color.primary
}), __metadata("design:type", String)], MTableCol.prototype, "color", void 0);

__decorate([Prop({
  type: Function
}), __metadata("design:type", Function)], MTableCol.prototype, "sort", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTableCol.prototype, "sortable", void 0);

MTableCol = __decorate([Component], MTableCol);
var MTableCol$1 = MTableCol;

/* istanbul ignore next */

MTable$1.install = function (Vue) {
  Vue.component('MTable', MTable$1);
};

MTableCol$1.install = function (Vue) {
  Vue.component('MTableCol', MTableCol$1);
};

var css$n = "/**\r\n * variables register.\r\n */\n.m-tooltip {\n  --m-tooltip-color: var(--m-color-default);\n  --m-tooltip-font-color: var(--m-bg-color);\n  --m-tooltip-font-size: 12px;\n  --m-chip-border-size: 1px;\n  --m-chip__close-size: calc(var(--m-chip-size) / 1.3); }\n\n.m-tooltip {\n  font-size: var(--m-tooltip-font-size);\n  padding: 8px 10px;\n  color: var(--m-tooltip-font-color);\n  background-color: var(--m-tooltip-color);\n  border-radius: var(--m-shape-corner);\n  -webkit-box-shadow: var(--m-elevation-2);\n          box-shadow: var(--m-elevation-2); }\n  .m-tooltip.m-variety-outline {\n    border-style: solid;\n    border-width: var(--m-chip-border-size);\n    border-color: var(--m-chip-color);\n    background-color: var(--m-bg-color);\n    color: var(--m-chip-color); }\n  .m-tooltip.m-variety-flat {\n    background-color: var(--m-bg-color);\n    color: var(--m-chip-color); }\n  .m-tooltip.m-shape-circle {\n    border-radius: calc(var(--m-tooltip-font-size) + 8px); }\n  .m-tooltip.m-shape-round {\n    border-radius: var(--m-shape-round); }\n  .m-tooltip.m-shape-corner {\n    border-radius: var(--m-shape-corner); }\n  .m-tooltip.m-shape-square {\n    border-radius: var(--m-shape-square); }\n";
styleInject(css$n);

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.prefix = 'mobov-vui:';
  }

  _createClass(Logger, [{
    key: "error",
    value: function error(msg) {
      var message = "".concat(this.prefix).concat(msg);
      console.error(message);
      throw new Error(message);
    }
  }, {
    key: "warn",
    value: function warn(msg) {
      var message = "".concat(this.prefix).concat(msg);
      console.warn(message);
    }
  }, {
    key: "info",
    value: function info(msg) {
      var message = "".concat(this.prefix).concat(msg);
      console.info(message);
    }
  }]);

  return Logger;
}();

var logger = new Logger();

var ZIndex =
/*#__PURE__*/
function () {
  function ZIndex() {
    _classCallCheck(this, ZIndex);

    this.zIndex = 2000;
  }

  _createClass(ZIndex, [{
    key: "next",
    get: function get() {
      this.zIndex += 2;
      return this.zIndex;
    }
  }]);

  return ZIndex;
}();

var ZIndex$1 = new ZIndex();

var $popperHome = document.body;

var PopperMixin =
/*#__PURE__*/
function (_Vue) {
  _inherits(PopperMixin, _Vue);

  function PopperMixin() {
    var _this;

    _classCallCheck(this, PopperMixin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PopperMixin).apply(this, arguments));
    _this.visible = false;
    _this.isMouseOver = false;
    _this.zIndex = ZIndex$1.next;
    _this.debounceHide = debounce(50, function () {
      return _this.handleHide();
    });
    return _this;
  }

  _createClass(PopperMixin, [{
    key: "whenVisibleUpdate",
    value: function whenVisibleUpdate(val) {
      if (val) {
        this.$emit('show', this);

        if (this.popperJS) {
          this.popperJS.enableEventListeners();
        }

        this.updatePopper();
      } else {
        if (this.popperJS) {
          this.popperJS.disableEventListeners();
        }

        this.$emit('hide', this);
      }
    }
  }, {
    key: "initPopper",
    // @ts-ignore
    value: function initPopper() {
      if (this.popperJS) {
        this.popperJS.scheduleUpdate();
      } else {
        this.createPopper();
      }
    }
  }, {
    key: "createPopper",
    value: function createPopper() {
      var _this2 = this;

      if (!PLACEMENT.includes(this.placement)) {
        return;
      }

      $popperHome.appendChild(this.popperVM.$el);
      this.$nextTick(function () {
        _this2.$popper = _this2.popperVM.$el;
        _this2.$reference = _this2.$reference || _this2.$el;

        if (!_this2.$popper || !_this2.$reference) {
          return;
        }

        if (_this2.popperJS && _this2.popperJS.hasOwnProperty('destroy')) {
          _this2.popperJS.destroy();
        }

        _this2.popperOptions.onCreate = function () {
          _this2.$emit('created', _this2);

          _this2.$nextTick(_this2.updatePopper);
        };

        _this2.popperJS = new PopperJS(_this2.$reference, _this2.$popper, _this2.popperOptions);
      });
    } // @ts-ignore

  }, {
    key: "updatePopper",
    value: function updatePopper() {
      this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
    }
  }, {
    key: "destroyPopper",
    value: function destroyPopper() {
      if (this.popperJS) {
        this.popperJS.destroy();
        this.popperJS = null;
        $popperHome.removeChild(this.$popper);
      }
    }
  }, {
    key: "show",
    value: function show() {
      this.zIndex = ZIndex$1.next;

      if (this.trigger === 'hover') {
        this.isMouseOver = true;
      }

      this.visible = true;
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.trigger === 'hover') {
        this.isMouseOver = false;
        this.debounceHide();
      } else {
        this.visible = false;
      }
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.visible) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: "handleDocumentClick",
    value: function handleDocumentClick(e) {
      if (!(this.$popper.contains(e.target) || this.$reference.contains(e.target))) {
        this.hide();
      }
    }
  }, {
    key: "handleHide",
    value: function handleHide() {
      var _this3 = this;

      setTimeout(function () {
        if (!_this3.isMouseOver) {
          _this3.visible = false;
        }
      }, this.hideDelay);
    }
  }, {
    key: "mounted",
    value: function mounted() {
      var _this4 = this;

      this.initPopper();
      this.$nextTick(function () {
        if (_this4.trigger === 'hover') {
          on(_this4.$el, 'mouseenter', _this4.show);
          on(_this4.$el, 'mouseleave', _this4.hide);
          on(_this4.popperVM.$el, 'mouseenter', _this4.show);
          on(_this4.popperVM.$el, 'mouseleave', _this4.hide);
        } else if (_this4.trigger === 'click') {
          on(_this4.$el, 'click', _this4.show);
          on(document.body, 'click', _this4.handleDocumentClick);
        } else if (_this4.trigger === 'toggle') {
          on(_this4.$el, 'click', _this4.toggle);
          on(document.body, 'click', _this4.handleDocumentClick);
        }
      });
    }
  }, {
    key: "beforeDestroy",
    value: function beforeDestroy() {
      if (this.trigger === 'hover') {
        off(this.$el, 'mouseenter', this.show);
        off(this.$el, 'mouseleave', this.hide);
        off(this.popperVM.$el, 'mouseenter', this.show);
        off(this.popperVM.$el, 'mouseleave', this.hide);
      } else if (this.trigger === 'click') {
        off(this.$el, 'click', this.show);
        off(document.body, 'click', this.handleDocumentClick);
      } else if (this.trigger === 'toggle') {
        off(this.$el, 'click', this.toggle);
        off(document.body, 'click', this.handleDocumentClick);
      }

      this.destroyPopper();
    }
  }, {
    key: "deactivated",
    value: function deactivated() {
      // @ts-ignore
      this.$options.beforeDestroy[0].call(this);
    }
  }, {
    key: "popperStyle",
    get: function get() {
      return {
        zIndex: this.zIndex
      };
    }
  }, {
    key: "popperOptions",
    get: function get() {
      return Object.assign(Object.assign({}, this.options), {
        placement: this.placement,
        modifiers: {
          preventOverflow: {
            escapeWithReference: true
          }
        }
      });
    }
  }]);

  return PopperMixin;
}(Vue);

__decorate([Prop({
  type: String,
  default: 'bottom'
}), __metadata("design:type", String)], PopperMixin.prototype, "placement", void 0);

__decorate([Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], PopperMixin.prototype, "offset", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], PopperMixin.prototype, "value", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], PopperMixin.prototype, "visibleArrow", void 0);

__decorate([Prop({
  type: Boolean,
  default: true
}), __metadata("design:type", Boolean)], PopperMixin.prototype, "transition", void 0);

__decorate([Prop({
  type: Boolean
}), __metadata("design:type", Boolean)], PopperMixin.prototype, "disabled", void 0);

__decorate([Prop({
  type: String,
  default: 'hover'
}), __metadata("design:type", String)], PopperMixin.prototype, "trigger", void 0);

__decorate([Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], PopperMixin.prototype, "showDelay", void 0);

__decorate([Prop({
  type: Number,
  default: 0
}), __metadata("design:type", Number)], PopperMixin.prototype, "hideDelay", void 0);

__decorate([Prop({
  type: Object,
  default: function _default() {}
}), __metadata("design:type", Object)], PopperMixin.prototype, "options", void 0);

__decorate([Watch('visible'), __metadata("design:type", Function), __metadata("design:paramtypes", [Boolean]), __metadata("design:returntype", void 0)], PopperMixin.prototype, "whenVisibleUpdate", null);

PopperMixin = __decorate([Component], PopperMixin);
var mixPopper = PopperMixin;

var MTooltip =
/*#__PURE__*/
function (_Vue) {
  _inherits(MTooltip, _Vue);

  function MTooltip() {
    var _this;

    _classCallCheck(this, MTooltip);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MTooltip).apply(this, arguments));
    _this.name = 'm-tooltip';
    _this.popperId = "m-tooltip-".concat(uid(10));
    return _this;
  }

  _createClass(MTooltip, [{
    key: "emitShow",
    value: function emitShow(e) {}
  }, {
    key: "emitHide",
    value: function emitHide(e) {}
  }, {
    key: "RTooltip",
    value: function RTooltip() {
      var h = this.$createElement;
      var name = this.name,
          popperId = this.popperId,
          classes = this.classes,
          styles = this.styles,
          $slots = this.$slots,
          content = this.content;
      var popoverContent = $slots.content ? $slots.content : content;
      return h(MTransition$1, {
        "attrs": {
          "name": "fade"
        }
      }, [h("div", {
        "directives": [{
          name: "show",
          value: this.visible
        }],
        "attrs": {
          "role": 'tooltip',
          "aria-hidden": "true",
          "id": popperId
        },
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [popoverContent])]);
    }
  }, {
    key: "beforeCreate",
    value: function beforeCreate() {
      this.popperVM = new Vue({
        data: {
          node: ''
        },
        render: function render(h) {
          return this.node;
        }
      }).$mount();
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          popperId = this.popperId,
          content = this.content,
          classes = this.classes,
          styles = this.styles,
          $slots = this.$slots;
      this.popperVM.node = this.RTooltip();

      if ($slots.default.length !== 1) {
        logger.error("".concat(this.name, "\u7EC4\u4EF6\u53EA\u5141\u8BB8\u4E00\u4E2A\u975Etemplate\u5B50\u8282\u70B9\u6216\u4E0D\u4E3A\u7A7A"));
      }

      var result = null;

      if ($slots.default[0].tag) {
        result = $slots.default[0];
      } else {
        result = h("span", [$slots.default[0]]);
      }

      return result;
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle), this.popperStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.elevationClass), this.shapeClass), this.varietyClass);
    }
  }]);

  return MTooltip;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MTooltip.prototype, "value", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MTooltip.prototype, "content", void 0);

__decorate([Emit('show'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MTooltip.prototype, "emitShow", null);

__decorate([Emit('hide'), __metadata("design:type", Function), __metadata("design:paramtypes", [MouseEvent]), __metadata("design:returntype", void 0)], MTooltip.prototype, "emitHide", null);

MTooltip = __decorate([Component({
  mixins: [mixPopper, mixColor, mixSize, mixShape, mixVariety, mixElevation],
  components: {
    MTransition: MTransition$1
  }
})], MTooltip);
var MTooltip$1 = MTooltip;

/* istanbul ignore next */

MTooltip$1.install = function (Vue) {
  Vue.component('MTooltip', MTooltip$1);
};

var css$o = "/**\r\n * variables register.\r\n */\n.m-popover {\n  --m-popover-bg-color: var(--m-bg-color);\n  --m-popover-font-color: var(--m-font-color);\n  --m-popover-font-size: 14px; }\n\n.m-popover {\n  font-size: var(--m-popover-font-size);\n  padding: var(--m-space-md) var(--m-space-md);\n  color: var(--m-popover-font-color);\n  background-color: var(--m-popover-bg-color);\n  border-radius: var(--m-shape-corner);\n  -webkit-box-shadow: var(--m-elevation-2);\n          box-shadow: var(--m-elevation-2);\n  width: auto; }\n  .m-popover.m-variety-outline {\n    border-style: solid;\n    border-width: var(--m-chip-border-size);\n    border-color: var(--m-chip-color);\n    background-color: var(--m-bg-color);\n    color: var(--m-chip-color); }\n  .m-popover.m-variety-flat {\n    background-color: var(--m-bg-color);\n    color: var(--m-chip-color); }\n  .m-popover.m-shape-circle {\n    border-radius: calc(var(--m-popover-font-size) + 8px); }\n  .m-popover.m-shape-round {\n    border-radius: var(--m-shape-round); }\n  .m-popover.m-shape-corner {\n    border-radius: var(--m-shape-corner); }\n  .m-popover.m-shape-square {\n    border-radius: var(--m-shape-square); }\n";
styleInject(css$o);

var MPopover =
/*#__PURE__*/
function (_Vue) {
  _inherits(MPopover, _Vue);

  function MPopover() {
    var _this;

    _classCallCheck(this, MPopover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MPopover).apply(this, arguments));
    _this.name = 'm-popover';
    _this.popperId = "m-popover-".concat(uid(10));
    return _this;
  }

  _createClass(MPopover, [{
    key: "RPopover",
    value: function RPopover() {
      var h = this.$createElement;
      var name = this.name,
          popperId = this.popperId,
          classes = this.classes,
          styles = this.styles,
          $slots = this.$slots,
          content = this.content;
      var popoverContent = $slots.content ? $slots.content : content;
      return h(MTransition$1, {
        "attrs": {
          "name": "fade"
        }
      }, [h("div", {
        "directives": [{
          name: "show",
          value: this.visible
        }],
        "attrs": {
          "role": 'tooltip',
          "aria-hidden": "true",
          "id": popperId
        },
        "staticClass": name,
        "class": classes,
        "style": styles
      }, [popoverContent])]);
    }
  }, {
    key: "beforeCreate",
    value: function beforeCreate() {
      this.popperVM = new Vue({
        data: {
          node: ''
        },
        render: function render(h) {
          return this.node;
        }
      }).$mount();
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var name = this.name,
          popperId = this.popperId,
          content = this.content,
          classes = this.classes,
          styles = this.styles,
          $slots = this.$slots;
      this.popperVM.node = this.RPopover();

      if ($slots.default.length !== 1) {
        logger.error("".concat(this.name, "\u7EC4\u4EF6\u53EA\u5141\u8BB8\u4E00\u4E2A\u975Etemplate\u5B50\u8282\u70B9\u6216\u4E0D\u4E3A\u7A7A"));
      }

      var result = null;

      if ($slots.default[0].tag) {
        result = $slots.default[0];
      } else {
        result = h("span", [$slots.default[0]]);
      }

      return result;
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign(Object.assign({}, this.popperStyle), this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.elevationClass), this.shapeClass), this.varietyClass);
    }
  }]);

  return MPopover;
}(Vue);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MPopover.prototype, "value", void 0);

__decorate([Prop({
  type: String
}), __metadata("design:type", String)], MPopover.prototype, "content", void 0);

__decorate([Prop({
  type: String,
  default: 'click'
}), __metadata("design:type", String)], MPopover.prototype, "trigger", void 0);

MPopover = __decorate([Component({
  mixins: [mixPopper, mixSpace, mixColor, mixSize, mixShape, mixVariety, mixElevation],
  components: {
    MTransition: MTransition$1
  }
})], MPopover);
var MPopover$1 = MPopover;

/* istanbul ignore next */

MPopover$1.install = function (Vue) {
  Vue.component('MPopover', MPopover$1);
};

var css$p = "/**\r\n * variables register.\r\n */\n.m-input {\n  --m-input-color: var(--m-color-primary);\n  --m-input-font-color: var(--m-font-color);\n  --m-input-size: 24px;\n  --m-input-wrapper-size: calc(var(--m-input-size) * 2);\n  --m-input-font-size: calc(var(--m-input-size) / 1.6); }\n\n/**\r\n * components styles.\r\n */\n.m-input {\n  color: var(--m-input-font-color);\n  height: var(--m-input-color);\n  font-size: var(--m-input-font-size);\n  margin-right: var(--m-space-sm);\n  cursor: pointer;\n  position: relative;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .m-input.m--disabled {\n    opacity: .5; }\n  .m-input.m--checked {\n    color: var(--m-input-color); }\n  .m-input__checked-icon, .m-input__uncheck-icon, .m-input__radio {\n    height: var(--m-input-size);\n    width: var(--m-input-size); }\n  .m-input__radio {\n    position: relative; }\n  .m-input__checked-icon {\n    position: absolute;\n    left: 0;\n    top: 0; }\n  .m-input__radio-wrapper {\n    position: absolute;\n    left: calc(var(--m-input-size) / 2 - var(--m-input-wrapper-size) / 2);\n    top: calc(var(--m-input-size) / 2 - var(--m-input-wrapper-size) / 2);\n    height: var(--m-input-wrapper-size);\n    width: var(--m-input-wrapper-size);\n    border-radius: 50%; }\n  .m-input__label {\n    text-indent: .4em; }\n";
styleInject(css$p);

var MInput =
/*#__PURE__*/
function (_Vue) {
  _inherits(MInput, _Vue);

  function MInput() {
    var _this;

    _classCallCheck(this, MInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MInput).apply(this, arguments));
    _this.name = 'm-input';
    return _this;
  }

  _createClass(MInput, [{
    key: "onInput",
    value: function onInput(val) {}
  }, {
    key: "onChange",
    value: function onChange(val) {}
  }, {
    key: "handleClick",
    value: function handleClick(val) {
      if (this.disabled) {
        return;
      }

      if (this.checked) {
        return;
      }

      this.onInput(val);
    }
  }, {
    key: "RDefault",
    value: function RDefault() {
      var h = this.$createElement;
      var $slots = this.$slots;
      return $slots.default === undefined ? undefined : h("span", {
        "staticClass": "".concat(this.name, "__label")
      }, [$slots.default]);
    }
  }, {
    key: "render",
    value: function render() {
      var h = arguments[0];
      var styles = this.styles,
          classes = this.classes,
          label = this.label,
          handleClick = this.handleClick,
          RDefault = this.RDefault;
      return h("div", {
        "staticClass": this.name,
        "class": classes,
        "style": styles,
        "on": {
          "click": function click() {
            return handleClick(label);
          }
        }
      }, [RDefault()]);
    }
  }, {
    key: "styles",
    get: function get() {
      return Object.assign(Object.assign(Object.assign({}, this.colorStyle), this.sizeStyle), this.spaceStyle);
    }
  }, {
    key: "classes",
    get: function get() {
      var checked = this.checked,
          disabled = this.disabled;
      return {
        'm--checked': checked,
        'm--disabled': disabled
      };
    }
  }, {
    key: "checked",
    get: function get() {
      return this.label === this.value;
    }
  }]);

  return MInput;
}(Vue);

__decorate([Prop({
  type: [Number, String],
  default: ''
}), __metadata("design:type", Object)], MInput.prototype, "value", void 0);

__decorate([Prop({
  type: [Boolean, Number, String],
  default: true
}), __metadata("design:type", Object)], MInput.prototype, "label", void 0);

__decorate([Prop({
  type: Boolean,
  default: false
}), __metadata("design:type", Boolean)], MInput.prototype, "disabled", void 0);

__decorate([Prop({
  type: [Number, String],
  default: ''
}), __metadata("design:type", Object)], MInput.prototype, "type", void 0);

__decorate([Prop({
  type: [Number, String],
  default: ''
}), __metadata("design:type", Object)], MInput.prototype, "placeholder", void 0);

__decorate([Emit('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MInput.prototype, "onInput", null);

__decorate([Emit('change'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], MInput.prototype, "onChange", null);

MInput = __decorate([Component({
  components: {
    MIcon: MIcon$1,
    MTransition: MTransition$1
  },
  mixins: [mixColor, mixSize, mixSpace]
})], MInput);
var MInput$1 = MInput;

/* istanbul ignore next */

MInput$1.install = function (Vue) {
  Vue.component('MInput', MInput$1);
};

// 基础

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MApp: MApp$1,
  MFrame: MFrame$1,
  MView: MView$1,
  MIcon: MIcon$1,
  MContainer: MContainer$1,
  MRow: MRow$1,
  MCol: MCol$1,
  MFlex: MFlex$1,
  MFlexFiller: MFlexFiller$1,
  MAppBar: MAppBar$1,
  MButton: MButton$1,
  MAvatar: MAvatar$1,
  MRadio: MRadio$1,
  MCheckbox: MCheckbox$1,
  MChip: MChip$1,
  MTimePicker: MTimePicker$1,
  MList: MList$1,
  MListItem: MListItem$1,
  MTable: MTable$1,
  MTableCol: MTableCol$1,
  MTooltip: MTooltip$1,
  MPopover: MPopover$1,
  MInput: MInput$1,
  MTransition: MTransition$1
});

var css$q = ".v-ripple__container {\n  color: inherit;\n  border-radius: inherit;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  z-index: 0;\n  pointer-events: none;\n  contain: strict; }\n\n.v-ripple__animation {\n  color: inherit;\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-radius: 50%;\n  background: currentColor;\n  opacity: 0;\n  -webkit-transition: 0.2s cubic-bezier(0, 0, 0.2, 1);\n  transition: 0.2s cubic-bezier(0, 0, 0.2, 1);\n  pointer-events: none;\n  overflow: hidden;\n  will-change: transform, opacity; }\n  .v-ripple__animation--enter {\n    -webkit-transition: none;\n    transition: none; }\n  .v-ripple__animation--visible {\n    opacity: .15; }\n";
styleInject(css$q);

var name = 'MRipple';

function style(el, value) {
  el.style.transform = value;
  el.style.webkitTransform = value;
}

var ripple = {
  show: function show(e, el) {
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!el._ripple || !el._ripple.enabled) {
      return;
    }

    var container = document.createElement('span');
    var animation = document.createElement('span');
    container.appendChild(animation);
    container.className = 'v-ripple__container';

    if (value.class) {
      container.className += " ".concat(value.class);
    }

    var size = Math.max(el.clientWidth, el.clientHeight) * (value.center ? 1 : 2);
    var halfSize = size / 2;
    animation.className = 'v-ripple__animation';
    animation.style.width = "".concat(size, "px");
    animation.style.height = "".concat(size, "px");
    el.appendChild(container);
    var computed = window.getComputedStyle(el);

    if (computed.position !== 'absolute' && computed.position !== 'fixed') {
      el.style.position = 'relative';
    }

    var offset = el.getBoundingClientRect();
    var x = value.center ? 0 : e.clientX - offset.left - halfSize;
    var y = value.center ? 0 : e.clientY - offset.top - halfSize;
    animation.classList.add('v-ripple__animation--enter');
    animation.classList.add('v-ripple__animation--visible');
    style(animation, "translate(".concat(x, "px, ").concat(y, "px) scale3d(0, 0, 0)"));
    animation.dataset.activated = String(performance.now());
    setTimeout(function () {
      animation.classList.remove('v-ripple__animation--enter');
      style(animation, "translate(".concat(x, "px, ").concat(y, "px)  scale3d(1, 1, 1)"));
    }, 0);
  },
  hide: function hide(el) {
    if (!el || !el._ripple || !el._ripple.enabled) {
      return;
    }

    var ripples = el.getElementsByClassName('v-ripple__animation');

    if (ripples.length === 0) {
      return;
    }

    var animation = ripples[ripples.length - 1];

    if (animation.dataset.isHiding) {
      return;
    } else {
      animation.dataset.isHiding = 'true';
    }

    var diff = performance.now() - Number(animation.dataset.activated);
    var delay = Math.max(300 - diff, 0);
    setTimeout(function () {
      animation.classList.remove('v-ripple__animation--visible');
      setTimeout(function () {
        var $ripples = el.getElementsByClassName('v-ripple__animation');

        if ($ripples.length === 0) {
          el.style.position = null;
        }

        if (animation.parentNode) {
          el.removeChild(animation.parentNode);
        }
      }, 300);
    }, delay);
  }
};

function isRippleEnabled(value) {
  return typeof value === 'undefined' || !!value;
}

function rippleShow(e) {
  var value = {};
  var element = e.currentTarget;

  if (!element) {
    return;
  }

  value.center = element._ripple.centered;

  if (element._ripple.class) {
    value.class = element._ripple.class;
  }

  ripple.show(e, element, value);
}

function rippleHide(e) {
  ripple.hide(e.currentTarget);
}

function updateRipple(el, binding, wasEnabled) {
  var enabled = isRippleEnabled(binding.value);

  if (!enabled) {
    ripple.hide(el);
  }

  el._ripple = el._ripple || {};
  el._ripple.enabled = enabled;
  var value = binding.value || {};

  if (value.center) {
    el._ripple.centered = true;
  }

  if (value.class) {
    el._ripple.class = binding.value.class;
  }

  if (enabled && !wasEnabled) {
    if ('ontouchstart' in window) {
      el.addEventListener('touchend', rippleHide, false);
      el.addEventListener('touchcancel', rippleHide, false);
    }

    el.addEventListener('mousedown', rippleShow, false);
    el.addEventListener('mouseup', rippleHide, false);
    el.addEventListener('mouseleave', rippleHide, false);
    el.addEventListener('dragstart', rippleHide, false);
  } else if (!enabled && wasEnabled) {
    removeListeners(el);
  }
}

function removeListeners(el) {
  el.removeEventListener('mousedown', rippleShow, false);
  el.removeEventListener('touchend', rippleHide, false);
  el.removeEventListener('touchcancel', rippleHide, false);
  el.removeEventListener('mouseup', rippleHide, false);
  el.removeEventListener('mouseleave', rippleHide, false);
  el.removeEventListener('dragstart', rippleHide, false);
}

function directive(el, binding) {
  updateRipple(el, binding, false);
}

function unbind(el) {
  delete el._ripple;
  removeListeners(el);
}

function update(el, binding) {
  if (binding.value === binding.oldValue) {
    return;
  }

  var wasEnabled = isRippleEnabled(binding.oldValue);
  updateRipple(el, binding, wasEnabled);
}

var MRipple = {
  name: name,
  bind: directive,
  unbind: unbind,
  update: update
};

/* istanbul ignore next */

MRipple.install = function (Vue) {
  Vue.directive(MRipple.name, MRipple);
};

// 指令和动画

var directives = /*#__PURE__*/Object.freeze({
  __proto__: null,
  MRipple: MRipple
});

var Mobov = {
  install: function install(Vue) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (this.installed) {
      return;
    }

    this.installed = true; // 注册组件

    var componentsList = opts.components || components;
    var directivesList = opts.directives || directives;
    var iconsList = opts.icons || {};
    Object.values(componentsList).forEach(function (item) {
      Vue.use(item);
    });
    Object.values(directivesList).forEach(function (item) {
      Vue.use(item);
    });
    Object.values(iconsList).forEach(function (item) {
      MIcon$1.register(item);
    }); // 挂载根组件

    window.Mobov = this;
  },
  version: '0.2.33',
  constant: constant
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Mobov);
}

export default Mobov;
export { MApp$1 as MApp, MAppBar$1 as MAppBar, MAvatar$1 as MAvatar, MButton$1 as MButton, MCheckbox$1 as MCheckbox, MChip$1 as MChip, MCol$1 as MCol, MContainer$1 as MContainer, MFlex$1 as MFlex, MFlexFiller$1 as MFlexFiller, MFrame$1 as MFrame, MIcon$1 as MIcon, MInput$1 as MInput, MList$1 as MList, MListItem$1 as MListItem, MPopover$1 as MPopover, MRadio$1 as MRadio, MRow$1 as MRow, MTable$1 as MTable, MTableCol$1 as MTableCol, MTimePicker$1 as MTimePicker, MTooltip$1 as MTooltip, MTransition$1 as MTransition, MView$1 as MView };
