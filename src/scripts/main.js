const restaurant = {
        name: "Bob's Burgers",
        orders: [],
        placeOrder: function (meal) {
            this.orders.push(meal)
        },
        getAllOrders: function() {
            return this.orders
        }
    }


        const chickenComboMeal = {
            sandwichType: "chicken",
            fries: false,
            drinkSize: "medium"
        }

        const gyroComboMeal = {
            sandwichType: "gyro",
            fries: false,
            drinkSize: "medium"
        }

        const burgerComboMeal = {
            sandwichType: "burger",
            fries: true,
            drinkSize: "large"
        }

            


        // Place an order
        restaurant.placeOrder(chickenComboMeal)
        restaurant.placeOrder(gyroComboMeal)
        restaurant.placeOrder(burgerComboMeal)


        // Invoke the function to return the list of all orders
        restaurant.getAllOrders();

        // Output all orders to the console using console.table()

       console.table(restaurant.getAllOrders());


        /*const restaurant = {
            name: "Bob's Burgers",
            orders:[],
            placeOrder: function (meal) {
                this.orders.push(meal)

            //stuck here because error trying to call outputAllOrders
                
            function outputAllOrders() {
                    for (let i = 0; i < this.orders.length; i++) 
                    console.log("order " + i + restaurant.orders[i]) 
                }       
                    
            const chickenComboMeal = {
                        sandwichType: "chicken",
                        fries: false,
                        drinkSize: "medium" 
                    }
                    
            const gyroComboMeal = {
                        sandwichType: "gyro",
                        fries: false,
                        drinkSize: "medium"
                    }
                    
            const burgerComboMeal = {
                        sandwichType: "burger",
                        fries: true,
                        drinkSize: "large"
                    }
                    
        */