import Swal from "sweetalert2";

export const showAlert = (title, message, icon) => {
  Swal.fire(title, message, icon);
};

export const showDeleteAlert = (toggle) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      toggle();
    }
  });
};

export const successAlert = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    // didOpen: (toast) => {
    //   toast.addEventListener("mouseenter", Swal.stopTimer);
    //   toast.addEventListener("mouseleave", Swal.resumeTimer);
    // },
  });

  Toast.fire({
    icon: "success",
    title: "Item added successfully",
  });
};
