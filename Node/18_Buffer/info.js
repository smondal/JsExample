/* Instance of Buffer class are similar to array of Integer from 0 to 255 fixed size and raw memory allocation outside of V8 heap
The size of buffer is estabilished when it is created and cannot be changed */

const buf1 = Buffer.alloc(10);
console.log(buf1)

/* create buffer of length 10, field with 0x1 */
const buf2 = Buffer.alloc(10, 1)
console.log(buf2)

/* create uninitialized buffer of length 10. It is faster than Buffer.alloc() */
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3)

const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)

//node -zero-fill-buffers
