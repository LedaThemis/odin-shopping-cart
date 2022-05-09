import '../styles/CheckoutItem.css';

const CheckoutItem = ({ title, price, count }) => {
  return (
    <div className="checkout--item">
      <p>
        {count} of {title}, each for {price}$, so a total of {price * count}$
      </p>
    </div>
  );
};

export default CheckoutItem;
