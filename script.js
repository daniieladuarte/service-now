// Helper to show the result
function showResult(sequence, description) {
  document.getElementById("result").textContent = `${description}: [${sequence.join(", ")}]`;
}

// 1.1. Divisible by 3
function generatePositiveDivisibleBy3() {
  const sequence = [];
  for (let i = 1; i <= 5; i++) {
    sequence.push(i * 3); // multiples of 3
  }
  showResult(sequence, "Positive and divisible by 3");
}

// 2. Generate sequence: strictly increasing
function generateStrictlyIncreasing() {
  const sequence = [];
  let start = 1;
  for (let i = 0; i < 5; i++) {
    sequence.push(start);
    start += Math.floor(Math.random() * 5) + 1; // ensures increase
  }
  showResult(sequence, "Strictly increasing");
}

// Helper: check if number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// 3. Generate sequence: constant difference is prime
function generatePrimeNumbers() {
  const sequence = [];
  const primeDifferences = [2, 3, 5, 7, 11];
  const diff = primeDifferences[Math.floor(Math.random() * primeDifferences.length)];
  let start = Math.floor(Math.random() * 10) + 1;

  for (let i = 0; i < 5; i++) {
    sequence.push(start);
    start += diff;
  }
  showResult(sequence, `Constant difference (prime = ${diff})`);
}

// 4. Generate sequence: all conditions
function generateAllConditions() {
  // All conditions:
  // - positive
  // - divisible by 3
  // - strictly increasing
  // - constant difference that is prime
  // So difference must be prime AND multiple of 3 to keep numbers divisible by 3
  // Prime multiples of 3? Only 3 itself.
  const sequence = [];
  let start = 3; // first multiple of 3
  const diff = 3; // prime and multiple of 3
  for (let i = 0; i < 5; i++) {
    sequence.push(start);
    start += diff;
  }
  showResult(sequence, "All conditions (difference = 3)");
}
