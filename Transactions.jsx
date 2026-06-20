
function Transactions() {
  const data = [
    { id: 1, customer: "John", amount: "$120", status: "Paid" },
    { id: 2, customer: "Sarah", amount: "$250", status: "Paid" },
    { id: 3, customer: "Alex", amount: "$75", status: "Pending" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-8">
      <h2 className="text-xl font-bold mb-4">
        Recent Transactions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="border-b h-12">
              <td>{item.customer}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;