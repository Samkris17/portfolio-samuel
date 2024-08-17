import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BIARKAN <span className="purple"> SAYA </span> MEMPERKENALKAN DIRI
            </h1>
            <p className="home-about-body">
            Pemrograman adalah candu! Setiap kali menemukan solusi untuk sebuah masalah, rasanya seperti memecahkan sebuah teka-teki yang rumit. 
            Saya tidak sabar untuk terus menggali lebih dalam dunia ini!
              <br />
              <br />Saya fasih dalam bahasa pemrograman seperti
              <i>
                <b className="purple"> PHP, Javascript and JAVA. </b>
              </i>
              <br />
              <br />
              Saya sedang aktif mengeksplorasi berbagai bidang minat baru &nbsp;
              <i>
                <b className="purple">Web Teknologi dan teknologi lainnya </b> yang
                saling berkaitan atau relevan.
              </i>
              <br />
              <br />
              Jika memungkinkan, saya juga menerapkan passion saya untuk mengembangkan produk
              dengan <b className="purple">Node.js</b> dan
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library dan Frameworks
                </b>
              </i>
              &nbsp; seperti
              <i>
                <b className="purple"> React.js dan yang lainnya</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TEMUKAN SAYA DI..</h1>
            <p>
            Jangan ragu untuk <span className="purple">terhubung </span>dengan saya
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Samkris17"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/samuel-wahyu-kristianto-310295198/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/krist_19"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
