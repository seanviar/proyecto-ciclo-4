"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneProyectoResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneProyectoArgs_1 = require("./args/CreateOneProyectoArgs");
const Proyecto_1 = require("../../../models/Proyecto");
const helpers_1 = require("../../../helpers");
let CreateOneProyectoResolver = class CreateOneProyectoResolver {
    async createOneProyecto(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).proyecto.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Proyecto_1.Proyecto, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneProyectoArgs_1.CreateOneProyectoArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneProyectoResolver.prototype, "createOneProyecto", null);
CreateOneProyectoResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Proyecto_1.Proyecto)
], CreateOneProyectoResolver);
exports.CreateOneProyectoResolver = CreateOneProyectoResolver;
