import Swal from 'sweetalert2'

export const showSweetAlert = (icon, title) => {
  Swal.fire({
    position: 'center',
    icon,
    title,
    showConfirmButton: false,
    timer: 1500,
    width: 300,
    timerProgressBar: true
  })
}

export const swalIcon = {
  ok: 'success',
  error: 'error'
}

// export default { showSweetAlert, swalIcon }