import React, {useState, useEffect} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"


const SignInForm = ({ values, touched, errors, status, }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
      if (status) {
          setUser([...user, status]);
      }
  }, [status])

return (
   
<div>
    <Form>
        <Field type="text" name="Name" placeholder="name"/>
        {touched.name && errors.name && (
        <p className = 'error'>{errors.name}</p>)}
        <Field type="text" name="email" placeholder="email"/>
        {touched.email && errors.email && (
        <p className = 'error'>{errors.email}</p>)}
        <Field type="text" name="password" placeholder="Create password"/>
        {touched.password && errors.password && (
        <p className = 'error'>{errors.password}</p>)}

        <label/>
        Receive Notifications
         <Field
            type="checkbox"
            name="notifications"
            checked={values.save}
          />  
        <button type="submit">Submit</button>
    </Form>

    {user.map(user => (
                <ul key={user.id}>
                    <li>Name: {user.name}</li>
                    <li>Email: {user.email}</li>
                    <li>Password: {user.password}</li>
                    </ul>
            ))}
    </div> 
  )
}

const FormikSignUpForm = withFormik ({
    mapPropsToValues: ({name,email, password, notifications}) => {
      return {
        Name: name || " ",
        email: email || "",
        password: password || "",
        notificaions: notifications || false
        
      }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().email().required("Enter name please"),
        email: Yup.string().email().required("Name Please"),
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
    

})(SignInForm);


export default FormikSignUpForm;