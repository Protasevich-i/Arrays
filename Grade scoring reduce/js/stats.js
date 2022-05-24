/* stats.js */

/*project. Подсчет оценок.
Задача для подведения итогов о главе массивы. Необходимо:
- реализовать добавление оценки.
- показать количество элементов в массиве.
- показать первую выставленную оценку.
- показать последнюю выставленную оценку.
- показать сумму всех оценок .reduce().
- показать средний балл.
- показать оценки в формате CSV.

/**
 * @param {array} grades
 * @param {number} grade
 */
export function addGrade(grades, grade) {
    grades.push(grade)
    return grades
}

/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
    return grades.length
}

/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
    return grades[0]
}

/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
    return grades[grades.length -1]
}

/**
 * @param {array} grades
 */
export function getSumOfGrades(grades) {
    let sum = grades.reduce(function (zero, item) {
        return zero + item
    }, 0)
    return sum
}

/**
 * @param {array} grades
 */
export function getAverageGrade(grades) {
    let sum = grades.reduce(function (zero, item) {
        return zero + item / grades.length
    }, 0)
    return sum
}

/**
 * @param {array} grades
 */
export function getRaisedGrades(grades) {
    return grades.join(", ")
}