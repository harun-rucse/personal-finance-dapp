import React, { useState, useContext, useEffect } from "react";
import Layout from "../components/layouts/Layout";
import BudgetModal from "../components/modal/BudgetModal";
import { AppContext } from "../context/AppContext";

const Expense = ({ title, amount }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <p className="text-2xl font-bold text-red-600">-</p>
      <p className="text-xl text-gray-300">{title}</p>
      <p className="text-xl text-gray-100 font-semibold">{`$ ${amount}`}</p>
    </div>
  );
};

const Income = ({ title, amount }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <p className="text-2xl font-bold text-green-600">+</p>
      <p className="text-xl text-gray-300">{title}</p>
      <p className="text-xl text-gray-100 font-semibold">{`$ ${amount}`}</p>
    </div>
  );
};

const Home = () => {
  const {
    showModal,
    changeModalState,
    expenses,
    incomes,
    addExpense,
    addIncome,
  } = useContext(AppContext);
  const [type, setType] = useState("");
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // calculate current balance based on expenses and incomes
    const totalExpenses = expenses.reduce(
      (acc, expense) => Number(acc) + Number(expense.amount),
      0
    );
    const totalIncomes = incomes.reduce(
      (acc, income) => Number(acc) + Number(income.amount),
      0
    );
    console.log({ totalIncomes, totalExpenses });

    setBalance(totalIncomes - totalExpenses);
  }, [expenses, incomes]);

  const handleAddExpense = () => {
    changeModalState(true);
    setType("expense");
  };

  const handleAddIncome = () => {
    changeModalState(true);
    setType("income");
  };

  const handleSubmit = (title, amount) => {
    if (type === "expense") {
      addExpense({ title, amount });
    } else if (type === "income") {
      addIncome({ title, amount });
    }

    changeModalState(false);
  };

  return (
    <Layout>
      <div className="bg-white py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {new Date().toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              This is a sample of a monthly budget. You can use this to track
              your expenses and income.
            </p>
          </div>
          <div className="mx-auto mt-16 md:w-1/2">
            {/* Map all expresess and income */}
            <div>
              <div className="flex flex-col gap-8 md:flex-row md:gap-0 justify-between items-start bg-gray-800 p-4 rounded-lg">
                <div>
                  <p className="text-2xl text-gray-100 mb-4">Expenses</p>
                  {expenses?.map((expense, i) => (
                    <Expense
                      key={i}
                      title={expense.title}
                      amount={expense.amount}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-2xl text-gray-100 mb-4">Incomes</p>
                  {incomes?.map((income, i) => (
                    <Income
                      key={i}
                      title={income.title}
                      amount={income.amount}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 items-center mt-10">
                <button
                  className="w-7 h-7 bg-red-600 rounded-full text-white flex justify-center items-center"
                  onClick={handleAddExpense}
                >
                  -
                </button>
                <p className="text-2xl font-semibold text-gray-800">
                  Balance: $ {balance}
                </p>
                <button
                  className="w-7 h-7 bg-green-600 rounded-full text-white flex justify-center items-center"
                  onClick={handleAddIncome}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BudgetModal
        show={showModal}
        handleOnCancel={() => changeModalState(false)}
        handleOnSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default Home;
