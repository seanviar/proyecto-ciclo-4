"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneInscripcionArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const InscripcionCreateInput_1 = require("../../../inputs/InscripcionCreateInput");
let CreateOneInscripcionArgs = class CreateOneInscripcionArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => InscripcionCreateInput_1.InscripcionCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", InscripcionCreateInput_1.InscripcionCreateInput)
], CreateOneInscripcionArgs.prototype, "data", void 0);
CreateOneInscripcionArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneInscripcionArgs);
exports.CreateOneInscripcionArgs = CreateOneInscripcionArgs;
