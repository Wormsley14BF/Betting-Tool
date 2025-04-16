
// (continued file)
// Enhancing with bankroll tracking and market filter

import { useMemo } from "react";

// Add bankroll logic
const startingBankroll = 100;
const bankrollByDate = useMemo(() => {
  let current = startingBankroll;
  const data = {};
  labels.forEach((date) => {
    current += parseFloat(profitData[labels.indexOf(date)]);
    data[date] = current.toFixed(2);
  });
  return data;
}, [labels, profitData]);

const bankrollSeries = Object.values(bankrollByDate);

// Extend analytics tab to show bankroll progression
<TabsContent value="analytics">
  <Card>
    <CardContent className="p-4 space-y-4">
      <h2 className="text-xl font-semibold">Performance Analytics</h2>
      <p>Total Staked: £{totalStaked.toFixed(2)}</p>
      <p>Total Returned: £{totalReturned.toFixed(2)}</p>
      <p>ROI: {roi}%</p>
      <p>Current Bankroll: £{bankrollSeries[bankrollSeries.length - 1]}</p>
      <Line
        data={{
          labels,
          datasets: [
            {
              label: "Daily Profit",
              data: profitData,
              borderColor: "#4ade80",
              backgroundColor: "#bbf7d0",
              tension: 0.3,
            },
            {
              label: "Bankroll",
              data: bankrollSeries,
              borderColor: "#60a5fa",
              backgroundColor: "#dbeafe",
              tension: 0.3,
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: { position: "top" },
            title: { display: true, text: "Daily Profit and Bankroll" },
          },
        }}
      />
    </CardContent>
  </Card>
</TabsContent>;
