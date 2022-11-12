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

const font = require('../grand9k.js');

describe('Constants', () => {
  test('Name', () => {
    expect(font.NAME).toEqual('Grand9K Pixel Font');
  });

  test('Height', () => {
    expect(font.HEIGHT).toEqual(8);
  });

  test('Spacing', () => {
    expect(font.SPACE_WIDTH).toEqual(2);
  });
});

describe('Glyphs', () => {
  test('Count', () => {
    const map = Object.keys(font.__get__('glyphs'));

    console.log(map);

    expect(Array.isArray(map)).toBeTruthy();
    expect(map.length).toEqual(83);
  });

  test('Numbers', () => {
    const map = Object.keys(font.__get__('glyphs'));
    const list = '0123456789';

    expect(list.length).toEqual(10);

    for(let i = 0; i < list.length; i ++) {
      expect(map).toContain(list.charAt(i));
    }
  });

  test('Uppercase', () => {
    const map = Object.keys(font.__get__('glyphs'));
    const list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    expect(list.length).toEqual(26);

    for(let i = 0; i < list.length; i ++) {
      expect(map).toContain(list.charAt(i));
    }
  });

  test('Lowercase', () => {
    const map = Object.keys(font.__get__('glyphs'));
    const list = 'abcdefghijklmnopqrstuvwxyz';

    expect(list.length).toEqual(26);

    for(let i = 0; i < list.length; i ++) {
      expect(map).toContain(list.charAt(i));
    }
  });

  test('Symbols', () => {
    const map = Object.keys(font.__get__('glyphs'));
    const list = '.,;:-$#\'!"/?%&()@º \u00D9\u00DA';

    expect(list.length).toEqual(21);

    for(let i = 0; i < list.length; i ++) {
      expect(map).toContain(list.charAt(i));
    }
  });
});

describe('Get Characters', () => {
  test('Character "!"', () => {
    const buffer = font.get('!');

    expect(Array.isArray(buffer)).toBeTruthy();
    expect(buffer.length).toEqual(1);
    expect(buffer).toContain(0b01011111);
  });

  test('Missing "^"', () => {
    const buffer = font.get('^');

    // TODO: check that a warning was logged

    expect(Array.isArray(buffer)).toBeTruthy();
    expect(buffer.length).toEqual(0);
  });

  test('Spacing', () => {
    const buffer = font.get('::');

    expect(Array.isArray(buffer)).toBeTruthy();
    expect(buffer.length).toEqual(4);
    expect(buffer[0]).toEqual(0b01000100);
    expect(buffer[1]).toEqual(0b00000000);
    expect(buffer[2]).toEqual(0b00000000);
    expect(buffer[3]).toEqual(0b01000100);
  });
});
