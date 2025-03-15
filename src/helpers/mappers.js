
const fieldMapper = (data) => {
  const {
    "Order ID": order_id,
    "Product ID": product_id,
    "Customer ID": customer_id,
    "Product Name": product_name,
    Category: category,
    Region: region,
    "Date of Sale": purchased_at,
    "Quantity Sold": quantity,
    "Unit Price": unit_price,
    Discount: discount,
    "Shipping Cost": shipping_cost,
    "Payment Method": payment_method,
    "Customer Name": customer_name,
    "Customer Email": customer_email,
    "Customer Address": customer_address,
  } = data;

  const [first_name, ...lastNameParts] = customer_name.split(" ") || [];
  const last_name = lastNameParts.join(" ");

  const [street, city, postal_code] = customer_address.split(",");
  const address_id = `${customer_id}-${order_id}`;

  return {
    customer: {
      customer_id: customer_id,
      first_name,
      last_name,
      email: customer_email,
    },
    customer_address: {
      address_id: address_id,
      customer_id: customer_id,
      is_primary: true,
      street: street.trim(),
      city: city.trim(),
      postal_code: postal_code.trim(),
      region,
    },
    product: {
      product_id: product_id,
      name: product_name,
      category,
      price: parseFloat(unit_price),
      discount: parseFloat(discount) || 0,
    },
    order: {
      order_id: order_id,
      product_id: product_id,
      customer_id: customer_id,
      delivery_address_id: address_id,
      purchased_at: new Date(purchased_at),
      quantity: parseInt(quantity),
      discount: parseFloat(discount) || 0,
      shipping_cost: parseFloat(shipping_cost),
      payment_method,
      region,
    },
  };
};

module.exports = {
  fieldMapper,
};
