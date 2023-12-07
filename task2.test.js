const { expect } = require("chai")
const { func } = require("./task2")

describe('Task 2', () => {
    it('should return -1 when string is empty', () => {
        expect(func("", "", "")).to.equal(-1)
    })

    it('should return index of a', () => {
        expect(func("bca", "a", "c")).to.equal(2)
    })

    it('should return index of b', () => {
        expect(func("abc", "a", "c")).to.equal(2)
    })

    it('should return index of b if a is not found', () => {
        expect(func("bbc", "a", "c")).to.equal(2)
    })

    it('should return index of a if b is not found', () => {
        expect(func("abb", "a", "c")).to.equal(0)
    })
})