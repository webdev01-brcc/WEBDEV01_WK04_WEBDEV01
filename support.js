export const rubric = (score, possible) => {
    const percentage = score / possible * 100
    if (percentage < 50) {
        return `Unfortunately, you faild. ${percentage}% | ${score}/${possible}`
    } else {
        return `Congrats, you passed! ${percentage}% | ${score}/${possible}`
    }
}

export const welcome = () => {
    console.clear()
    console.log('Welcome to the Louisiana Quiz.')
    console.log(' ')
}
