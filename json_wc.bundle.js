"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcbdc_carbon_reporting_dashboard"] = self["webpackChunkcbdc_carbon_reporting_dashboard"] || []).push([["json_wc"],{

/***/ "./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloud.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloud.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WordCloud: () => (/* binding */ WordCloud)\n/* harmony export */ });\n/* harmony import */ var _WordCloudDefaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WordCloudDefaultTheme */ \"./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloudDefaultTheme.js\");\n/* harmony import */ var _core_render_Series__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/render/Series */ \"./node_modules/@amcharts/amcharts5/.internal/core/render/Series.js\");\n/* harmony import */ var _core_util_Template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/util/Template */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Template.js\");\n/* harmony import */ var _core_render_Label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/render/Label */ \"./node_modules/@amcharts/amcharts5/.internal/core/render/Label.js\");\n/* harmony import */ var _core_render_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/render/Container */ \"./node_modules/@amcharts/amcharts5/.internal/core/render/Container.js\");\n/* harmony import */ var _core_util_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/util/List */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/List.js\");\n/* harmony import */ var _core_util_Color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/util/Color */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Color.js\");\n/* harmony import */ var _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/util/Utils */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Utils.js\");\n/* harmony import */ var _core_util_Array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/util/Array */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Array.js\");\n/* harmony import */ var _core_util_Math__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/util/Math */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Math.js\");\n/* harmony import */ var _core_util_Type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../core/util/Type */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Type.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Creates a [[WordlCloud]] series.\r\n *\r\n * @see {@link https://www.amcharts.com/docs/v5/charts/word-cloud/} for more info\r\n * @important\r\n */\r\nclass WordCloud extends _core_render_Series__WEBPACK_IMPORTED_MODULE_0__.Series {\r\n    constructor() {\r\n        super(...arguments);\r\n        Object.defineProperty(this, \"_currentIndex\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: 0\r\n        });\r\n        Object.defineProperty(this, \"_timeoutDP\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        Object.defineProperty(this, \"_ghostContainer\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: this.children.push(_core_render_Container__WEBPACK_IMPORTED_MODULE_1__.Container.new(this._root, { layer: 99, opacity: 0.01 }))\r\n        });\r\n        Object.defineProperty(this, \"_pointSets\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: []\r\n        });\r\n        Object.defineProperty(this, \"_sets\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: 3\r\n        });\r\n        Object.defineProperty(this, \"_process\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: false\r\n        });\r\n        Object.defineProperty(this, \"_buffer\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: []\r\n        });\r\n        Object.defineProperty(this, \"_boundsToAdd\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: void 0\r\n        });\r\n        /**\r\n         * A [[ListTemplate]] of all labels in series.\r\n         *\r\n         * `labels.template` can also be used to configure labels.\r\n         */\r\n        Object.defineProperty(this, \"labels\", {\r\n            enumerable: true,\r\n            configurable: true,\r\n            writable: true,\r\n            value: this._makeLabels()\r\n        });\r\n    }\r\n    _afterNew() {\r\n        this._defaultThemes.push(_WordCloudDefaultTheme__WEBPACK_IMPORTED_MODULE_2__.WordCloudDefaultTheme.new(this._root));\r\n        this.fields.push(\"category\", \"fill\");\r\n        this._setDefault(\"valueField\", \"value\");\r\n        this._setDefault(\"categoryField\", \"category\");\r\n        this._setDefault(\"fillField\", \"fill\");\r\n        super._afterNew();\r\n        this._root.events.on(\"frameended\", () => {\r\n            this.set(\"progress\", this._currentIndex / this.dataItems.length);\r\n        });\r\n    }\r\n    /**\r\n     * @ignore\r\n     */\r\n    makeLabel(dataItem) {\r\n        const label = this.children.push(this.labels.make());\r\n        label._setDataItem(dataItem);\r\n        const fill = dataItem.get(\"fill\");\r\n        if (fill != null) {\r\n            label.set(\"fill\", fill);\r\n        }\r\n        label.set(\"x\", -999999); // do not change!\r\n        dataItem.set(\"label\", label);\r\n        this.labels.push(label);\r\n        const ghostLabel = this._ghostContainer.children.push(this.labels.make());\r\n        ghostLabel._setDataItem(dataItem);\r\n        ghostLabel.setAll({ fill: _core_util_Color__WEBPACK_IMPORTED_MODULE_3__.Color.fromHex(0x000000), fontWeight: \"900\" });\r\n        dataItem.set(\"ghostLabel\", ghostLabel);\r\n        this.labels.push(ghostLabel);\r\n        return label;\r\n    }\r\n    _makeLabels() {\r\n        return new _core_util_List__WEBPACK_IMPORTED_MODULE_4__.ListTemplate(_core_util_Template__WEBPACK_IMPORTED_MODULE_5__.Template.new({}), () => _core_render_Label__WEBPACK_IMPORTED_MODULE_6__.Label._new(this._root, {\r\n            themeTags: _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__.mergeTags(this.labels.template.get(\"themeTags\", []), [\"wordcloud\", \"series\"])\r\n        }, [this.labels.template]));\r\n    }\r\n    processDataItem(dataItem) {\r\n        super.processDataItem(dataItem);\r\n        if (dataItem.get(\"fill\") == null) {\r\n            let colors = this.get(\"colors\");\r\n            if (colors) {\r\n                dataItem.setRaw(\"fill\", colors.next());\r\n            }\r\n        }\r\n        this.makeLabel(dataItem);\r\n    }\r\n    _prepareChildren() {\r\n        super._prepareChildren();\r\n        if (this.isDirty(\"text\")) {\r\n            this.data.setAll(this._getWords(this.get(\"text\")));\r\n            this._dirty[\"text\"] = false;\r\n        }\r\n    }\r\n    _updateChildren() {\r\n        super._updateChildren();\r\n        const resolution = this._root._renderer.resolution;\r\n        const cols = Math.round(this._root.width() * resolution);\r\n        //const rows = Math.round(this._root.height() * resolution);\r\n        let step = this.get(\"step\", 1) * 2;\r\n        if (this._valuesDirty || this._sizeDirty || this.isPrivateDirty(\"adjustedFontSize\")) {\r\n            const adjustedFontSize = this.getPrivate(\"adjustedFontSize\", 1);\r\n            const w = this.innerWidth();\r\n            const h = this.innerHeight();\r\n            const smaller = Math.min(w, h);\r\n            const bigger = Math.max(w, h);\r\n            this._buffer = Array(Math.ceil(this._root.width() * this._root.height() * resolution * resolution)).fill(0);\r\n            if (smaller < 800) {\r\n                step = step / 2;\r\n            }\r\n            this._ghostContainer._display.clear();\r\n            this._pointSets = [];\r\n            for (let i = 0; i < this._sets; i++) {\r\n                // bigger step at the beginning\r\n                const setStep = step * (this._sets - i);\r\n                const points = this._spiralPoints(w / 2, h / 2, w, h, 0, setStep * h / bigger, setStep * w / bigger, 0, 0);\r\n                // generated more points and remove those out of bounds\r\n                for (let i = points.length - 1; i >= 0; i--) {\r\n                    let point = points[i];\r\n                    if (point.x < 0 || point.x > w || point.y < 0 || point.y > h) {\r\n                        points.splice(i, 1);\r\n                        continue;\r\n                    }\r\n                }\r\n                this._pointSets.push(points);\r\n            }\r\n            let sum = 0;\r\n            let absSum = 0;\r\n            let valueHigh = 0;\r\n            let valueLow = Infinity;\r\n            let count = 0;\r\n            _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(this._dataItems, (dataItem) => {\r\n                const valueWorking = dataItem.get(\"valueWorking\", 0);\r\n                sum += valueWorking;\r\n                absSum += Math.abs(valueWorking);\r\n            });\r\n            this._dataItems.sort((a, b) => {\r\n                let aValue = a.get(\"value\");\r\n                let bValue = b.get(\"value\");\r\n                if (aValue > bValue)\r\n                    return -1;\r\n                if (aValue < bValue)\r\n                    return 1;\r\n                return 0;\r\n            });\r\n            _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(this._dataItems, (dataItem) => {\r\n                const value = dataItem.get(\"valueWorking\", 0);\r\n                if (value >= absSum) {\r\n                    sum = dataItem.get(\"value\", 0);\r\n                }\r\n                if (value > valueHigh) {\r\n                    valueHigh = value;\r\n                }\r\n                if (value < valueLow) {\r\n                    valueLow = value;\r\n                }\r\n                count++;\r\n            });\r\n            this.setPrivateRaw(\"valueLow\", valueLow);\r\n            this.setPrivateRaw(\"valueHigh\", valueHigh);\r\n            this.setPrivateRaw(\"valueSum\", sum);\r\n            this.setPrivateRaw(\"valueAverage\", sum / count);\r\n            this.setPrivateRaw(\"valueAbsoluteSum\", absSum);\r\n            const smallerSize = Math.min(w, h);\r\n            const minFontSize = _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__.relativeToValue(this.get(\"minFontSize\", 10), smallerSize) * adjustedFontSize;\r\n            const maxFontSize = _core_util_Utils__WEBPACK_IMPORTED_MODULE_7__.relativeToValue(this.get(\"maxFontSize\", 100), smallerSize) * adjustedFontSize;\r\n            const angles = this.get(\"angles\", [0]);\r\n            _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(this._dataItems, (dataItem) => {\r\n                const value = dataItem.get(\"valueWorking\", 0);\r\n                const ghostLabel = dataItem.get(\"ghostLabel\");\r\n                let fontSize = minFontSize + (maxFontSize - minFontSize) * (value - valueLow) / (valueHigh - valueLow);\r\n                if (_core_util_Type__WEBPACK_IMPORTED_MODULE_9__.isNaN(fontSize)) {\r\n                    fontSize = maxFontSize;\r\n                }\r\n                const set = this._sets - 1 - Math.floor((fontSize - minFontSize) / (maxFontSize - minFontSize) * (this._sets - 1));\r\n                dataItem.setRaw(\"set\", set);\r\n                dataItem.setRaw(\"fontSize\", fontSize);\r\n                let angle = angles[Math.floor(Math.random() * (angles.length))];\r\n                dataItem.setRaw(\"angle\", angle);\r\n                ghostLabel.setAll({ fontSize: fontSize, rotation: angle, x: -10000 });\r\n            });\r\n            this._process = false;\r\n            this._currentIndex = 0;\r\n            this._root.events.once(\"frameended\", () => {\r\n                this.setTimeout(() => {\r\n                    this._process = true;\r\n                    this._markDirtyKey(\"progress\");\r\n                }, 50);\r\n            });\r\n        }\r\n        const boundsToAdd = this._boundsToAdd;\r\n        if (boundsToAdd) {\r\n            const context = this._ghostContainer._display.getLayer().context;\r\n            const y = Math.round(boundsToAdd.top);\r\n            const x = Math.round(boundsToAdd.left);\r\n            const w = Math.round(boundsToAdd.right - boundsToAdd.left);\r\n            const h = Math.round(boundsToAdd.bottom - boundsToAdd.top);\r\n            const imageData = context.getImageData(x, y, w, h).data;\r\n            const buffer = this._buffer;\r\n            let n = 3;\r\n            for (let r = y; r < y + h; r++) {\r\n                for (let c = x; c < x + w; c++) {\r\n                    let i = ((r + 1) * cols - (cols - c));\r\n                    if (imageData[n] != 0) {\r\n                        buffer[i] = 1;\r\n                    }\r\n                    n += 4;\r\n                }\r\n            }\r\n            this._boundsToAdd = undefined;\r\n        }\r\n        if (this._process && this.isDirty(\"progress\")) {\r\n            this._processItem();\r\n        }\r\n    }\r\n    _processItem() {\r\n        this._boundsToAdd = undefined;\r\n        if (this._currentIndex < this.dataItems.length) {\r\n            const dataItem = this.dataItems[this._currentIndex];\r\n            const label = dataItem.get(\"label\");\r\n            const ghostLabel = dataItem.get(\"ghostLabel\");\r\n            const resolution = this._root._renderer.resolution;\r\n            let lw = ghostLabel.width();\r\n            let lh = ghostLabel.height();\r\n            const context = ghostLabel._display.getLayer().context;\r\n            const set = dataItem.get(\"set\");\r\n            const points = this._pointSets[set];\r\n            const w = this.innerWidth();\r\n            const h = this.innerHeight();\r\n            const cols = Math.round(this._root.width() * resolution);\r\n            const x = this.x();\r\n            const y = this.y();\r\n            const angles = this.get(\"angles\", [0]);\r\n            if (w > h) {\r\n                if (lw >= w / 2) {\r\n                    _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(angles, (angle) => {\r\n                        if (angle == 0 && dataItem.get(\"angle\") != 0) {\r\n                            dataItem.setRaw(\"angle\", 0);\r\n                            ghostLabel.set(\"rotation\", 0);\r\n                            [lw, lh] = [lh, lw];\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n            if (h > w) {\r\n                if (lw >= w / 2) {\r\n                    _core_util_Array__WEBPACK_IMPORTED_MODULE_8__.each(angles, (angle) => {\r\n                        if (Math.abs(angle) == 90 && dataItem.get(\"angle\") == 0) {\r\n                            dataItem.setRaw(\"angle\", angle);\r\n                            ghostLabel.set(\"rotation\", angle);\r\n                            [lw, lh] = [lh, lw];\r\n                        }\r\n                    });\r\n                }\r\n            }\r\n            const rw = Math.ceil(lw * resolution);\r\n            const rh = Math.ceil(lh * resolution);\r\n            if (context && lw > 0 && lh > 0) {\r\n                let pIndex = Math.round(Math.random() * points.length * this.get(\"randomness\", 0));\r\n                let intersects = true;\r\n                while (intersects) {\r\n                    let p = points[pIndex];\r\n                    if (p) {\r\n                        intersects = false;\r\n                        if (this._currentIndex > 0) {\r\n                            let cx = Math.round((p.x + x) * resolution - rw / 2);\r\n                            let cy = Math.round((p.y + y) * resolution - rh / 2);\r\n                            intersects = this._hasColor(cx, cy, rw, rh, cols);\r\n                        }\r\n                        if (p.x - lw / 2 < 0 || p.x + lw / 2 > w || p.y - lh / 2 < 0 || p.y + lh / 2 > h) {\r\n                            pIndex++;\r\n                            intersects = true;\r\n                        }\r\n                        else {\r\n                            if (!intersects) {\r\n                                const angle = dataItem.get(\"angle\", 0);\r\n                                const fontSize = dataItem.get(\"fontSize\", 0);\r\n                                if (label.get(\"x\") != -999999) {\r\n                                    label.animate({ key: \"x\", to: p.x, duration: this.get(\"animationDuration\", 0), easing: this.get(\"animationEasing\") });\r\n                                    label.animate({ key: \"y\", to: p.y, duration: this.get(\"animationDuration\", 0), easing: this.get(\"animationEasing\") });\r\n                                    label.animate({ key: \"rotation\", to: angle, duration: this.get(\"animationDuration\", 0), easing: this.get(\"animationEasing\") });\r\n                                    label.animate({ key: \"fontSize\", to: fontSize, duration: this.get(\"animationDuration\", 0), easing: this.get(\"animationEasing\") });\r\n                                }\r\n                                else {\r\n                                    label.setAll({ x: p.x, y: p.y, rotation: angle, fontSize: fontSize });\r\n                                    label.appear();\r\n                                }\r\n                                ghostLabel.setAll({ x: p.x, y: p.y });\r\n                                for (let i = points.length - 1; i >= 0; i--) {\r\n                                    let point = points[i];\r\n                                    if (point.x >= p.x - lw / 2 && point.x <= p.x + lw / 2 && point.y >= p.y - lh / 2 && point.y <= p.y + lh / 2) {\r\n                                        points.splice(i, 1);\r\n                                    }\r\n                                }\r\n                                this._boundsToAdd = { left: (p.x + x - lw / 2) * resolution, right: (p.x + x + lw / 2) * resolution, top: (p.y + y - lh / 2) * resolution, bottom: (p.y + y + lh / 2) * resolution };\r\n                            }\r\n                            else {\r\n                                pIndex += 2;\r\n                            }\r\n                        }\r\n                    }\r\n                    else {\r\n                        if (this.get(\"autoFit\")) {\r\n                            this.setTimeout(() => {\r\n                                this.setPrivate(\"adjustedFontSize\", this.getPrivate(\"adjustedFontSize\", 1) * 0.9);\r\n                            }, 50);\r\n                            return;\r\n                        }\r\n                        label.set(\"x\", -999999);\r\n                        intersects = false;\r\n                    }\r\n                }\r\n            }\r\n            this._currentIndex++;\r\n        }\r\n    }\r\n    /**\r\n* @ignore\r\n*/\r\n    disposeDataItem(dataItem) {\r\n        super.disposeDataItem(dataItem);\r\n        const label = dataItem.get(\"label\");\r\n        if (label) {\r\n            this.labels.removeValue(label);\r\n            label.dispose();\r\n        }\r\n        const ghostLabel = dataItem.get(\"ghostLabel\");\r\n        if (ghostLabel) {\r\n            this.labels.removeValue(ghostLabel);\r\n            ghostLabel.dispose();\r\n        }\r\n    }\r\n    /**\r\n* Extracts words and number of their appearances from a text.\r\n*\r\n* @ignore\r\n* @param  input  Source text\r\n*/\r\n    _getWords(input) {\r\n        let words = [];\r\n        if (input) {\r\n            const chars = \"\\u0041-\\u005A\\u0061-\\u007A\\u00AA\\u00B5\\u00BA\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376-\\u0377\\u037A-\\u037D\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u064A\\u066E-\\u066F\\u0671-\\u06D3\\u06D5\\u06E5-\\u06E6\\u06EE-\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4-\\u07F5\\u07FA\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0972\\u097B-\\u097F\\u0985-\\u098C\\u098F-\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC-\\u09DD\\u09DF-\\u09E1\\u09F0-\\u09F1\\u0A05-\\u0A0A\\u0A0F-\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32-\\u0A33\\u0A35-\\u0A36\\u0A38-\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2-\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0-\\u0AE1\\u0B05-\\u0B0C\\u0B0F-\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32-\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C-\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99-\\u0B9A\\u0B9C\\u0B9E-\\u0B9F\\u0BA3-\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C3D\\u0C58-\\u0C59\\u0C60-\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0-\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D3D\\u0D60-\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32-\\u0E33\\u0E40-\\u0E46\\u0E81-\\u0E82\\u0E84\\u0E87-\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA-\\u0EAB\\u0EAD-\\u0EB0\\u0EB2-\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDD\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8B\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065-\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10D0-\\u10FA\\u10FC\\u1100-\\u1159\\u115F-\\u11A2\\u11A8-\\u11F9\\u1200-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u1676\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F0\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u1900-\\u191C\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19A9\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE-\\u1BAF\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u2094\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2C6F\\u2C71-\\u2C7D\\u2C80-\\u2CE4\\u2D00-\\u2D25\\u2D30-\\u2D65\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31B7\\u31F0-\\u31FF\\u3400\\u4DB5\\u4E00\\u9FC3\\uA000-\\uA48C\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A-\\uA62B\\uA640-\\uA65F\\uA662-\\uA66E\\uA67F-\\uA697\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78C\\uA7FB-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA90A-\\uA925\\uA930-\\uA946\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAC00-\\uD7A3\\uF900-\\uFA2D\\uFA30-\\uFA6A\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40-\\uFB41\\uFB43-\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC0-9@+\";\r\n            const reg = new RegExp(\"([\" + chars + \"]+[\\-\" + chars + \"]*[\" + chars + \"]+)|([\" + chars + \"]+)\", \"ig\");\r\n            let res = input.match(reg);\r\n            if (!res) {\r\n                return [];\r\n            }\r\n            let word;\r\n            while (true) {\r\n                word = res.pop();\r\n                if (!word) {\r\n                    break;\r\n                }\r\n                let item;\r\n                for (let i = 0; i < words.length; i++) {\r\n                    if (words[i].category.toLowerCase() == word.toLowerCase()) {\r\n                        item = words[i];\r\n                        break;\r\n                    }\r\n                }\r\n                if (item) {\r\n                    item.value++;\r\n                    if (!this.isCapitalized(word)) {\r\n                        item.category = word;\r\n                    }\r\n                }\r\n                else {\r\n                    words.push({\r\n                        category: word,\r\n                        value: 1\r\n                    });\r\n                }\r\n            }\r\n            let excludeWords = this.get(\"excludeWords\");\r\n            const minValue = this.get(\"minValue\", 1);\r\n            const minWordLength = this.get(\"minWordLength\", 1);\r\n            if (minValue > 1 || minWordLength > 1 || (excludeWords && excludeWords.length > 0)) {\r\n                for (let i = words.length - 1; i >= 0; i--) {\r\n                    let w = words[i];\r\n                    let word = w.category;\r\n                    if (w.value < minValue) {\r\n                        words.splice(i, 1);\r\n                    }\r\n                    if (word.length < minWordLength) {\r\n                        words.splice(i, 1);\r\n                    }\r\n                    if (excludeWords && excludeWords.indexOf(word) !== -1) {\r\n                        words.splice(i, 1);\r\n                    }\r\n                }\r\n            }\r\n            words.sort(function (a, b) {\r\n                if (a.value == b.value) {\r\n                    return 0;\r\n                }\r\n                else if (a.value > b.value) {\r\n                    return -1;\r\n                }\r\n                else {\r\n                    return 1;\r\n                }\r\n            });\r\n            const maxCount = this.get(\"maxCount\", Infinity);\r\n            if (words.length > maxCount) {\r\n                words = words.slice(0, maxCount);\r\n            }\r\n        }\r\n        return words;\r\n    }\r\n    /**\r\n* Checks if word is capitalized (starts with an uppercase) or not.\r\n*\r\n* @ignore\r\n* @param   word  Word\r\n* @return        Capitalized?\r\n*/\r\n    isCapitalized(word) {\r\n        let lword = word.toLowerCase();\r\n        return word[0] != lword[0]\r\n            && word.substr(1) == lword.substr(1)\r\n            && word != lword;\r\n    }\r\n    _spiralPoints(cx, cy, radius, radiusY, innerRadius, step, radiusStep, startAngle, endAngle) {\r\n        let r = innerRadius + 0.01;\r\n        let angle = startAngle * _core_util_Math__WEBPACK_IMPORTED_MODULE_10__.RADIANS;\r\n        let points = [];\r\n        while (r < radius + radiusStep) {\r\n            let stepSize = step;\r\n            if (stepSize / 2 > r) {\r\n                stepSize = 2 * r;\r\n            }\r\n            angle += 2 * Math.asin(stepSize / 2 / r);\r\n            if (angle * _core_util_Math__WEBPACK_IMPORTED_MODULE_10__.DEGREES > endAngle + ((radius - innerRadius) / radiusStep) * 360) {\r\n                break;\r\n            }\r\n            let degrees = angle * _core_util_Math__WEBPACK_IMPORTED_MODULE_10__.DEGREES;\r\n            let point = { x: cx + r * Math.cos(angle), y: cy + r * radiusY / radius * Math.sin(angle) };\r\n            points.push(point);\r\n            r = innerRadius + degrees / 360 * radiusStep;\r\n        }\r\n        points.shift();\r\n        return points;\r\n    }\r\n    _hasColor(x, y, w, h, cols) {\r\n        const buffer = this._buffer;\r\n        if (buffer) {\r\n            for (let r = y; r < y + h; r += 4) {\r\n                for (let c = x; c < x + w; c += 4) {\r\n                    let i = ((r + 1) * cols - (cols - c));\r\n                    if (buffer[i] != 0) {\r\n                        return true;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}\r\nObject.defineProperty(WordCloud, \"className\", {\r\n    enumerable: true,\r\n    configurable: true,\r\n    writable: true,\r\n    value: \"WordCloud\"\r\n});\r\nObject.defineProperty(WordCloud, \"classNames\", {\r\n    enumerable: true,\r\n    configurable: true,\r\n    writable: true,\r\n    value: _core_render_Series__WEBPACK_IMPORTED_MODULE_0__.Series.classNames.concat([WordCloud.className])\r\n});\r\n//# sourceMappingURL=WordCloud.js.map\n\n//# sourceURL=webpack://cbdc-carbon-reporting-dashboard/./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloud.js?");

/***/ }),

/***/ "./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloudDefaultTheme.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloudDefaultTheme.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   WordCloudDefaultTheme: () => (/* binding */ WordCloudDefaultTheme)\n/* harmony export */ });\n/* harmony import */ var _core_Theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/Theme */ \"./node_modules/@amcharts/amcharts5/.internal/core/Theme.js\");\n/* harmony import */ var _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util/Percent */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Percent.js\");\n/* harmony import */ var _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/render/Rectangle */ \"./node_modules/@amcharts/amcharts5/.internal/core/render/Rectangle.js\");\n/* harmony import */ var _core_util_Ease__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/util/Ease */ \"./node_modules/@amcharts/amcharts5/.internal/core/util/Ease.js\");\n\r\n\r\n\r\n\r\n/**\r\n * @ignore\r\n */\r\nclass WordCloudDefaultTheme extends _core_Theme__WEBPACK_IMPORTED_MODULE_0__.Theme {\r\n    setupDefaultRules() {\r\n        super.setupDefaultRules();\r\n        const ic = this._root.interfaceColors;\r\n        const r = this.rule.bind(this);\r\n        r(\"WordCloud\").setAll({\r\n            width: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,\r\n            height: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,\r\n            minFontSize: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(2),\r\n            maxFontSize: (0,_core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.percent)(15),\r\n            excludeWords: [],\r\n            angles: [0, -90],\r\n            minWordLength: 1,\r\n            step: 15,\r\n            randomness: 0,\r\n            autoFit: true,\r\n            animationEasing: _core_util_Ease__WEBPACK_IMPORTED_MODULE_2__.out(_core_util_Ease__WEBPACK_IMPORTED_MODULE_2__.cubic)\r\n        });\r\n        {\r\n            const rule = r(\"Label\", [\"wordcloud\"]);\r\n            rule.setAll({\r\n                text: \"{category}\",\r\n                centerX: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,\r\n                centerY: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p50,\r\n                position: \"absolute\",\r\n                lineHeight: _core_util_Percent__WEBPACK_IMPORTED_MODULE_1__.p100,\r\n                populateText: true\r\n            });\r\n            rule.setup = (target) => {\r\n                target.set(\"background\", _core_render_Rectangle__WEBPACK_IMPORTED_MODULE_3__.Rectangle.new(this._root, {\r\n                    fill: ic.get(\"background\"),\r\n                    fillOpacity: 0\r\n                }));\r\n            };\r\n        }\r\n    }\r\n}\r\n//# sourceMappingURL=WordCloudDefaultTheme.js.map\n\n//# sourceURL=webpack://cbdc-carbon-reporting-dashboard/./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloudDefaultTheme.js?");

/***/ }),

/***/ "./node_modules/@amcharts/amcharts5/wc.js":
/*!************************************************!*\
  !*** ./node_modules/@amcharts/amcharts5/wc.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DefaultTheme: () => (/* reexport safe */ _internal_charts_wordcloud_WordCloudDefaultTheme__WEBPACK_IMPORTED_MODULE_1__.WordCloudDefaultTheme),\n/* harmony export */   WordCloud: () => (/* reexport safe */ _internal_charts_wordcloud_WordCloud__WEBPACK_IMPORTED_MODULE_0__.WordCloud)\n/* harmony export */ });\n/* harmony import */ var _internal_charts_wordcloud_WordCloud__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.internal/charts/wordcloud/WordCloud */ \"./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloud.js\");\n/* harmony import */ var _internal_charts_wordcloud_WordCloudDefaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./.internal/charts/wordcloud/WordCloudDefaultTheme */ \"./node_modules/@amcharts/amcharts5/.internal/charts/wordcloud/WordCloudDefaultTheme.js\");\n\r\n\r\n\r\n//# sourceMappingURL=wc.js.map\n\n//# sourceURL=webpack://cbdc-carbon-reporting-dashboard/./node_modules/@amcharts/amcharts5/wc.js?");

/***/ })

}]);