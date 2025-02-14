
import { toast } from "react-toastify";



export const toastSuccess = (msg) => {
    toast.success(msg, {
        position: "top-right",
        autoClose: 3000, // Auto-dismiss in 3s
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
}

export const toastError = (msg) => {
    toast.error(msg, {
        position: "top-right",
        autoClose: 3000, // Auto-dismiss in 3s
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
}