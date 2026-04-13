// This pulls in the function from react so it lets us share data globally
import { createContext } from "react";

//This creates a container for the data we will hold for word cart.
const CartContext = createContext();

// This makes the container available to the rest of the files in the project.
export default CartContext;