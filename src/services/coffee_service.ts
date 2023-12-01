// Recall that the job of a service is to encapsulate the business logic, and to ask the model layer for any data required to do that. In our case, we have no persistent data storage, and therefore no model layer. So the coffee service has a simple job: encode any logic to do with coffee.
// Any other logic to do with ‘coffee’ in this application as it grows would also be encapsulated in this service.

export const getCoffee = (name = 'Latte') => {
    return {
        drinkType: 'Coffee',
        name,
    };
};


export const getCoffeeLover = () => {
    return "I love coffee!"
};

export const getCoffeeAddict = () => {
    return "I'm a coffee addict!"
}