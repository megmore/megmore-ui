/**
 * 事件绑定
 * @param element
 * @param event
 * @param handler
 * @param propgation
 */
export const on = (() => {
  if (document.addEventListener) {
    return (
      element: HTMLElement | Window,
      event: string,
      handler: (e: Event) => any = (): void => void (0),
      propagation: boolean = false
    ) => {
      if (element && event && handler) {
        element.addEventListener(event, handler, propagation)
      }
    }
  } else {
    return (
      element: HTMLElement | Window,
      event: string,
      handler: (e: Event) => any = (): void => void (0)
    ) => {
      if (element && event && handler) {
          element.attachEvent('on' + event, handler)
      }
    }
  }
})()

export const off = (() => {
  if (document.addEventListener) {
    return (
      element: HTMLElement | Window,
      event: string,
      handler: (e: Event) => any = (): void => void (0),
      propagation: boolean = false
    ) => {
      if (element && event) {
          element.removeEventListener(event, handler, propagation)
      }
    }
  } else {
    return (
      element: HTMLElement | Window,
      event: string,
      handler: (e: Event) => any = (): void => void (0)
    ) => {
      if (element && event) {
          element.detachEvent('on' + event, handler)
      }
    }
  }
})()

export const once = (
  element: HTMLElement | Window,
  event: string,
  handler: () => void
): void => {
  const run = () => {
    handler()
    off(element, event, run, false)
  }
  on(element, event, run, false)
}
