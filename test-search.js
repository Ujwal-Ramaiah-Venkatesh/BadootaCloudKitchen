// Quick Search Test Script
const tests = [
  { query: "biryani", expectItems: true, minResults: 12 },
  { query: "chicken", expectItems: true, minResults: 10 },
  { query: "veg", expectItems: true, minResults: 3 },
  { query: "egg", expectItems: true, minResults: 2 },
  { query: "mutton", expectItems: true, minResults: 3 },
  { query: "paneer", expectItems: true, minResults: 3 },
  { query: "donne", expectItems: true, minResults: 3 },
  { query: "manchurian", expectItems: true, minResults: 2 },
  { query: "pizza", expectItems: false, minResults: 0 },
  { query: "burger", expectItems: false, minResults: 0 },
  { query: "pasta", expectItems: false, minResults: 0 },
  { query: "CHICKEN", expectItems: true, minResults: 10 }, // Case test
  { query: "chick", expectItems: true, minResults: 10 }, // Partial match
];

console.log("🔍 SEARCH TEST SCENARIOS\n");
console.log("═══════════════════════════════════════\n");

tests.forEach((test, i) => {
  console.log(`Test ${i + 1}: Search "${test.query}"`);
  console.log(`   Expected: ${test.expectItems ? `${test.minResults}+ items` : "Not found"}`);
  console.log(`   Test URL: http://localhost:3000/menu?q=${encodeURIComponent(test.query)}`);
  console.log("");
});

console.log("═══════════════════════════════════════\n");
console.log("📋 MANUAL TESTING INSTRUCTIONS:\n");
console.log("1. Open each test URL above");
console.log("2. Verify results match expectations");
console.log("3. Check 'not found' message for invalid searches\n");
