import { ProxyState } from "../AppState"


function _drawHouses() {
    let housesTemplate = ''
    

    ProxyState.houses.forEach(h => housesCardsTemplate += house.HouseTemplate)

    document.getElementById('listings').innerHTML = `
        <div class="row houses">
            ${housesCardsTemplate}
        </div>    
    `

    document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
}   


export class HousesController {
    constructor({bedrooms, bathrooms, levels, imgUrl, year, price, description, id}){
        this.id = id
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.imgUrl = imgUrl
        this.year = year
        this.price = price
        this.description = description
    }
}


async 