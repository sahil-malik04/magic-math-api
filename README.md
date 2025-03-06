# Magic Math

A Node.js API that calculates the **Magic Math** sequence based on the formula:  
magic_math(0) = 0
magic_math(1) = 1
magic_math(N) = magic_math(N−1) + magic_math(N−2) + N

This API exposes a REST endpoint where users can get the Magic Math result for any non-negative number.

## Features

- Fast computation using **memoization**
- RESTful API built with **Express.js**
- Proper error handling for invalid inputs

---

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/sahil-malik04/magic-math-api.git
   cd magic-math-api

   ```

2. **Install dependencies**

   ```sh
    npm install

   ```

3. **Running the Application**
   ```sh
    npm run dev
   ```

Now you can access the API at:

http://localhost:5000/:number

Example - http://localhost:5000/5

4. **To run test cases using Jest, you can run:**
   ```sh
    npm test
   ```
