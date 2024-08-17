import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hallo semuanya, Saya <span className="purple">Samuel Wahyu Kristianto </span>
            dari <span className="purple"> Grobogan, Indonesia.</span>
            <br />
            Saya lulusan baru bidang Komputer, Program studi Sistem Informasi
            <br />
            Saya telah menyelesaikan gelar Sarjana Ilmu Komputer di Universitas Katolik Soegijapranata Semarang
            <br />
            <br />
            Selain coding, ada beberapa aktivitas lain yang saya suka lakukan!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Konten Kreator VTuber
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Imagination thrives in the dark. I'm ready to make magic happen."{" "}
          </p>
          <footer className="blockquote-footer">Samuel Wahyu K</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
