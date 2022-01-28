import React from 'react';
import {useFormik} from 'formik';

function Formikform() {

    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        onSubmit: (values)=>{
            console.log(values);
        },
        validate : (values)=>{
            let error = {}
            if(!values.email)
            error.email="Email is required!"

            if(!values.password)
            error.password="Password is required!"

            return error;
        },
        
    })

  return(
<div>
    <h1>Formik Form By Muhammad Ali</h1>
    
        <form onSubmit={formik.handleSubmit} >
          
          <label>
              Email<br/>
              <input type="text" id="email" placeholder="abc@gmai.com"
              value={formik.values.email} onChange={formik.handleChange}/>
              {formik.errors.email? <div>{formik.errors.email}</div> : ""}
          </label>
          
          <br/>
          <br/>
          
          <label>
             Password<br/>
              <input type="password" id="password" placeholder="********"
              value={formik.values.password} onChange={formik.handleChange}/>
              {formik.errors.password? <div>{formik.errors.password}</div> : ""}
          </label>
          
          <br/>
          
          <button type="submit">Submit</button>  
        </form>
    
</div>
);

};
export default Formikform;