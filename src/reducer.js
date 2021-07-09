export const initialState = {
    basket: [{
        id:"12345",
        title:"Microsoft Surface Laptop 4 13.5” Touch-Screen – AMD Ryzen 5 Surface Edition - 16GB Memory - 256GB Solid State Drive (Latest Model) - Platinum",
        price: 1166.88,
        rating: 5,
        image: "https://lh3.googleusercontent.com/FtAQzgL4QbarKIjkfYuIw8h923I88uTBxnV4hgRZwhiPlOORpSiNJ0FffU_1Xq-oGNcyXiHx0QJt_5FGqzJVkbMDdszp3JibfSDp0VMHrBX5VOvPCFYYL_NOkJxfWYYhIUtDKsBlLg=w2400?source=screenshot.guru"
    }],
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            return { 
                ...state,
                basket: [...state.basket, action.item] 
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketIteam) => basketIteam.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
                newBasket.splice()
            } 
            return { ...state, basket: newBasket };
        default: 
            return state;
    }
}

export default reducer;