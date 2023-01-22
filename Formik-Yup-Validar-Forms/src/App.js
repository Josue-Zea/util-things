import React from 'react';
import { Container, Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from "yup";

export const App = () => {
  const { handleChange, handleSubmit, values, resetForm, errors } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repitPassword: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string().email("No es un email valido").required("El email es obligatorio"),
      password: Yup.string().required("La contraseña es obligatorio").oneOf([Yup.ref("repitPassword")], "La contraseñas no coinciden"),
      repitPassword: Yup.string().required("La contraseña es obligatorio")
    }),
    onSubmit: (formData) => {
      console.log(formData);
      resetForm();
    }
  });

  const { name, email, password, repitPassword } = values;
  const { name: nameE, email:emailE , password: passwordE, repitPassword: repitPasswordE } = errors;

  return (
    <Container
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh"
      }}
    >
      <h1>Formulario de registro</h1>
      <Form style={{ width: "30%" }} onSubmit={handleSubmit}>
        <Form.Input 
          type="text" 
          placeholder="Nombre y apellidos"
          name="name" 
          onChange={handleChange}
          value={name}
          error={ nameE }
        />
        <Form.Input 
          type="text" 
          placeholder="Correo electrónico"
          name="email" 
          onChange={handleChange}
          value={email}
          error={ emailE }
        />
        <Form.Input 
          type="password" 
          placeholder="Contraseña"
          name="password" 
          onChange={handleChange}
          value={password}
          error={ passwordE }
        />
        <Form.Input 
          type="password" 
          placeholder="Repetir contraseña"
          name="repitPassword" 
          onChange={handleChange}
          value={repitPassword}
          error={ repitPasswordE }
        />
        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  )
};
