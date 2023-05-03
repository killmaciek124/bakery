import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const AddItem = () => {
  const initialValues = {
    id: "",
    price: "",
    title: "",
  };
  const onSubmitHandler = async (values, { resetForm }) => {
    const response = await fetch("/api/new-product", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    Swal.fire({
      icon: "success",
      title: "Dodano!",
    });
    resetForm({ id: "", price: "", title: "" });
  };
  const validationSchema = Yup.object({
    id: Yup.string().required("Wpisz id"),
    price: Yup.string().required("Wpisz cene"),
    title: Yup.string().required("Wpisz nazwę"),
  });

  return (
    <>
      <h2>Dodaj produkt do oferty</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field name="id" placeholder="Id" />
              <div>
                <ErrorMessage name="id" component="span" />
              </div>
            </div>
            <div>
              <Field name="price" placeholder="Cena" />
              <div>
                <ErrorMessage name="price" component="span" />
              </div>
            </div>
            <div>
              <Field name="title" placeholder="Tytuł" />
              <div>
                <ErrorMessage name="title" component="span" />
              </div>
            </div>
            <button type="submit">Dodaj nowy produkt FORMIK</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddItem;
