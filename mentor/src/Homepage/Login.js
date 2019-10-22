mport React, {useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios"


const LoginForm = ({ values, touched, errors, status }) => {
    const [user, setUser] = useState([]);
    useEffect(() => {
      if (status) {
          setUsers([...users, status]);
      }
  }, [status])


<div> //styles component
    <Form>
        <Field type="text" name="email" placeholder="email"/>
        {touched.email && errors.email && (
        <p className = 'error'>{errors.email}</p>)}
        <Field type="text" name="password" placeholder="password"/>
        {touched.password && errors.password && (
        <p className = 'error'>{errors.password}</p>)}
        <label className="checkbox-container">
          Vaccinations
          <Field
            type="checkbox"
            name="save"
            checked={values.save}
          />
          <span className="checkmark" />
        <button type="submit">Submit</button>
    </Form>
    {users.map(user => (
                <ul key={user.id}>
                    <li>Email: {user.email}</li>
                    <li>Password: {user.password}</li>
                    </ul>
            ))}
</div>


const FormikLoginForm = withFormik({
    mapPropsToValues: ({values}) {
      return {
        email: values.email || "",
        password: values.password || "",
        save: values.save || false
      };
    },
    validationSchema: Yup.object().shape({
        email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .min(8)
        .max(16)
        .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
        .required(),
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