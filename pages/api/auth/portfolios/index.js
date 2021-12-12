// import PortfolioApi from '@/lib/api/portfolios';

// export default async function createPortfolio(req, res) {
//   try {
//     const data = req.body;
//     await new PortfolioApi().createPortfolio(data);
//     return res.json({message: 'Portfolio was created!'});
//   } catch(e) {
//     console.log('good')
//     return res.status(e.status || 400).end(e.message);
//   }
// }

import PortfolioApi from "@/lib/api/portfolios";

export default async function createPortfolio(req, res) {
  try {
    const data = req.body;
    const json = await new PortfolioApi().createPortfolio(data);
    return res.json(json.data);
  } catch (e) {
    return res.status(e.status || 422).json(e.response.data);
  }
}
