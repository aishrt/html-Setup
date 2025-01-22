// A dynamic Toast utility to show notifications
export const ToastUtil = {
    // Show a toast message
    showToast: (message, type = 'info', duration = 3000) => {
      // Create a toast container if it doesn't exist
      let toastContainer = document.getElementById('toast-container');
      if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.style.position = 'fixed';
        toastContainer.style.bottom = '20px';
        toastContainer.style.right = '20px';
        toastContainer.style.zIndex = '1000';
        toastContainer.style.display = 'flex';
        toastContainer.style.flexDirection = 'column';
        toastContainer.style.gap = '10px';
        document.body.appendChild(toastContainer);
      }
  
      // Create a toast element
      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.minWidth = '200px';
      toast.style.padding = '10px 15px';
      toast.style.color = '#fff';
      toast.style.borderRadius = '5px';
      toast.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      toast.style.fontSize = '14px';
      toast.style.fontWeight = 'bold';
      toast.style.opacity = '1';
      toast.style.transition = 'opacity 0.5s ease';
  
      // Set background color based on type
      switch (type) {
        case 'success':
          toast.style.backgroundColor = '#28a745';
          break;
        case 'error':
          toast.style.backgroundColor = '#dc3545';
          break;
        case 'warning':
          toast.style.backgroundColor = '#ffc107';
          toast.style.color = '#000';
          break;
        default:
          toast.style.backgroundColor = '#17a2b8';
          break;
      }
  
      // Append the toast to the container
      toastContainer.appendChild(toast);
  
      // Remove the toast after the duration
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 500);
      }, duration);
    },
  };
  