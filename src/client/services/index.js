const request = (response) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(response), 100);
  });
}

export const getUserInfo = () => request({ data: { name: 'Jonh' } });

export const getTodoList = () => request({ data: [{ id: 1, completed: true, content: 'ssr' }] });
