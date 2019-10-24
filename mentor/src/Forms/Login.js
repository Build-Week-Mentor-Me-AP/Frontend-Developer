import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"
import "../forms.css"

const LoginForm = ({ values, touched, errors, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
      if (status) {
          setUser([...user, status]);
      }
  }, [status])

return (
   
<div className= "login">
    <Form className ="form" >
        <Field type="text" name="email" placeholder= "Email"/>
        {touched.email && errors.email && (
        <p className = 'error'>{errors.email}</p>)}
        <Field type="text" name="password" placeholder="Password"/>
        {touched.password && errors.password && (
        <p className = 'error'>{errors.password}</p>)}
        <label className="checkbox-container"/>
          Save Password
          <Field
            type="checkbox"
            name="save"
            checked={values.save}
          />
          
        <button type="submit">Submit</button>
    </Form>

    {user.map(user => (
                <ul key={user.id}>
                    <li>Email: {user.email}</li>
                    <li>Password: {user.password}</li>
                    </ul>
            ))}
    </div> 
  )
}

const FormikLoginForm = withFormik ({
    mapPropsToValues: ({email, password, save}) => {
      return {
        email: email || " ",
        password: password || " ",
        save: save || false
      }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required("Add your username Man!!!"),
      password: Yup.string().min(8).max(16).matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$").required(),
    }),

    handleSubmit(values, { setStatus }) {
        axios
        .post("https://reqres.in/api/users/", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.res));
    }
    

})(LoginForm);


export default FormikLoginForm;