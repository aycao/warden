const getApiUrl = (route, id) => {
  return `/api/${route}${id? ('/' + id): ''}`;
};

const simpleErrHandler = (err) => {
  console.log(err);
}

export {
  getApiUrl,
  simpleErrHandler,
}
