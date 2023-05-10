import React from 'react';
function Form({ children, onSubmit, form }) {
  const { handleSubmit } = form;
  return <form onSubmit={handleSubmit(onSubmit)}>{children}</form>;
}
export default Form;
