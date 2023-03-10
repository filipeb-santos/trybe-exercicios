const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const message = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, número ${order.address.number}, AP: ${order.address.apartment} `;
    return message
  };
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    order.name = 'Luiz Silva';
    const margueritaPrice = order.order.pizza.marguerita.price;
    const pepperoniPrice = order.order.pizza.pepperoni.price;
    const cokePrice = order.order.drinks.coke.price;
    const conta = margueritaPrice + pepperoniPrice + cokePrice;
    const message = `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é de R$ ${conta}`;
    return message
  
  };
  
  console.log(orderModifier(order));