// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "1. Introductie",
      slug: "introductie",
      image:
        "https://blue-c-lms.s3.eu-central-1.amazonaws.com/content/Introductie-cursus.png",
    },
    {
      id: 2,
      name: "2. Kompas",
      slug: "kompas",
      image:
        "https://deinterieurstickerzaak.nl/wp-content/uploads/2018/06/Kompas-zwart.png",
    },
    {
      id: 3,
      name: "3. Doelen",
      slug: "doelen",
      image:
        "https://dyllifedesign.nl/wp-content/uploads/2018/12/Goals-step-by-step.jpg",
    },
    {
      id: 4,
      name: "4. Resultaten",
      slug: "resultaten",
      image:
        "https://lh3.googleusercontent.com/proxy/XjZsnGu8IxJ56fxRPqBp5FlLD4Gw0WOeCl9fcFGmlgZud_fBynE9bmsEnZXFWmQWT6eYtE9VNdRP6qMrHBucDJjARkEs2DExP_ArZizJeAp5QBwudXo7TpSYD3j3ZpW6OTJm-vTe5g",
    },
    {
      id: 5,
      name: "5. Conclusie",
      slug: "conclusie",
      image:
        "http://www.educatie21.nl/wp-content/uploads/2017/05/conclusion.jpg",
    },
  ]);
};
