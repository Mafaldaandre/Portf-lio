import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Container, Form, Input, Label } from "./style";
import { MouseTrail } from "../MouseTrail";
export const Footer: React.FC = () => {
  const [state, handleSubmit] = useForm("xbjnpzpz");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Container>
      {" "}
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Nome:</Label>
        <Input
          id="name"
          type="name"
          name="name"
          placeholder="Digite o seu nome"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />

        <Label htmlFor="phone">Telemóvel:</Label>
        <Input
          id="phone"
          type="phone"
          name="phone"
          placeholder="Digite o seu número de telemóvel"
        />
        <ValidationError
          prefix="contact"
          field="contact"
          errors={state.errors}
        />

        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="Digite o seu email"
        />
        <ValidationError prefix="email" field="email" errors={state.errors} />

        <Label htmlFor="message">Mensagem:</Label>
        <textarea
          id="message"
          name="message"
          placeholder="Digite a sua mensagem"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </Form>
    </Container>
  );
};
