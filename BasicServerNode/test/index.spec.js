const request = require('supertest');
const app = require('../index.js');
const variables = require("../config/config.js");
const sampleToken = variables.SAMPLE_TOKEN;

describe("GET /admin/estadio", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/estadio").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/arbitro", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/arbitro").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/competencia", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/competencia").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/equipo", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/equipo").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/incidencia", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/incidencia").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/noticia", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/noticia").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/pais", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/pais").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/partido", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/partido").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /admin/tecnico", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/admin/tecnico").send().set('Authorization', `Bearer ${sampleToken}`);;
    expect(response.statusCode).toBe(200);
  });
});

// describe("POST /auth/login", () => {
//   const inicioSesion = {
//     email: "test@d21jkp2s.mailosaur.net",
//     password: "Contrasenia1*"
//   }

//   test("deberia responder con true, porque está bien", async () => {
//     const response = await request(app).post("/auth/login").send(inicioSesion);
//     expect(response.body.status).toBe(true);
//   });

//   test("deberia responder con false, porque las credenciales están mal", async () => {
//     const incorrecto = {
//       ...inicioSesion,
//       password: "4567"
//     }

//     const response = await request(app).post("/auth/login").send(incorrecto);
//     expect(response.body.status).toBe(false);
//   });

// });

// describe("POST /auth/login", () => {
//   const inicioSesion = {
//     email: "test@d21jkp2s.mailosaur.net",
//     password: "Contrasenia1*"
//   }

//   test("deberia responder con true, porque está bien", async () => {
//     const response = await request(app).post("/auth/login").send(inicioSesion);
//     expect(response.body.status).toBe(true);
//   });

//   test("deberia responder con false, porque las credenciales están mal", async () => {
//     const incorrecto = {
//       ...inicioSesion,
//       password: "4567"
//     }

//     const response = await request(app).post("/auth/login").send(incorrecto);
//     expect(response.body.status).toBe(false);
//   });

// });

/*
describe("POST /asignar", () => {
  const asignacion = {
    id: 2,
    idEstudiante: 2,
    curso: "AyD1",
    seccion: "N",
    dia: "Lunes",
    hora: "11:00"
  }

  test("deberia responder con 200, porque está bien", async () => {
    const response = await request(app).post("/asignar").send(asignacion);
    expect(response.statusCode).toBe(200);
  });

  test("deberia indicar que no existe ese estudiante", async () => {
    const noExiste = {
      ...asignacion,
      id: 3,
      idEstudiante: 8
    }
    
    const response = await request(app).post("/asignar").send(noExiste);
    expect(response.text).toBe("\"Estudiante no existe\"");
  });


  test("deberia responder con 400, porque se repite la asignacion", async () => {
    const repetido = asignacion

    const response = await request(app).post("/asignar").send(repetido);
    expect(response.statusCode).toBe(400);
  });

});
*/

/**const inseguro = {
    email: "correodepruebaregistro@gmail.com",
    password: "nicklas",
    name: "Usuario dePrueba",
    type: 3,
    lastname: "Avila Test",
    phoneNumber: 12345678,
    photo: "",
    gender: "Hombre",
    address: "muy muy lejano 7ma calle lejos",
    contry: "Guatemala"
  }

  test("deberia responder con false, porque la contraseña no es segura", async () => {
    const response = await request(app).post("/auth/sign-up").send(inseguro);
    expect(response.body.status).toBe(false);
  });

  test("deberia responder con true, porque está bien", async () => {
    const seguro = {
      ...inseguro,
      password: "Contrasenia1*"
    }

    console.log(seguro)

    const response = await request(app).post("/auth/sign-up").send(seguro);
    console.log(response.body.status);
    expect(response.body.status).toBe(true);
  }); */