/* surface-difference.js */

/*project. Разница площадей.
Завершите функцию calculateDifference, чтобы она возвращала число, представляющее разницу между
площадями поверхностей двух полученных прямоугольников.
calculateDifference([10, 20], [5, 10])
Примечание: она всегда будет получать ширину и высоту двух прямоугольников.Первый
прямоугольник имеет ширину 10 и длину 20, что означает,
его площадь поверхности равна 10 * 20 = 200.*/

export default function calculateDifference(firstRectangle, secondRectangle) {
    // console.log("first rectangle", firstRectangle)
    // console.log("second rectangle", secondRectangle)
    return firstRectangle[0] * firstRectangle[1] - secondRectangle[0] * secondRectangle[1]
}