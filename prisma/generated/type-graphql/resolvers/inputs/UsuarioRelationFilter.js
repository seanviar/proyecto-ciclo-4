"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UsuarioWhereInput_1 = require("../inputs/UsuarioWhereInput");
let UsuarioRelationFilter = class UsuarioRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], UsuarioRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UsuarioWhereInput_1.UsuarioWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UsuarioWhereInput_1.UsuarioWhereInput)
], UsuarioRelationFilter.prototype, "isNot", void 0);
UsuarioRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("UsuarioRelationFilter", {
        isAbstract: true
    })
], UsuarioRelationFilter);
exports.UsuarioRelationFilter = UsuarioRelationFilter;
