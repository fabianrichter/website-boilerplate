"use client";

import Input from '@/components/forms/input';
import { Col, Container, Row } from '@/components/layout';
import { useMutation } from '@apollo/client';
import React, { useRef, useState } from 'react';
import { CreateContactSubmission } from './create-contact-submission.gql';
import styles from './contact-form.module.scss';
import Button from '@/components/ui/button/button';
import { apolloClient } from '@/app/apollo-client';

const ContactForm = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();

  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const [
    createSubmission,
    { loading: mutationLoading, error: mutationError, data: mutationResponse },
  ] = useMutation(CreateContactSubmission, {
    client: apolloClient
  });

  const validateForm = () => {
    let error = false;

    /* Test email with RFC 5322 */
    if (
      !emailInput.current.value.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g
      )
    ) {
      setEmailError(true);
      error = true;
    }

    /* Test message input */
    if (messageInput.current.value.length === 0) {
      setMessageError(true);
    }

    if (error) return false;
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();

    const inputIsValid = validateForm();
    if (!inputIsValid) return;

    const formData = {
      contactName: nameInput.current.value,
      emailAddress: emailInput.current.value,
      msgBody: messageInput.current.value,
    };

    createSubmission({
      variables: formData,
    });
  };

  const setMessageHeight = () => {
    messageInput.current.style.height = '';
    messageInput.current.style.height = messageInput.current.scrollHeight - 4 + 'px';
  };

  if (mutationLoading) {
    return (
      <section>
        <Container>
          <Row>
            <Col col="12">
              <p>Submitting...</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  if (mutationError) {
    console.log(mutationError);
    return (
      <section>
        <Container>
          <Row>
            <Col col="12">
              <p>Submission error! {mutationError.message}</p>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  // replace form with success message if sending was successfull
  if (mutationResponse) {
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
        <form>
          <Row>
            <Col col="12" lg="8" shiftLg="2">
              <Row>
                <Col col="6">
                  <div className={styles['form-group']}>
                    <label>Name</label>
                    <input type="text" ref={nameInput} placeholder="Name" />
                  </div>
                </Col>
                <Col col="6">
                  <div className={styles['form-group']}>
                    <label>Email</label>
                    <input type="email" ref={emailInput} placeholder="E-Mail*" />
                    {emailError && (
                      <small className={styles.error}>
                        Bitte geben Sie eine valide E-Mail-Adresse an.
                      </small>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col col="12">
                  <div className={styles['form-group']}>
                    <label>Message</label>
                    <textarea
                      type="text"
                      ref={messageInput}
                      onInput={setMessageHeight}
                      placeholder="Nachricht*"
                    />
                    {messageError && (
                      <small className={styles.error}>Bitte schildern Sie Ihr anliegen.</small>
                    )}
                  </div>
                </Col>
              </Row>
              <Row>
                <Col col="12">
                  <Button native onClick={submitForm}>Senden</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </form>
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
