export function customErrorProcessor() {
  const originalOnError = window.onerror;

  window.onerror = function (message, source, lineno, colno, error) {
    const errorData = {
      message: typeof message === 'string' ? message : message.toString(),
      url: source,
      lineNumber: lineno,
      columnNumber: colno,
      errorStack:
        error && error.stack ? error.stack : 'Stack trace not available',
    };

    // Send errorData to your error tracking service
    console.error(`🚨 Error: ${errorData.message}`, errorData);

    if (originalOnError) {
      return originalOnError.apply(this, [
        message,
        source,
        lineno,
        colno,
        error,
      ]);
    }

    return true;
  };
}
