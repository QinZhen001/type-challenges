type Module = {
  click?: () => void
}

let module: Module = {}

module?.click()

module?.click?.()
