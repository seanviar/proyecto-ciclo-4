import { ProyectoCreateOrConnectWithoutAvanceInput } from "../inputs/ProyectoCreateOrConnectWithoutAvanceInput";
import { ProyectoCreateWithoutAvanceInput } from "../inputs/ProyectoCreateWithoutAvanceInput";
import { ProyectoUpdateWithoutAvanceInput } from "../inputs/ProyectoUpdateWithoutAvanceInput";
import { ProyectoUpsertWithoutAvanceInput } from "../inputs/ProyectoUpsertWithoutAvanceInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoUpdateOneRequiredWithoutAvanceNestedInput {
    create?: ProyectoCreateWithoutAvanceInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutAvanceInput | undefined;
    upsert?: ProyectoUpsertWithoutAvanceInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
    update?: ProyectoUpdateWithoutAvanceInput | undefined;
}
