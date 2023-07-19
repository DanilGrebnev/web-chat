/**
 * --Преобразует данные в строку--
 * @param data
 * @return string
 */
export const toJSON: T = data => JSON.stringify(data)

type T = (data: any) => string
