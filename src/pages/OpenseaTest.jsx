import { useEffect, useState } from "react";

const initialData = {
  total: {
    volume: 0,
    sales: 0,
    average_price: 0,
    num_owners: 0,
    market_cap: 0,
    floor_price: 0,
    floor_price_symbol: "ETH",
  },
};

function OpenseaTest() {
  const [isLoading, setIsLoading] = useState(false);
  const [nftStat, setNftStat] = useState(initialData);
  const value = process.env.get("OSK");

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": value,
    },
  };
  useEffect(function () {
    async function getNFTData() {
      setIsLoading(true);
      const res = await fetch(
        "https://api.opensea.io/api/v2/collections/hunt-town/stats",
        options,
      );
      const data = await res.json();
      // .then((response) => response.json())
      // .then((response) => console.log(response))
      // .catch((err) => console.error(err));
      console.log(data);
      setNftStat(data);
      setIsLoading(false);
    }
    getNFTData();
  }, []);

  return (
    <div>
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          <span>Total Volume: </span>
          <span>{nftStat.total.volume}</span>
        </div>
      )}
    </div>
  );
}

export default OpenseaTest;
