import type { NextApiResponse, NextApiRequest } from "next";

type Data = {
  id: number;
  title: string;
  description: string;
  logo: string;
  openedAt: string;
  closedAt: string;
}

export default function Courses(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  const d: Data[] = [{
    id: 1,
    title: "MySQL",
    description: "Database Administrator",
    logo: "/images/logo/mysql.svg",
    openedAt: "08.00",
    closedAt: "10.00",
  }, {
    id: 2,
    title: "Design Graphics",
    description: "Design Graphics",
    logo: "/images/logo/design-grafis.svg",
    openedAt: "08.00",
    closedAt: "10.00",
  }, {
    id: 3,
    title: "PHP",
    description: "PHP Programming",
    logo: "/images/logo/php.png",
    openedAt: "13.00",
    closedAt: "15.00",
  }];

  res.setHeader("Access-Control-Allow-Origin", "localhost");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "*");

  if (req.method === "GET") {
    res.status(200).json(d);
    return;
  }
}
