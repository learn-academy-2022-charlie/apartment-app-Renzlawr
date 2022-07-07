// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentIndexProtected from './ApartmentIndexProtected'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndexProtected renders", () => {
  const props = {
    apartments: [
      {
        id: 1,
        street: "1234 this is a test",
        city: "chicken",
        state: "Kentucky",
        manager: "Colonel Sanders",
        email: "fingerlickingood@kfc.com", 
        price: "$2000", 
        bedrooms: "3", 
        bathrooms: "2", 
        pets: "chickens allowed, however they may go missing",
        image: "https://dynl.mktgcdn.com/p/r5XbuSxbUYgVfHDYkzTVPNc8_SXK-xHiHzBpy3SW2p0/1900x1425.jpg",
        user_id: 2
      }
    ],
    user: {
      id: 2,
      email: "test2@gmail.com"
    }
  }

  let ApartmentIndexProtectedRender
  beforeEach(() => {
    ApartmentIndexProtectedRender = shallow(<ApartmentIndexProtected {...props}/>)
  })

  it("displays a card from react bootstrap for each apartment ", () => {
    const ApartmentIndexProtectedCard = ApartmentIndexProtectedRender.find("Card")
    expect(ApartmentIndexProtectedCard.length).toEqual(1)
  })
})