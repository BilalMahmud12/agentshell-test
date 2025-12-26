const { sayHello } = require('./hello');

// Simple test runner
function test(description, fn) {
  try {
    fn();
    console.log(`✓ ${description}`);
  } catch (error) {
    console.log(`✗ ${description}`);
    console.error(`  ${error.message}`);
    process.exit(1);
  }
}

function assertEqual(actual, expected) {
  if (actual !== expected) {
    throw new Error(`Expected "${expected}" but got "${actual}"`);
  }
}

// Tests
test('sayHello with name parameter', () => {
  assertEqual(sayHello('AgentShell'), 'Hello, AgentShell!');
});

test('sayHello with no parameter (default to World)', () => {
  assertEqual(sayHello(), 'Hello, World!');
});

test('sayHello with empty string', () => {
  assertEqual(sayHello(''), 'Hello, !');
});

console.log('\nAll tests passed!');
