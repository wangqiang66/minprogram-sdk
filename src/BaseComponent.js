/**
 * function: BaseComponent
 * author  : wq
 * update  : 2019/11/5 9:40
 */
function mapKeys(source, target, map) {
  Object.keys(map).forEach(key => {
    target[map[key]] = source[key]
  })
}

class BaseComponent {
  options = {}
  mapKey = {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    watch: 'observers',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    relations: 'relations',
    destroyed: 'detached',
    classes: 'externalClasses'
  }
  constructor(options) {
    mapKeys(this.options, options, this.mapKey)
    return this.options
  }
  initComponentMapKey(mapKey) {
    const _mapKey = { ...this.mapKey, ...(mapKey || {}) }
    mapKeys(this.options, options, this.mapKey)
  }
  init() {
    const options = this.options
    const { relation } = vantOptions
  }
}

BaseComponent.extend = (options) => {

}



export default function createBaseComponent(options) {
  const _instance = new BaseComponent(options)
  this.init()
  Component(options)
}
