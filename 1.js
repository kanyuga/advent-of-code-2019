const arr = [125860,
    66059,
    147392,
    64447,
    72807,
    136018,
    144626,
    68233,
    130576,
    92645,
    52805,
    79642,
    74361,
    98270,
    110796,
    62578,
    58421,
    125079,
    52683,
    144885,
    148484,
    113638,
    125026,
    112534,
    125479,
    51539,
    122007,
    60048,
    67923,
    76115,
    144822,
    115991,
    133505,
    85249,
    142441,
    90211,
    87022,
    68196,
    117577,
    58112,
    116865,
    108253,
    127674,
    93302,
    58817,
    126794,
    89824,
    134386,
    99700,
    125855,
    119753,
    64456,
    68167,
    88047,
    127864,
    146890,
    71912,
    128375,
    134365,
    91544,
    104179,
    84700,
    95937,
    78409,
    94604,
    130423,
    98348,
    87489,
    105103,
    94794,
    123723,
    134298,
    88283,
    59543,
    53645,
    89325,
    109301,
    143668,
    96250,
    130371,
    140436,
    95857,
    98543,
    91372,
    137056,
    142578,
    116185,
    96588,
    93025,
    122275,
    99201,
    110492,
    109700,
    106755,
    120979,
    60957,
    134983,
    130840,
    132329,
    65057];

const fuelAdder = (val) => {
    let fuelCost = Math.floor(val/3) - 2;
    if (fuelCost > 8) {
        fuelCost += fuelAdder(fuelCost);
    }
    return fuelCost;
};

console.log(arr.reduce((p, c) => {
    return p + fuelAdder(c);
}, 0));
