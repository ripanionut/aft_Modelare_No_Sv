import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";
import Image from 'next/image'

const roles = ["From", "Now", "To", "Forever"];
const roles2 = ["AFT", "E CEL", "MAI", "TARE"];
const Index = () => {
  const { data, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading} className="cover">
      <div className="main-section">
        <div className="background-image">
          <Image src="/images/background-index.png"
          alt="Picture of the author"
          width={2500} 
          height={1500} />

        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2>Road To Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Proiect Laborator Modelare si Simulate
                      </div>
                    </div>
                    <Image width={450}
                         height={600}
                          alt="Picture of the author"
        className="image"
         src="/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <Typed
                  loop={true}
                  typeSpeed={90}
                  backSpeed={70}
                  strings={roles2}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChat="|"
                />
                <h1>
                  Utilizarea optima a resurselor alocate si/sau atrase pentru
                  repararea si modernizarea bazei materiale a
                  invatamantului in corelatie cu necesitatile formative.
                </h1>
              </div>
              <Typed
                loop={true}
                typeSpeed={70}
                backSpeed={70}
                strings={roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChat="|"
              />
              <div className="hero-welcome-bio">
                <h1>Let s take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;
