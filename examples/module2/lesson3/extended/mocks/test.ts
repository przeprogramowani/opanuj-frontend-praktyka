import { http } from 'msw';
import type { MockServiceWorker } from 'playwright-msw';
import { createWorkerFixture } from 'playwright-msw';
import { test as base, expect } from '../fixtures';
import handlers from './handlers';

const test = base.extend<{
    worker: MockServiceWorker;
    http: typeof http;
}>({
    worker: createWorkerFixture(handlers),
    http,
});

export { expect, test };
