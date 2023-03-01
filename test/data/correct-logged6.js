let a = [
    1,
    2,
    3
];
function sum(args) {
    console.log(`Entering sum(${ args }) at line 3`);
    return args.reduce((a, b) => a + b, 0);
}
sum(a);