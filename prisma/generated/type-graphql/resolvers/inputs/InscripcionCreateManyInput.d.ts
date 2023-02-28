export declare class InscripcionCreateManyInput {
    id?: string | undefined;
    estado?: "Acepdado" | "Rechazado" | "Pendiente" | undefined;
    fechaIngreso?: Date | undefined;
    usuarioId: string;
    proyectoId: string;
}
