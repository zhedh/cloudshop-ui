export function debounce(callback: (...values: any) => void, timeout: number) {
  let timer: ReturnType<typeof setTimeout>

  return function () {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this
    // eslint-disable-next-line prefer-rest-params
    const args: any = arguments

    clearTimeout(timer)
    timer = setTimeout(() => {
      callback.apply(context, args)
    }, timeout)
  }
}
