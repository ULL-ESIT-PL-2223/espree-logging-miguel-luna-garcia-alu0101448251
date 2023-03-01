let a = [1,2,3];

function sum(args) {
  return args.reduce((a,b) => a+b, 0);
}

sum(a);