/*
 * Copyright 2022 Luis Martins <luis.martins@gmail.com>
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 *
 * 1. Redistributions of source code must retain the above copyright notice,
 *    this list of conditions and the following disclaimer.
 *
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 *    this list of conditions and the following disclaimer in the documentation
 *    and/or other materials provided with the distribution.
 *
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 *    may be used to endorse or promote products derived from this software without
 *    specific prior written permission.
 */

const NAME = 'Grand9K Pixel Font';

const HEIGHT = 8; // in pixels
const SPACE_WIDTH = 2; // two pixels

const glyphs = {};

glyphs['A'] = [
  0b01111110,
  0b00010001,
  0b00010001,
  0b00010001,
  0b01111110
];
glyphs['B'] = [
  0b01111111,
  0b01001001,
  0b01001001,
  0b01001001,
  0b00110110
];
glyphs['C'] = [
  0b00111110,
  0b01000001,
  0b01000001,
  0b01000001
];
glyphs['D'] = [
  0b01111111,
  0b01000001,
  0b01000001,
  0b01000001,
  0b00111110
];
glyphs['E'] = [
  0b01111111,
  0b01001001,
  0b01001001,
  0b01001001
];
glyphs['F'] = [
  0b01111111,
  0b00001001,
  0b00001001,
  0b00001001
];
glyphs['G'] = [
  0b00111110,
  0b01000001,
  0b01000001,
  0b01001001,
  0b01111001
];
glyphs['H'] = [
  0b01111111,
  0b00001000,
  0b00001000,
  0b00001000,
  0b01111111
];
glyphs['I'] = [
  0b01111111
];
glyphs['J'] = [
  0b01000000,
  0b01000000,
  0b01000000,
  0b01000000,
  0b00111111
];
glyphs['K'] = [
  0b01111111,
  0b00001000,
  0b00010100,
  0b00100010,
  0b01000001
];
glyphs['L'] = [
  0b01111111,
  0b01000000,
  0b01000000,
  0b01000000,
  0b01000000
];
glyphs['M'] = [
  0b01111111,
  0b00000010,
  0b00000100,
  0b00000010,
  0b01111111
];
glyphs['N'] = [
  0b01111111,
  0b00000010,
  0b00000100,
  0b00001000,
  0b01111111
];
glyphs['O'] = [
  0b00111110,
  0b01000001,
  0b01000001,
  0b01000001,
  0b00111110
];
glyphs['P'] = [
  0b01111111,
  0b00010001,
  0b00010001,
  0b00010001,
  0b00001110
];
glyphs['Q'] = [
  0b00111110,
  0b01000001,
  0b01000001,
  0b01000001,
  0b10111110,
  0b10000000
];
glyphs['R'] = [
  0b01111111,
  0b00010001,
  0b00010001,
  0b00010001,
  0b01101110
];
glyphs['S'] = [
  0b01000110,
  0b01001001,
  0b01001001,
  0b01001001,
  0b00110001
];
glyphs['T'] = [
  0b00000001,
  0b00000001,
  0b01111111,
  0b00000001,
  0b00000001
];
glyphs['U'] = [
  0b00111111,
  0b01000000,
  0b01000000,
  0b01000000,
  0b00111111
];
glyphs['V'] = [
  0b00011111,
  0b00100000,
  0b01000000,
  0b00100000,
  0b00011111
];
glyphs['W'] = [
  0b01111111,
  0b00100000,
  0b00010000,
  0b00100000,
  0b01111111
];
glyphs['X'] = [
  0b01100011,
  0b00010100,
  0b00001000,
  0b00010100,
  0b01100011
];
glyphs['Y'] = [
  0b00000111,
  0b00001000,
  0b01111000,
  0b00001000,
  0b00000111
];
glyphs['Z'] = [
  0b01100001,
  0b01010001,
  0b01001001,
  0b01000101,
  0b01000011
];

glyphs['a'] = [
  0b00100000,
  0b01010100,
  0b01010100,
  0b01111000
];
glyphs['b'] = [
  0b01111110,
  0b01001000,
  0b01001000,
  0b00110000
];
glyphs['c'] = [
  0b00111000,
  0b01000100,
  0b01000100
];
glyphs['d'] = [
  0b00110000,
  0b01001000,
  0b01001000,
  0b01111110
];
glyphs['e'] = [
  0b00111000,
  0b01010100,
  0b01010100,
  0b00011000
];
glyphs['f'] = [
  0b00001000,
  0b01111100,
  0b00001010,
  0b00001010
];
glyphs['g'] = [
  0b10011000,
  0b10100100,
  0b10100100,
  0b01111100
];
glyphs['h'] = [
  0b01111110,
  0b00001000,
  0b00001000,
  0b01110000
];
glyphs['i'] = [
  0b01111010
];
glyphs['j'] = [
  0b10000000,
  0b10000000,
  0b01111010
];
glyphs['k'] = [
  0b01111110,
  0b00010000,
  0b00101000,
  0b01000100
];
glyphs['l'] = [
  0b01111110
];
glyphs['m'] = [
  0b01111100,
  0b00000100,
  0b00111000,
  0b00000100,
  0b01111000
];
glyphs['n'] = [
  0b01111100,
  0b00000100,
  0b00000100,
  0b01111000
];
glyphs['o'] = [
  0b00111000,
  0b01000100,
  0b01000100,
  0b00111000
];
glyphs['p'] = [
  0b11111100,
  0b01000100,
  0b01000100,
  0b00111000
];
glyphs['q'] = [
  0b00111000,
  0b01000100,
  0b01000100,
  0b11111100
];
glyphs['r'] = [
  0b01111100,
  0b00001000,
  0b00000100,
  0b00000100
];
glyphs['s'] = [
  0b01001000,
  0b01010100,
  0b01010100,
  0b00100100
];
glyphs['t'] = [
  0b00000100,
  0b00111111,
  0b01000100,
  0b01000100
];
glyphs['u'] = [
  0b00111100,
  0b01000000,
  0b01000000,
  0b01111100
];
glyphs['v'] = [
  0b00011100,
  0b00100000,
  0b01000000,
  0b00100000,
  0b00011100
];
glyphs['w'] = [
  0b00011100,
  0b00100000,
  0b00111000,
  0b00100000,
  0b00011100
];
glyphs['x'] = [
  0b01000100,
  0b00101000,
  0b00010000,
  0b00101000,
  0b01000100
];
glyphs['y'] = [
  0b10011100,
  0b10100000,
  0b10100000,
  0b01111100
];
glyphs['z'] = [
  0b01000100,
  0b01100100,
  0b01010100,
  0b01001100,
  0b01000100
];

glyphs['0'] = [
  0b00111110,
  0b01010001,
  0b01001001,
  0b01000101,
  0b00111110
];
glyphs['1'] = [
  0b00000001,
  0b01111111
];
glyphs['2'] = [
  0b01110001,
  0b01001001,
  0b01001001,
  0b01001001,
  0b01000110
];
glyphs['3'] = [
  0b01001001,
  0b01001001,
  0b01001001,
  0b00110110
];
glyphs['4'] = [
  0b00011000,
  0b00010100,
  0b00010010,
  0b00010001,
  0b01111111
];
glyphs['5'] = [
  0b01001111,
  0b01001001,
  0b01001001,
  0b01001001,
  0b00110001
];
glyphs['6'] = [
  0b00111110,
  0b01001001,
  0b01001001,
  0b01001001,
  0b00110000
];
glyphs['7'] = [
  0b00000001,
  0b00000001,
  0b01110001,
  0b00001101,
  0b00000011
];
glyphs['8'] = [
  0b00110110,
  0b01001001,
  0b01001001,
  0b01001001,
  0b00110110
];
glyphs['9'] = [
  0b00000110,
  0b01001001,
  0b01001001,
  0b01001001,
  0b00111110
];

glyphs['.'] = [
  0b01000000
];
glyphs[','] = [
  0b11000000
];
glyphs[';'] = [
  0b11000100
];
glyphs[':'] = [
  0b01000100
];
glyphs['-'] = [
  0b00010000,
  0b00010000,
  0b00010000
];
glyphs['$'] = [
  0b00100100,
  0b00101010,
  0b01111111,
  0b00101010,
  0b00010010
];
glyphs['#'] = [
  0b00100010,
  0b01111111,
  0b00100010,
  0b00100010,
  0b01111111,
  0b00100010
];
glyphs['\''] = [
  0b00000011
];
glyphs['!'] = [
  0b01011111
];
glyphs['"'] = [
  0b00000011,
  0b00000000,
  0b00000011
];
glyphs['/'] = [
  0b01100000,
  0b00011100,
  0b00000011
];
glyphs['?'] = [
  0b00000001,
  0b01010001,
  0b00001001,
  0b00000110
];
glyphs['%'] = [
  0b01000110,
  0b00101001,
  0b00010110,
  0b00001000,
  0b00110100,
  0b01001010,
  0b00110001
];
glyphs['&'] = [
  0b00110110,
  0b01001001,
  0b01001001,
  0b01001001,
  0b00111100
];
glyphs['('] = [
  0b00111110,
  0b01000001,
  0b01000001
];
glyphs[')'] = [
  0b01000001,
  0b01000001,
  0b00111110
];
glyphs['@'] = [
  0b01111110,
  0b10000001,
  0b10011001,
  0b10100101,
  0b10111101,
  0b10100001,
  0b00011110
];
glyphs['º'] = [
  0b00000110,
  0b00001001,
  0b00000110
];
glyphs[' '] = [
  0b00000000
];

glyphs['\u00D9'] = [ // this is a small 1
  0b00000100,
  0b01111100
];
glyphs['\u00DA'] = [ // this is a small 2
  0b01110100,
  0b01010100,
  0b01011100
];

const get = (text) => {
  const space = new Array(SPACE_WIDTH);
  space.fill(0x00);

  const buffer = [];

  for(let i = 0; i < text.length; i ++) {
    if(i != 0) {
      buffer.push(...space);
    }

    const char = text.charAt(i);

    if(glyphs[char] == undefined) {
      // TODO: warn about missing characters but continue execution
      continue;
    }

    buffer.push(...glyphs[char]);
  }

  return buffer;
};

exports.get = get;

exports.NAME = NAME;
exports.HEIGHT = HEIGHT;
exports.SPACE_WIDTH = SPACE_WIDTH;
