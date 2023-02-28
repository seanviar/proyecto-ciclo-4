"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvanceCreateManyEstudianteInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AvanceCreateManyEstudianteInput_1 = require("../inputs/AvanceCreateManyEstudianteInput");
let AvanceCreateManyEstudianteInputEnvelope = class AvanceCreateManyEstudianteInputEnvelope {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AvanceCreateManyEstudianteInput_1.AvanceCreateManyEstudianteInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], AvanceCreateManyEstudianteInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], AvanceCreateManyEstudianteInputEnvelope.prototype, "skipDuplicates", void 0);
AvanceCreateManyEstudianteInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("AvanceCreateManyEstudianteInputEnvelope", {
        isAbstract: true
    })
], AvanceCreateManyEstudianteInputEnvelope);
exports.AvanceCreateManyEstudianteInputEnvelope = AvanceCreateManyEstudianteInputEnvelope;
