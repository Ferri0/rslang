export const shuffleArray = (arr: string[]) => {
    const copyArr = arr.slice();
    const result = [];
    for (let i = 0; i < arr.length; i += 1) {
        const randIndex = Math.floor(Math.random() * copyArr.length);
        const newItem = copyArr[randIndex];
        result.push(newItem);
        copyArr.splice(randIndex, 1);
    }
    return result;
}