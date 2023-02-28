export declare class ProyectoMinAggregate {
    id: string | null;
    nombre: string | null;
    objetivosGenerales: string | null;
    objetivosEspesificos: string | null;
    presupuesto: number | null;
    fechaInicio: Date | null;
    fechaFin: Date | null;
    usuarioId: string | null;
    estado: "Activo" | "Inactivo" | null;
    fase: "Iniciado" | "En_Desarrollo" | "Terminado" | null;
}
