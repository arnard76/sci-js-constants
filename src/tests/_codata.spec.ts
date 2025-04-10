import { describe, expect, test } from "vitest";
import {
  unit,
  find,
  value,
  // ConstantDeprecatedWarning,
  exact_values,
} from "_codata";

describe("codata", () => {
  test("find", () => {
    let keys = find("weak mixing", false);
    expect(keys).toEqual(["weak mixing angle"]);
    keys = find("qwertyuiop", false);
    expect(keys).toEqual([]);
    keys = find("natural unit", false);
    expect(keys).toEqual(
      [
        "natural unit of velocity",
        "natural unit of action",
        "natural unit of action in eV s",
        "natural unit of mass",
        "natural unit of energy",
        "natural unit of energy in MeV",
        "natural unit of momentum",
        "natural unit of momentum in MeV/c",
        "natural unit of length",
        "natural unit of time",
      ].sort((a, b) => (a < b ? -1 : 1))
    );
  });

  // i don't think this test adds any value
  // test("basic_table_parse", () => {
  // c_s = 'speed of light in vacuum'
  //     assert_equal(value(c_s), c)
  //     assert_equal(value(c_s), speed_of_light)
  // });

  test("basic_lookup", () => {
    const constantName = "speed of light in vacuum";
    expect(`${value(constantName)} ${unit(constantName)}`).toEqual(
      "299792458 m s^-1"
    );
  });

  test("find_all", () => {
    expect(find()?.length).toBeGreaterThan(300);
  });

  test("find_single", () => {
    const result = find("Wien freq", false);
    if (!result) throw Error("Result is not a list");
    expect(result[0]).toEqual("Wien frequency displacement law constant");
  });

  test("2002_vs_2006", () => {
    expect(value("magn. flux quantum")).toBeCloseTo(value("mag. flux quantum"));
  });

  test("exact_values", () => {
    //     # Check that updating stored values with exact ones worked.
    //     with suppress_warnings() as sup:
    //         sup.filter(ConstantDeprecatedWarning)
    for (const key in exact_values) {
      expect((exact_values[key][0] - value(key)) / value(key)).toEqual(0);
    }
  });
});
