// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentIndex from './ApartmentIndex'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  const props = {
    apartments: [
      {
        id: 1,
        street: "2942 ratopolis lane",
        city: "Los Angeles",
        state: "California",
        manager: "Rat Lord",
        email: "biggestratwhoeatsallofthecheese@gmail.com", 
        price: "10 blocks of swiss", 
        bedrooms: "5", 
        bathrooms: "3", 
        pets: "no pets",
        image: "https://bloximages.chicago2.vip.townnews.com/ladowntownnews.com/content/tncms/assets/v3/editorial/3/82/3824715a-a4f7-11e9-a9ea-73ab3cf22228/5d290e93b22c8.image.jpg"
      }
    ]
  }
  let apartmentIndexRender
  beforeEach(() => {
    apartmentIndexRender = shallow(<ApartmentIndex {...props}/>)
  })

  it("displays a card from react bootstrap for each apartment ", () => {
    const apartmentIndexCard = apartmentIndexRender.find("Card")
    expect(apartmentIndexCard.length).toEqual(1)
  })

  it("displays a heading", () => {
    const apartmentIndex = shallow(<ApartmentIndex />)
    const apartmentIndexHeading = apartmentIndex.find("h1")
    expect(apartmentIndexHeading.text()).toEqual("Ratpartments:")
  })
})