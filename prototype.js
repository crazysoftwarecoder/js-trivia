function Basic() {
		
}

console.log('Basic() has a __proto__ variable:= ' + Basic.__proto__);
console.log('Basic()s __proto__ variable points to Function.prototype:= ' + (Basic.__proto__ === Function.prototype));

console.log('Basic() has a prototype variable:=' + Basic.prototype);
console.log('Basic()s prototype variable is an object whose __proto__ points to Object.prototype:=' + (Basic.prototype.__proto__ === Object.prototype));
console.log('Basic()s prototype variable has a constructor property which points to the Basic function object itself:= ' + (Basic.prototype.constructor === Basic));

console.log('Creating a new instance of Basic()');

var basic = new Basic();

console.log('basic is the object created');

console.log('basics __proto__ variable points to Basic.prototype: ' + (basic.__proto__ === Basic.prototype));

console.log('basics __proto_s __proto__ points to Object.prototype: ' + (basic.__proto__.__proto__ == Object.prototype));

