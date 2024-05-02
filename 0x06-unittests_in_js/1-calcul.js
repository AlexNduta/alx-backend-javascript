/*
 * function calculateNumber
 * aruments: a, b
 * round a & b
 * return sum of a and b
 */
module.exports = {
    calculateNumber: (type, a, b)=> {
        if (typeof type !== 'string'|| !['SUM', 'SUBTRACT', 'DIVIDE']){
            throw new ERROR('Invalid operation type');
        }
        const rounded_a = Math.round(a);
        const rounded_b = Math.round(b);

        list_operations = ['SUM', 'SUBTRACT', 'DIVIDE'];

        switch(type){
            case 'SUM':
                return rounded_a + rounded_b;
            case 'SUBTRACT':
                return rounded_a - rounded_b;
            case 'DIVIDE':
                result = rounded_a / rounded_b;
                if(rounded_b === 0){
                   throw new Error('Division by Zero');
                } else {
                   return result;
                }
            default:
                throw new Error('Unsupported operation type');
        }
        }
}
