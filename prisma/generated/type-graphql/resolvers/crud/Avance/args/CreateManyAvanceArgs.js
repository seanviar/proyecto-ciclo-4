"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAvanceArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateManyInput_1 = require("../../../inputs/AvanceCreateManyInput");
let CreateManyAvanceArgs = class CreateManyAvanceArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateManyInput_1.AvanceCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAvanceArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyAvanceArgs.prototype, "skipDuplicates", void 0);
CreateManyAvanceArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAvanceArgs);
exports.CreateManyAvanceArgs = CreateManyAvanceArgs;
