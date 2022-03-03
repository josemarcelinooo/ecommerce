import { createContext } from "react";
// this module was created to provide the necessary information about the user/client who is using the app.

// 1. Create the context about the topic.
	// createContext() will allow us to create a context "object" that will allow us to store information about the subject.
const UserContext = createContext();

// 2. Acquire for the provider property of the newly created context object.
	// visualize:
	// UserContext = {
	// 	propsAboutTheUser: value
	 	// Provider:
	// }
	// Provider => this will allow us to use its utility to permit subcomponents of our app to consume/use the available information about our subject.
export const UserProvider = UserContext.Provider;

// 3. Identify the module on your app who will take the mantle/role of the provider.

// Consumers