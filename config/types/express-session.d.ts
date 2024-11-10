import 'express-session'; 

declare module 'express-session' {
  interface SessionData {
    mensagem?: string;  // Define a propriedade 'mensagem' como opcional
  }
}

