import "./button.module.scss";

const Button = (props) => {
  return (
    <>
      <button
        id={props.id}
        name={props.name}
        title={props.title}
        type={props.type}
        onClick={props.onClick}
        className={"btn " + props.className}
      />
    </>
  );
};

export default Button;
