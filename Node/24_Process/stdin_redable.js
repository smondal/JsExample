process.stdin.on('readable', (chunk) => {
  // let chunk;
  // while ((chunk = process.stdin.read()) !== null) {
    process.stdout.write(`data: ${chunk}`);
  // }
});
