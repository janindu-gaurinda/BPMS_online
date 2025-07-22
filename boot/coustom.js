  function updateDateTime() {
    const now = new Date();
    const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const timeOptions = { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' };

    document.getElementById('static-date').textContent = now.toLocaleDateString('en-US', dateOptions);
    document.getElementById('static-time').textContent = now.toLocaleTimeString('en-US', timeOptions);
  }

  function confirmLogout() {
    return confirm("Are you sure you want to log out?");
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();