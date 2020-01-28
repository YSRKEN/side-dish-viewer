export const paddingNumber = (n: number, digits: number) => {
    return (`0000000000${n}`).slice(-digits);
};
