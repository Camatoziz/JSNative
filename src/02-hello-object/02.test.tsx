import {mult, sum} from './02';

let a:number
let b:number
let c:number

beforeEach(()=>{
    a=1
    b=2
    c=3
})

test("Should be correct sum", ()=>{
    //data

    //action
    const result1 = sum(a, b)
    const result2 = sum(c, b)


    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(5)
})

test("Should be correct multiply", ()=>{
    //data

    //action
    const result1 = mult(a, b)
    const result2 = mult(c, b)


    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)
})