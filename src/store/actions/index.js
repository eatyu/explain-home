/**
 * 全局action
 */
export const actionTypes = {
    DEFAULT: 'DEFAULT',
    ACTUAL: 'ACTUAL',
    INCREASE: 'INCREASE',
    DECREASE: 'DECREASE'
}


/**
 * action方法
 */
export const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
}