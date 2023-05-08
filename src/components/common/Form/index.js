import React from 'react';
function Form({ children, onSubmit, form }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = form;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register,
                errors,
                key: child.props.name,
              },
            })
          : child;
      })}
    </form>
  );
}
export default Form;
