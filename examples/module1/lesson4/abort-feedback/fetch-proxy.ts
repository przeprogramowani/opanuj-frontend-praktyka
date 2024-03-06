interface ExtendedRequestInit extends RequestInit {
  timeout?: number;
}

type FetchArgs = [input: RequestInfo, init?: ExtendedRequestInit | undefined];
type FetchReturn = Promise<Response>;

const fetchProxy: (...args: FetchArgs) => FetchReturn = new Proxy(fetch, {
  apply(target: typeof fetch, thisArg: any, argumentsList: FetchArgs) {
    const { timeout, signal: externalSignal, ...restConfig } = argumentsList[1] || {};
    const abortController = externalSignal ? null : new AbortController();
    const signal = externalSignal || (abortController && abortController.signal);

    const newConfig: ExtendedRequestInit = {
      ...restConfig,
      signal,
    };

    if (timeout && abortController) {
      setTimeout(() => abortController.abort(), timeout);
    }

    return target.apply(thisArg, [argumentsList[0], newConfig]);
  },
});

export default fetchProxy;
