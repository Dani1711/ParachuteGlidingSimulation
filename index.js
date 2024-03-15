const parachute = {
  height: 0,
  velocity: 0,
  acceleration: 0.1,
  gravity: 0.2,
  deploy: function() {
    this.height = 0;
    this.velocity = 0;
  },
  update: function() {
    this.height += this.velocity;
    this.velocity += this.acceleration;
    if (this.height >= 100) {
      this.velocity = -this.velocity * 0.9;
      this.height = 100;
    }
    this.velocity += this.gravity;
  }
};

function updateAndRender() {
  parachute.update();
  render();
  requestAnimationFrame(updateAndRender);
}

function render() {
  const parachuteElement = document.getElementById('parachute');
  parachuteElement.style.top = `${parachute.height}px`;
}

parachute.deploy();
updateAndRender();

function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const randomStrings = [];
for (let i = 0; i < 100; i++) {
  randomStrings.push(generateRandomString(10));
}

console.log(randomStrings.join(' '));

function generateRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.random() * 100);
  }
  return array;
}

const randomArray = generateRandomArray(10000);
console.log(randomArray.reduce((acc, curr) => acc + curr, 0));

function generateFibonacciSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

console.log(generateFibonacciSequence(20));
