function generate(numRows: number): number[][] {
    let output = []
    
    for(let i=0; i<numRows; i++) {
        if(i==0) {
            output.push([1])
            continue;
        }
        
        // create line
        let line = [1]
        for(let j=0; j<i-1; j++) {
            const left  = output[i-1][j]
            const right = output[i-1][j+1]
            line.push(left+right)
        }
        line.push(1)
        
        // push
        output.push(line)
    }

    return output
};

