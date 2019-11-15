/**
 * function: Targets
 * author  : wq
 * update  : 2019/11/5 9:18
 */
const baseApp = {
  beforeCreate: 'onLaunch',
  created: 'onShow',
  beforeDestroy: 'onHide',
  error: 'onError'
}

const basePage = {
  data: 'data',
  beforeCreate: 'onLoad',
  activated: 'onShow',
  mounted: 'onReady',
  deactivated: 'onHide',
  beforeDestroy: 'onUnload'
}

const baseComponent = {
  props: 'props',
  data: 'data',
  mounted: 'didMount',
  updated: 'didUpdate',
  beforeDestroy: 'didUnmount',
  mixins: 'mixins'
}

class Targets {
  _targets = new Map()
  constructor() {
    this._targets.set('Wechat', {
      global: 'wx',
      App: baseApp,
      Page: basePage,
      Component: {
        props: 'properties',
        data: 'data',
        beforeCreated: 'created',
        created: 'attached',
        mounted: 'ready',
        updated: 'didUpdate',
        beforeDestroy: 'detached',
        mixins: 'behaviors',
        watch: 'observers',
        relations: 'relations',
        classes: 'externalClasses'
      }
    })
    this._targets.set('Alipay', {
      global: 'my',
      App: baseApp,
      Page: basePage,
      Component: {
        ...baseComponent, created: 'onInit', beforeUpdate: 'deriveDataFromProps'
      }
    })
    this._targets.set('DingTalk', {
      global: 'dd',
      App: baseApp,
      Page: basePage,
      Component: baseComponent
    })
  }
}

Targets.getInstance = () => {
  if (Targets._instance) {
    return Targets._instance
  } else {
    return (Targets._instance = new Targets())
  }
}

Targets.expandTarget = (targets) => {
  if (typeof targets !== 'object' || targets === null) {
    throw 'Params Targets Must a Object Type But Null !'
  }
  const instance = Targets.getInstance()
  if (Array.isArray(targets)) {
    targets.forEach(target => {
      instance._targets.set(target.name, target)
    })
  } else {
    Object.keys(targets).forEach(key => {
      instance._targets.set(key, targets[key])
    })
  }
}

export default Targets
