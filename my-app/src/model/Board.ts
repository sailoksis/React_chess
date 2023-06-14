import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";
import {King} from "./figures/King";
import {Queen} from "./figures/Queen";
import {Bishop} from "./figures/Bishop";
import {Knight} from "./figures/Knight";
import {Rook} from "./figures/Rook";
import {Figure} from "./figures/Figure";


export class Board {
    cells: Cell[][] = []
    
    public initCells() {
        for (let i = 0; i < 8; i++) {
            const row: Cell[] = []
            for (let j = 0; j < 8; j++) {
                if ((i + j) % 2 !== 0) {
                    row.push(new Cell(this, j, i, Colors.BLACK, null))// Black cells
                  } else {
                    row.push(new Cell(this, j, i, Colors.WHITE, null)) // White cells
                  }
                }
                this.cells.push(row);
        }
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x]
    }

    private addPawns() {
        for (let i = 0; i < 8; i++) {
            new Pawn(Colors.BLACK, this.getCell(i, 1))
            new Pawn(Colors.WHITE, this.getCell(i, 6))
        }
    }

    private addKings () {

    }

    private addQueens() {

    }

    private addBishops() {

    }

    private addKnights() {

    }

    public addFigures() {
this.addPawns()
this.addKnights()
this.addKings()
this.addBishops()
this.addQueens()

    }
}
