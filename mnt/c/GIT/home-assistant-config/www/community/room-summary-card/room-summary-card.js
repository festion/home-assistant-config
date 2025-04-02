/**
 * Room Summary Card Registration Module
 *
 * This module handles the registration of the Room Summary Card custom element
 * with the browser and Home Assistant's custom card registry. It makes the
 * component available for use in Home Assistant dashboards.
 */ /**
 * Room Summary Card Component
 *
 * A custom element that displays a summary of room information in Home Assistant.
 * This card shows room state, climate information, and various entity states in a
 * grid layout with interactive elements.
 *
 * @version See package.json
 */ /******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var $24c52f343453d62d$var$extendStatics = function(d, b) {
    $24c52f343453d62d$var$extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return $24c52f343453d62d$var$extendStatics(d, b);
};
function $24c52f343453d62d$export$a8ba968b8961cb8a(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    $24c52f343453d62d$var$extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var $24c52f343453d62d$export$18ce0697a983be9b = function() {
    $24c52f343453d62d$export$18ce0697a983be9b = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return $24c52f343453d62d$export$18ce0697a983be9b.apply(this, arguments);
};
function $24c52f343453d62d$export$3c9a16f847548506(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function $24c52f343453d62d$export$29e00dfd3077644b(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function $24c52f343453d62d$export$d5ad3fd78186038f(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function $24c52f343453d62d$export$3a84e1ae4e97e9b0(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
function $24c52f343453d62d$export$d831c04e792af3d(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++)value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    return useValue ? value : void 0;
}
function $24c52f343453d62d$export$6a2a36740a146cb8(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
function $24c52f343453d62d$export$d1a06452d3489bc7(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
function $24c52f343453d62d$export$f1db080c865becb9(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function $24c52f343453d62d$export$1050f835b63b671e(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function $24c52f343453d62d$export$67ebef60e6f28a6(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var $24c52f343453d62d$export$45d3717a4c69092e = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
        enumerable: true,
        get: function() {
            return m[k];
        }
    };
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function $24c52f343453d62d$export$f33643c0debef087(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) $24c52f343453d62d$export$45d3717a4c69092e(o, m, p);
}
function $24c52f343453d62d$export$19a8beecd37a4c45(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function $24c52f343453d62d$export$8d051b38c9118094(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function $24c52f343453d62d$export$afc72e2116322959() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat($24c52f343453d62d$export$8d051b38c9118094(arguments[i]));
    return ar;
}
function $24c52f343453d62d$export$6388937ca91ccae8() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function $24c52f343453d62d$export$1216008129fb82ed(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function $24c52f343453d62d$export$10c90e4f7922046c(v) {
    return this instanceof $24c52f343453d62d$export$10c90e4f7922046c ? (this.v = v, this) : new $24c52f343453d62d$export$10c90e4f7922046c(v);
}
function $24c52f343453d62d$export$e427f37a30a4de9b(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof $24c52f343453d62d$export$10c90e4f7922046c ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function $24c52f343453d62d$export$bbd80228419bb833(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: $24c52f343453d62d$export$10c90e4f7922046c(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function $24c52f343453d62d$export$e3b29a3d6162315f(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof $24c52f343453d62d$export$19a8beecd37a4c45 === "function" ? $24c52f343453d62d$export$19a8beecd37a4c45(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function $24c52f343453d62d$export$4fb47efe1390b86f(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var $24c52f343453d62d$var$__setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var $24c52f343453d62d$var$ownKeys = function(o) {
    $24c52f343453d62d$var$ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return $24c52f343453d62d$var$ownKeys(o);
};
function $24c52f343453d62d$export$c21735bcef00d192(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = $24c52f343453d62d$var$ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") $24c52f343453d62d$export$45d3717a4c69092e(result, mod, k[i]);
    }
    $24c52f343453d62d$var$__setModuleDefault(result, mod);
    return result;
}
function $24c52f343453d62d$export$da59b14a69baef04(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function $24c52f343453d62d$export$d5dcaf168c640c35(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function $24c52f343453d62d$export$d40a35129aaff81f(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function $24c52f343453d62d$export$81fdc39f203e4e04(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function $24c52f343453d62d$export$88ac25d8e944e405(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) env.stack.push({
        async: true
    });
    return value;
}
var $24c52f343453d62d$var$_SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function $24c52f343453d62d$export$8f076105dc360e92(env) {
    function fail(e) {
        env.error = env.hasError ? new $24c52f343453d62d$var$_SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop())try {
            if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
            if (r.dispose) {
                var result = r.dispose.call(r.value);
                if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                    fail(e);
                    return next();
                });
            } else s |= 1;
        } catch (e) {
            fail(e);
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function $24c52f343453d62d$export$889dfb5d17574b0b(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
        return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
    return path;
}
var $24c52f343453d62d$export$2e2bcd8739ae039 = {
    __extends: $24c52f343453d62d$export$a8ba968b8961cb8a,
    __assign: $24c52f343453d62d$export$18ce0697a983be9b,
    __rest: $24c52f343453d62d$export$3c9a16f847548506,
    __decorate: $24c52f343453d62d$export$29e00dfd3077644b,
    __param: $24c52f343453d62d$export$d5ad3fd78186038f,
    __esDecorate: $24c52f343453d62d$export$3a84e1ae4e97e9b0,
    __runInitializers: $24c52f343453d62d$export$d831c04e792af3d,
    __propKey: $24c52f343453d62d$export$6a2a36740a146cb8,
    __setFunctionName: $24c52f343453d62d$export$d1a06452d3489bc7,
    __metadata: $24c52f343453d62d$export$f1db080c865becb9,
    __awaiter: $24c52f343453d62d$export$1050f835b63b671e,
    __generator: $24c52f343453d62d$export$67ebef60e6f28a6,
    __createBinding: $24c52f343453d62d$export$45d3717a4c69092e,
    __exportStar: $24c52f343453d62d$export$f33643c0debef087,
    __values: $24c52f343453d62d$export$19a8beecd37a4c45,
    __read: $24c52f343453d62d$export$8d051b38c9118094,
    __spread: $24c52f343453d62d$export$afc72e2116322959,
    __spreadArrays: $24c52f343453d62d$export$6388937ca91ccae8,
    __spreadArray: $24c52f343453d62d$export$1216008129fb82ed,
    __await: $24c52f343453d62d$export$10c90e4f7922046c,
    __asyncGenerator: $24c52f343453d62d$export$e427f37a30a4de9b,
    __asyncDelegator: $24c52f343453d62d$export$bbd80228419bb833,
    __asyncValues: $24c52f343453d62d$export$e3b29a3d6162315f,
    __makeTemplateObject: $24c52f343453d62d$export$4fb47efe1390b86f,
    __importStar: $24c52f343453d62d$export$c21735bcef00d192,
    __importDefault: $24c52f343453d62d$export$da59b14a69baef04,
    __classPrivateFieldGet: $24c52f343453d62d$export$d5dcaf168c640c35,
    __classPrivateFieldSet: $24c52f343453d62d$export$d40a35129aaff81f,
    __classPrivateFieldIn: $24c52f343453d62d$export$81fdc39f203e4e04,
    __addDisposableResource: $24c52f343453d62d$export$88ac25d8e944e405,
    __disposeResources: $24c52f343453d62d$export$8f076105dc360e92,
    __rewriteRelativeImportExtension: $24c52f343453d62d$export$889dfb5d17574b0b
};


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$r, getOwnPropertyNames: $19fe8e3abedf4df0$var$h, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$y = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$y) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), r = this.getPropertyDescriptor(t, i, s);
            void 0 !== r && $19fe8e3abedf4df0$var$e(this.prototype, t, r);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: h } = $19fe8e3abedf4df0$var$r(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get () {
                return e?.call(this);
            },
            set (s) {
                const r = e?.call(this);
                h.call(this, s), this.requestUpdate(t, r, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$y;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$h(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$EC(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const r = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == r ? this.removeAttribute(e) : this.setAttribute(e, r), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), r = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e, this[e] = r.fromAttribute(s, t.type), this._$Em = null;
        }
    }
    requestUpdate(t, s, i) {
        if (void 0 !== t) {
            if (i ??= this.constructor.getPropertyOptions(t), !(i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(this[t], s)) return;
            this.P(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$ET());
    }
    P(t, s, i) {
        this._$AL.has(t) || this._$AL.set(t, s), !0 === i.reflect && this._$Em !== t && (this._$Ej ??= new Set).add(t);
    }
    async _$ET() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t)!0 !== i.wrapped || this._$AL.has(s) || void 0 === this[s] || this.P(s, this[s], i);
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EU();
        } catch (s) {
            throw t = !1, this._$EU(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EU() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Ej &&= this._$Ej.forEach((t)=>this._$EC(t, this[t])), this._$EU();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.0.4");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$e = "$lit$", $f58f44579a4747ac$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$o = "?" + $f58f44579a4747ac$var$h, $f58f44579a4747ac$var$n = `<${$f58f44579a4747ac$var$o}>`, $f58f44579a4747ac$var$r = document, $f58f44579a4747ac$var$l = ()=>$f58f44579a4747ac$var$r.createComment(""), $f58f44579a4747ac$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$a = Array.isArray, $f58f44579a4747ac$var$u = (t)=>$f58f44579a4747ac$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$d = "[ \t\n\f\r]", $f58f44579a4747ac$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$v = /-->/g, $f58f44579a4747ac$var$_ = />/g, $f58f44579a4747ac$var$m = RegExp(`>|${$f58f44579a4747ac$var$d}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$d}*=${$f58f44579a4747ac$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$p = /'/g, $f58f44579a4747ac$var$g = /"/g, $f58f44579a4747ac$var$$ = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$y(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$y(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$y(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$A = new WeakMap, $f58f44579a4747ac$var$C = $f58f44579a4747ac$var$r.createTreeWalker($f58f44579a4747ac$var$r, 129);
function $f58f44579a4747ac$var$P(t, i) {
    if (!$f58f44579a4747ac$var$a(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createHTML(i) : i;
}
const $f58f44579a4747ac$var$V = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f58f44579a4747ac$var$f ? "!--" === u[1] ? c = $f58f44579a4747ac$var$v : void 0 !== u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[2] ? ($f58f44579a4747ac$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$m) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$m) : c === $f58f44579a4747ac$var$m ? ">" === u[0] ? (c = r ?? $f58f44579a4747ac$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$m : '"' === u[3] ? $f58f44579a4747ac$var$g : $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$g || c === $f58f44579a4747ac$var$p ? c = $f58f44579a4747ac$var$m : c === $f58f44579a4747ac$var$v || c === $f58f44579a4747ac$var$_ ? c = $f58f44579a4747ac$var$f : (c = $f58f44579a4747ac$var$m, r = void 0);
        const x = c === $f58f44579a4747ac$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$f ? s + $f58f44579a4747ac$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f58f44579a4747ac$var$e + s.slice(d) + $f58f44579a4747ac$var$h + x) : s + $f58f44579a4747ac$var$h + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$P(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        o
    ];
};
class $f58f44579a4747ac$var$N {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$V(t, s);
        if (this.el = $f58f44579a4747ac$var$N.createElement(f, n), $f58f44579a4747ac$var$C.currentNode = this.el.content, 2 === s || 3 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$C.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$H : "?" === e[1] ? $f58f44579a4747ac$var$I : "@" === e[1] ? $f58f44579a4747ac$var$L : $f58f44579a4747ac$var$k
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f58f44579a4747ac$var$i ? $f58f44579a4747ac$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f58f44579a4747ac$var$l()), $f58f44579a4747ac$var$C.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f58f44579a4747ac$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f58f44579a4747ac$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$S(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$S(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$M {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$r).importNode(i, !0);
        $f58f44579a4747ac$var$C.currentNode = e;
        let h = $f58f44579a4747ac$var$C.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f58f44579a4747ac$var$R(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f58f44579a4747ac$var$z(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f58f44579a4747ac$var$C.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$C.currentNode = $f58f44579a4747ac$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$R {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$S(this, t, i), $f58f44579a4747ac$var$c(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$u(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$N.createElement($f58f44579a4747ac$var$P(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$M(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$A.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$A.set(t.strings, i = new $f58f44579a4747ac$var$N(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$R(this.O($f58f44579a4747ac$var$l()), this.O($f58f44579a4747ac$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$k {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$S(this, t, i, 0), o = !$f58f44579a4747ac$var$c(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$S(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$c(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$H extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$k {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$k {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$S(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$S(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$e,
    P: $f58f44579a4747ac$var$h,
    A: $f58f44579a4747ac$var$o,
    C: 1,
    L: $f58f44579a4747ac$var$V,
    R: $f58f44579a4747ac$var$M,
    D: $f58f44579a4747ac$var$u,
    V: $f58f44579a4747ac$var$S,
    I: $f58f44579a4747ac$var$R,
    H: $f58f44579a4747ac$var$k,
    N: $f58f44579a4747ac$var$I,
    U: $f58f44579a4747ac$var$L,
    B: $f58f44579a4747ac$var$H,
    F: $f58f44579a4747ac$var$z
}, $f58f44579a4747ac$var$j = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$j?.($f58f44579a4747ac$var$N, $f58f44579a4747ac$var$R), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.2.1");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$R(i.insertBefore($f58f44579a4747ac$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const s = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(s, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, globalThis.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$i = globalThis.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$i?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, s)=>{
        t._$AK(e, s);
    },
    _$AL: (t)=>t._$AL
};
(globalThis.litElementVersions ??= []).push("4.1.1");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $19fe8e3abedf4df0$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $19fe8e3abedf4df0$export$53a6892c50694894)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t);
            },
            init (e) {
                return void 0 !== e && this.P(o, void 0, t), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, r ? {
                ...t,
                wrapped: !0
            } : t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}




/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/dom/fire_event.ts
 */ // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
const $9c83ab07519e6203$export$43835e9acf248a15 = (node, type, detail, options)=>{
    options = options || {};
    // @ts-ignore
    detail = detail === null || detail === undefined ? {} : detail;
    const event = new Event(type, {
        bubbles: options.bubbles === undefined ? true : options.bubbles,
        cancelable: Boolean(options.cancelable),
        composed: options.composed === undefined ? true : options.composed
    });
    event.detail = detail;
    node.dispatchEvent(event);
    return event;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/common/directives/action-handler-directive.ts
 */ 
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}




const $69fb27e443983086$var$getActionHandler = ()=>{
    const body = document.body;
    if (body.querySelector('action-handler')) return body.querySelector('action-handler');
    const actionhandler = document.createElement('action-handler');
    body.appendChild(actionhandler);
    return actionhandler;
};
const $69fb27e443983086$export$520aee61eb0a2770 = (element, options)=>{
    const actionhandler = $69fb27e443983086$var$getActionHandler();
    if (!actionhandler) return;
    actionhandler.bind(element, options);
};
const $69fb27e443983086$export$8a44987212de21b = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    update(part, [options]) {
        $69fb27e443983086$export$520aee61eb0a2770(part.element, options);
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    render(_options) {}
});


const $57febad8376708f1$export$8a44987212de21b = (entity)=>{
    const isActionEnabled = (actionConfig)=>actionConfig?.action !== 'none' && actionConfig?.action !== undefined;
    return (0, $69fb27e443983086$export$8a44987212de21b)({
        hasDoubleClick: isActionEnabled(entity.config?.double_tap_action),
        hasHold: isActionEnabled(entity.config?.hold_action)
    });
};
const $57febad8376708f1$export$3d3654ce4577c53d = (element, entity)=>{
    return {
        /**
     * Handles an action event by creating and dispatching a 'hass-action' custom event.
     * The event contains the entity configuration and the action type (tap, double_tap, hold).
     *
     * @param {ActionHandlerEvent} ev - The action handler event to process
     */ handleEvent: (ev)=>{
            // Extract action from event detail
            const action = ev.detail?.action;
            if (!action) return;
            // Create configuration object for the action
            const config = {
                entity: entity.config.entity_id,
                ...entity.config
            };
            // @ts-ignore
            (0, $9c83ab07519e6203$export$43835e9acf248a15)(element, 'hass-action', {
                config: config,
                action: action
            });
        }
    };
};






/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $19f464fcda7d2482$var$n = "important", $19f464fcda7d2482$var$i = " !" + $19f464fcda7d2482$var$n, $19f464fcda7d2482$export$1e5b4ce2fa884e6a = (0, $107bb7d062dde330$export$99b43ad1ed32e735)(class extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(t){
        if (super(t), t.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).ATTRIBUTE || "style" !== t.name || t.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t) {
        return Object.keys(t).reduce((e, r)=>{
            const s = t[r];
            return null == s ? e : e + `${r = r.includes("-") ? r : r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e, [r]) {
        const { style: s } = e.element;
        if (void 0 === this.ft) return this.ft = new Set(Object.keys(r)), this.render(r);
        for (const t of this.ft)null == r[t] && (this.ft.delete(t), t.includes("-") ? s.removeProperty(t) : s[t] = null);
        for(const t in r){
            const e = r[t];
            if (null != e) {
                this.ft.add(t);
                const r = "string" == typeof e && e.endsWith($19f464fcda7d2482$var$i);
                t.includes("-") || r ? s.setProperty(t, r ? e.slice(0, -11) : e, r ? $19f464fcda7d2482$var$n : "") : s[t] = e;
            }
        }
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
});


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_active.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/entity.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/array/literal-includes.ts#L6
 */ /**
 * Creates a type predicate function for determining if an array literal includes a given value
 * @param array - The array to check
 * @returns A type predicate function
 */ const $2dcc326b5e422db7$export$2fff862a498eed4d = (array)=>(searchElement, fromIndex)=>array.includes(searchElement, fromIndex);


const $fa460070836bbf6d$export$f2d101b977a134fd = 'unavailable';
const $fa460070836bbf6d$export$78244dbb77cfa6b6 = 'unknown';
const $fa460070836bbf6d$export$8a4b4288adcd729e = 'on';
const $fa460070836bbf6d$export$173de64b5ad0d5b4 = 'off';
const $fa460070836bbf6d$export$565a86226f245f0b = [
    $fa460070836bbf6d$export$f2d101b977a134fd,
    $fa460070836bbf6d$export$78244dbb77cfa6b6
];
const $fa460070836bbf6d$export$8ccd97e727a09c65 = [
    $fa460070836bbf6d$export$f2d101b977a134fd,
    $fa460070836bbf6d$export$78244dbb77cfa6b6,
    $fa460070836bbf6d$export$173de64b5ad0d5b4
];
const $fa460070836bbf6d$export$dea4173a348a2153 = (0, $2dcc326b5e422db7$export$2fff862a498eed4d)($fa460070836bbf6d$export$565a86226f245f0b);
const $fa460070836bbf6d$export$3473ff6928139ced = (0, $2dcc326b5e422db7$export$2fff862a498eed4d)($fa460070836bbf6d$export$8ccd97e727a09c65);


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/compute_domain.ts
 */ const $e7dc90bb09bfe22d$export$2044bdc9670769ab = (entityId)=>entityId.substring(0, entityId.indexOf('.'));


function $043ab5348dd51237$export$c0e85c3982a3daa6(stateObj, state) {
    const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(stateObj.entity_id);
    const compareState = state !== undefined ? state : stateObj?.state;
    if ([
        'button',
        'event',
        'input_button',
        'scene'
    ].includes(domain)) return compareState !== (0, $fa460070836bbf6d$export$f2d101b977a134fd);
    if ((0, $fa460070836bbf6d$export$dea4173a348a2153)(compareState)) return false;
    // The "off" check is relevant for most domains, but there are exceptions
    // such as "alert" where "off" is still a somewhat active state and
    // therefore gets a custom color and "idle" is instead the state that
    // matches what most other domains consider inactive.
    if (compareState === (0, $fa460070836bbf6d$export$173de64b5ad0d5b4) && domain !== 'alert') return false;
    // Custom cases
    switch(domain){
        case 'alarm_control_panel':
            return compareState !== 'disarmed';
        case 'alert':
            // "on" and "off" are active, as "off" just means alert was acknowledged but is still active
            return compareState !== 'idle';
        case 'cover':
            return compareState !== 'closed';
        case 'device_tracker':
        case 'person':
            return compareState !== 'not_home';
        case 'lawn_mower':
            return [
                'mowing',
                'error'
            ].includes(compareState);
        case 'lock':
            return compareState !== 'locked';
        case 'media_player':
            return compareState !== 'standby';
        case 'vacuum':
            return ![
                'idle',
                'docked',
                'paused'
            ].includes(compareState);
        case 'valve':
            return compareState !== 'closed';
        case 'plant':
            return compareState === 'problem';
        case 'group':
            return [
                'on',
                'home',
                'open',
                'locked',
                'problem'
            ].includes(compareState);
        case 'timer':
            return compareState === 'active';
        case 'camera':
            return compareState === 'streaming';
    }
    return true;
}


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/state_color.ts
 */ /**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/entity/color/battery_color.ts
 */ const $4c0890ccf6fed540$export$8b81ac7267f802e2 = (state)=>{
    const value = Number(state);
    if (isNaN(value)) return undefined;
    if (value >= 70) return '--state-sensor-battery-high-color';
    if (value >= 30) return '--state-sensor-battery-medium-color';
    return '--state-sensor-battery-low-color';
};




/**
 * https://github.com/home-assistant/frontend/blob/dev/src/common/string/slugify.ts
 */ // https://gist.github.com/hagemann/382adfc57adbd5af078dc93feef01fe1
const $91f9efeb0d03df29$export$c383cdd2a518017a = (value, delimiter = '_')=>{
    const a = "\xe0\xe1\xe2\xe4\xe6\xe3\xe5\u0101\u0103\u0105\xe7\u0107\u010D\u0111\u010F\xe8\xe9\xea\xeb\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xee\xef\xed\u012B\u012F\xec\u0131\u0130\u0142\u1E3F\xf1\u0144\u01F9\u0148\xf4\xf6\xf2\xf3\u0153\xf8\u014D\xf5\u0151\u1E55\u0155\u0159\xdf\u015B\u0161\u015F\u0219\u0165\u021B\xfb\xfc\xf9\xfa\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xff\xfd\u017E\u017A\u017C\xb7";
    const b = `aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz${delimiter}`;
    const p = new RegExp(a.split('').join('|'), 'g');
    let slugified;
    if (value === '') slugified = '';
    else {
        slugified = value.toString().toLowerCase().replace(p, (c)=>b.charAt(a.indexOf(c))) // Replace special characters
        .replace(/(\d),(?=\d)/g, '$1') // Remove Commas between numbers
        .replace(/[^a-z0-9]+/g, delimiter) // Replace all non-word characters
        .replace(new RegExp(`(${delimiter})\\1+`, 'g'), '$1') // Replace multiple delimiters with single delimiter
        .replace(new RegExp(`^${delimiter}+`), '') // Trim delimiter from start of text
        .replace(new RegExp(`${delimiter}+$`), ''); // Trim delimiter from end of text
        if (slugified === '') slugified = 'unknown';
    }
    return slugified;
};



/**
 * https://github.com/home-assistant/frontend/blob/dev/src/data/group.ts
 */ 
const $2166d16660be7ac9$export$995df2070398c848 = (stateObj)=>{
    const entityIds = stateObj.attributes.entity_id || [];
    const uniqueDomains = [
        ...new Set(entityIds.map((entityId)=>(0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(entityId)))
    ];
    return uniqueDomains.length === 1 ? uniqueDomains[0] : undefined;
};


/**
 * https://github.com/home-assistant/frontend/blob/dev/src/resources/css-variables.ts
 */ function $b128ea01d7ae7b8f$export$32531bbdc9316392(props) {
    if (Array.isArray(props)) return props.reverse().reduce((str, variable)=>`var(${variable}${str ? `, ${str}` : ''})`, undefined);
    return `var(${props})`;
}


const $964034295ca0500a$var$STATE_COLORED_DOMAIN = new Set([
    'alarm_control_panel',
    'alert',
    'automation',
    'binary_sensor',
    'calendar',
    'camera',
    'climate',
    'cover',
    'device_tracker',
    'fan',
    'group',
    'humidifier',
    'input_boolean',
    'lawn_mower',
    'light',
    'lock',
    'media_player',
    'person',
    'plant',
    'remote',
    'schedule',
    'script',
    'siren',
    'sun',
    'switch',
    'timer',
    'update',
    'vacuum',
    'valve',
    'water_heater'
]);
const $964034295ca0500a$export$b2779b0e0d1bdfa9 = (stateObj, state)=>{
    const compareState = state !== undefined ? state : stateObj?.state;
    if (compareState === (0, $fa460070836bbf6d$export$f2d101b977a134fd)) return `var(--state-unavailable-color)`;
    const properties = $964034295ca0500a$export$e4e5839282fc5156(stateObj, state);
    if (properties) return (0, $b128ea01d7ae7b8f$export$32531bbdc9316392)(properties);
    return undefined;
};
const $964034295ca0500a$export$2b7fdd1a076d6214 = (domain, stateObj, state)=>{
    const compareState = state !== undefined ? state : stateObj.state;
    const active = (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(stateObj, state);
    // allow for theme override
    const properties = [
        '--state-color-theme-override'
    ];
    const stateKey = (0, $91f9efeb0d03df29$export$c383cdd2a518017a)(compareState, '_');
    const activeKey = active ? 'active' : 'inactive';
    const dc = stateObj.attributes.device_class;
    if (dc) properties.push(`--state-${domain}-${dc}-${stateKey}-color`);
    properties.push(`--state-${domain}-${stateKey}-color`, `--state-${domain}-${activeKey}-color`, `--state-${activeKey}-color`);
    return properties;
};
const $964034295ca0500a$export$e4e5839282fc5156 = (stateObj, state)=>{
    const compareState = state !== undefined ? state : stateObj?.state;
    const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(stateObj.entity_id);
    const dc = stateObj.attributes.device_class;
    // Special rules for battery coloring
    if (domain === 'sensor' && dc === 'battery') {
        const property = (0, $4c0890ccf6fed540$export$8b81ac7267f802e2)(compareState);
        if (property) return [
            property
        ];
    }
    // Special rules for group coloring
    if (domain === 'group') {
        const groupDomain = (0, $2166d16660be7ac9$export$995df2070398c848)(stateObj);
        if (groupDomain && $964034295ca0500a$var$STATE_COLORED_DOMAIN.has(groupDomain)) return $964034295ca0500a$export$2b7fdd1a076d6214(groupDomain, stateObj, state);
    }
    if ($964034295ca0500a$var$STATE_COLORED_DOMAIN.has(domain)) return $964034295ca0500a$export$2b7fdd1a076d6214(domain, stateObj, state);
    return undefined;
};
const $964034295ca0500a$export$65bcdaf7f2807be8 = (stateObj)=>{
    if (stateObj.attributes.brightness && (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(stateObj.entity_id) !== 'plant') {
        // lowest brightness will be around 50% (that's pretty dark)
        const brightness = stateObj.attributes.brightness;
        return `brightness(${(brightness + 245) / 5}%)`;
    }
    return '';
};


/**
 * @file color-definitions.js
 * @description Defines RGB color variables for use in Home Assistant themes and components
 */ 
const $6914dc426cdafe87$export$33537d9e76cd536a = [
    'primary',
    'accent',
    'red',
    'pink',
    'purple',
    'deep-purple',
    'indigo',
    'blue',
    'light-blue',
    'cyan',
    'teal',
    'green',
    'light-green',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deep-orange',
    'brown',
    'light-grey',
    'grey',
    'dark-grey',
    'blue-grey',
    'black',
    'white',
    'disabled'
];
const $6914dc426cdafe87$export$30317f76025d8bf5 = [
    'red',
    'green',
    'yellow',
    'blue',
    'purple',
    'grey',
    'pink',
    'theme'
];
const $6914dc426cdafe87$export$dec94ffc2d530e03 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --theme-color-minimalist: rgb(var(--color-theme));
`;
const $6914dc426cdafe87$export$4aa0a1b480cdb1b6 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --theme-background-color-card: var(
    --ha-card-background,
    var(--card-background-color, white)
  );
  --theme-background-color-icon: var(
    --theme-color-minimalist,
    var(--state-icon-color, white)
  );
  --theme-color-icon: var(
    --theme-color-minimalist,
    var(--state-icon-color, white)
  );

  --opacity-icon-active: 1;
  --opacity-icon-inactive: 0.2;
`;
const $6914dc426cdafe87$export$38d2ecc76f0c2959 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --opacity-background-active: 1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.1;
`;
const $6914dc426cdafe87$export$eae85ad18a22ab6c = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  --opacity-background-active: 0.1;
  --opacity-background-inactive: 1;

  --opacity-icon-fill-active: 0.2;
  --opacity-icon-fill-inactive: 0.05;
`;


/**
 * Maps Home Assistant domains to their conventional active state colors
 * Returns a color name from the standard HA_COLORS list
 *
 * @param domain - The Home Assistant domain (e.g., 'light', 'switch', 'cover')
 * @returns Color name from HA_COLORS (e.g., 'amber', 'blue')
 */ const $81b7b9da9d23fa76$var$activeColorFromDomain = (domain)=>{
    switch(domain){
        // Lighting
        case 'light':
        case 'switch_as_x':
            return 'yellow';
        // Switches & Electric
        case 'switch':
        case 'input_boolean':
        case 'automation':
        case 'script':
            return 'blue';
        // Climate & Environment
        case 'climate':
        case 'fan':
            return 'teal';
        // Security & Safety
        case 'alarm_control_panel':
        case 'lock':
            return 'red';
        // Covers & Doors
        case 'cover':
        case 'garage_door':
        case 'door':
            return 'green';
        // Media
        case 'media_player':
            return 'indigo';
        // Sensors & Binary Sensors
        case 'binary_sensor':
        case 'sensor':
            return 'cyan';
        // Person & Presence
        case 'person':
        case 'device_tracker':
            return 'purple';
        // Weather & Update
        case 'weather':
        case 'update':
            return 'orange';
        // Vacuum
        case 'vacuum':
            return 'deep-purple';
        // Timer & Schedule
        case 'timer':
        case 'schedule':
            return 'pink';
        // Default for unknown domains
        default:
            return 'yellow';
    }
};
const $81b7b9da9d23fa76$export$de96a622725f4284 = (hass, state, active)=>{
    if (!state) return undefined;
    const onColor = state.attributes.on_color;
    const offColor = state?.attributes?.off_color;
    if (hass.themes.theme === 'default') {
        // only overwrite default theme if explicitly set
        if (active && onColor && (0, $6914dc426cdafe87$export$33537d9e76cd536a).includes(onColor)) return `var(--${onColor}-color)`;
        if (!active && offColor && (0, $6914dc426cdafe87$export$33537d9e76cd536a).includes(offColor)) return `var(--${offColor}-color)`;
    } else if (hass.themes.theme.startsWith('minimalist-')) {
        // for minimalist - try and match a color based on domain
        const color = active ? onColor || $81b7b9da9d23fa76$var$activeColorFromDomain(state.domain) : offColor;
        if ((0, $6914dc426cdafe87$export$30317f76025d8bf5).includes(color)) return `rgb(var(--color-${color}))`;
    }
    return undefined;
};


const $5b9da589bbdb01f3$export$5edf3a158822b217 = (hass, state)=>{
    if (!state) return {
        iconStyle: (0, $f58f44579a4747ac$export$45b790e32b2810ee),
        textStyle: (0, $f58f44579a4747ac$export$45b790e32b2810ee)
    };
    const stateObj = state;
    const active = (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(stateObj);
    const cssColor = (0, $964034295ca0500a$export$b2779b0e0d1bdfa9)(stateObj);
    const themeOverride = (0, $81b7b9da9d23fa76$export$de96a622725f4284)(hass, state, active);
    const activeClass = active ? 'active' : 'inactive';
    return {
        // Icon color styles
        iconStyle: (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
            '--icon-color': cssColor,
            '--icon-opacity': `var(--opacity-icon-${activeClass})`,
            '--background-color-icon': cssColor,
            '--background-opacity-icon': `var(--opacity-icon-fill-${activeClass})`,
            '--state-color-theme-override': themeOverride
        }),
        // Text color styles
        textStyle: active ? (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
            '--text-color': cssColor
        }) : (0, $f58f44579a4747ac$export$45b790e32b2810ee)
    };
};
const $5b9da589bbdb01f3$export$bc407943e9ead13f = (problemExists)=>{
    return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        '--background-color-icon': `${problemExists ? 'var(--error-color)' : 'var(--success-color)'}`,
        '--background-opacity-icon': `${problemExists ? '0.8' : '0.6'}`
    });
};



const $aae26e2a62e46297$export$a0ea366d13bf2463 = (element, hass, entity, classes)=>{
    const { state: state } = entity;
    if (!state) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const { iconStyle: iconStyle } = (0, $5b9da589bbdb01f3$export$5edf3a158822b217)(hass, state);
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<div
    class="${[
        'icon',
        ...classes
    ].join(' ')}"
    style=${iconStyle}
    @action=${(0, $57febad8376708f1$export$3d3654ce4577c53d)(element, entity)}
    .actionHandler=${(0, $57febad8376708f1$export$8a44987212de21b)(entity)}
  >
    <ha-state-icon
      .hass=${hass}
      .stateObj=${state}
      .icon=${entity.config.icon}
    ></ha-state-icon>
  </div>`;
};
const $aae26e2a62e46297$export$8093665c9ba8ead9 = (problemEntities, problemExists)=>{
    if (problemEntities.length === 0) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const styles = (0, $5b9da589bbdb01f3$export$bc407943e9ead13f)(problemExists);
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
    <ha-icon
      .icon=${`mdi:numeric-${problemEntities.length}`}
      class="status-entities"
      style=${styles}
    />
  `;
};



const $e24dedcf9e480b2d$export$50fdfeece43146fd = (hass, entityId, fakeState = false)=>{
    if (!entityId) return undefined;
    const state = hass.states[entityId] || (fakeState ? {
        entity_id: entityId,
        state: 'off',
        attributes: {}
    } : undefined);
    if (!state) return undefined;
    const domain = (0, $e7dc90bb09bfe22d$export$2044bdc9670769ab)(state.entity_id);
    return {
        state: state.state,
        attributes: state.attributes,
        entity_id: state.entity_id,
        domain: domain
    };
};






/**
 * Generates border styles based on temperature and humidity thresholds
 *
 * @param {EntityState | undefined} tempState - Temperature sensor state
 * @param {EntityState | undefined} humidState - Humidity sensor state
 * @returns {Object} Border style configuration with border1 and border2 properties
 */ const $2a931dbd84666c62$var$renderCardBorderStyles = (tempState, humidState)=>{
    if (!tempState || !humidState) return {
        border1: undefined,
        border2: undefined
    };
    // Get thresholds with defaults
    const tempThreshold = tempState.attributes.temperature_threshold || 80;
    const humidThreshold = tempState.attributes.humidity_threshold || 60;
    // Parse current values
    const temp = Number(tempState.state);
    const humidity = Number(humidState.state);
    // Calculate border styles based on temperature and humidity
    let border1;
    if (temp > tempThreshold) border1 = '5px solid var(--error-color)';
    else if (humidity > humidThreshold) border1 = '5px solid var(--info-color)';
    else border1 = undefined;
    let border2;
    if (humidity > humidThreshold) border2 = '5px solid var(--info-color)';
    else if (temp > tempThreshold) border2 = '5px solid var(--error-color)';
    else border2 = undefined;
    return {
        border1: border1,
        border2: border2
    };
};
const $2a931dbd84666c62$export$6675fe814017d7b1 = (hass, tempState, humidState, state)=>{
    // as of now, only dark mode handles background coloring
    const stateObj = state;
    const active = hass.themes.darkMode && (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(stateObj);
    const cssColor = hass.themes.darkMode ? (0, $964034295ca0500a$export$b2779b0e0d1bdfa9)(stateObj) : undefined;
    const themeOverride = (0, $81b7b9da9d23fa76$export$de96a622725f4284)(hass, state);
    const { border1: border1, border2: border2 } = $2a931dbd84666c62$var$renderCardBorderStyles(tempState, humidState);
    // Return complete style map
    return (0, $19f464fcda7d2482$export$1e5b4ce2fa884e6a)({
        '--background-color-card': active ? cssColor : undefined,
        '--background-opacity-card': `var(--opacity-background-${active ? 'active' : 'inactive'})`,
        '--state-color-theme-override': themeOverride,
        borderLeft: border1,
        borderTop: border1,
        borderRight: border2,
        borderBottom: border2
    });
};



/**
 * Room Summary Card Styles Module
 *
 * Handles all styling logic and CSS definitions for the Room Summary Card.
 * Includes functions for generating dynamic styles based on state and
 * configuration, as well as static CSS styles for the card layout.
 */ 

const $f2817cae210645dc$export$9dd6ff9ea0189349 = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
  /* Card Themes and Colors */
  :host {
    ${(0, $6914dc426cdafe87$export$dec94ffc2d530e03)}
    ${(0, $6914dc426cdafe87$export$4aa0a1b480cdb1b6)}
    ${(0, $6914dc426cdafe87$export$38d2ecc76f0c2959)}
  }

  :host([isDarkMode]) {
    ${(0, $6914dc426cdafe87$export$eae85ad18a22ab6c)}
  }

  :host {
    --text-color: var(--primary-text-color);

    --background-color-card: var(--theme-background-color-card);
    --background-opacity-card: var(--opacity-background-inactive);

    --icon-color: var(--theme-color-icon);
    --background-color-icon: var(--theme-background-color-icon);
    --background-opacity-icon: var(--opacity-icon-fill-inactive);
  }

  /* Card container */
  .card {
    padding: 5px;
    border-radius: 20px;
    line-height: normal;
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--background-color-card);
    opacity: var(--background-opacity-card);
    z-index: -1;
  }

  /* Grid layout */
  .grid {
    display: grid;
    grid-template-areas:
      'n n n e1'
      'l l l e2'
      'r r . e3'
      'r r . e4';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    justify-items: center;
    aspect-ratio: 1/1;
  }

  /* Room name styling */
  .name {
    grid-area: n;
    align-self: end;
    font-size: 18px;
    margin-bottom: 10%;
    cursor: pointer;
    color: var(--text-color);
  }

  /* Label styling */
  .label {
    grid-area: l;
    align-self: start;
    font-size: 14px;
    margin-top: -10%;
    filter: opacity(40%);
    cursor: pointer;
  }

  .label p {
    margin: 0;
  }

  /* Statistics text */
  .stats {
    font-size: 0.8em;
  }

  /* Common text styles */
  .text {
    text-overflow: ellipsis;
    white-space: nowrap;
    justify-self: start;
    overflow: hidden;
    font-weight: bold;
    margin-left: 12px;
    max-width: calc(100% - 12px);
  }

  /* Room area styling */
  .room {
    grid-area: r;
    cursor: pointer;
  }

  /* Icon container styling */
  .icon {
    height: 150%;
    width: 150%;
    align-self: center;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  .icon::before {
    content: '';
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--background-color-icon);
    opacity: var(--background-opacity-icon);
    z-index: -1;
  }

  /* State icon styling */
  .icon ha-state-icon {
    width: 50%;
    color: var(--icon-color);
    opacity: var(--icon-opacity);
    --mdc-icon-size: 100%;
  }

  /* Entity styling */
  .entity {
    width: 80%;
    height: 80%;
    place-items: center;
    cursor: pointer;
  }

  /* Entity position classes */
  .entity-1 {
    grid-area: e1;
  }
  .entity-2 {
    grid-area: e2;
  }
  .entity-3 {
    grid-area: e3;
  }
  .entity-4 {
    grid-area: e4;
  }

  /* Status entities indicator */
  .status-entities {
    grid-area: 4 / 1 / 4 / 1;
    align-self: end;
    justify-self: start;
    width: 26px;
    height: 26px;
    display: grid;
    place-items: center;
    color: var(--black-color);
    position: relative;
  }

  .status-entities::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: var(--background-color-icon);
    opacity: var(--background-opacity-icon);
    z-index: -1;
  }
`;


var $b06602ab53bd58a3$exports = {};
$b06602ab53bd58a3$exports = JSON.parse("{\"name\":\"room-summary-card\",\"version\":\"0.8.5\",\"author\":\"Patrick Masters\",\"license\":\"ISC\",\"description\":\"Custom card Home Assistant which can show a summary of room entities.\",\"source\":\"src/index.ts\",\"module\":\"dist/room-summary-card.js\",\"targets\":{\"module\":{\"includeNodeModules\":true}},\"scripts\":{\"watch\":\"parcel watch\",\"build\":\"parcel build\",\"test\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha\",\"test:coverage\":\"nyc npm run test\",\"test:watch\":\"TS_NODE_PROJECT='./tsconfig.test.json' mocha --watch\"},\"devDependencies\":{\"@istanbuljs/nyc-config-typescript\":\"^1.0.2\",\"@open-wc/testing\":\"^4.0.0\",\"@parcel/transformer-inline-string\":\"^2.13.3\",\"@testing-library/dom\":\"^10.4.0\",\"@trivago/prettier-plugin-sort-imports\":\"^5.2.2\",\"@types/chai\":\"^5.0.1\",\"@types/jsdom\":\"^21.1.7\",\"@types/mocha\":\"^10.0.10\",\"@types/sinon\":\"^17.0.4\",\"chai\":\"^5.2.0\",\"jsdom\":\"^26.0.0\",\"mocha\":\"^11.1.0\",\"nyc\":\"^17.1.0\",\"parcel\":\"^2.13.3\",\"prettier\":\"3.5.3\",\"prettier-plugin-organize-imports\":\"^4.1.0\",\"proxyquire\":\"^2.1.3\",\"sinon\":\"^19.0.2\",\"ts-node\":\"^10.9.2\",\"tsconfig-paths\":\"^4.2.0\",\"typescript\":\"^5.8.2\"},\"dependencies\":{\"@lit/task\":\"^1.0.2\",\"fast-deep-equal\":\"^3.1.3\",\"lit\":\"^3.2.1\"}}");


/**
 * Home Assistant Helper Functions
 *
 * A collection of utility functions for working with Home Assistant entities,
 * states, and configurations. These functions handle entity management,
 * state retrieval, and UI element creation.
 */ /**
 * Configuration utilities for feature flag management
 */ const $a64cd1666b27644b$export$805ddaeeece0413e = (config, feature)=>!config || config.features?.includes(feature) || false;


const $4a21e93a38591807$export$520c40045967cb15 = (hass, deviceId)=>hass.areas[deviceId];




const $093edc2594769ee5$export$33d24fc54894c4ae = (hass, area)=>{
    // Find entities labeled as problems in the specified area
    const problemEntities = Object.keys(hass.entities).filter((entityId)=>{
        const entity = hass.entities[entityId];
        if (!entity?.labels?.includes('problem')) return false;
        const device = hass.devices?.[entity.device_id];
        return [
            entity.area_id,
            device?.area_id
        ].includes(area);
    });
    // Check if any problem entities are currently active
    const problemExists = problemEntities.some((entityId)=>{
        const entityState = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, entityId);
        if (!entityState) return false;
        const active = (0, $043ab5348dd51237$export$c0e85c3982a3daa6)(entityState);
        return active;
    });
    return {
        problemEntities: problemEntities,
        problemExists: problemExists
    };
};
const $093edc2594769ee5$var$climateIcons = {
    auto: 'mdi:autorenew',
    cool: 'mdi:snowflake',
    heat: 'mdi:fire',
    dry: 'mdi:water',
    heat_cool: 'mdi:sun-snowflake',
    fan_only: 'mdi:fan',
    off: 'mdi:snowflake-off'
};
const $093edc2594769ee5$export$a2d3d3a06f345f20 = (hass, config)=>{
    // Define base entities for the area
    const baseEntities = [
        `light.${config.area}_light`,
        `switch.${config.area}_fan`
    ];
    const configEntities = config.entities || [];
    // Combine base and config entities unless fan is removed
    const entities = (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'exclude_default_entities') ? configEntities : baseEntities.concat(configEntities);
    // Process and transform entities
    const states = entities.map((entity)=>{
        // Transform string format to entity config for convenience
        if (typeof entity === 'string') entity = {
            entity_id: entity
        };
        const state = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, entity.entity_id);
        if (!state) return undefined;
        const useClimateIcons = !config.features?.includes('skip_climate_styles') && state.domain === 'climate';
        // Create entity information with defaults and climate handling
        return {
            config: {
                tap_action: {
                    action: 'toggle'
                },
                hold_action: {
                    action: 'more-info'
                },
                double_tap_action: {
                    action: 'none'
                },
                ...entity
            },
            state: {
                ...state,
                attributes: {
                    icon: useClimateIcons ? $093edc2594769ee5$var$climateIcons[state.state] : undefined,
                    ...state.attributes
                }
            }
        };
    }).filter((entity)=>entity !== undefined);
    return states;
};
const $093edc2594769ee5$export$25fedbc2fd674160 = (hass, config)=>{
    const roomEntityId = `light.${config.area}_light`;
    // Handle different entity configuration formats
    if (config.entity) {
        if (typeof config.entity === 'string') // String format
        return {
            config: {
                entity_id: config.entity,
                hold_action: {
                    action: 'more-info'
                },
                double_tap_action: {
                    action: 'none'
                }
            },
            state: (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, config.entity)
        };
        else // Object format
        return {
            config: {
                hold_action: {
                    action: 'more-info'
                },
                double_tap_action: {
                    action: 'none'
                },
                ...config.entity
            },
            state: (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, config.entity.entity_id)
        };
    }
    // Default room light configuration
    return {
        config: {
            entity_id: roomEntityId,
            icon: (0, $4a21e93a38591807$export$520c40045967cb15)(hass, config.area)?.icon,
            tap_action: {
                action: 'navigate',
                navigation_path: config.navigate ?? config.area.replace('_', '-')
            },
            hold_action: {
                action: 'more-info'
            },
            double_tap_action: {
                action: 'none'
            }
        },
        state: (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, roomEntityId, true)
    };
};



const $5bd3a7e1f19a6de3$export$30c823bc834d6ab4 = (hass, deviceId)=>hass.devices[deviceId];


const $e6782818bfcf779d$export$fcf7c33d7fd02301 = (hass, entityId)=>hass.entities[entityId];




const $df0b9f1bf12991b0$export$267567d6b695ed02 = (hass, config)=>{
    if (!hass || (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'hide_climate_label')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const temp = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, config.temperature_sensor);
    const humidity = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, config.humidity_sensor);
    if (!temp && !humidity) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const parts = [];
    if (temp?.state) parts.push(`${temp.state}${temp.attributes?.unit_of_measurement || ''}`);
    if (humidity?.state) parts.push(`${humidity.state}${humidity.attributes?.unit_of_measurement || ''}`);
    if (!parts.length) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<p>${parts.join(' - ')}</p>`;
};
const $df0b9f1bf12991b0$export$91d43c07a591098e = (hass, config)=>{
    if (!hass || (0, $a64cd1666b27644b$export$805ddaeeece0413e)(config, 'hide_area_stats')) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
    const devices = Object.keys(hass.devices).filter((k)=>(0, $5bd3a7e1f19a6de3$export$30c823bc834d6ab4)(hass, k).area_id === config.area);
    const entities = Object.keys(hass.entities).filter((k)=>{
        const entity = (0, $e6782818bfcf779d$export$fcf7c33d7fd02301)(hass, k);
        return entity.area_id === config.area || devices.includes(entity.device_id);
    });
    const stats = [
        [
            devices.length,
            'devices'
        ],
        [
            entities.length,
            'entities'
        ]
    ].filter((count)=>count.length > 0).map(([count, type])=>`${count} ${type}`).join(' ');
    return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<span class="stats">${stats}</span>`;
};


var $30856da572fd852b$exports = {};
'use strict';
// do not edit .js files directly - edit src/index.jst
$30856da572fd852b$exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == 'object' && typeof b == 'object') {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; i-- !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; i-- !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; i-- !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};


class $e4f1b26747081709$export$90a7a1e0555e0bc9 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    constructor(){
        super(), /**
   * List of entity IDs that have problems
   */ this._problemEntities = [], /**
   * Indicates if any problems exist in the room
   */ this._problemExists = false;
        console.info(`%c\u{1F431} Poat's Tools: room-summary-card - ${(0, $b06602ab53bd58a3$exports.version)}`, 'color: #CFC493;');
    }
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        if (!this._states) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        const area = this._formatAreaName();
        const handler = (0, $57febad8376708f1$export$8a44987212de21b)(this._roomEntity);
        const label = (0, $df0b9f1bf12991b0$export$267567d6b695ed02)(this._hass, this._config);
        const action = (0, $57febad8376708f1$export$3d3654ce4577c53d)(this, this._roomEntity);
        const stats = (0, $df0b9f1bf12991b0$export$91d43c07a591098e)(this._hass, this._config);
        const { textStyle: textStyle } = (0, $5b9da589bbdb01f3$export$5edf3a158822b217)(this._hass, this._roomEntity.state);
        const roomEntity = (0, $aae26e2a62e46297$export$a0ea366d13bf2463)(this, this._hass, this._roomEntity, [
            'room'
        ]);
        const stateIcons = this._states.map((s, i)=>(0, $aae26e2a62e46297$export$a0ea366d13bf2463)(this, this._hass, s, [
                'entity',
                `entity-${i + 1}`
            ]));
        const cardStyle = (0, $2a931dbd84666c62$export$6675fe814017d7b1)(this._hass, this._temperature, this._humidity, this._roomEntity.state);
        const problems = (0, $aae26e2a62e46297$export$8093665c9ba8ead9)(this._problemEntities, this._problemExists);
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <div class="card" style="${cardStyle}">
        <div class="grid">
          <!-- Room Name -->
          <div
            class="name text"
            style=${textStyle}
            @action=${action}
            .actionHandler=${handler}
          >
            ${area}
          </div>

          <!-- Climate Information -->
          <div
            class="label text"
            style=${textStyle}
            @action=${action}
            .actionHandler=${handler}
          >
            ${label} ${stats}
          </div>

          <!-- State Icons -->
          ${roomEntity} ${stateIcons}

          <!-- Problem Indicator -->
          ${problems}
        </div>
      </div>
    `;
    }
    /**
   * Returns the component's styles
   */ static get styles() {
        return 0, $f2817cae210645dc$export$9dd6ff9ea0189349;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        const cardConfig = {
            humidity_sensor: `sensor.${config.area}_climate_humidity`,
            temperature_sensor: `sensor.${config.area}_climate_air_temperature`,
            ...config
        };
        if (!$30856da572fd852b$exports(cardConfig, this._config)) this._config = cardConfig;
    }
    /**
   * Updates the card's state when Home Assistant state changes
   * @param {HomeAssistant} hass - The Home Assistant instance
   */ set hass(hass) {
        this._hass = hass;
        this.isDarkMode = hass.themes.darkMode;
        const states = (0, $093edc2594769ee5$export$a2d3d3a06f345f20)(hass, this._config);
        const roomEntity = (0, $093edc2594769ee5$export$25fedbc2fd674160)(hass, this._config);
        const { problemEntities: problemEntities, problemExists: problemExists } = (0, $093edc2594769ee5$export$33d24fc54894c4ae)(hass, this._config.area);
        const tempState = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, this._config.temperature_sensor);
        const humidState = (0, $e24dedcf9e480b2d$export$50fdfeece43146fd)(hass, this._config.humidity_sensor);
        this._problemExists = problemExists;
        // Update states only if they've changed
        if (!$30856da572fd852b$exports(roomEntity, this._roomEntity)) this._roomEntity = roomEntity;
        if (!$30856da572fd852b$exports(states, this._states)) this._states = states;
        if (!$30856da572fd852b$exports(problemEntities, this._problemEntities)) this._problemEntities = problemEntities;
        if (!$30856da572fd852b$exports(tempState, this._temperature)) this._temperature = tempState;
        if (!$30856da572fd852b$exports(humidState, this._humidity)) this._humidity = humidState;
    }
    // card configuration
    static getConfigElement() {
        return document.createElement('room-summary-card-editor');
    }
    static async getStubConfig(hass) {
        // Get all area IDs and their friendly names
        const areas = Object.entries(hass.areas);
        // Find the first area that has matching entities
        const matchingArea = areas.find(([areaId, area])=>{
            const areaName = area.area_id.toLowerCase().replace(/\s+/g, '_');
            // Check if either entity exists for this area
            const hasLight = `light.${areaName}_light` in hass.entities;
            const hasFan = `switch.${areaName}_fan` in hass.entities;
            // Return true if either entity exists
            return hasLight || hasFan;
        });
        // Return the matching area ID or empty string if none found
        return {
            area: matchingArea ? matchingArea[0] : ''
        };
    }
    /**
   * Formats the area name with proper capitalization
   * @returns {string} Formatted area name
   */ _formatAreaName() {
        return this._config.area.split('_').map((w)=>w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_config", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_states", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_roomEntity", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_problemEntities", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_problemExists", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_temperature", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "_humidity", void 0);
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        type: Boolean,
        reflect: true
    })
], $e4f1b26747081709$export$90a7a1e0555e0bc9.prototype, "isDarkMode", void 0);






const $b642db848cc622aa$var$SCHEMA = [
    {
        name: 'area',
        label: 'Area',
        required: true,
        selector: {
            area: {}
        }
    },
    {
        name: 'entity',
        label: 'Main room entity',
        required: false,
        selector: {
            entity: {
                multiple: false
            }
        }
    },
    {
        name: 'entities',
        label: 'Area side entities',
        required: false,
        selector: {
            entity: {
                multiple: true
            }
        }
    },
    {
        name: 'temperature_sensor',
        label: 'Temperature sensor',
        required: false,
        selector: {
            entity: {
                multiple: false,
                filter: {
                    domain: 'sensor'
                }
            }
        }
    },
    {
        name: 'humidity_sensor',
        label: 'Humidity sensor',
        required: false,
        selector: {
            entity: {
                multiple: false,
                filter: {
                    domain: 'sensor'
                }
            }
        }
    },
    {
        name: 'navigate',
        label: 'Navigate path when card tapped',
        required: false,
        selector: {
            text: {
                type: 'url'
            }
        }
    },
    {
        name: 'features',
        label: 'Features',
        required: false,
        selector: {
            select: {
                multiple: true,
                mode: 'list',
                options: [
                    {
                        label: 'Hide Climate Label',
                        value: 'hide_climate_label'
                    },
                    {
                        label: 'Hide Area Stats',
                        value: 'hide_area_stats'
                    },
                    {
                        label: 'Exclude Default Entities',
                        value: 'exclude_default_entities'
                    },
                    {
                        label: 'Skip Climate Styles',
                        value: 'skip_climate_styles'
                    }
                ]
            }
        }
    }
];
class $b642db848cc622aa$export$be1ca41262ce011e extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    /**
   * renders the lit element card
   * @returns {TemplateResult} The rendered HTML template
   */ render() {
        if (!this.hass || !this._config) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${$b642db848cc622aa$var$SCHEMA}
        .computeLabel=${(s)=>s.label}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
    }
    /**
   * Sets up the card configuration
   * @param {Config} config - The card configuration
   */ setConfig(config) {
        this._config = config;
    }
    _valueChanged(ev) {
        const config = ev.detail.value;
        if (!config.features?.length) delete config.features;
        // @ts-ignore
        (0, $9c83ab07519e6203$export$43835e9acf248a15)(this, 'config-changed', {
            config: config
        });
    }
}
(0, $24c52f343453d62d$export$29e00dfd3077644b)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $b642db848cc622aa$export$be1ca41262ce011e.prototype, "_config", void 0);


// Register the custom element with the browser
customElements.define('room-summary-card', (0, $e4f1b26747081709$export$90a7a1e0555e0bc9));
customElements.define('room-summary-card-editor', (0, $b642db848cc622aa$export$be1ca41262ce011e));
// Ensure the customCards array exists on the window object
window.customCards = window.customCards || [];
// Register the card with Home Assistant's custom card registry
window.customCards.push({
    // Unique identifier for the card type
    type: 'room-summary-card',
    // Display name in the UI
    name: 'Room Summary',
    // Card description for the UI
    description: 'A card to summarize the status of a room, including temperature, humidity, and any problem entities.',
    // Show a preview of the card in the UI
    preview: true,
    // URL for the card's documentation
    documentationURL: 'https://github.com/homeassistant-extras/room-summary-card'
});


//# sourceMappingURL=room-summary-card.js.map
