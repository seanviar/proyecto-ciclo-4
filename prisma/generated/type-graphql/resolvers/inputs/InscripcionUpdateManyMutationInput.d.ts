import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEnum_Estado_InscripcionFieldUpdateOperationsInput } from "../inputs/EnumEnum_Estado_InscripcionFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class InscripcionUpdateManyMutationInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    estado?: EnumEnum_Estado_InscripcionFieldUpdateOperationsInput | undefined;
    fechaIngreso?: DateTimeFieldUpdateOperationsInput | undefined;
}
