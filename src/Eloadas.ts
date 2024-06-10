class Eloadas {
    private foglalasok: boolean[][];

    constructor(sorokSzama: number, helyekSzama: number) {
        if (sorokSzama <= 0 || helyekSzama <= 0) {
            throw new Error('A sorok és helyek száma nagyobb kell legyen nullánál.');
        }
        this.foglalasok = Array.from({ length: sorokSzama }, () => Array(helyekSzama).fill(false));
    }

    get SzabadHelyek(): number {
        return this.foglalasok.reduce((acc, row) => acc + row.filter(hely => !hely).length, 0);
    }

    get Teli(): boolean {
        return this.SzabadHelyek === 0;
    }

    lefoglal(): boolean {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) {
                    this.foglalasok[i][j] = true;
                    return true;
                }
            }
        }
        return false;
    }

    Foglalt(sorSzam: number, helySzam: number): boolean {
        if (sorSzam < 1 || sorSzam > this.foglalasok.length || helySzam < 1 || helySzam > this.foglalasok[0].length) {
            throw new Error('Érvénytelen sor- vagy helyszám.');
        }
        return this.foglalasok[sorSzam - 1][helySzam - 1];
    }
}

export default Eloadas;
