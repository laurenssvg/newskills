// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      id: 1,
      name: "1. Doelen",
      slug: "doelen",
      image:
        "https://dyllifedesign.nl/wp-content/uploads/2018/12/Goals-step-by-step.jpg",
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
      name: "3. Resultaten en inzichten",
      slug: "resultaten",
      image:
        "https://media.istockphoto.com/vectors/stage-curtains-vector-id479280419?k=6&m=479280419&s=170667a&w=0&h=xiXuBBHa42uqcelAEA09MDC7NRvbXXEooaKlnQhplAc=",
    },
    {
      id: 4,
      name: "4. Afsluiting",
      slug: "afsluiting",
      image:
        "http://www.educatie21.nl/wp-content/uploads/2017/05/conclusion.jpg",
    },
  ]);
};
