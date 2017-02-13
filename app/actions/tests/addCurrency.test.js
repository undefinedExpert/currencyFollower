// TODO: Write a test for action
import { addCurrency } from '../addCurrency'

describe('addCurrency Action', () => {
  let fixture
  beforeEach(() => {
    fixture = 'eslotwinski'
  })

  it('should call test action', () => {
    const expected = {
      type: 'TEST',
      text: fixture
    }

    expect(addCurrency(fixture)).to.eql(expected)
  })
  
})



