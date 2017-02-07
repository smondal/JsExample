// export const sqrt = Math.sqrt;
// export function square(x) {
//     return x * x;
// }
// export function diag(x, y) {
//     return sqrt(square(x) + square(y));
// }


module.exports = {
	defau: 102,

	square: function(x) {
    return x * x;
	},

 diag: function(x, y) {
    return this.defau  + this.square(y);
	}
}