import { describe, it, expect } from 'vitest';
import Eloadas from '../src/Eloadas';

describe('Eloadas Class Tests', () => {
    it('létre kell hoznia egy példányt a megfelelő méretekkel', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.SzabadHelyek).toBe(9);
        expect(eloadas.Teli).toBe(false);
    });

    it('hibaüzenetet kell adnia az érvénytelen méretek miatt', () => {
        expect(() => new Eloadas(0, 5)).toThrow();
        expect(() => new Eloadas(5, -1)).toThrow();
    });

    it('le kell foglalni az első szabad helyet', () => {
        const eloadas = new Eloadas(3, 3);
        expect(eloadas.lefoglal()).toBe(true);
        expect(eloadas.SzabadHelyek).toBe(8);
    });

    it('hamis értéket kell visszaadnia, ha telt házat próbálunk foglalni', () => {
        const eloadas = new Eloadas(1, 1);
        eloadas.lefoglal();
        expect(eloadas.lefoglal()).toBe(false);
    });

    it('helyesen kell jelentenie, ha helyet foglaltak', () => {
        const eloadas = new Eloadas(3, 3);
        eloadas.lefoglal();
        expect(eloadas.Foglalt(1, 1)).toBe(true);
        expect(eloadas.Foglalt(1, 2)).toBe(false);
    });

    it('hibát kell adnia az érvénytelen üléshelyzetek miatt', () => {
        const eloadas = new Eloadas(3, 3);
        expect(() => eloadas.Foglalt(0, 1)).toThrow();
        expect(() => eloadas.Foglalt(1, 0)).toThrow();
        expect(() => eloadas.Foglalt(4, 1)).toThrow();
        expect(() => eloadas.Foglalt(1, 4)).toThrow();
    });

    it('jelentenie kell, ha megtelt a nézőtér', () => {
        const eloadas = new Eloadas(1, 1);
        expect(eloadas.Teli).toBe(false);
        eloadas.lefoglal();
        expect(eloadas.Teli).toBe(true);
    });
});
