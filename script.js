document.addEventListener('DOMContentLoaded', () => {
  const componentLinks = document.querySelectorAll('#componentList a');
  
  componentLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const componentId = event.target.getAttribute('href').substring(1);
      const component = document.getElementById(componentId);
      
      // Hide all components
      document.querySelectorAll('.component-info').forEach(info => {
        info.style.display = 'none';
      });
      
      // Show the clicked component
      if (component) {
        component.style.display = 'block';
        component.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});