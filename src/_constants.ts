/**
Collection of physical constants and conversion factors.

Most constants are in SI units, so you can do
print '10 mile per minute is', 10*mile/minute, 'm/s or', 10*mile/(minute*knot), 'knots'

The list is not meant to be comprehensive, but just convenient for everyday use.
*/

import { value as _cd } from './_codata';

/**
BasSw 2006
physical constants: imported from CODATA
unit conversion: see e.g., NIST special publication 811
Use at own risk: double-check values before calculating your Mars orbit-insertion burn.
Some constants exist in a few variants, which are marked with suffixes.
The ones without any suffix should be the most common ones.
*/

// mathematical constants
export const pi = Math.PI;
export const golden = (1 + Math.sqrt(5)) / 2;
export const golden_ratio = golden;

// SI prefixes
export const quetta = 1e30;
export const ronna = 1e27;
export const yotta = 1e24;
export const zetta = 1e21;
export const exa = 1e18;
export const peta = 1e15;
export const tera = 1e12;
export const giga = 1e9;
export const mega = 1e6;
export const kilo = 1e3;
export const hecto = 1e2;
export const deka = 1e1;
export const deci = 1e-1;
export const centi = 1e-2;
export const milli = 1e-3;
export const micro = 1e-6;
export const nano = 1e-9;
export const pico = 1e-12;
export const femto = 1e-15;
export const atto = 1e-18;
export const zepto = 1e-21;
export const yocto = 1e-24;
export const ronto = 1e-27;
export const quecto = 1e-30;

// binary prefixes
export const kibi = 2 ** 10;
export const mebi = 2 ** 20;
export const gibi = 2 ** 30;
export const tebi = 2 ** 40;
export const pebi = 2 ** 50;
export const exbi = 2 ** 60;
export const zebi = 2 ** 70;
export const yobi = 2 ** 80;

// physical constants
export const c = _cd('speed of light in vacuum');
export const speed_of_light = c;
export const mu_0 = _cd('vacuum mag. permeability');
export const epsilon_0 = _cd('vacuum electric permittivity');
export const h = _cd('Planck constant');
export const Planck = h;
export const hbar = h / (2 * pi);
export const G = _cd('Newtonian constant of gravitation');
export const gravitational_constant = G;
export const g = _cd('standard acceleration of gravity');
export const e = _cd('elementary charge');
export const elementary_charge = e;
export const R = _cd('molar gas constant');
export const gas_constant = R;
export const alpha = _cd('fine-structure constant');
export const fine_structure = alpha;
export const N_A = _cd('Avogadro constant');
export const Avogadro = N_A;
export const k = _cd('Boltzmann constant');
export const Boltzmann = k;
export const sigma = _cd('Stefan-Boltzmann constant');
export const Stefan_Boltzmann = sigma;
export const Wien = _cd('Wien wavelength displacement law constant');
export const Rydberg = _cd('Rydberg constant');

// mass in kg
export const gram = 1e-3;
export const metric_ton = 1e3;
export const grain = 64.79891e-6;
export const [lb, pound] = new Array(2).fill(7000 * grain); // avoirdupois
export const blob = (pound * g) / 0.0254; // lbf*s**2/in (added in 1.0.0)
export const slinch = blob;
export const slug = blob / 12; // lbf*s**2/foot (added in 1.0.0)
export const oz = pound / 16;
export const ounce = oz;
export const stone = 14 * pound;
export const long_ton = 2240 * pound;
export const short_ton = 2000 * pound;

export const troy_ounce = 480 * grain; // only for metals / gems
export const troy_pound = 12 * troy_ounce;
export const carat = 200e-6;

export const m_e = _cd('electron mass');
export const electron_mass = m_e;
export const m_p = _cd('proton mass');
export const proton_mass = m_p;
export const m_n = _cd('neutron mass');
export const neutron_mass = m_n;
export const u = _cd('atomic mass constant');
export const m_u = u;
export const atomic_mass = u;

// angle in rad
export const degree = pi / 180;
export const arcmin = degree / 60;
export const arcminute = arcmin;
export const arcsec = arcmin / 60;
export const arcsecond = arcsec;

// time in second
export const minute = 60.0;
export const hour = 60 * minute;
export const day = 24 * hour;
export const week = 7 * day;
export const year = 365 * day;
export const Julian_year = 365.25 * day;

// length in meter
export const inch = 0.0254;
export const foot = 12 * inch;
export const yard = 3 * foot;
export const mile = 1760 * yard;
export const mil = inch / 1000;
export const pt = inch / 72; // typography
export const point = pt;
export const survey_foot = 1200.0 / 3937;
export const survey_mile = 5280 * survey_foot;
export const nautical_mile = 1852.0;
export const fermi = 1e-15;
export const angstrom = 1e-10;
export const micron = 1e-6;
export const au = 149597870700.0;
export const astronomical_unit = au;
export const light_year = Julian_year * c;
export const parsec = au / arcsec;

// pressure in pascal
export const atm = _cd('standard atmosphere');
export const atmosphere = atm;
export const bar = 1e5;
export const torr = atm / 760;
export const mmHg = torr;
export const psi = (pound * g) / (inch * inch);

// area in meter**2
export const hectare = 1e4;
export const acre = 43560 * foot ** 2;

// volume in meter**3
export const litre = 1e-3;
export const liter = litre;
export const gallon = 231 * inch ** 3; // US
export const gallon_US = gallon;
// pint = gallon_US / 8
export const fluid_ounce = gallon_US / 128;
export const fluid_ounce_US = fluid_ounce;
export const bbl = 42 * gallon_US; // for oil
export const barrel = bbl;

export const gallon_imp = 4.54609e-3; // UK
export const fluid_ounce_imp = gallon_imp / 160;

// speed in meter per second
export const kmh = 1e3 / hour;
export const mph = mile / hour;
// approx value of mach at 15 degrees in 1 atm. Is this a common value?
export const mach = 340.5;
export const speed_of_sound = mach;
export const knot = nautical_mile / hour;

// temperature in kelvin
export const zero_Celsius = 273.15;
export const degree_Fahrenheit = 1 / 1.8; // only for differences

// energy in joule
export const eV = elementary_charge; // * 1 Volt
export const electron_volt = eV;
export const calorie = 4.184;
export const calorie_th = calorie;
export const calorie_IT = 4.1868;
export const erg = 1e-7;
export const Btu_th = (pound * degree_Fahrenheit * calorie_th) / gram;
export const Btu = (pound * degree_Fahrenheit * calorie_IT) / gram;
export const Btu_IT = Btu;
export const ton_TNT = 1e9 * calorie_th;
// Wh = watt_hour

// power in watt
export const hp = 550 * foot * pound * g;
export const horsepower = hp;

// force in newton
export const dyn = 1e-5;
export const dyne = dyn;
export const lbf = pound * g;
export const pound_force = lbf;
export const kgf = g; // * 1 kg
export const kilogram_force = g;

// functions for conversions that are not linear

/**
    Convert from a temperature scale to another one among Celsius, Kelvin,
    Fahrenheit, and Rankine scales.

    Parameters
    ----------
    val : a single number or an array of numbers
        Value(s) of the temperature(s) to be converted expressed in the
        original scale.
    old_scale : string
        Specifies as a string the original scale from which the temperature
        value(s) will be converted. Supported scales are Celsius ('Celsius',
        'celsius', 'C' or 'c'), Kelvin ('Kelvin', 'kelvin', 'K', 'k'),
        Fahrenheit ('Fahrenheit', 'fahrenheit', 'F' or 'f'), and Rankine
        ('Rankine', 'rankine', 'R', 'r').
    new_scale : string
        Specifies as a string the new scale to which the temperature
        value(s) will be converted. Supported scales are Celsius ('Celsius',
        'celsius', 'C' or 'c'), Kelvin ('Kelvin', 'kelvin', 'K', 'k'),
        Fahrenheit ('Fahrenheit', 'fahrenheit', 'F' or 'f'), and Rankine
        ('Rankine', 'rankine', 'R', 'r').

    Returns
    -------
    res : float or array of floats
        Value(s) of the converted temperature(s) expressed in the new scale.

    Notes
    -----
    .. versionadded:: 0.18.0

    Examples
    --------
    Take a look at the [tests](./tests/_constants.spec.ts)

     */

export function convert_temperature(
	val: number | number[],
	old_scale: string,
	new_scale: string
): number | number[] {
	let results: number | number[];
	old_scale = old_scale.toLowerCase();
	new_scale = new_scale.toLowerCase();
	const vals = typeof val === 'number' ? [val] : val;

	// Convert from `old_scale` to Kelvin
	if (['celsius', 'c'].includes(old_scale)) {
		results = vals.map((val) => val + zero_Celsius);
	} else if (['kelvin', 'k'].includes(old_scale)) {
		results = vals;
	} else if (['fahrenheit', 'f'].includes(old_scale)) {
		results = vals.map((val) => ((val - 32) * 5) / 9 + zero_Celsius);
	} else if (['rankine', 'r'].includes(old_scale)) {
		results = vals.map((val) => (val * 5) / 9);
	} else {
		throw Error(
			`${old_scale} scale is unsupported: supported scales are Celsius, Kelvin, Fahrenheit, and Rankine`
		);
	}

	// and from Kelvin to `new_scale`.
	if (['celsius', 'c'].includes(new_scale)) {
		results = results.map((val) => val - zero_Celsius);
	} else if (['kelvin', 'k'].includes(new_scale)) {
		// results are already in kelvin
	} else if (['fahrenheit', 'f'].includes(new_scale)) {
		results = results.map((val) => ((val - zero_Celsius) * 9) / 5 + 32);
	} else if (['rankine', 'r'].includes(new_scale)) {
		results = results.map((val) => (val * 9) / 5);
	} else {
		throw Error(
			`${new_scale} scale is unsupported: supported scales are Celsius, Kelvin, Fahrenheit, and Rankine`
		);
	}

	return typeof val === 'number' ? results[0] : results;
}

// optics

export function lambda2nu(lambda_: number | number[]): number | number[] {
	/** 
    Convert wavelength to optical frequency

    Parameters
    ----------
    lambda_ : array_like
        Wavelength(s) to be converted.

    Returns
    -------
    nu : float or array of floats
        Equivalent optical frequency.

    Notes
    -----
    Computes ``nu = c / lambda`` where c = 299792458.0, i.e., the
    (vacuum) speed of light in meters/second.

    Examples
    --------
    Take a look at the [tests](./tests/_constants.spec.ts)

    */
	const vals = typeof lambda_ === 'number' ? [lambda_] : lambda_;
	const results = vals.map((val) => c / val);
	return typeof lambda_ === 'number' ? results[0] : results;
}

export function nu2lambda(nu: number | number[]): number | number[] {
	/**
    Convert optical frequency to wavelength.

    Parameters
    ----------
    nu : array_like
        Optical frequency to be converted.

    Returns
    -------
    lambda : float or array of floats
        Equivalent wavelength(s).

    Notes
    -----
    Computes ``lambda = c / nu`` where c = 299792458.0, i.e., the
    (vacuum) speed of light in meters/second.

    Examples
    --------
    Take a look at the [tests](./tests/_constants.spec.ts)

     */

	const vals = typeof nu === 'number' ? [nu] : nu;
	const results = vals.map((val) => c / val);
	return typeof nu === 'number' ? results[0] : results;
}
