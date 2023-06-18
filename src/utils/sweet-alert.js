import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function sweetAlertSuccess(html, title) {
  MySwal.fire({
    title,
    html,
    icon: "success",
    confirmButtonColor: "#694E4E",
  });
}

function sweetAlertError(html) {
  MySwal.fire({
    title: "Oops...",
    html,
    icon: "error",
    confirmButtonColor: "#694E4E",
  });
}

async function sweetConfirm() {
  return await MySwal.fire({
    title: "Are you sure?",
    html: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#694E4E",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    const isConfirm = result.isConfirmed;
    return isConfirm;
  });
}

export { sweetAlertSuccess, sweetAlertError, sweetConfirm };
