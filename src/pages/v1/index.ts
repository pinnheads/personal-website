import type { APIRoute } from 'astro';
import htmlContent from '../../v1/index.html?raw';

export const GET: APIRoute = () => {
    return new Response(htmlContent, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
};
