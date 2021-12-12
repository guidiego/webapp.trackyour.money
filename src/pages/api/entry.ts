export default function handler(req, res) {
  res.status(200).json({
    count: 2,
    hasNext: false,
    results: [
      {
        id: 1,
        value: 1000,
        kind: "add",
        description: "Primark asdasd ijasidj asoi jdisjd soijd aosijd",
      },
      {
        id: 2,
        value: 1000,
        kind: "remove",
        description: "Primark asdasd ijasidj asoi jdisjd soijd aosijd",
      },
    ],
  });
}
