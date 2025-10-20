const products = [
  { name: "Sản phẩm 1", price: 100000 },
  { name: "Sản phẩm 2", price: 200000 },
  { name: "Sản phẩm 3", price: 150000 },
];
const productsChild = products.map((productsChild, index) => {
  return React.createElement(
    "li",
    { key: `${index}` },
    `${productsChild.name} - ${productsChild.price.toLocaleString()}đ`
  );
});
const wrapper = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "button",
    {
      className: "btn",
      onClick: () => {
        alert("Bạn đã nhấn button!");
      },
    },
    "Nhấn tôi"
  ),
  React.createElement(
    "div",
    { className: "card" },
    React.createElement("h2", null, "Thông tin"),
    React.createElement("p", null, "Đây là một card đơn giản")
  ),
  React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Danh sách sản phẩm"),
    React.createElement("ul", null, ...productsChild)
  )
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(wrapper);
