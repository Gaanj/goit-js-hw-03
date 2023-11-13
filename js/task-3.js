// Функція filterArray приймає масив чисел (numbers) та значення (value) як параметри
function filterArray(numbers, value) {
  // Створюємо новий порожній масив для результату
  let result = [];
  // Проходимо по всіх елементах масиву numbers
  for (let number of numbers) {
    // Якщо число більше за value, додаємо його до масиву result
    if (number > value) {
      result.push(number);
    }
  }
  // Повертаємо масив result
  return result;
}
//альтернативний варіант вирішення завдання:
// function filterArray(numbers, value) {
//   return numbers.filter((number) => number > value);
// }