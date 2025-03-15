const apiWrapper = (
  res,
  { status, message, data = null, success = true, error = null }
) => {
  const response = {
    success,
    message,
    data,
    error,
    timestamp: new Date().toISOString(),
  };

  if (!status || typeof status !== "number") {
    return res.status(500).send({
      success: false,
      message: "Invalid status code",
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(status).send(response);
};

module.exports = apiWrapper;
