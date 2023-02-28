export declare class ProyectoCreateManyInput {
    id?: string | undefined;
    nombre: string;
    objetivosGenerales: string;
    objetivosEspesificos: string;
    presupuesto: number;
    fechaInicio?: Date | undefined;
    fechaFin?: Date | undefined;
    usuarioId: string;
    estado?: "Activo" | "Inactivo" | undefined;
    fase?: "Iniciado" | "En_Desarrollo" | "Terminado" | undefined;
}
