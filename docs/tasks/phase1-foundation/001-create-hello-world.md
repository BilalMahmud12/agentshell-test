---
id: "001"
title: Create Hello World Function
phase: phase1-foundation
status: pending
created: 2025-12-26
---

# 001: Create Hello World Function

## Objective
Create a simple Hello World function to test the AgentShell v2.0 workflow.

## Scope

| Action | File | Description |
|--------|------|-------------|
| CREATE | src/hello.js | Main hello world function |
| CREATE | src/hello.test.js | Unit tests for hello function |

## Steps

1. **Create src directory**
   ```bash
   mkdir -p src
   ```

2. **Create hello.js**
   - Export a function `sayHello(name)`
   - Return "Hello, {name}!"
   - Default to "World" if no name provided

3. **Create hello.test.js**
   - Test with name parameter
   - Test with no parameter (should default to "World")
   - Test with empty string

4. **Verify**
   ```bash
   node -e "const {sayHello} = require('./src/hello'); console.log(sayHello('AgentShell'));"
   ```
   Should output: "Hello, AgentShell!"

## Success Criteria
- [ ] hello.js created with sayHello function
- [ ] Tests created and passing
- [ ] Function works with and without parameters
- [ ] Default behavior works correctly
