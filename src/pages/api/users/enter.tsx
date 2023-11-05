import { NextApiRequest, NextApiHandler, NextApiResponse } from "next";
import client from "@libs/server/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { phone, email } = req.body;
  const user = phone ? { phone: +phone } : { email };
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...user,
          },
          create: {
            name: "Anonymous",
            ...user,
          },
        },
      },
    },
  });
  console.log(token);

  res.status(200).end();
}
