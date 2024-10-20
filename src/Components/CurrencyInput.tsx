import { useState, useEffect } from "react";
import axios from "axios";

type Trates = Record<string, number>;

type Tobject = {
  rates: Trates;
};

const CurrencyInput = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromcurrency, setfromcurrency] = useState<string>("USD");
  const [tocurrency, settocurrency] = useState<string>("INR");
  const [exchangeRate, setExchangeRate] = useState<Trates>({});
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  function fetchData() {
    try {
      axios
        .get<Tobject>(
          `https://api.exchangerate-api.com/v4/latest/${fromcurrency}`
        )
        .then((response) => setExchangeRate(response.data.rates))
        .catch((error) => {
          throw new Error(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [fromcurrency]);

  useEffect(() => {
    const conversionRate = exchangeRate[tocurrency];

    if (conversionRate) {
      const convertedAmount = amount * conversionRate;
      setConvertedAmount(convertedAmount);
    }
  }, [amount, exchangeRate, fromcurrency, tocurrency]);

  return (
    <div>
      <div className="sm:flex sm:flex-row sm:gap-3 sm:mt-5 sm:ml-8">
        <div className="relative w-full mt-5 sm:w-fit sm:ml-10">
          <label className="text-2xl text-gray-500 ml-[36%] sm:ml-0 sm:text-gray-500 sm:font-bold">
            Amount:
          </label>{" "}
          <br />
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Enter Amount"
            className="border border-gray-600 ml-[20%] rounded-lg w-auto pl-1 text-center h-9 mt-2 sm:ml-0 sm:h-14 sm:border sm:border-gray-500"
          />{" "}
        </div>
        <br />
        <div className="-mt-2 relative sm:h-28 sm:mt-5 sm:w-[31%]">
          <label className="text-2xl text-gray-500 ml-[27%] sm:text-gray-500 sm:font-bold sm:ml-3">
            From Currency:
          </label>{" "}
          <br />
          <select
            name="currencies"
            value={fromcurrency}
            onChange={(e) => setfromcurrency(e.target.value)}
            id="currencies"
            className="border border-gray-400 ml-[20%] rounded-lg pl-1 text-center h-9 w-[60%] mt-2 sm:h-[50%] sm:w-[80%] sm:ml-3 sm:border sm:border-gray-500"
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>{" "}
        </div>
        <br />
        <div className="sm:h-28 sm:mt-5 sm:w-[26%] sm:-ml-7">
          <label className="text-2xl text-gray-500 ml-[29%] sm:text-gray-500 sm:font-bold sm:ml-3">
            To Currency:
          </label>{" "}
          <br />
          <select
            name="currencies"
            value={tocurrency}
            onChange={(e) => settocurrency(e.target.value)}
            id="currencies"
            className="border border-gray-400 ml-[20%] rounded-lg pl-1 text-center h-9 w-[60%] mt-2 relative z-10 sm:ml-3 sm:h-[50%] sm:w-[93%] sm:border sm:border-gray-500"
          >
            {Object.keys(exchangeRate).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>{" "}
        </div>
      </div>
      <br />
      <div className="text-center text-2xl ml-10 mr-10 bg-[#e8f8fd] rounded-lg h-24 pt-2 sm:mt-5 sm:w-[82%] sm:ml-[9%]">
        <span className="font-bold">Converted Amount:</span>
        <br />
        <p className="mt-3 font-medium">{convertedAmount?.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CurrencyInput;
