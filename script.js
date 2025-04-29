const toggleBtn = document.getElementById('toggle-darkmode');
    const body = document.body;

    toggleBtn.addEventListener('click', () => {
      body.classList.toggle('dark');
    });