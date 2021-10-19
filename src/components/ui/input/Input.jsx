import "./input.module.scss";

const Input = (props) => {
  return (
    <>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className={props.className}
      />
    </>
  );
};

export default Input;
