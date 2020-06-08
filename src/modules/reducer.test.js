import reducer from './reducer'
import { ADD, EDIT, DELETE } from './constant'

describe('items reducer', () => {
  // default case
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle ADD', () => {
    // empty state
    expect(
      reducer([], {
        type: ADD,
        id: 1,
        item: {
          name: 'hello',
          quantity: 1,
          price: 1,
          total: 1
        }
      })
    ).toEqual([
      {
        id: 1,
        name: 'hello',
        quantity: 1,
        price: 1,
        total: 1
      }
    ])

    // check if adding maintains order of items
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'hello',
            quantity: 1,
            price: 1,
            total: 1
          }
        ],
        {
          type: ADD,
          id: 2,
          item: {
            name: 'world',
            quantity: 0,
            price: 0,
            total: 0
          }
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'hello',
          quantity: 1,
          price: 1,
          total: 1
        },
        {
          id: 2,
          name: 'world',
          quantity: 0,
          price: 0,
          total: 0
        },
      ]
    )
  })

  it('should handle EDIT', () => {
    // empty state
    expect(
      reducer([], {
        type: EDIT,
        id: 1,
        item: {
          name: 'hello',
          quantity: 1,
          price: 1,
          total: 1
        }
      })
    ).toEqual([])

    // failing edit
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'hello',
            quantity: 1,
            price: 1,
            total: 1
          }
        ],
        {
          type: EDIT,
          id: 2,
          item: {
            name: 'world',
            quantity: 0,
            price: 0,
            total: 0
          }
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'hello',
          quantity: 1,
          price: 1,
          total: 1
        }
      ]
    )
    
    // successful edit
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'hello',
            quantity: 1,
            price: 1,
            total: 1
          }
        ],
        {
          type: EDIT,
          id: 1,
          item: {
            name: 'world',
            quantity: 0,
            price: 0,
            total: 0
          }
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'world',
          quantity: 0,
          price: 0,
          total: 0
        }
      ]
    )

    // check if edit maintains order of items
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'hello',
            quantity: 1,
            price: 1,
            total: 1
          },
          {
            id: 3,
            name: 'magic',
            quantity: 0,
            price: 0,
            total: 0
          }
        ],
        {
          type: EDIT,
          id: 1,
          item: {
            name: 'world',
            quantity: 0,
            price: 0,
            total: 0
          }
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'world',
          quantity: 0,
          price: 0,
          total: 0
        },
        {
          id: 3,
          name: 'magic',
          quantity: 0,
          price: 0,
          total: 0
        }
      ]
    )
  })

  it('should handle DELETE', () => {
    // empty state
    expect(
      reducer([], {
        type: DELETE,
        id: 1
      })
    ).toEqual([])

    // failing delete
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'hello',
            quantity: 1,
            price: 1,
            total: 1
          }
        ],
        {
          type: DELETE,
          id: 2
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'hello',
          quantity: 1,
          price: 1,
          total: 1
        }
      ]
    )

    // successful delete
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'hello',
            quantity: 1,
            price: 1,
            total: 1
          }
        ],
        {
          type: DELETE,
          id: 1
        }
      )
    ).toEqual([])

    // check if delete maintains order of items
    expect(
      reducer(
        [
          {
            id: 1,
            name: 'hello',
            quantity: 1,
            price: 1,
            total: 1
          },
          {
            id: 2,
            name: 'world',
            quantity: 1,
            price: 1,
            total: 1
          },
          {
            id: 3,
            name: 'magic',
            quantity: 1,
            price: 1,
            total: 1
          }
        ],
        {
          type: DELETE,
          id: 2
        }
      )
    ).toEqual(
      [
        {
          id: 1,
          name: 'hello',
          quantity: 1,
          price: 1,
          total: 1
        },
        {
          id: 3,
          name: 'magic',
          quantity: 1,
          price: 1,
          total: 1
        }
      ]
    )
  })
})