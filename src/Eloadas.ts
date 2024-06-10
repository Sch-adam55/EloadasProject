class Eloadas {
    private foglalasok: boolean[][];

    constructor(sorokSzama: number, helyekSzama: number) {
        if (sorokSzama <= 0 || helyekSzama <= 0) {
            throw new Error('A sorok száma és a helyek száma 0-nál nagyobb kell legyen.');
        }
        this.foglalasok = Array.from({ length: sorokSzama }, () => Array(helyekSzama).fill(false));
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

    get SzabadHelyek(): number {
        let count = 0;
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if (!this.foglalasok[i][j]) {
                    count++;
                }
            }
        }
        return count;
    }

    get Teli(): boolean {
        return this.SzabadHelyek === 0;
    }

    Foglalt(sorSzam: number, helySzam: number): boolean {
        if (sorSzam <= 0 || helySzam <= 0 || sorSzam > this.foglalasok.length || helySzam > this.foglalasok[0].length) {
            throw new Error('Érvénytelen sor vagy hely szám.');
        }
        return this.foglalasok[sorSzam - 1][helySzam - 1];
    }
}

export default Eloadas;
