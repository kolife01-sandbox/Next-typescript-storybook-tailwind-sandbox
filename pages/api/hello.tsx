// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
type MyReturnTypes = {
  name: string;
};

export default (req, res): MyReturnTypes => {
  res.statusCode = 200;
  return res.json({ name: "John Doe" });
};
