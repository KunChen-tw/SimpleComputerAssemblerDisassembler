function assembleInstruction(asmLine) {
    try {
        let line = asmLine.trim().replace(/,/g, '').replace(/\s+/g, ' ');
        if (!line) return '';
        let tokens = line.split(' ');
        let inst = tokens[0].toUpperCase();

        // 指令對應
        const opcodeMap = {
            'HALT': 0,
            'LOAD': 1,
            'STORE': 2,
            'ADDI': 3,
            'ADDF': 4,
            'MOVE': 5,
            'NOT': 6,
            'AND': 7,
            'OR': 8,
            'XOR': 9,
            'INC': 0xA,
            'DEC': 0xB,
            'ROTATE': 0xC,
            'JUMP': 0xD
        };

        let opcode = opcodeMap[inst];
        if (opcode === undefined) return '????';

        // 各指令格式
        if (inst === 'HALT') {
            return '0000';
        }
        if (inst === 'LOAD') {
            // LOAD Rn, MXX
            let r = tokens[1].replace('R', '');
            let addr = tokens[2].replace(/^M/, '').toUpperCase().padStart(2, '0');
            let r_val = parseInt(r, 10);
            return `${opcode.toString(16)}${r_val.toString(16).toUpperCase()}${addr}`.toUpperCase();
        }
        if (inst === 'STORE') {
            // STORE MXX, Rn
            let addr = tokens[1].replace(/^M/, '').toUpperCase().padStart(2, '0');
            let r = tokens[2].replace('R', '');
            let r_val = parseInt(r, 10);
            return `${opcode.toString(16)}${addr}${r_val.toString(16).toUpperCase()}`.toUpperCase();
        }
        if (inst === 'ADDI' || inst === 'ADDF' || inst === 'AND' || inst === 'OR' || inst === 'XOR') {
            // ADDI Rd, Rs1, Rs2
            let rd = tokens[1].replace('R', '');
            let rs1 = tokens[2].replace('R', '');
            let rs2 = tokens[3].replace('R', '');
            let rd_val = parseInt(rd, 10), rs1_val = parseInt(rs1, 10), rs2_val = parseInt(rs2, 10);
            return `${opcode.toString(16)}${rd_val.toString(16).toUpperCase()}${rs1_val.toString(16).toUpperCase()}${rs2_val.toString(16).toUpperCase()}`.toUpperCase();
        }
        if (inst === 'MOVE' || inst === 'NOT') {
            // MOVE Rd, Rs
            let rd = tokens[1].replace('R', '');
            let rs = tokens[2].replace('R', '');
            let rd_val = parseInt(rd, 10), rs_val = parseInt(rs, 10);
            return `${opcode.toString(16)}${rd_val.toString(16).toUpperCase()}${rs_val.toString(16).toUpperCase()}0`.toUpperCase();
        }
        if (inst === 'INC' || inst === 'DEC') {
            // INC Rn
            let r = tokens[1].replace('R', '');
            let r_val = parseInt(r, 10);
            return `${opcode.toString(16)}${r_val.toString(16).toUpperCase()}00`.toUpperCase();
        }
        if (inst === 'ROTATE') {
            // ROTATE Rn, n
            let r = tokens[1].replace('R', '');
            let n = tokens[2];
            let r_val = parseInt(r, 10), n_val = parseInt(n, 10);
            return `${opcode.toString(16)}${r_val.toString(16).toUpperCase()}${n_val.toString(16).toUpperCase()}0`.toUpperCase();
        }
        if (inst === 'JUMP') {
            // JUMP Rn, MXX
            let r = tokens[1].replace('R', '');
            let xx = tokens[2].replace(/^M/, '').toUpperCase().padStart(2, '0');
            let r_val = parseInt(r, 10);
            return `${opcode.toString(16)}${r_val.toString(16).toUpperCase()}${xx}`.toUpperCase();
        }
        return '????';
    } catch (e) {
        return '????';
    }
}

function assemble(inputText) {
    let lines = inputText.split('\n');
    let output = lines.map(line => {
        let asm = line.trim();
        if (!asm) return '';
        let code = assembleInstruction(asm);
        return code;
    }).join('\n');
    return output;
}