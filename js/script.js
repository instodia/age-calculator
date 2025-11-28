(function (_0x25eccd, _0x33493f) {
  const _0x3cc52b = _0x1261,
    _0x2f98a5 = _0x25eccd();
  while (!![]) {
    try {
      const _0x29cc56 =
        (-parseInt(_0x3cc52b(0x14e)) / 0x1) *
          (-parseInt(_0x3cc52b(0x155)) / 0x2) +
        -parseInt(_0x3cc52b(0x162)) / 0x3 +
        -parseInt(_0x3cc52b(0x146)) / 0x4 +
        (-parseInt(_0x3cc52b(0x15f)) / 0x5) *
          (parseInt(_0x3cc52b(0x150)) / 0x6) +
        -parseInt(_0x3cc52b(0x163)) / 0x7 +
        (-parseInt(_0x3cc52b(0x164)) / 0x8) *
          (-parseInt(_0x3cc52b(0x15c)) / 0x9) +
        parseInt(_0x3cc52b(0x14b)) / 0xa;
      if (_0x29cc56 === _0x33493f) break;
      else _0x2f98a5["push"](_0x2f98a5["shift"]());
    } catch (_0x55e580) {
      _0x2f98a5["push"](_0x2f98a5["shift"]());
    }
  }
})(_0x3510, 0xcdb77);
let ageInterval;
function _0x1261(_0x5e81ae, _0x1be6e5) {
  const _0x3510e5 = _0x3510();
  return (
    (_0x1261 = function (_0x1261da, _0x4024c5) {
      _0x1261da = _0x1261da - 0x145;
      let _0x29cec5 = _0x3510e5[_0x1261da];
      return _0x29cec5;
    }),
    _0x1261(_0x5e81ae, _0x1be6e5)
  );
}
function calculateAge() {
  const _0x160ed3 = _0x1261,
    _0x32d54a = document[_0x160ed3(0x156)]("spinner");
  _0x32d54a[_0x160ed3(0x152)]["remove"](_0x160ed3(0x159)),
    clearInterval(ageInterval);
  const _0x1a22d7 = document[_0x160ed3(0x156)]("birthdate"),
    _0xeeca99 = document[_0x160ed3(0x156)](_0x160ed3(0x16d)),
    _0x31f0e3 = document[_0x160ed3(0x156)](_0x160ed3(0x15e)),
    _0x2bee5f = document[_0x160ed3(0x156)](_0x160ed3(0x14c)),
    _0x3a5717 = new Date(_0x1a22d7[_0x160ed3(0x168)]);
  if (_0x3a5717 > new Date() || isNaN(_0x3a5717[_0x160ed3(0x157)]())) {
    let _0x1ec982 = document[_0x160ed3(0x156)](_0x160ed3(0x15a)),
      _0xda286d = document[_0x160ed3(0x156)](_0x160ed3(0x148));
    _0xda286d[_0x160ed3(0x152)][_0x160ed3(0x16e)]("d-none"),
      (_0x1ec982[_0x160ed3(0x161)] =
        "Please\x20enter\x20a\x20valid\x20birthdate."),
      _0x1ec982[_0x160ed3(0x152)][_0x160ed3(0x167)](_0x160ed3(0x159)),
      _0x32d54a[_0x160ed3(0x152)][_0x160ed3(0x16e)]("d-none");
    return;
  }
  (ageInterval = setInterval(function () {
    const _0x3d319d = _0x160ed3,
      _0x409a9d = calculateAgeObject(_0x3a5717);
    (_0xeeca99["innerHTML"] =
      "<b>" +
      _0x409a9d["years"] +
      _0x3d319d(0x147) +
      _0x409a9d[_0x3d319d(0x153)] +
      "\x20months,\x20" +
      _0x409a9d["days"] +
      _0x3d319d(0x170) +
      _0x409a9d["hours"] +
      _0x3d319d(0x14f) +
      _0x409a9d[_0x3d319d(0x160)] +
      _0x3d319d(0x16f) +
      _0x409a9d[_0x3d319d(0x14a)] +
      "\x20seconds</b>"),
      (_0x31f0e3[_0x3d319d(0x16b)] =
        _0x3d319d(0x16a) +
        _0x409a9d["totalYears"] +
        _0x3d319d(0x166) +
        _0x409a9d[_0x3d319d(0x158)] +
        _0x3d319d(0x151) +
        _0x409a9d[_0x3d319d(0x169)] +
        _0x3d319d(0x15d) +
        _0x409a9d[_0x3d319d(0x165)] +
        _0x3d319d(0x16c) +
        _0x409a9d[_0x3d319d(0x14d)] +
        _0x3d319d(0x145) +
        _0x409a9d[_0x3d319d(0x149)] +
        _0x3d319d(0x154));
    let _0x1a460b = document[_0x3d319d(0x156)]("result");
    _0x32d54a["classList"][_0x3d319d(0x16e)](_0x3d319d(0x159)),
      _0x1a460b[_0x3d319d(0x152)][_0x3d319d(0x167)](_0x3d319d(0x159));
  }, 0x3e8)),
    (msg = document[_0x160ed3(0x156)](_0x160ed3(0x15a))),
    msg[_0x160ed3(0x152)][_0x160ed3(0x16e)](_0x160ed3(0x159));
}
function _0x3510() {
  const _0x5a42b6 = [
    "3606465ccNPCZ",
    "minutes",
    "innerText",
    "3915258ORyelE",
    "1771434JNojLi",
    "1082824vlLpbo",
    "totalHours",
    "\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Months:\x20\x20",
    "remove",
    "value",
    "totalDays",
    "<b>Total\x20Years:\x20",
    "innerHTML",
    "<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Minutes:\x20\x20",
    "age",
    "add",
    "\x20minutes,\x20",
    "\x20days,\x20",
    "\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Seconds:\x20\x20",
    "4744180iOaTkO",
    "\x20years,\x20",
    "result",
    "totalSeconds",
    "seconds",
    "31058710MwCdDP",
    "downloadBtn",
    "totalMinutes",
    "3HwMSXE",
    "\x20hours,\x20",
    "12ixHgTK",
    "\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Days:\x20\x20",
    "classList",
    "months",
    "</b>",
    "560466VqnNVQ",
    "getElementById",
    "getTime",
    "totalMonths",
    "d-none",
    "alert",
    "floor",
    "72ZgFAOX",
    "\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Total\x20Hours:\x20\x20",
    "totalage",
  ];
  _0x3510 = function () {
    return _0x5a42b6;
  };
  return _0x3510();
}
function calculateAgeObject(_0x589abf) {
  const _0x3b1646 = _0x1261,
    _0x2979cb = new Date(),
    _0xa55472 = _0x2979cb - _0x589abf,
    _0x304a63 = _0xa55472 / 0x3e8,
    _0x49367a = _0x304a63 / 0x3c,
    _0x2384aa = _0x49367a / 0x3c,
    _0x1b7a80 = _0x2384aa / 0x18,
    _0x3dac21 = _0x1b7a80 / 365.25,
    _0x10edc9 = {
      years: Math["floor"](_0x3dac21),
      months: Math[_0x3b1646(0x15b)]((_0x3dac21 % 0x1) * 0xc),
      days: Math[_0x3b1646(0x15b)](_0x1b7a80 % 30.44),
      hours: Math[_0x3b1646(0x15b)](_0x2384aa % 0x18),
      minutes: Math["floor"](_0x49367a % 0x3c),
      seconds: Math[_0x3b1646(0x15b)](_0x304a63 % 0x3c),
      totalYears: Math[_0x3b1646(0x15b)](_0x3dac21),
      totalMonths: Math["floor"](_0x2384aa / (0x18 * 30.44)),
      totalDays: Math["floor"](_0x1b7a80),
      totalHours: Math[_0x3b1646(0x15b)](_0x2384aa),
      totalMinutes: Math[_0x3b1646(0x15b)](_0x49367a),
      totalSeconds: Math[_0x3b1646(0x15b)](_0x304a63),
    };
  return _0x10edc9;
}
