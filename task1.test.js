const { expect } = require("chai")
const { describe, it } = require("mocha")
const { verify } = require("./task1")

describe('Task 1', () => {
    it('---(++++)----', () => {
        expect(verify('---(++++)----')).to.equal(1)
    })

    it('""', () => {
        expect(verify("")).to.equal(1)
    })

    it('before ( middle []) after ', () => {
        expect(verify("before ( middle []) after ")).to.equal(1)
    })

    it('") ("', () => {
        expect(verify(") (")).to.equal(0)
    })

    it('<(   >)', () => {
        expect(verify("<(   >)")).to.equal(0)
    })

    it("(  [  <>  ()  ]  <>  )", () => {
        expect(verify("(  [  <>  ()  ]  <>  )")).to.equal(1)
    })

    it("   (      [)", () => {
        expect(verify("   (      [)")).to.equal(0)
    })
})