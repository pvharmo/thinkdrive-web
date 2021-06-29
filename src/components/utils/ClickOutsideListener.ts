interface clickOutsideInterface {
  enabled: boolean
  cb: () => void
}

interface enabledInterface {
  enabled: boolean
}

interface clickOutsideReturnInterface {
  update: (enabled: enabledInterface) => void
  destroy: () => void
}

export default (
  node: HTMLElement,
  { enabled: initialEnabled, cb }: clickOutsideInterface
): clickOutsideReturnInterface => {
  const handleOutsideClick = ({ target }: Event) => {
    if (!node.contains(target as Node)) {
      cb()
    }
  }

  async function update({ enabled }: enabledInterface) {
    if (enabled) {
      window.addEventListener('click', handleOutsideClick)
    } else {
      window.removeEventListener('click', handleOutsideClick)
    }
  }

  update({ enabled: initialEnabled })
  return {
    update,
    destroy() {
      window.removeEventListener('click', handleOutsideClick)
    }
  }
}
