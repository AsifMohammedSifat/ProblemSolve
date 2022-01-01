const vaxTrail = inputArray => {
    if(!Array.isArray(inputArray)) {
        return "Invalid input"
    }
    const ans = {
        A: [],
        B: [],
        C: [],
        D: []
    }
    inputArray.forEach(input=> {
        if(input.age >= 20 && input.age <= 30 && input.temperature < 100) {
            ans.A.push(input);
        } else if(input.age >= 31 && input.age <= 40 && input.temperature < 100) {
            ans.B.push(input);
        } else if(input.age >= 41 && input.age <= 50 && input.temperature < 100) {
            ans.C.push(input);
        } else if(input.temperature >= 100){
            ans.D.push(input);
        }
    })
    for(key in ans) {
        ans[key] = ans[key].sort(function(a, b) {
            if(a.age %2 === 0) return -1;
            else return 1;
        });
    }
    return ans;
}

// input 
const result=vaxTrail([
    { name: 'sunil', age: 40, temperature: 98 },
    { name: 'Biplap', age: 22, temperature: 98 },
    ])

// print result 
console.log(result);