// Toast Utility using SweetAlert2
export const ToastUtil = {
  // Default Toast Mixin for customization
  toastMixin: Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'Default Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  }),

  /**
   * Show a toast notification
   * @param {string} title - The title of the toast.
   * @param {string} type - The type of toast (success, error, warning, info).
   * @param {boolean} animation - Whether the toast should be animated.
   * @param {string} position - The position of the toast (e.g., 'top-right', 'bottom').
   * @param {number} timer - Duration in milliseconds before the toast disappears.
   */
  showToast: (title, type = 'success', animation = true, position = 'top-right', timer = 3000) => {
    ToastUtil.toastMixin.fire({
      title,
      icon: type,
      animation,
      position,
      timer,
    });
  },
};
