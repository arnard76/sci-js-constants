import * as sc from "_constants";
import { describe, test, expect } from "vitest";
// from numpy.testing import assert_equal, assert_allclose

describe("constants", () => {
  test("convert_temperature", () => {
    expect(sc.convert_temperature(32, "f", "Celsius")).toEqual(0);
    expect(sc.convert_temperature([0, 0], "celsius", "Kelvin")).toEqual([
      273.15, 273.15,
    ]);
    expect(sc.convert_temperature([0, 0], "kelvin", "c")).toEqual([
      -273.15, -273.15,
    ]);
    expect(sc.convert_temperature([32, 32], "f", "k")).toEqual([
      273.15, 273.15,
    ]);
    expect(sc.convert_temperature([273.15, 273.15], "kelvin", "F")).toEqual([
      32, 32,
    ]);
    expect(sc.convert_temperature([0, 0], "C", "fahrenheit")).toEqual([32, 32]);
    // assert_allclose(
    // 	sc.convert_temperature([0, 0], 'c', 'r'),
    // 	[491.67, 491.67],
    // 	(rtol = 0),
    // 	(atol = 1e-13)
    // );
    // assert_allclose(
    // 	sc.convert_temperature([491.67, 491.67], 'Rankine', 'C'),
    // 	[0, 0],
    // 	(rtol = 0),
    // 	(atol = 1e-13)
    // );
    // assert_allclose(
    // 	sc.convert_temperature([491.67, 491.67], 'r', 'F'),
    // 	[32, 32],
    // 	(rtol = 0),
    // 	(atol = 1e-13)
    // );
    // assert_allclose(
    // 	sc.convert_temperature([32, 32], 'fahrenheit', 'R'),
    // 	[491.67, 491.67],
    // 	(rtol = 0),
    // 	(atol = 1e-13)
    // );
    // assert_allclose(
    // 	sc.convert_temperature([273.15, 273.15], 'K', 'R'),
    // 	[491.67, 491.67],
    // 	(rtol = 0),
    // 	(atol = 1e-13)
    // );
    // assert_allclose(
    // 	sc.convert_temperature([491.67, 0], 'rankine', 'kelvin'),
    // 	[273.15, 0],
    // 	(rtol = 0),
    // 	(atol = 1e-13)
    // );
  });

  test("lambda_to_nu", () => {
    expect(sc.lambda2nu([sc.speed_of_light, 1])).toEqual([
      1,
      sc.speed_of_light,
    ]);
  });

  test("nu_to_lambda", () => {
    expect(sc.nu2lambda([sc.speed_of_light, 1])).toEqual([
      1,
      sc.speed_of_light,
    ]);
  });
});
