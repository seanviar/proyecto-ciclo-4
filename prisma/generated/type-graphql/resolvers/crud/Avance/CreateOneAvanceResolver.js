"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAvanceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneAvanceArgs_1 = require("./args/CreateOneAvanceArgs");
const Avance_1 = require("../../../models/Avance");
const helpers_1 = require("../../../helpers");
let CreateOneAvanceResolver = class CreateOneAvanceResolver {
    async createOneAvance(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).avance.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Avance_1.Avance, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneAvanceArgs_1.CreateOneAvanceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneAvanceResolver.prototype, "createOneAvance", null);
CreateOneAvanceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Avance_1.Avance)
], CreateOneAvanceResolver);
exports.CreateOneAvanceResolver = CreateOneAvanceResolver;
