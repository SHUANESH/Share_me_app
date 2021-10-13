function updateOptions(options) {
  const update = { ...options };
  if (localStorage.jwtToken) {
    update.headers = {
      ...update.headers,
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.jwtToken}`,
    };
  }
  return update;
}

const fetcher = async (url, options) => {
  try {
    return await fetch(`http://localhost:8080${url}`, updateOptions(options))
      .then((res) => res.json())
      .then((response) => response)
      .catch(err => {
        console.error(err);
      });
  } catch (error) {
    console.log(error);
  }

}
export default fetcher;