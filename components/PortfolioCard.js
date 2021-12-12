import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";

const PortfolioCard = ({ portfolio, children }) => (
  <Card className="portfolio-card">
    <CardHeader className="portfolio-card-header">
      <span className="pr-2">NUME:</span>
      {portfolio.nume}
    </CardHeader>
    <CardBody>
      <CardTitle className="portfolio-card-title3">
        <span className="portfolio-card-title2 pr-2">Data:</span>
        {portfolio.startDate}
      </CardTitle>
      <CardTitle className="portfolio-card-title">
        <span className="pr-1">Pavilion:</span> {portfolio.pavilion}
      </CardTitle>
      <CardTitle className="portfolio-card-title">
        <span className="pr-1">etaj:</span> {portfolio.etaj}
      </CardTitle>
      <CardTitle className="portfolio-card-title">
        <span className="pr-1">camera:</span> {portfolio.camera}
      </CardTitle>
      <CardText className="portfolio-card-text">
        <h5 className="">
          Descriere problema <span>💥</span>{" "}
        </h5>
        {portfolio.descriere}
      </CardText>
      {children}
    </CardBody>
  </Card>
);

export default PortfolioCard;
