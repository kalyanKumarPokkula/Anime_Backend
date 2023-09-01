function commonResponseMessage(data, message) {
  return {
    message: message,
    success: true,
    data: data,
    err: {},
  };
}

function commonErrorResponseMessage(error, errorMessage) {
  return {
    message: errorMessage,
    success: false,
    data: {},
    error: error,
  };
}

export { commonErrorResponseMessage, commonResponseMessage };
