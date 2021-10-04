import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    {
      component: "retriever:div",
      mTop: "120px",
      d: "flex",
      flexDirection: "column",
      alignItems: "center",
      children: [
        {
          component: "retriever:h1",
          color: "primary.400",
          fontSize: "32px",
          fontWeight: "bold",
          textAlign: "center",
          children: "Logo Housi",
        },
        {
          component: "retriever:p",
          color: "black.500",
          fontSize: "14px",
          textAlign: "center",
          mTop: "10px",
          children: [
            {
              component: "retriever:span",
              children: "Sua casa ",
              color: "black.400",
              fontSize: "14px",
            },
            {
              component: "retriever:span",
              color: "primary.400",
              fontWeight: "bold",
              children: "joao:teste",
              fontSize: "14px",
            },
            {
              component: "retriever:span",
              children: "joao:teste",
              color: "black.400",
              fontSize: "14px",
            },
          ],
        },
        {
          component: "retriever:div",
          mTop: { sm: "80px", md: "40px" },
          children: [
            {
              component: "retriever:search",
              label: "Onde voce quer morar?",
              placeholder: "Procure por cidades, bairros, etc...",
              buttonText: "buscar",
            },
          ],
        },
      ],
    },
  ]);
}
