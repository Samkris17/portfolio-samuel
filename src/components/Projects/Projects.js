import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SiVaBe from "../../Assets/Projects/dashboardmhs.png";
import kpop from "../../Assets/Projects/KPopStore.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project <strong className="purple">Terkini Saya </strong>
        </h1>
        <p style={{ color: "white" }}>
          Disini adalah beberapa project terkini saya :
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SiVaBe}
              isBlog={false}
              title="SiVaBe"
              description="SiVaBe adalah sistem validasi beasiswa pengembangan dari sistem sebelumnya. Sistem ini bertujuan untuk mempermudah dan mempercepat proses validasi beasiswa, serta meningkatkan akurasi data."
              ghLink="https://github.com/Samkris17/SiVaBe"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kpop}
              isBlog={false}
              title="K-Pop E-Commerce"
              description="Selamat datang di Kpop-Ecommerce, destinasi utama Anda untuk semua kebutuhan belanja Kpop! Kami adalah platform e-commerce yang didedikasikan untuk penggemar Kpop di seluruh dunia, menawarkan berbagai produk resmi dan eksklusif dari artis dan grup favorit Anda."
              ghLink="https://github.com/Samkris17/kpop-ecommerce"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
