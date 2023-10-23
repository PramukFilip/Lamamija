const pizzaCreateDtoIn = {
    nazov: "",      
    popis: "",     
    cena: 0.0,    
    img: ""         
};

const pizzaValidationTypesDtoIn = {
    name: { type: "string", minLength: 1, maxLength: 50, required: true },
    text: { type: "string", minLength: 1, maxLength: 1000, required: true },
    cena: { type: "float", required: true },
    img: { type: "string", maxLength: 50, required: true }
};

const pizzaCreateDtoOut = {
    id: "",      
    nazov: "", 
    popis: "",  
    cena: 0.0,   
    img: null   
};

const pizzaGetDtoIn = {
    id: "",      
    nazov: "", 
    popis: "",  
    cena: 0.0,   
    img: ""  
};

const pizzaListDtoIn = {
    id: "",      
    nazov: "", 
    popis: "",  
    cena: 0.0,   
    img: "" 
};

const pizzaDeleteDtoIn = {
    nazov: ""
};