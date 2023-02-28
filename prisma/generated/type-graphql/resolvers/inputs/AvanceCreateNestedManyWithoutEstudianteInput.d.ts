import { AvanceCreateManyEstudianteInputEnvelope } from "../inputs/AvanceCreateManyEstudianteInputEnvelope";
import { AvanceCreateOrConnectWithoutEstudianteInput } from "../inputs/AvanceCreateOrConnectWithoutEstudianteInput";
import { AvanceCreateWithoutEstudianteInput } from "../inputs/AvanceCreateWithoutEstudianteInput";
import { AvanceWhereUniqueInput } from "../inputs/AvanceWhereUniqueInput";
export declare class AvanceCreateNestedManyWithoutEstudianteInput {
    create?: AvanceCreateWithoutEstudianteInput[] | undefined;
    connectOrCreate?: AvanceCreateOrConnectWithoutEstudianteInput[] | undefined;
    createMany?: AvanceCreateManyEstudianteInputEnvelope | undefined;
    connect?: AvanceWhereUniqueInput[] | undefined;
}
