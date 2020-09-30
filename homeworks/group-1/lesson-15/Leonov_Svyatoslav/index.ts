function minWalk(gridList: string[], _startX: number, _startY: number, _endX: number, _endY: number):string {
    let bombCoords:number[] = [];
    for (let x = 0; x < gridList.length; x++){
        gridList[x].split('').forEach((_bomb:string, index:number) => {
            if(_bomb === "X"){
                return bombCoords.push(Number(`${x}.${index}`));
            }
        });
    }
    for(var x = 0; Number(`${_startX}.${_startY}`) !== Number(`${_endX}.${_endY}`); x++){
        console.log(Number(`${_startX}.${_startY}`));
        if(bombCoords.includes(Number(`${_startX}.${_startY}`))){
            return `Ваша фигура попала на "Х". Количесвто ходов: ${x}`
        }
        if(_startX < _endX){
            _startX++;
        }else if(_startX > _endX){
            _startX--;
        }
        if(_startY < _endY){
            _startY++;
        }else if(_startY > _endY){
            _startY--;
        }
    }
    return `Ваша фигура прошла весь путь к точке назначения и не попала на "Х". Количество ходов:${x}`;
}

const result = minWalk(
    [
      '.X.',
      '.X.',
      '...',
    ], 
    2, 0,
    0, 2
);
console.log(result);