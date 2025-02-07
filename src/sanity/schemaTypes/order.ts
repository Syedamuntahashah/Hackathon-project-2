

export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string'
      },
      {
        name: 'lastName',
        title: 'Last Name',
        type: 'string',
      },
      {
        name: 'companyName',
        title: 'Company Name',
        type: 'string'
      },
      {
        name: 'countryRegion',
        title: 'Country / Region',
        type: 'string'
      },
      {
        name: 'streetAddress',
        title: 'Street Address',
        type: 'string'
      },
      {
        name: 'city',
        title: 'Town / City',
        type: 'string'
    
      },
      {
        name: 'province',
        title: 'Province',
        type: 'string'

      },
      {
        name: 'zipCode',
        title: 'ZIP Code',
        type: 'string'
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email Address',
        type: 'string',
      },
      {
        name: 'additionalInformation',
        title: 'Additional Information',
        type: 'text',
        description: 'Any additional information provided by the customer.',

      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'number',
        description: 'The discount applied to the order.'
      },
      {
        name: 'total',
        title: 'Total',
        type: 'number',
        description: 'The total order amount.'
      },
      {
        name: 'orderDate',
        title: 'Order Date',
        type: 'datetime',
        description: 'The date and time when the order was placed.'
        // If you prefer to keep the field name "orderData", then change the "name" to "orderData".
      },
      {
         name: 'cartItems',
         title: 'Cart Items',
         type: 'array',
         of : [{ type: 'reference', to : { type: 'product' }}]
      },
     {
       name: 'status',
        title: 'Order Status',
        type: 'string',
       options: {
        list: [
          { title: 'Pending', value: 'pending' },
           { title: 'Processed', value: 'processed' },
           { title: 'Shipped', value: 'shipped' },
           { title: 'Delivered', value: 'delivered' },
           { title: 'Cancelled', value: 'cancelled' }
         ],
         layout : 'radio',
        },
        initialValue: 'pending',
     },
      
    ]
  };
  