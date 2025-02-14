# Why Traverse Up to √n Instead of n?

## **Factor Pairs and the Turning Point at \( \sqrt{n} \)**

Every number \( n \) can be expressed as a product of two factors:

\[
i \times j = n
\]

For every divisor \( i \), there exists a corresponding divisor \( j = \frac{n}{i} \). These are called **factor pairs**.

### **Example: Factor Pairs of 36**

| \( i \) | \( j = \frac{36}{i} \) |
| ------- | ---------------------- |
| 1       | 36                     |
| 2       | 18                     |
| 3       | 12                     |
| 4       | 9                      |
| 6       | 6                      |
| **9**   | **4**                  |
| **12**  | **3**                  |
| **18**  | **2**                  |
| **36**  | **1**                  |

The pairs start **repeating** once we pass \( \sqrt{36} = 6 \). Notice how:

- The pair **(4,9)** appears before **(9,4)**
- The pair **(3,12)** appears before **(12,3)**
- The pair **(2,18)** appears before **(18,2)**
- The pair **(1,36)** appears before **(36,1)**

This happens because **once we reach \( i = 6 \), all pairs have been counted**.

---

## **Why Does This Happen?**

The mathematical reason is:

1. If \( i \times j = n \), then one of \( i \) or \( j \) must be \( \leq \sqrt{n} \).
   - If both were greater than \( \sqrt{n} \), their product would exceed \( n \), which is impossible.
2. Once we reach \( i > \sqrt{n} \), the corresponding \( j \) has already been checked in a previous step.

3. If \( i = j \), meaning \( i^2 = n \), then \( i \) is the square root of \( n \) and should be counted **once**.

Thus, **iterating beyond \( \sqrt{n} \) is redundant** because all factor pairs have already been covered.

---

## **Why Is This Important for Optimization?**

- Checking for factors up to \( n \) → **O(n) time complexity**.
- Checking up to \( \sqrt{n} \) → **O(√n) time complexity** (significantly faster).

---

## **Example: Checking if 37 is Prime**

Instead of checking divisibility from \( 2 \) to \( 37 \), we only check up to \( \sqrt{37} \approx 6 \):

- \( 37 \mod 2 \neq 0 \)
- \( 37 \mod 3 \neq 0 \)
- \( 37 \mod 4 \neq 0 \)
- \( 37 \mod 5 \neq 0 \)
- \( 37 \mod 6 \neq 0 \)

Since no divisors were found, **37 is prime**.

---

## **Conclusion**

- Every factor \( i \) has a corresponding pair \( j = n/i \).
- Once \( i \) surpasses \( \sqrt{n} \), its pair \( j \) has already been counted.
- Checking up to \( \sqrt{n} \) ensures we find **all** factors **without redundancy**.
- This optimization reduces time complexity from **O(n) to O(√n)**.

---
