import { ProyectoCreateOrConnectWithoutAvanceInput } from "../inputs/ProyectoCreateOrConnectWithoutAvanceInput";
import { ProyectoCreateWithoutAvanceInput } from "../inputs/ProyectoCreateWithoutAvanceInput";
import { ProyectoWhereUniqueInput } from "../inputs/ProyectoWhereUniqueInput";
export declare class ProyectoCreateNestedOneWithoutAvanceInput {
    create?: ProyectoCreateWithoutAvanceInput | undefined;
    connectOrCreate?: ProyectoCreateOrConnectWithoutAvanceInput | undefined;
    connect?: ProyectoWhereUniqueInput | undefined;
}
