import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from '../../assets/black-Pawn.png'
import whiteLogo from '../../assets/white-Pawn.png'

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell) //super вызывает родительский класс Figure
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN; 
    }
} 