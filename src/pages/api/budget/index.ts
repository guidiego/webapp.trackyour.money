export default function handler(req, res) {
  res.status(200).json({
    results: [
      {
        id: 1,
        name: "Eletricity",
        used: 150,
        total: 150,
      },
      {
        id: 2,
        name: "Water",
        used: 0,
        total: 100,
      },
    ],
  });
}
