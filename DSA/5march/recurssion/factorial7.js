function factorial(n) {
  if (n == 0) 
  return 1;
  return n * factorial(n - 1);
}
 

let num = 5;
document.write(factorial(num));