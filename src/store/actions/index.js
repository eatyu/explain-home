/**
 * 全局action
 */
export const INCREASE = 'INCREASE'
export const DECREASE = 'DECREASE'

/**
 * action方法
 */
export const actions = {
    increase: () => ({type: 'INCREASE'}),
    decrease: () => ({type: 'DECREASE'})
}