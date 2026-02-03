/**
 * Type definitions for the support agent application
 */

/** Document retrieved from the vector database */
export interface Document {
    id: string;
    content: string;
    score: number;
}

/** Source reference in the chat response */
export interface Source {
    id: string;
    score: number;
}

/** Request body for the /support/chat endpoint */
export interface ChatRequest {
    question: string;
}

/** Response body for the /support/chat endpoint */
export interface ChatResponse {
    answer: string;
    sources: Source[];
}

/** Embedding vector */
export type Embedding = number[];
