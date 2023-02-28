"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateInput_1 = require("../../../inputs/AvanceCreateInput");
let CreateOneAvanceArgs = class CreateOneAvanceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AvanceCreateInput_1.AvanceCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AvanceCreateInput_1.AvanceCreateInput)
], CreateOneAvanceArgs.prototype, "data", void 0);
CreateOneAvanceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAvanceArgs);
exports.CreateOneAvanceArgs = CreateOneAvanceArgs;
