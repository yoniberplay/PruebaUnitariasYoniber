const request = require("supertest");
const app = require("./app");

test("se espera un saludo", (done) => {
  request(app)
    .get("/")
    .expect(200)
    .expect("Hola, soy Yoniber Encarnacion Haciendo pruebas unitarias.")
    .end((err) => {
      if (err) return done(err);
      done();
    });
});

afterAll((done) => {
  app.close(() => {
    done();
  });
});
