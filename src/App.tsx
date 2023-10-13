import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Forms";
import Expensefilter from "./components/Expensefilter";
import Star from "./components/star";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpense] = useState([
    { id: 1, description: "descripotion", amount: 10, category: "Utilities" },
    { id: 2, description: "new", amount: 10, category: "Utilities" },
    { id: 3, description: "add", amount: 10, category: "Utilities" },
    { id: 4, description: "newtake", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <>
      <div>
        <Form onSubmit={(data) => console.log(data)} />
        <div className="mb-3">
          <Expensefilter
            onSelectCategory={(category) => setSelectedCategory(category)}
          />
        </div>
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => setExpense(expenses.filter((e) => e.id !== id))}
        />
      </div>
    </>
  );
};

export default App;
