/*  stats.js */

/*  project. Подсчет оценок

Завершите функции в файле `stats.js`, чтобы:

1. оценка добавлялась
2. показывалось количество элементов в массиве
3. отображалась первая выставленная оценка
4. отображалась последняя выставленная оценка
5. вы могли увидеть, если хотя бы один из учеников получил оценку 20, то тест считается простым
6. вы могли выбрать оценку из раскрывающегося списка и посмотреть, получил ли хотя бы один из учащихся эту оценку
7. оценки экспортировались в виде строки CSV*/

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
export function isTestTooEasy(grades) {
    if (grades.includes(20)) {
        return "Easy"
    }
    return "Difficult"
}

/**
 * @param {array} grades
 * @param {number} grade
 */
export function gradeExists(grades, grade) {
    return grades.includes(grade)
}

/**
 * @param {array} grades
 */
export function exportCSV(grades) {
    return grades.join(", ")
}
