const {
  somar,
  subtrair,
  multiplicar,
  dividir,
  porcentagem,
} = require("./calculadora");

test("deve somar dois números corretamente", () => {
  expect(somar(5, 3)).toBe(8);
});

test("deve subtrair dois números corretamente", () => {
  expect(subtrair(10, 4)).toBe(6);
});

test("deve multiplicar dois números corretamente", () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test("deve dividir dois números corretamente", () => {
  expect(dividir(9, 3)).toBe(3);
});

test("deve lançar erro ao dividir por zero", () => {
  expect(() => dividir(10, 0)).toThrow("Divisor não pode ser zero");
});

test("deve subtrair e ter um valor negativo", () => {
  expect(subtrair(10, 20)).toBe(-10);
});

test("deve extrair a porentagem de uma parte sobre o total", () => {
  expect(porcentagem(10, 100)).toBe(10);
});

test("somar: deve retornar NaN se um dos argumentos for undefined", () => {
  expect(somar(5, undefined)).toBeNaN();
  expect(somar(undefined, 5)).toBeNaN();
});

test("somar: deve tratar null como 0", () => {
  expect(somar(5, null)).toBe(5);
  expect(somar(null, 5)).toBe(5);
});

test("subtrair: deve retornar NaN se um dos argumentos for undefined", () => {
  expect(subtrair(10, undefined)).toBeNaN();
});

test("subtrair: deve tratar null como 0", () => {
  expect(subtrair(10, null)).toBe(10);
  expect(subtrair(null, 10)).toBe(-10);
});

test("multiplicar: deve retornar NaN se um dos argumentos for undefined", () => {
  expect(multiplicar(4, undefined)).toBeNaN();
});

test("multiplicar: deve tratar null como 0", () => {
  expect(multiplicar(4, null)).toBe(0);
});

test("dividir: deve retornar NaN se o dividendo for undefined", () => {
  expect(dividir(undefined, 5)).toBeNaN();
});

test("dividir: deve retornar Infinity se o divisor for null (coerção para 0)", () => {
  // Nota: null não é === 0, então ele passa pela verificação e é tratado como 0 na divisão.
  expect(dividir(10, null)).toBe(Infinity);
});
