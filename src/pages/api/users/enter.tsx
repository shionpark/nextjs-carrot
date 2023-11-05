import { NextApiRequest, NextApiHandler, NextApiResponse } from "next";
import client from "@libs/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  const user = await client.user.upsert({
    where: {
      ...payload,
      // ...(phone ? {phone: +phone}:{}),
      // ...(email ? {email}:{})
    },
    create: {
      name: "Anonymous",
      ...payload,
      // ...(phone ? {phone: +phone}:{}),
      // ...(email ? {email}:{})
    },
    update: {},
  });
  console.log(user);

  res.status(200).end();
}
