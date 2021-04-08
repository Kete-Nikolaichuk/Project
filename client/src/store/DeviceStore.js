import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
       this._types = [
           {id: 1, name: 'Refrigerators'},
           {id: 2, name: 'Cell Phones'},
           {id: 3, name: 'Laptops'},
           {id: 4, name: 'TV'}
       ]
       this._brands = [
        {id: 1, name: 'Apple'},
        {id: 2, name: 'Samsung'},
        {id: 3, name: 'Lenovo'},
        {id: 4, name: 'Asus'}
        
       ]
       this._devices = [
           
        {id:1, name: "12 pro", price: 1500, rating: 5, img: "https://purposechurch.com/wp-content/uploads/2021/03/Rooted-HOMEPAGE-SQUARE.jpg" },
        {id:2, name: "A 7", price: 1500, rating: 5, img: "https://purposechurch.com/wp-content/uploads/2021/03/Rooted-HOMEPAGE-SQUARE.jpg" },
        {id:3, name: "A", price: 1500, rating: 5, img: "https://purposechurch.com/wp-content/uploads/2021/03/Rooted-HOMEPAGE-SQUARE.jpg" },
        {id:4, name: "S 8", price: 1500, rating: 5, img: "https://purposechurch.com/wp-content/uploads/2021/03/Rooted-HOMEPAGE-SQUARE.jpg" },
        {id:5, name: "S g", price: 150, rating: 5, img: "https://purposechurch.com/wp-content/uploads/2021/03/Rooted-HOMEPAGE-SQUARE.jpg" },
       ]
       this._selectedType = {}
       this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType () {
        return this._selectedType
    }
    get selectedBrand () {
        return this._selectedBrand
    }
}
