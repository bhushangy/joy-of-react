function test() {
  console.log(this.name);
}

test.call({ name: 'Bhushan' });
