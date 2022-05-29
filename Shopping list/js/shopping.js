/*project. Приложение покупок.
Реализуйте две функции в файле shopping.js, которые исправят работу приложения со списком покупок.
- функция `addItem` должна добавлять элемент в массив `items`
- функция `exportLowerCasedCSV` должна возвращать строку, содержащую все элементы в нижнем
регистре разделенные запятой и пробелом*/

/* shopping.js */
/**
 * @param {string[]} items
 * @param {string} item
 */
export function addItem(items, item) {
    items.push(item)
    return items
}

/**
 * @param {string[]} items
 */
export function exportLowerCasedCSV(items) {
    let lower = items.map(function (item) {
        return item.toLowerCase()
    })
    return lower.join(", ")
}