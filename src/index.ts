const component = () => {
  const element = document.createElement('div');
  element.innerHTML = 'Webpack';
  return element;
};

document.body.appendChild(component());
