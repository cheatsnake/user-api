class ErrorHandler extends Error {
    status: number;
    errors: string[];

    constructor(status: number, message: string, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static badRequest(message: string, errors = []) {
        return new ErrorHandler(400, message, errors);
    }

    static notFound(message: string, errors = []) {
        return new ErrorHandler(404, message, errors);
    }
}

export default ErrorHandler;
