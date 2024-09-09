import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  var date = new Date();
  var year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/"
          className="f"
        >
          <span>
            <i class="fab fa-github"></i>
          </span>{" "}
          github
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/"
          className="f"
        >
          <span>
            <i class="fab fa-linkedin"></i>
          </span>{" "}
          linkedin
        </a>
        <div>Copywrite © {year}</div>
        <div>
          created by{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/"
            className="f"
          >
            @Developer
          </a>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
