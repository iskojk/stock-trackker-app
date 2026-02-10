import { Inngest } from "inngest";

export const inngest = new Inngest({
    id: 'stock-app',
    ai: { gemini: { apiKey: process.env.GEMINION_API_KEY! }},
})