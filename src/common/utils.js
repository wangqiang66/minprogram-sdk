/**
 * function: utils
 * author  : wq
 * update  : 2019/11/13 11:04
 */
/**
 * 修改替换对象的属性值
 * @param source 赋值源
 * @param target 赋值目标
 * @param map 属性替换映射表
 */
export function mapKeys(source, target, map) {
  Object.keys(map).forEach(key => {
    target[map[key]] = source[key]
  })
}
