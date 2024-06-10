import { describe, it, expect } from 'vitest';
import Eloadas from '../src/Eloadas';

describe('Eloadas Constructor', () => {
  it('Létrehoz egy előadást megadott sorok és helyek számával', () => {
    const eloadas = new Eloadas(3, 3);
    expect(eloadas).toBeInstanceOf(Eloadas);
  });

  it('Dob egy hibát, ha a sorok száma 0 vagy kisebb', () => {
    expect(() => new Eloadas(0, 3)).toThrowError('A sorok és helyek száma nagyobb kell legyen nullánál.');
  });

  it('Dob egy hibát, ha a helyek száma 0 vagy kisebb', () => {
    expect(() => new Eloadas(3, 0)).toThrowError('A sorok és helyek száma nagyobb kell legyen nullánál.');
  });
});

describe('Eloadas.lefoglal()', () => {
  it('Lefoglalja az első szabad helyet', () => {
    const eloadas = new Eloadas(3, 3);
    expect(eloadas.lefoglal()).toBe(true);
    expect(eloadas.Foglalt(1, 1)).toBe(true);
  });

  it('Lefoglalja a helyeket sorrendben', () => {
    const eloadas = new Eloadas(2, 2);
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 1)).toBe(true);
    expect(eloadas.Foglalt(1, 2)).toBe(true);
  });

  it('Az utolsó szabad helyet is lefoglalja, majd visszatér false értékkel', () => {
    const eloadas = new Eloadas(1, 1);
    expect(eloadas.lefoglal()).toBe(true);
    expect(eloadas.lefoglal()).toBe(false);
  });
});

describe('Eloadas.SzabadHelyek', () => {
  it('Megszámolja a szabad helyeket', () => {
    const eloadas = new Eloadas(2, 2);
    expect(eloadas.SzabadHelyek).toBe(4);
    eloadas.lefoglal();
    expect(eloadas.SzabadHelyek).toBe(3);
  });
});

describe('Eloadas.Teli', () => {
  it('Visszaadja, ha tele van az előadás', () => {
    const eloadas = new Eloadas(1, 1);
    expect(eloadas.Teli).toBe(false);
    eloadas.lefoglal();
    expect(eloadas.Teli).toBe(true);
  });
});

describe('Eloadas.Foglalt()', () => {
  it('Visszaadja, ha egy adott hely foglalt', () => {
    const eloadas = new Eloadas(3, 3);
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 1)).toBe(true);
    expect(eloadas.Foglalt(1, 2)).toBe(false);
  });

  it('Érvénytelen sor vagy hely szám esetén hibát dob', () => {
    const eloadas = new Eloadas(3, 3);
    expect(() => eloadas.Foglalt(0, 1)).toThrowError('Érvénytelen sor- vagy helyszám.');
    expect(() => eloadas.Foglalt(1, 0)).toThrowError('Érvénytelen sor- vagy helyszám.');
    expect(() => eloadas.Foglalt(4, 1)).toThrowError('Érvénytelen sor- vagy helyszám.');
    expect(() => eloadas.Foglalt(1, 4)).toThrowError('Érvénytelen sor- vagy helyszám.');
  });

  it('Ellenőrzi, hogy megfelelő indexet használ', () => {
    const eloadas = new Eloadas(3, 3);
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 1)).toBe(true);
    expect(eloadas.Foglalt(3, 3)).toBe(false);
  });
});
