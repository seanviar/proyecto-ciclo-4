import { EnumEnum_Estado_UsuarioFieldUpdateOperationsInput } from "../inputs/EnumEnum_Estado_UsuarioFieldUpdateOperationsInput";
import { EnumEnum_RolFieldUpdateOperationsInput } from "../inputs/EnumEnum_RolFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UsuarioUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    correo?: StringFieldUpdateOperationsInput | undefined;
    identificacion?: StringFieldUpdateOperationsInput | undefined;
    nombre?: StringFieldUpdateOperationsInput | undefined;
    apellido?: StringFieldUpdateOperationsInput | undefined;
    rol?: EnumEnum_RolFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_Estado_UsuarioFieldUpdateOperationsInput | undefined;
}
