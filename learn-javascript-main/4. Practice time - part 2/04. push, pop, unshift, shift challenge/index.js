let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop("Monaco");
largeCountries.push("Pakistan");
largeCountries.shift("Tuvalu");
largeCountries.unshift("China");

console.log(largeCountries);

// shift--- used to remove from the first part of the array
// unshift--- used to add to the first part of the array
