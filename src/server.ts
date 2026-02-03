/**
 * Main application server
 */

import express, { Express, Request, Response } from "express";

interface HealthResponse {
    status: string;
}

/**
 * Create and configure the Express application
 */
function createApp(): Express {
    const app: Express = express();

    // Middleware
    app.use(express.json());

    // TODO: Initialize services

    // TODO: Register routes
    // app.use('/support', createChatRouter(chatService));

    // Health check endpoint
    app.get("/health", (_req: Request, res: Response<HealthResponse>): void => {
        res.json({ status: "ok" });
    });

    return app;
}

/**
 * Start the server
 */
async function startServer(): Promise<void> {
    const app: Express = createApp();
    const portEnv: string | undefined = process.env["PORT"];
    const port: number = portEnv ? parseInt(portEnv, 10) : 3000;

    app.listen(port, (): void => {
        console.log(`Server listening on port ${port}`);
    });
}

// Start the server
startServer().catch((err: unknown): void => {
    console.error("Failed to start server:", err);
    process.exit(1);
});
