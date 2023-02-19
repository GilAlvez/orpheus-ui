const gridColumns = {
  0: "none",
  1: "repeat(1, minmax(0, 1fr))",
  2: "repeat(2, minmax(0, 1fr))",
  3: "repeat(3, minmax(0, 1fr))",
  4: "repeat(4, minmax(0, 1fr))",
  5: "repeat(5, minmax(0, 1fr))",
  6: "repeat(6, minmax(0, 1fr))",
  7: "repeat(7, minmax(0, 1fr))",
  8: "repeat(8, minmax(0, 1fr))",
  9: "repeat(9, minmax(0, 1fr))",
  10: "repeat(10, minmax(0, 1fr))",
  11: "repeat(11, minmax(0, 1fr))",
  12: "repeat(12, minmax(0, 1fr))",
}

export const _gridColumns = (value: keyof typeof gridColumns) => ({
  gridTemplateColumns: gridColumns[value]
})

const scale = {
  0: "0",
  50: ".5",
  75: ".75",
  90: ".9",
  95: ".95",
  100: "1",
  105: "1.05",
  110: "1.1",
  125: "1.25",
  150: "1.5",
  175: "1.75",
  200: "2",
};

export const _scale = (value: keyof typeof scale) => ({
  transform: `scale(${scale[value]})`
})


