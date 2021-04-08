import React, { useState, Dispatch, SetStateAction } from "react";
import Controls from "../controls/Controls";
import loginStyles from "../styles/Login.module.scss";

type displayFormDispatcher<S> = Dispatch<SetStateAction<S>>;

interface FormDisplay {
  displayForm: boolean;
  setDisplayForm: displayFormDispatcher<boolean>;
}

interface Props {
  formDisplay: FormDisplay;
}

// Define Event parameter types
type ChangeE = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
type FormE = React.FormEvent<HTMLFormElement>;

const Login: React.FC<Props> = ({ formDisplay }) => {
  const { form, cross, btnContainer } = loginStyles;
  const { Text, Input, Button } = Controls;
  const { displayForm, setDisplayForm } = formDisplay;

  // Initialize form values
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Initialize value errors
  const [valueErrors, setValueErrors] = useState({ ...values });

  // Set input value with corresponding key
  const handleInputChange = (e: ChangeE) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  // Validate form values
  const authenticateValues: () => boolean = () => {
    const temp = { ...values };
    const { name, email, password } = values;
    const passwordAuth = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!#*\$%&\?]).{8,}/
    temp.name = name ? "" : "This field is required";
    temp.email = (/$^|.+@.+..+/).test(email) ? "" : "Please provide a valid email address";
    temp.password = (passwordAuth).test(password) ? "" : "Password must contain at least 8 characters and one number, letter and special character";
    setValueErrors({ ...temp }); 
    return Object.values(temp).every(v => v === ""); // Return true if every value is empty
  }

  const handleSubmit = (e: FormE) => {
    e.preventDefault();
    if (authenticateValues()) {
      // Reset form values
      let initialValues = { ...values };
      Object.keys(initialValues).forEach(value => {
        initialValues[value] = "";
      });
      setValues(initialValues);
    }
  }

  return (
    <form className={form} onSubmit={(e) => handleSubmit(e)}>
      <Text variant="h3">Sign in</Text>
      <span onClick={() => setDisplayForm(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={cross} viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </span>
      <Input 
        label="name" 
        name="name"
        error={valueErrors.name ? true : false}
        helperText={valueErrors.name}
        value={values.name}
        onChange={e => handleInputChange(e)}
      />
      <Input 
        label="email" 
        name="email"
        value={values.email}
        error={valueErrors.email ? true : false}
        helperText={valueErrors.email}
        onChange={e => handleInputChange(e)}
      />
      <Input 
        label="password" 
        name="password"
        value={values.password}
        error={valueErrors.password ? true : false}
        helperText={valueErrors.password}
        onChange={e => handleInputChange(e)}
      />
      <div className={btnContainer}>
        <Button type="submit">Sign in</Button>
      </div>
    </form>
  );
}

export default Login;