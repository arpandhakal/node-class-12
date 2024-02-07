exports.getAllUsers = (req, res) => {
  const dummyData = [
    { name: "arpan", org: "wft" },
    { name: "saurav", org: "dwit" },
  ];
  res.status(200).json(dummyData);
};
