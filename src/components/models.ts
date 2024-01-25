export interface ResDocuments {
  message: string;
  types: TipoDocumento[];
}

export interface TipoDocumento {
  idTipoDocumento: number;
  nombreTipoDocumento: string;
}

export interface ResInterestRate {
  message: string;
  interestRate: InterestRate;
}

export interface InterestRate {
  idTasaInteres: number;
  tasa: number;
  fechaRegistro: string;
}

export interface Cuota {
  fechaPago: string;
  cuota: number;
}

export interface ResPerson {
  message: string;
  person: Persona;
}

export interface Persona {
  documentoPersona: number;
  nombres: string;
  apellidos: string;
  genero: string;
  fechaNacimiento: string;
  email: string;
  telefono: null;
  celular: number;
  fkIdTipoDocumento: number;
}
