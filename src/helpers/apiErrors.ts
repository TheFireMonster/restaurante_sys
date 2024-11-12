export class ApiError extends Error {
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

    // Método assíncrono para log do erro
    public async logError(): Promise<void> {
        // Simulação de um processo assíncrono, como registrar um log em um sistema externo
        await new Promise((resolve) => setTimeout(resolve, 100));
        console.log(`Log Error - ${this.statusCode}: ${this.message}`);
    }
}

export class BadRequestError extends ApiError {
    constructor(message: string) {
        super(message, 400);
    }

    public async logError(): Promise<void> {
        await super.logError();
    }
}

export class UnauthorizedError extends ApiError {
    constructor(message: string) {
        super(message, 401);
    }

    public async logError(): Promise<void> {
        await super.logError();
    }
}

export class ForbiddenError extends ApiError {
    constructor(message: string) {
        super(message, 403);
    }

    public async logError(): Promise<void> {
        await super.logError();
    }
}

export class NotFoundError extends ApiError {
    constructor(message: string) {
        super(message, 404);
    }

    public async logError(): Promise<void> {
        await super.logError();
    }
}

export class RequestTimeoutError extends ApiError {
    constructor(message: string) {
        super(message, 408);
    }

    public async logError(): Promise<void> {
        await super.logError();
    }
}

export class ConflictError extends ApiError {
    constructor(message: string) {
        super(message, 409);
    }

    public async logError(): Promise<void> {
        await super.logError();
    }
}

// Função para instanciar o erro adequado
export function createError(type: string, message: string): ApiError {
    switch (type) {
        case 'BadRequest':
            return new BadRequestError(message);
        case 'Unauthorized':
            return new UnauthorizedError(message);
        case 'Forbidden':
            return new ForbiddenError(message);
        case 'NotFound':
            return new NotFoundError(message);
        case 'RequestTimeout':
            return new RequestTimeoutError(message);
        case 'Conflict':
            return new ConflictError(message);
        default:
            return new ApiError(message, 500); // Erro genérico
    }
}
