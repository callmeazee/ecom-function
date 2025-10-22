
import { useSelector ,useDispatch} from "react-redux";
import { removeFromCart ,updateQuantity } from "../../redux/Slice/CartSlice";

const Cart = () => {
  const { items: cartItems, totalPrice } = useSelector((state) => state.cart);
useDispatch(state => console.log(state))
const dispatch = useDispatch()
  const handleRemoveItems = (id) => {
  dispatch(removeFromCart(id));
  }

  const handleIncrease = (id) => {
    dispatch(updateQuantity({ id, change: +1 }));
  };

  const handleDecrease = (id) => {
    dispatch(updateQuantity({ id, change: -1 }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart 🛍️</h2>
      {cartItems && cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded-xl p-4 mb-3 shadow-sm">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 rounded object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="px-2 py-1 border rounded-l hover:bg-gray-100">
                      −
                    </button>
                    <span className="px-3 border-t border-b text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="px-2 py-1 border rounded-r hover:bg-gray-100">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">
                  {/* ₹{item.price * item.quantity} */}
                </p>
                <button
                  onClick={() => handleRemoveItems(item.id)}
                  className="text-red-500 text-sm hover:underline mt-1">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <h3 className="text-lg font-semibold">
              Total: ₹{totalPrice.toFixed(2)}
            </h3>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Checkout
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-center py-8">Your cart is empty 🛒</p>
      )}
    </div>
  );
};

export default Cart;
