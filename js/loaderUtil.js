export const LoaderUtil = {
    /**
     * Show the loader on the page
     * @param {string} loaderId - The ID of the loader element (default: 'global-loader').
     */
    showLoader: (loaderId = 'global-loader') => {
      let loader = document.getElementById(loaderId);
      if (!loader) {
        // Create loader if it doesn't exist
        loader = document.createElement('div');
        loader.id = loaderId;
        loader.style.position = 'fixed';
        loader.style.top = '0';
        loader.style.left = '0';
        loader.style.width = '100%';
        loader.style.height = '100%';
        loader.style.background = 'rgba(0, 0, 0, 0.5)';
        loader.style.display = 'flex';
        loader.style.justifyContent = 'center';
        loader.style.alignItems = 'center';
        loader.style.zIndex = '1000';
        loader.innerHTML = `<div class="spinner"></div>`;
  
        document.body.appendChild(loader);
  
        // Add spinner style
        const style = document.createElement('style');
        style.textContent = `
          .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid white;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `;
        document.head.appendChild(style);
      }
      loader.style.display = 'flex';
    },
  
    /**
     * Hide the loader
     * @param {string} loaderId - The ID of the loader element (default: 'global-loader').
     */
    hideLoader: (loaderId = 'global-loader') => {
      const loader = document.getElementById(loaderId);
      if (loader) {
        loader.style.display = 'none';
      }
    },
  };
  

//   LoaderUtil.hideLoader();
//   LoaderUtil.hideLoader();
