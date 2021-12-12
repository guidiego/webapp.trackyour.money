export default function handler(req, res) {
  res.status(200).json({
    count: 2,
    hasNext: false,
    results: [
      {
        id: 1,
        kind: "account",
        name: "Commerzbank",
        value: 2000,
      },
      {
        id: 2,
        kind: "wallet",
        name: "My Wallet",
        value: 200,
      },
    ],
  });
}
