function Button({
  primary,
  rounded,
  bordered,
  s,
  m,
  l,
  children,
  href,
  ...passProps
}) {
  const className = ["btn"];
  if (primary) className.push("btn-primary");
  if (rounded) className.push("btn-rounded");
  if (bordered) className.push("btn-bordered");
  if (s) className.push("s");
  if (m) className.push("m");
  if (l) className.push("l");
  const Tag = href ? "a" : "button";
  return (
    <Tag className={className.join(" ")} href={href} {...passProps}>
      {children}
    </Tag>
  );
}
const div = (
  <>
    <Button type="button">Normal</Button>
    <Button primary m type="submit">
      Primary
    </Button>
    <Button rounded l>
      Rounded
    </Button>
    <Button bordered s>
      Bordered
    </Button>
    <Button primary l href="https://google.com" target="_blank">
      GOOGLE
    </Button>
  </>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);
