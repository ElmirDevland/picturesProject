const postData = async (url, body) => {
  const req = await fetch(url, {
    method: 'POST',
    body: body,
  });

  if (!req.ok) {
    throw new Error(`Failed to fetch ${url}: ${req.statusText} ${req.status}`);
  }
  return await req.text();
};

export default postData;
