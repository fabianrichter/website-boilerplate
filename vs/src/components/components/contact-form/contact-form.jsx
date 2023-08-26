import Input from "@/components/forms/input";
import { Col, Container, Row } from "@/components/layout";
import { strapiUrl } from "@/config";
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const nameInput = useRef();
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const submitForm = () => {
    console.log(nameInput.current.value);

    const formData = JSON.stringify({
      formName: "contact",
      formData: {
        name: nameInput.current.value,
      },
    });

    fetch(strapiUrl + "/api/ezforms/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formData,
    }).then((res) => {
      console.log(res);
      switch (res.status) {
        case 200:
          setSuccess(true);
          setMessage("Form successfully sent.");
          setError(false);
          return;
        default:
          setSuccess(false);
          setMessage(res.message);
          setError(true);
          return;
      }
    });
  };

  // replace form with success message if sending was successfull
  if (success) {
    return (
      <section>
        <Container>
          <Row>
            <Col col="12">
              <p>Thanks for your message.</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // render form
  return (
    <section>
      <Container>
        <Row>
          <Col col="12">
            <input type="text" ref={nameInput} />
            <button onClick={submitForm}>Submit</button>
          </Col>
        </Row>
        {/* render error, if error was thrown */}
        {error && message && (
          <Row>
            <Col col="12">
              <p>{message}</p>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default ContactForm;
