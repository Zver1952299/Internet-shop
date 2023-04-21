import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: "Ноутбуки"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Телевизоры"},
            {id: 4, name: "Аудиосистемы"},
            {id: 5, name: "Мониторы"},
            {id: 6, name: "Периферия"}
        ];
        this._brands = [
            {id: 1, name: "Apple"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Nokia"},
            {id: 4, name: "Lenovo"},
            {id: 5, name: "Xiaomi"}
        ];
        this._devices = [
            {id: 1, name: "Iphone 12 pro", price: 100000, rating: 5, img: 'https://www.cultofmac.com/wp-content/uploads/2020/03/iphone-12-pro-concept-scaled.jpg '},
            {id: 2, name: "Iphone 12 pro", price: 100000, rating: 5, img: 'https://www.cultofmac.com/wp-content/uploads/2020/03/iphone-12-pro-concept-scaled.jpg '},
            {id: 3, name: "Iphone 12 pro", price: 100000, rating: 5, img: 'https://www.cultofmac.com/wp-content/uploads/2020/03/iphone-12-pro-concept-scaled.jpg '},
            {id: 4, name: "Iphone 12 pro", price: 100000, rating: 5, img: 'https://www.cultofmac.com/wp-content/uploads/2020/03/iphone-12-pro-concept-scaled.jpg '},
            {id: 5, name: "Iphone 12 pro", price: 100000, rating: 5, img: 'https://www.cultofmac.com/wp-content/uploads/2020/03/iphone-12-pro-concept-scaled.jpg '},
            {id: 6, name: "Iphone 12 pro", price: 100000, rating: 5, img: 'https://www.cultofmac.com/wp-content/uploads/2020/03/iphone-12-pro-concept-scaled.jpg '}
        ];
        this._selectedType = {};
        this._selectedBrand = {};
        makeAutoObservable(this); 
    }

    setIsTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }
    
    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand;
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedBrand() {
        return this._selectedBrand;
    }
}