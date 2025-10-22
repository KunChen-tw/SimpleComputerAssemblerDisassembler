function parseInstruction(hexcode) {
    const opcodeMap = {
        0: 'HALT',
        1: 'LOAD',
        2: 'STORE',
        3: 'ADDI',
        4: 'ADDF',
        5: 'MOVE',
        6: 'NOT',
        7: 'AND',
        8: 'OR',
        9: 'XOR',
        0xA: 'INC',
        0xB: 'DEC',
        0xC: 'ROTATE',
        0xD: 'JUMP'
    };
    hexcode = hexcode.trim().toUpperCase();
    if (hexcode.length !== 4) return `INVALID(${hexcode})`;
    let d1 = parseInt(hexcode[0], 16);
    let d2 = parseInt(hexcode[1], 16);
    let d3 = parseInt(hexcode[2], 16);
    let d4 = parseInt(hexcode[3], 16);
    let opcode = opcodeMap[d1] || `UNKNOWN_${d1}`;
    // 十進制暫存器
    let reg2 = d2.toString(10);
    let reg3 = d3.toString(10);
    let reg4 = d4.toString(10);
    // 十六進制記憶體位置
    let mem = "M" + hexcode.slice(2); // 例如 FE -> MFE
    let mem2 = "M" + hexcode.slice(1,3); // 例如 40 -> M40
    let jump_addr = "M" + hexcode.slice(2,4);
    if (opcode === 'HALT') return "HALT";
    if (opcode === 'LOAD') return `LOAD R${reg2}, ${mem}`;
    if (opcode === 'STORE') return `STORE ${mem2}, R${reg4}`;
    if (opcode === 'ADDI') return `ADDI R${reg2}, R${reg3}, R${reg4}`;
    if (opcode === 'ADDF') return `ADDF R${reg2}, R${reg3}, R${reg4}`;
    if (opcode === 'MOVE') return `MOVE R${reg2}, R${reg3}`;
    if (opcode === 'NOT') return `NOT R${reg2}, R${reg3}`;
    if (opcode === 'AND') return `AND R${reg2}, R${reg3}, R${reg4}`;
    if (opcode === 'OR') return `OR R${reg2}, R${reg3}, R${reg4}`;
    if (opcode === 'XOR') return `XOR R${reg2}, R${reg3}, R${reg4}`;
    if (opcode === 'INC') return `INC R${reg2}`;
    if (opcode === 'DEC') return `DEC R${reg2}`;
    if (opcode === 'ROTATE') return `ROTATE R${reg2}, ${reg3}`;
    if (opcode === 'JUMP') return `JUMP R${reg2}, ${jump_addr}`;
    return `UNKNOWN(${hexcode})`;
}

function disassemble(inputText) {
    let lines = inputText.split('\n');
    let output = lines.map(line => {
        line = line.trim();
        if (!line) return '';
        return parseInstruction(line);
    }).join('\n');
    return output;
}