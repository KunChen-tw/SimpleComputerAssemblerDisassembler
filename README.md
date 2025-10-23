# Simple Computer Assembler & Disassembler

This project is a web-based **Assembler & Disassembler** tool for a simple computer, designed based on Chapter 5.8 "A SIMPLE COMPUTER" from the book **"Foundations of Computer Science"** (Behrouz Forouzan, 2023, ISBN: 9781473787322). It is suitable for educational simple computers (such as the instruction set architecture described in the textbook), and allows easy conversion between machine language and assembly language.

You can access the **Simple Computer Assembler and Disassembler** web application here:
👉 **[Simple Computer Assembler & Disassembler Web Tool](https://kunchen-tw.github.io/SimpleComputerAssemblerDisassembler/)**

## Figure 5.30 The components of a simple computer
<img width="639" height="446" alt="image" src="https://github.com/user-attachments/assets/aad58024-8a9c-40e9-843e-5c0d5dd30855" />

---

## Table 5.4 Instruction Set

The following table lists the instruction set for the "simple computer" used in this project, corresponding to Table 5.4 in Forouzan's textbook:

| Instruction | Code | Operands                  | Action                                              |
|-------------|------|---------------------------|-----------------------------------------------------|
| HALT        | 0    |                           | Stops the execution of the program                  |
| LOAD        | 1    | $R_D$, $M_S$              | $R_D$ ← $M_S$                                       |
| STORE       | 2    | $M_D$, $R_S$              | $M_D$ ← $R_S$                                       |
| ADDI        | 3    | $R_D$, $R_{S1}$, $R_{S2}$ | $R_D$ ← $R_{S1}$ + $R_{S2}$                         |
| ADDF        | 4    | $R_D$, $R_{S1}$, $R_{S2}$ | $R_D$ ← $R_{S1}$ + $R_{S2}$                         |
| MOVE        | 5    | $R_D$, $R_S$              | $R_D$ ← $R_S$                                       |
| NOT         | 6    | $R_D$, $R_S$              | $R_D$ ← Not $R_S$                                   |
| AND         | 7    | $R_D$, $R_{S1}$, $R_{S2}$ | $R_D$ ← $R_{S1}$ AND $R_{S2}$                       |
| OR          | 8    | $R_D$, $R_{S1}$, $R_{S2}$ | $R_D$ ← $R_{S1}$ OR $R_{S2}$                        |
| XOR         | 9    | $R_D$, $R_{S1}$, $R_{S2}$ | $R_D$ ← $R_{S1}$ XOR $R_{S2}$                       |
| INC         | A    | $R$                       | $R$ ← $R$ + 1                                       |
| DEC         | B    | $R$                       | $R$ ← $R$ - 1                                       |
| ROTATE      | C    | $R$, $n$, 0 or 1          | $Rot_n$ $R$                                         |
| JUMP        | D    | $R$, $n$                  | IF $R_0$ ≠ $R$ then PC = $n$, otherwise continue    |

**Key:**
- $R_S$, $R_{S1}$, $R_{S2}$：Hexadecimal address of source registers
- $R_D$：Hexadecimal address of destination register
- $M_S$：Hexadecimal address of source memory location
- $M_D$：Hexadecimal address of destination memory location
- $n$：Hexadecimal number
- $d_1$, $d_2$, $d_3$, $d_4$：First, second, third, and fourth hexadecimal digits
