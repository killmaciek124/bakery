import { Formik, Form, ErrorMessage, Field } from "formik";
import Swal from "sweetalert2";
import * as Yup from "yup";

const DeleteItem = (props) => {
  const initialValues = {
    titleToDelete: "",
  };
  const onSubmitHandler = async (values, { resetForm }) => {
    try {
      const response = await fetch("/api/new-product", {
        method: "DELETE",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        resetForm({ titleToDelete: "" });
        Swal.fire({
          icon: "success",
          title: "Usunięto!",
        });
      } else {
        throw new Error("Nie ma takiego elementu");
      }
    } catch {
      resetForm({ titleToDelete: "" });
      Swal.fire({
        icon: "error",
        title: "Taki produkt nie istnieje!",
      });
    }
  };
  const validationSchema = Yup.object({
    titleToDelete: Yup.string().required("Wpisz nazwę"),
  });
  return (
    <>
      <h2>Usuń produkt z oferty</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div>
              <Field name="titleToDelete" placeholder="Podaj nazwę produktu" />
              <div>
                <ErrorMessage name="titleToDelete" component="span" />
              </div>
            </div>

            <button type="submit">Usuń produkt</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DeleteItem;
