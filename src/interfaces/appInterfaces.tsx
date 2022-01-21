//Login Data
export interface LoginData {
    dni: string;
    clave: string;
}


//Login Response
export interface Persona {
    id_persona: number;
    nombre: string;
    apellido: string;
    dni: string;
    telefono: string;
    direccion: string;
    correo: string;
    foto: string;
}

export interface Rol {
    tipo: string;
    id_rol: number;
}

export interface RootObject {
    persona: Persona[];
    rol: Rol;
}