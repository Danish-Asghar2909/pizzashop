Pizza Order Management System
This project is a Pizza Order Management System implemented using React and Redux. It allows users to place pizza orders, track their progress through different stages, and manage the overall order flow.

Features
Pizza Form: Users can place new pizza orders by specifying the type (Veg/Non-Veg), size (Small/Medium/Large), and base (Thin/Thick).

Order Stages: Orders go through different stages - "Order Placed," "Order in Making," "Order Ready," and "Order Picked."

Order Tracking: Each order is displayed in a card format with details like Order ID, Type, Size, Base, and time spent in each stage. Users can move orders to the next stage or cancel them.

Time Tracking: The system tracks the time spent in each stage and displays it alongside the order details.

Main Component: There's a main component that provides an overview of all orders, including Order ID, current stage, total time spent, and actions (Next/Cancel).

Project Structure
components: Contains reusable components like Timer.
containers: Houses main components such as PizzaStages and MainComponent.
redux: Manages state using Redux, with actions, reducers, and the store.
styles: Holds CSS files for styling the components.
App.js: The main entry point of the application, where components are organized and rendered.
Setup Instructions
Clone the repository.

bash
Copy code
git clone https://github.com/Danish-Asghar2909/pizzashop.git
cd pizza-order-management
Install dependencies.

bash
Copy code
npm install
Run the application.

bash
Copy code
npm start
Access the application at https://pizzashop-2909.netlify.app/ in your browser.

Feel free to explore and enhance the project based on your requirements.