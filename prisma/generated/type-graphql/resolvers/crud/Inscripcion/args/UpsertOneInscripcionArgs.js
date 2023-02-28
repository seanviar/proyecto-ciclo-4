"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateInput_1 = require("../../../inputs/InscripcionCreateInput");
const InscripcionUpdateInput_1 = require("../../../inputs/InscripcionUpdateInput");
const InscripcionWhereUniqueInput_1 = require("../../../inputs/InscripcionWhereUniqueInput");
let UpsertOneInscripcionArgs = class UpsertOneInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], UpsertOneInscripcionArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateInput_1.InscripcionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionCreateInput_1.InscripcionCreateInput)
], UpsertOneInscripcionArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateInput_1.InscripcionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateInput_1.InscripcionUpdateInput)
], UpsertOneInscripcionArgs.prototype, "update", void 0);
UpsertOneInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneInscripcionArgs);
exports.UpsertOneInscripcionArgs = UpsertOneInscripcionArgs;
