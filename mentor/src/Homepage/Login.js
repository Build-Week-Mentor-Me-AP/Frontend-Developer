mport React, {useState} from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";


const LoginForm = ({ values, touched, errors, status }) => {
    const [user, setUser] = useState([])


<div> //styles component
    <Form>
        <Field type="text" name="email" placeholder="email"/>
        <ErrorMessage name="email" />
        <Field type="text" name="password" placeholder="password"/>
        <ErrorMessage name="password" />
        <button type="submit">Submit</button>
    </Form>
</div>


const FormikLoginForm = withFormik({
    mapPropsToValues: ({values}) {
      return {
        email: values.email || "",
        password: values.password || "",
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
    })

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