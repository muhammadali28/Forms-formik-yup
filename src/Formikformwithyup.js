import React from 'react';
import {useFormik} from 'Formik';
import * as yup from 'yup';

function Formikformwithyup() {

    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        onSubmit: (values)=>{
            console.log(values);
        },
        validationSchema: yup.object({
            email: yup.string().email().required("Email is required"),
            password: yup.string()
            .min(3,"pass is too short")
            .max(12,"pass is too long")
            .required("Password is required")
        }),
    })

  return(
<div>
    <h1>Formik Form By Muhammad Ali</h1>
    
        <form onSubmit={formik.handleSubmit} >
          
          <label>
              Email<br/>
              <input type="text" id="email" placeholder="abc@gmail.com"
              values={formik.values.email} onChange={formik.handleChange}/>
              {formik.error.email? <div>{formik.error.email}</div> : ""}
          </label>
          
          <br/>
          <br/>
          
          <label>
             Password<br/>
              <input type="password" id="password" placeholder="********"
              values={formik.values.password} onChange={formik.handleChange}/>
              {formik.errors.password? <div>{formik.errors.password}</div> : ""}
          </label>
          
          <br/>
          
          <button >Submit</button>  
        </form>
    
</div>
);

}
export default Formikformwithyup;