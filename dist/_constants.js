"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.alpha = exports.gas_constant = exports.R = exports.elementary_charge = exports.e = exports.g = exports.gravitational_constant = exports.G = exports.hbar = exports.Planck = exports.h = exports.epsilon_0 = exports.mu_0 = exports.speed_of_light = exports.c = exports.yobi = exports.zebi = exports.exbi = exports.pebi = exports.tebi = exports.gibi = exports.mebi = exports.kibi = exports.quecto = exports.ronto = exports.yocto = exports.zepto = exports.atto = exports.femto = exports.pico = exports.nano = exports.micro = exports.milli = exports.centi = exports.deci = exports.deka = exports.hecto = exports.kilo = exports.mega = exports.giga = exports.tera = exports.peta = exports.exa = exports.zetta = exports.yotta = exports.ronna = exports.quetta = exports.golden_ratio = exports.golden = exports.pi = void 0;
exports.mil = exports.mile = exports.yard = exports.foot = exports.inch = exports.Julian_year = exports.year = exports.week = exports.day = exports.hour = exports.minute = exports.arcsecond = exports.arcsec = exports.arcminute = exports.arcmin = exports.degree = exports.atomic_mass = exports.m_u = exports.u = exports.neutron_mass = exports.m_n = exports.proton_mass = exports.m_p = exports.electron_mass = exports.m_e = exports.carat = exports.troy_pound = exports.troy_ounce = exports.short_ton = exports.long_ton = exports.stone = exports.ounce = exports.oz = exports.slug = exports.slinch = exports.blob = exports.pound = exports.lb = exports.grain = exports.metric_ton = exports.gram = exports.Rydberg = exports.Wien = exports.Stefan_Boltzmann = exports.sigma = exports.Boltzmann = exports.k = exports.Avogadro = exports.N_A = exports.fine_structure = void 0;
exports.dyn = exports.horsepower = exports.hp = exports.ton_TNT = exports.Btu_IT = exports.Btu = exports.Btu_th = exports.erg = exports.calorie_IT = exports.calorie_th = exports.calorie = exports.electron_volt = exports.eV = exports.degree_Fahrenheit = exports.zero_Celsius = exports.knot = exports.speed_of_sound = exports.mach = exports.mph = exports.kmh = exports.fluid_ounce_imp = exports.gallon_imp = exports.barrel = exports.bbl = exports.fluid_ounce_US = exports.fluid_ounce = exports.gallon_US = exports.gallon = exports.liter = exports.litre = exports.acre = exports.hectare = exports.psi = exports.mmHg = exports.torr = exports.bar = exports.atmosphere = exports.atm = exports.parsec = exports.light_year = exports.astronomical_unit = exports.au = exports.micron = exports.angstrom = exports.fermi = exports.nautical_mile = exports.survey_mile = exports.survey_foot = exports.point = exports.pt = void 0;
exports.kilogram_force = exports.kgf = exports.pound_force = exports.lbf = exports.dyne = void 0;
exports.convert_temperature = convert_temperature;
exports.lambda2nu = lambda2nu;
exports.nu2lambda = nu2lambda;
const _codata_1 = require("./_codata");
exports.pi = Math.PI;
exports.golden = (1 + Math.sqrt(5)) / 2;
exports.golden_ratio = exports.golden;
exports.quetta = 1e30;
exports.ronna = 1e27;
exports.yotta = 1e24;
exports.zetta = 1e21;
exports.exa = 1e18;
exports.peta = 1e15;
exports.tera = 1e12;
exports.giga = 1e9;
exports.mega = 1e6;
exports.kilo = 1e3;
exports.hecto = 1e2;
exports.deka = 1e1;
exports.deci = 1e-1;
exports.centi = 1e-2;
exports.milli = 1e-3;
exports.micro = 1e-6;
exports.nano = 1e-9;
exports.pico = 1e-12;
exports.femto = 1e-15;
exports.atto = 1e-18;
exports.zepto = 1e-21;
exports.yocto = 1e-24;
exports.ronto = 1e-27;
exports.quecto = 1e-30;
exports.kibi = 2 ** 10;
exports.mebi = 2 ** 20;
exports.gibi = 2 ** 30;
exports.tebi = 2 ** 40;
exports.pebi = 2 ** 50;
exports.exbi = 2 ** 60;
exports.zebi = 2 ** 70;
exports.yobi = 2 ** 80;
exports.c = (0, _codata_1.value)('speed of light in vacuum');
exports.speed_of_light = exports.c;
exports.mu_0 = (0, _codata_1.value)('vacuum mag. permeability');
exports.epsilon_0 = (0, _codata_1.value)('vacuum electric permittivity');
exports.h = (0, _codata_1.value)('Planck constant');
exports.Planck = exports.h;
exports.hbar = exports.h / (2 * exports.pi);
exports.G = (0, _codata_1.value)('Newtonian constant of gravitation');
exports.gravitational_constant = exports.G;
exports.g = (0, _codata_1.value)('standard acceleration of gravity');
exports.e = (0, _codata_1.value)('elementary charge');
exports.elementary_charge = exports.e;
exports.R = (0, _codata_1.value)('molar gas constant');
exports.gas_constant = exports.R;
exports.alpha = (0, _codata_1.value)('fine-structure constant');
exports.fine_structure = exports.alpha;
exports.N_A = (0, _codata_1.value)('Avogadro constant');
exports.Avogadro = exports.N_A;
exports.k = (0, _codata_1.value)('Boltzmann constant');
exports.Boltzmann = exports.k;
exports.sigma = (0, _codata_1.value)('Stefan-Boltzmann constant');
exports.Stefan_Boltzmann = exports.sigma;
exports.Wien = (0, _codata_1.value)('Wien wavelength displacement law constant');
exports.Rydberg = (0, _codata_1.value)('Rydberg constant');
exports.gram = 1e-3;
exports.metric_ton = 1e3;
exports.grain = 64.79891e-6;
_a = new Array(2).fill(7000 * exports.grain), exports.lb = _a[0], exports.pound = _a[1];
exports.blob = (exports.pound * exports.g) / 0.0254;
exports.slinch = exports.blob;
exports.slug = exports.blob / 12;
exports.oz = exports.pound / 16;
exports.ounce = exports.oz;
exports.stone = 14 * exports.pound;
exports.long_ton = 2240 * exports.pound;
exports.short_ton = 2000 * exports.pound;
exports.troy_ounce = 480 * exports.grain;
exports.troy_pound = 12 * exports.troy_ounce;
exports.carat = 200e-6;
exports.m_e = (0, _codata_1.value)('electron mass');
exports.electron_mass = exports.m_e;
exports.m_p = (0, _codata_1.value)('proton mass');
exports.proton_mass = exports.m_p;
exports.m_n = (0, _codata_1.value)('neutron mass');
exports.neutron_mass = exports.m_n;
exports.u = (0, _codata_1.value)('atomic mass constant');
exports.m_u = exports.u;
exports.atomic_mass = exports.u;
exports.degree = exports.pi / 180;
exports.arcmin = exports.degree / 60;
exports.arcminute = exports.arcmin;
exports.arcsec = exports.arcmin / 60;
exports.arcsecond = exports.arcsec;
exports.minute = 60.0;
exports.hour = 60 * exports.minute;
exports.day = 24 * exports.hour;
exports.week = 7 * exports.day;
exports.year = 365 * exports.day;
exports.Julian_year = 365.25 * exports.day;
exports.inch = 0.0254;
exports.foot = 12 * exports.inch;
exports.yard = 3 * exports.foot;
exports.mile = 1760 * exports.yard;
exports.mil = exports.inch / 1000;
exports.pt = exports.inch / 72;
exports.point = exports.pt;
exports.survey_foot = 1200.0 / 3937;
exports.survey_mile = 5280 * exports.survey_foot;
exports.nautical_mile = 1852.0;
exports.fermi = 1e-15;
exports.angstrom = 1e-10;
exports.micron = 1e-6;
exports.au = 149597870700.0;
exports.astronomical_unit = exports.au;
exports.light_year = exports.Julian_year * exports.c;
exports.parsec = exports.au / exports.arcsec;
exports.atm = (0, _codata_1.value)('standard atmosphere');
exports.atmosphere = exports.atm;
exports.bar = 1e5;
exports.torr = exports.atm / 760;
exports.mmHg = exports.torr;
exports.psi = (exports.pound * exports.g) / (exports.inch * exports.inch);
exports.hectare = 1e4;
exports.acre = 43560 * exports.foot ** 2;
exports.litre = 1e-3;
exports.liter = exports.litre;
exports.gallon = 231 * exports.inch ** 3;
exports.gallon_US = exports.gallon;
exports.fluid_ounce = exports.gallon_US / 128;
exports.fluid_ounce_US = exports.fluid_ounce;
exports.bbl = 42 * exports.gallon_US;
exports.barrel = exports.bbl;
exports.gallon_imp = 4.54609e-3;
exports.fluid_ounce_imp = exports.gallon_imp / 160;
exports.kmh = 1e3 / exports.hour;
exports.mph = exports.mile / exports.hour;
exports.mach = 340.5;
exports.speed_of_sound = exports.mach;
exports.knot = exports.nautical_mile / exports.hour;
exports.zero_Celsius = 273.15;
exports.degree_Fahrenheit = 1 / 1.8;
exports.eV = exports.elementary_charge;
exports.electron_volt = exports.eV;
exports.calorie = 4.184;
exports.calorie_th = exports.calorie;
exports.calorie_IT = 4.1868;
exports.erg = 1e-7;
exports.Btu_th = (exports.pound * exports.degree_Fahrenheit * exports.calorie_th) / exports.gram;
exports.Btu = (exports.pound * exports.degree_Fahrenheit * exports.calorie_IT) / exports.gram;
exports.Btu_IT = exports.Btu;
exports.ton_TNT = 1e9 * exports.calorie_th;
exports.hp = 550 * exports.foot * exports.pound * exports.g;
exports.horsepower = exports.hp;
exports.dyn = 1e-5;
exports.dyne = exports.dyn;
exports.lbf = exports.pound * exports.g;
exports.pound_force = exports.lbf;
exports.kgf = exports.g;
exports.kilogram_force = exports.g;
function convert_temperature(val, old_scale, new_scale) {
    let results;
    old_scale = old_scale.toLowerCase();
    new_scale = new_scale.toLowerCase();
    const vals = typeof val === 'number' ? [val] : val;
    if (['celsius', 'c'].includes(old_scale)) {
        results = vals.map((val) => val + exports.zero_Celsius);
    }
    else if (['kelvin', 'k'].includes(old_scale)) {
        results = vals;
    }
    else if (['fahrenheit', 'f'].includes(old_scale)) {
        results = vals.map((val) => ((val - 32) * 5) / 9 + exports.zero_Celsius);
    }
    else if (['rankine', 'r'].includes(old_scale)) {
        results = vals.map((val) => (val * 5) / 9);
    }
    else {
        throw Error(`${old_scale} scale is unsupported: supported scales are Celsius, Kelvin, Fahrenheit, and Rankine`);
    }
    if (['celsius', 'c'].includes(new_scale)) {
        results = results.map((val) => val - exports.zero_Celsius);
    }
    else if (['kelvin', 'k'].includes(new_scale)) {
    }
    else if (['fahrenheit', 'f'].includes(new_scale)) {
        results = results.map((val) => ((val - exports.zero_Celsius) * 9) / 5 + 32);
    }
    else if (['rankine', 'r'].includes(new_scale)) {
        results = results.map((val) => (val * 9) / 5);
    }
    else {
        throw Error(`${new_scale} scale is unsupported: supported scales are Celsius, Kelvin, Fahrenheit, and Rankine`);
    }
    return typeof val === 'number' ? results[0] : results;
}
function lambda2nu(lambda_) {
    const vals = typeof lambda_ === 'number' ? [lambda_] : lambda_;
    const results = vals.map((val) => exports.c / val);
    return typeof lambda_ === 'number' ? results[0] : results;
}
function nu2lambda(nu) {
    const vals = typeof nu === 'number' ? [nu] : nu;
    const results = vals.map((val) => exports.c / val);
    return typeof nu === 'number' ? results[0] : results;
}
