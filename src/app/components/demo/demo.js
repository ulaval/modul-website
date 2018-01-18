var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ModulWebsite } from '../modul-website';
import Component from 'vue-class-component';
import WithRender from './demo.html?style=./demo.scss';
var MDemo = /** @class */ (function (_super) {
    __extends(MDemo, _super);
    function MDemo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @Prop()
    // public name: string;
    // @Prop()
    // public tab: string;
    // private get URL(): string | undefined {
    //     for (let section of (this.$router as any).options.routes) {
    //         if (section.children) {
    //             for (let route of section.children) {
    //                 if (route.meta && route.meta.page == this.name) {
    //                     let path: string = route.path;
    //                     if (this.tab) {
    //                         path += '/' + this.tab;
    //                     }
    //                     return path;
    //                 }
    //             }
    //         }
    //     }
    //     return undefined;
    // }
    MDemo.prototype.defaultSlot = function () {
        return !!this.$slots.default;
    };
    MDemo = __decorate([
        WithRender,
        Component
    ], MDemo);
    return MDemo;
}(ModulWebsite));
export { MDemo };
export var DEMO_NAME = 'modul-demo';
var DemoPlugin = {
    install: function (v, options) {
        v.component(DEMO_NAME, MDemo);
    }
};
export default DemoPlugin;
