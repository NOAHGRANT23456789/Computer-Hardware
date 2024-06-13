// Add click event listeners to sidebar links
const componentLinks = document.querySelectorAll('#componentList a');
componentLinks.forEach(link => {
  link.addEventListener('click', scrollToComponent);
});

// Function to scroll to corresponding component
function scrollToComponent(event) {
  event.preventDefault();
  const componentId = event.target.getAttribute('href').substring(1);
  const component = document.getElementById(componentId);
  component.scrollIntoView({ behavior: 'smooth' });
}// Add click event listeners to sidebar links
const componentLinks = document.querySelectorAll('#componentList a');
componentLinks.forEach(link => {
  link.addEventListener('click', showComponentInfo);
});

// Function to display component information
function showComponentInfo(event) {
  event.preventDefault();
  const componentId = event.target.getAttribute('href').substring(1);
  const component = document.getElementById(componentId);
  component.style.display = 'block';
  
  // Hide other component information
  const otherComponents = document.querySelectorAll('.component-info:not(#' + componentId + ')');
  otherComponents.forEach(comp => {
    comp.style.display = 'none';
  });
}// Add click event listeners to sidebar links
const componentLinks = document.querySelectorAll('#componentList a');
componentLinks.forEach(link => {
  link.addEventListener('click', toggleComponentInfo);
});

// Function to toggle component information
function toggleComponentInfo(event) {
  event.preventDefault();
  const componentId = event.target.getAttribute('href').substring(1);
  const component = document.getElementById(componentId);
  const otherComponents = document.querySelectorAll('.component-info:not(#' + componentId + ')');
  
  // Toggle visibility of clicked component
  if (component.style.display === 'block') {
    component.style.display = 'none';
  } else {
    component.style.display = 'block';
  }
  
  // Hide other components
  otherComponents.forEach(comp => {
    comp.style.display = 'none';
  });
}