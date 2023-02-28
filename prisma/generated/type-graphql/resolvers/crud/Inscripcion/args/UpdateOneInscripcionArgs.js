"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionUpdateInput_1 = require("../../../inputs/InscripcionUpdateInput");
const InscripcionWhereUniqueInput_1 = require("../../../inputs/InscripcionWhereUniqueInput");
let UpdateOneInscripcionArgs = class UpdateOneInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionUpdateInput_1.InscripcionUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionUpdateInput_1.InscripcionUpdateInput)
], UpdateOneInscripcionArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionWhereUniqueInput_1.InscripcionWhereUniqueInput)
], UpdateOneInscripcionArgs.prototype, "where", void 0);
UpdateOneInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneInscripcionArgs);
exports.UpdateOneInscripcionArgs = UpdateOneInscripcionArgs;
