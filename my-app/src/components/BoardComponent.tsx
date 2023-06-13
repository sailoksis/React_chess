import React from "react";

interface BoardProprs {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board: Board, setBoard}) => {
    return (
        <div className="board">
        </div>
    );
};

export default BoardComponent