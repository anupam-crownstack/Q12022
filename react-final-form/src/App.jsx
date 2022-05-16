import { Form, Field } from "react-final-form";
function App() {
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    city: "",
    state: "",
    zip: "",
    agreeTermsAndConditions: false,
  };

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstName) errors.firstName = "First name is required";
    if (!values.lastName) errors.lastName = "Last name is required";
    if (!values.city) errors.city = "Please provide a valid city";
    if (!values.userName) errors.userName = "Please choose a username";
    if (!values.state) errors.state = "Please provide a valid state";
    if (!values.zip) errors.zip = "Please provide a valid zip";
    if (!values.agreeTermsAndConditions)
      errors.agreeTermsAndConditions = "You must agree before submitting";

    return errors;
  };

  return (
    <div className="container my-5">
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={initialValues}
        render={({ handleSubmit, values }) => (
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <Field
                  name="firstName"
                  render={({ input, meta }) => (
                    <div>
                      <label>First name</label>
                      <input
                        type="text"
                        className={
                          meta.touched && meta.error
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="First name"
                        {...input}
                      />
                      {meta.touched && meta.error && (
                        <span className="invalid-feedback">{meta.error}</span>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="col-md-4 mb-3">
                <Field
                  name="lastName"
                  render={({ input, meta }) => (
                    <div>
                      <label>Last name</label>
                      <input
                        type="text"
                        className={
                          meta.touched && meta.error
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Last name"
                        {...input}
                      />
                      {meta.touched && meta.error && (
                        <span className="invalid-feedback">{meta.error}</span>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="col-md-4 mb-3">
                <Field
                  name="userName"
                  render={({ input, meta }) => (
                    <div>
                      <label>Username</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend">
                            @
                          </span>
                        </div>
                        <input
                          type="text"
                          className={
                            meta.touched && meta.error
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          placeholder="Username"
                          aria-describedby="inputGroupPrepend"
                          {...input}
                        />
                        {meta.touched && meta.error && (
                          <span className="invalid-feedback">{meta.error}</span>
                        )}
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <Field
                  name="city"
                  render={({ input, meta }) => (
                    <div>
                      <label>City</label>
                      <input
                        type="text"
                        className={
                          meta.touched && meta.error
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="City"
                        {...input}
                      />
                      {meta.touched && meta.error && (
                        <span className="invalid-feedback">{meta.error}</span>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="col-md-3 mb-3">
                <Field
                  name="state"
                  render={({ input, meta }) => (
                    <div>
                      <label>State</label>
                      <input
                        type="text"
                        className={
                          meta.touched && meta.error
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="State"
                        {...input}
                      />
                      {meta.touched && meta.error && (
                        <span className="invalid-feedback">{meta.error}</span>
                      )}
                    </div>
                  )}
                />
              </div>
              <div className="col-md-3 mb-3">
                <Field
                  name="zip"
                  render={({ input, meta }) => (
                    <div>
                      <label>Zip</label>
                      <input
                        type="text"
                        name="zip"
                        className={
                          meta.touched && meta.error
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                        placeholder="Zip"
                        {...input}
                      />
                      {meta.touched && meta.error && (
                        <span className="invalid-feedback">{meta.error}</span>
                      )}
                    </div>
                  )}
                />
              </div>
            </div>
            <div className="form-group">
              <Field
                name="agreeTermsAndConditions"
                render={({ input, meta }) => (
                  <div className="form-check">
                    <input
                      className={
                        meta.touched && meta.error
                          ? "form-check-input is-invalid"
                          : "form-check-input"
                      }
                      type="checkbox"
                      checked={values.agreeTermsAndConditions}
                      {...input}
                    />
                    <label className="form-check-label">
                      Agree to terms and conditions
                    </label>
                    {meta.touched && meta.error && (
                      <span className="invalid-feedback">{meta.error}</span>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="my-3">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>

            <div className="my-3 shadow p-3 bg-success bg-gradient text-light rounded">
              <pre className="fw-bolder fs-6">
                {JSON.stringify(values, 0, "\t")}
              </pre>
            </div>
          </form>
        )}></Form>
    </div>
  );
}

export default App;
