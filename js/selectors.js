// Implement selector function to get elements needed
// 1. Cell List
// 2. Current Turn
// 3. Replay Game
// 4. Game status

    //Lấy ra danh sách 9 ô vuông (9 thẻ li)
export function getCellElementList() {                  
    const ulElement = document.getElementById('cellList');
    const liList = ulElement.querySelectorAll('li');
    return liList;
}

    //Lấy ra lượt chơi hiện tại (X hoặc O)
export function getCurrentTurnElement() {               
    return document.querySelector('.current-turn');
}

    //Lấy ra vị trí chính xác ô (thẻ li)
export function getCellElementAtIdx(index) {                 
    return document.querySelector(`#cellList > li:nth-child(${index + 1})`)    // :nth-child(...) Lấy ra đứa con thứ ...
}

    //Trạng thái game hiện tại (đã win chưa)
export function getGameStatusElement() {                
    return document.querySelector('.game-status');
}
