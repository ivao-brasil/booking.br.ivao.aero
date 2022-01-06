import { setupServer } from 'msw/node';
import { handlers } from './apiHandlers';

export const server = setupServer(...handlers);
